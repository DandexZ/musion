var Musion = Musion || {};

Musion.midi = {
  noteOn: function(note) {
    var state = Musion.state;
    if (state.activeNotes[note]) return;
    state.activeNotes[note] = true;
    var el = document.querySelector('[data-note="' + note + '"]');
    if (el) el.classList.add('active');
    try { MIDI.noteOn(0, note, 127, 0); } catch(e) {}
  },

  noteOff: function(note) {
    var state = Musion.state;
    if (!state.activeNotes[note]) return;
    delete state.activeNotes[note];
    var el = document.querySelector('[data-note="' + note + '"]');
    if (el) el.classList.remove('active');
    try { MIDI.noteOff(0, note, 0); } catch(e) {}
  },

  allNotesOff: function() {
    var state = Musion.state;
    for (var note in state.activeNotes) this.noteOff(+note);
    document.querySelectorAll('.active').forEach(function(el) { el.classList.remove('active'); });
  }
};