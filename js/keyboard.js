var Musion = Musion || {};

Musion.keyboard = {
  getNoteName: function(note) {
    var cfg = Musion.config;
    return cfg.NOTE_NAMES[note % 12] + (Math.floor(note / 12) - 1);
  },

  getOctave: function(note) {
    return Math.floor(note / 12) - 1;
  },

  getKeyLabel: function(note, startNote) {
    var offset = note - startNote;
    return Musion.config.OFFSET_TO_KEY[offset] || '';
  },

  buildPiano: function(startNote, endNote) {
    var cfg = Musion.config;
    var state = Musion.state;
    var dom = Musion.dom;

    dom.whiteKeysEl.innerHTML = '';
    dom.blackKeysEl.innerHTML = '';

    var whiteKeyWidth = 58;
    var keyStep = whiteKeyWidth - 1;

    for (var n = startNote; n <= endNote; n++) {
      if (cfg.BLACK_SEMIS.indexOf(n % 12) >= 0) continue;

      var el = document.createElement('div');
      el.className = 'white-key';
      el.dataset.note = n;

      var keyLabel = this.getKeyLabel(n, startNote);
      if (keyLabel) {
        var kl = document.createElement('div');
        kl.className = 'key-label';
        kl.textContent = keyLabel.toUpperCase();
        el.appendChild(kl);
      }

      var nl = document.createElement('div');
      nl.className = 'note-label';
      nl.textContent = this.getNoteName(n);
      el.appendChild(nl);

      el.addEventListener('mousedown', function(e) { e.preventDefault(); Musion.state.isMouseDown = true; Musion.state.lastDraggedNote = +this.dataset.note; Musion.midi.noteOn(+this.dataset.note); });
      el.addEventListener('mouseenter', function() { if (Musion.state.isMouseDown) { Musion.state.lastDraggedNote = +this.dataset.note; Musion.midi.noteOn(+this.dataset.note); } });
      el.addEventListener('mouseup', function(e) { Musion.state.isMouseDown = false; Musion.midi.noteOff(+this.dataset.note); });
      el.addEventListener('mouseleave', function(e) { Musion.midi.noteOff(+this.dataset.note); });
      el.addEventListener('touchstart', function(e) { e.preventDefault(); Musion.midi.noteOn(+this.dataset.note); });
      el.addEventListener('touchend', function(e) { e.preventDefault(); Musion.midi.noteOff(+this.dataset.note); });

      dom.whiteKeysEl.appendChild(el);
    }

    for (var n2 = startNote; n2 <= endNote; n2++) {
      if (cfg.BLACK_SEMIS.indexOf(n2 % 12) < 0) continue;

      var prevWhite = n2 - 1;
      var whiteIdx = 0;
      for (var tn = startNote; tn < prevWhite; tn++) {
        if (cfg.BLACK_SEMIS.indexOf(tn % 12) < 0) whiteIdx++;
      }

      var bel = document.createElement('div');
      bel.className = 'black-key';
      bel.dataset.note = n2;
      bel.style.left = (whiteIdx * keyStep + whiteKeyWidth - 18) + 'px';

      var keyLabel = this.getKeyLabel(n2, startNote);
      if (keyLabel) {
        var kl2 = document.createElement('div');
        kl2.className = 'key-label';
        kl2.textContent = keyLabel.toUpperCase();
        bel.appendChild(kl2);
      }

      bel.addEventListener('mousedown', function(e) { e.preventDefault(); Musion.state.isMouseDown = true; Musion.state.lastDraggedNote = +this.dataset.note; Musion.midi.noteOn(+this.dataset.note); });
      bel.addEventListener('mouseenter', function() { if (Musion.state.isMouseDown) { Musion.state.lastDraggedNote = +this.dataset.note; Musion.midi.noteOn(+this.dataset.note); } });
      bel.addEventListener('mouseup', function(e) { Musion.state.isMouseDown = false; Musion.midi.noteOff(+this.dataset.note); });
      bel.addEventListener('mouseleave', function(e) { Musion.midi.noteOff(+this.dataset.note); });
      bel.addEventListener('touchstart', function(e) { e.preventDefault(); Musion.midi.noteOn(+this.dataset.note); });
      bel.addEventListener('touchend', function(e) { e.preventDefault(); Musion.midi.noteOff(+this.dataset.note); });

      dom.blackKeysEl.appendChild(bel);
    }
  }
};