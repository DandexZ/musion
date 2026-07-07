var Musion = Musion || {};

Musion.ui = {
  rebuildInstrumentOptions: function() {
    var cfg = Musion.config;
    var dom = Musion.dom;
    var selectedVal = dom.instrumentSelect.value;
    dom.instrumentSelect.innerHTML = '';
    cfg.INSTRUMENTS.forEach(function(inst) {
      var opt = document.createElement('option');
      opt.value = inst.value;
      opt.textContent = cfg.getInstLabel(inst);
      dom.instrumentSelect.appendChild(opt);
    });
    dom.instrumentSelect.value = selectedVal;
  },

  applyLang: function() {
    var cfg = Musion.config;
    var els = document.querySelectorAll('[data-lang]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var key = el.getAttribute('data-lang');
      el.textContent = cfg.t(key);
    }
    document.title = cfg.t('title');
    this.rebuildInstrumentOptions();
  },

  shiftOctave: function(dir) {
    var cfg = Musion.config;
    var state = Musion.state;
    var dom = Musion.dom;
    var newOffset = state.octaveOffset + dir;
    var minOffset = Math.ceil((21 - cfg.START_NOTE) / 12);
    var maxOffset = Math.floor((108 - cfg.END_NOTE) / 12);
    if (newOffset < minOffset || newOffset > maxOffset) return;
    Musion.midi.allNotesOff();
    state.heldKeys = {};
    state.octaveOffset = newOffset;
    var start = cfg.START_NOTE + state.octaveOffset * 12;
    var end = cfg.END_NOTE + state.octaveOffset * 12;
    dom.octaveDisplay.textContent = cfg.NOTE_NAMES[start % 12] + Musion.keyboard.getOctave(start) + '\u2013' + cfg.NOTE_NAMES[end % 12] + Musion.keyboard.getOctave(end);
    Musion.keyboard.buildPiano(start, end);
  },

  loadInstrument: function(inst) {
    var cfg = Musion.config;
    var dom = Musion.dom;
    var instObj = cfg.INSTRUMENTS.filter(function(i) { return i.value === inst; })[0] || {};
    var label = cfg.getInstLabel(instObj) || inst;
    var loadingPrefix = cfg.currentLang === 'zh' ? '\u52a0\u8f7d ' : 'Loading ';
    dom.statusEl.textContent = loadingPrefix + label + '...';
    dom.loadingContainer.style.opacity = 1;
    dom.loadingText.classList.remove('loaded');
    dom.loadingBar.style.width = '0%';
    dom.loadingText.textContent = cfg.t('loadingFile');

    MIDI.loadPlugin({
      soundfontUrl: cfg.SOUNDFONT_URL,
      instrument: inst,
      targetFormat: 'mp3',
      onprogress: function(state, progress) {
        var pct = Math.round(progress * 100);
        dom.loadingBar.style.width = pct + '%';
        dom.loadingText.textContent = cfg.t('loadingProgress') + pct + '%';
      },
      onsuccess: function() {
        var program = MIDI.GM.byName[inst].number;
        MIDI.programChange(0, program);
        dom.loadingBar.style.width = '100%';
        dom.loadingText.textContent = cfg.t('loaded');
        dom.loadingText.classList.add('loaded');
        dom.statusEl.textContent = cfg.t('readyPrefix') + label;
        setTimeout(function() { dom.loadingContainer.style.opacity = 0; }, 1500);
      }
    });
  },

  initEvents: function() {
    var cfg = Musion.config;
    var dom = Musion.dom;

    dom.volumeSlider.addEventListener('input', function() {
      try { MIDI.setVolume(0, +this.value); } catch(e) {}
    });

    dom.instrumentSelect.addEventListener('change', function() {
      Musion.midi.allNotesOff();
      Musion.ui.loadInstrument(this.value);
    });

    document.getElementById('lang-toggle').addEventListener('click', function() {
      cfg.currentLang = cfg.currentLang === 'zh' ? 'en' : 'zh';
      Musion.ui.applyLang();
      var curInst = dom.instrumentSelect.value;
      if (curInst) {
        var instObj = cfg.INSTRUMENTS.filter(function(i) { return i.value === curInst; })[0] || {};
        var label = cfg.getInstLabel(instObj) || curInst;
        var st = dom.statusEl.textContent;
        if (st.indexOf('\u5c31\u7eea') === 0 || st.indexOf('Ready') === 0) {
          dom.statusEl.textContent = cfg.t('readyPrefix') + label;
        }
      }
    });

    document.getElementById('octave-down').addEventListener('click', function() { Musion.ui.shiftOctave(-1); });
    document.getElementById('octave-up').addEventListener('click', function() { Musion.ui.shiftOctave(1); });
  }
};