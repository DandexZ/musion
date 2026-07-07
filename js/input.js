var Musion = Musion || {};

Musion.input = {
  init: function() {
    var cfg = Musion.config;
    var state = Musion.state;

    document.addEventListener('keydown', function(e) {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
      if (e.key === 'ArrowUp') { e.preventDefault(); Musion.ui.shiftOctave(1); return; }
      if (e.key === 'ArrowDown') { e.preventDefault(); Musion.ui.shiftOctave(-1); return; }
      var key = e.key.toLowerCase();
      if (state.heldKeys[key]) return;
      if (cfg.KEY_MAP[key] !== undefined) {
        e.preventDefault();
        state.heldKeys[key] = true;
        var note = cfg.START_NOTE + state.octaveOffset * 12 + cfg.KEY_MAP[key];
        if (note >= 21 && note <= 108) Musion.midi.noteOn(note);
      }
    });

    document.addEventListener('keyup', function(e) {
      var key = e.key.toLowerCase();
      if (cfg.KEY_MAP[key] !== undefined) {
        e.preventDefault();
        state.heldKeys[key] = false;
        var note = cfg.START_NOTE + state.octaveOffset * 12 + cfg.KEY_MAP[key];
        if (note >= 21 && note <= 108) Musion.midi.noteOff(note);
      }
    });

    window.addEventListener('blur', function() {
      Musion.midi.allNotesOff();
      state.heldKeys = {};
    });
  }
};