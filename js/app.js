var Musion = Musion || {};

Musion.app = {
  init: function() {
    var cfg = Musion.config;
    var dom = Musion.dom;

    dom.whiteKeysEl = document.getElementById('white-keys');
    dom.blackKeysEl = document.getElementById('black-keys');
    dom.statusEl = document.getElementById('status');
    dom.loadingBar = document.getElementById('loading-bar');
    dom.loadingText = document.getElementById('loading-text');
    dom.loadingContainer = document.getElementById('loading-bar-container');
    dom.octaveDisplay = document.getElementById('octave-display');
    dom.volumeSlider = document.getElementById('volume-slider');
    dom.instrumentSelect = document.getElementById('instrument-select');

    try { MIDI.setVolume(0, +dom.volumeSlider.value); } catch(e) {}
    Musion.keyboard.buildPiano(cfg.START_NOTE, cfg.END_NOTE);
    Musion.ui.applyLang();
    Musion.ui.loadInstrument('acoustic_grand_piano');
    dom.instrumentSelect.value = 'acoustic_grand_piano';
    Musion.ui.initEvents();
    Musion.input.init();
    Musion.app.initDragPlay();
  },

  initDragPlay: function() {
    document.addEventListener('mouseup', function() {
      if (Musion.state.isMouseDown) {
        Musion.state.isMouseDown = false;
        if (Musion.state.lastDraggedNote !== null) {
          Musion.midi.noteOff(Musion.state.lastDraggedNote);
          Musion.state.lastDraggedNote = null;
        }
      }
    });
  }
};

if (document.readyState === 'complete') {
  Musion.app.init();
} else {
  window.addEventListener('load', function() {
    Musion.app.init();
  });
}