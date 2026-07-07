var Musion = Musion || {};

Musion.config = {
  NOTE_NAMES: ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'],
  BLACK_SEMIS: [1, 3, 6, 8, 10],
  START_NOTE: 48,
  END_NOTE: 83,
  SOUNDFONT_URL: 'soundfont/FluidR3_GM/',
  currentLang: 'zh',

  LANG: {
    zh: {
      title: 'Musion - MIDI 钢琴',
      h1Span: 'MIDI',
      h1Text: '钢琴',
      subtitle: 'musion · FluidR3_GM · 基于 MIDI.js',
      loadingSoundfont: '正在加载音色库...',
      volume: '音量',
      statusReady: '就绪',
      hint: '\u2191\u2193 八度 \u00b7 鼠标/键盘弹奏 \u00b7 55 种 GM 音色',
      loadingFile: '加载音色文件...',
      loadingProgress: '加载中... ',
      loaded: '\u2713 完成',
      readyPrefix: '就绪 \u00b7 ',
      navHome: '\u9996\u9875',
      navGithub: 'GitHub',
      langBtn: 'EN'
    },
    en: {
      title: 'Musion - MIDI Piano',
      h1Span: 'MIDI',
      h1Text: 'Piano',
      subtitle: 'musion \u00b7 FluidR3_GM \u00b7 Powered by MIDI.js',
      loadingSoundfont: 'Loading soundfont...',
      volume: 'Volume',
      statusReady: 'Ready',
      hint: '\u2191\u2193 Octave \u00b7 Mouse/Keyboard \u00b7 55 GM Instruments',
      loadingFile: 'Loading sound file...',
      loadingProgress: 'Loading... ',
      loaded: '\u2713 Done',
      readyPrefix: 'Ready \u00b7 ',
      navHome: 'Home',
      navGithub: 'GitHub',
      langBtn: '\u4e2d'
    }
  },

  KEY_MAP: {
    'z': 0,  's': 1,   'x': 2,   'd': 3,   'c': 4,
    'v': 5,  'g': 6,   'b': 7,   'h': 8,   'n': 9,   'j': 10,  'm': 11,
    ',': 12, 'l': 13,  '.': 14,  ';': 15,  '/': 16,
    'q': 17, '2': 18,  'w': 19,  '3': 20,  'e': 21,  '4': 22,  'r': 23,
    't': 24, '6': 25,  'y': 26,  '7': 27,  'u': 28,
    'i': 29, '9': 30,  'o': 31,  '0': 32,  'p': 33,  '-': 34,  '[': 35
  },

  OFFSET_TO_KEY: {
     0: 'z',  1: 's',  2: 'x',  3: 'd',   4: 'c',
     5: 'v',  6: 'g',  7: 'b',  8: 'h',   9: 'n',  10: 'j',  11: 'm',
    12: ',', 13: 'l', 14: '.', 15: ';',  16: '/',
    17: 'q', 18: '2', 19: 'w', 20: '3',  21: 'e', 22: '4',  23: 'r',
    24: 't', 25: '6', 26: 'y', 27: '7',  28: 'u',
    29: 'i', 30: '9', 31: 'o', 32: '0',  33: 'p', 34: '-',  35: '['
  },

  INSTRUMENTS: [
    { value: 'acoustic_grand_piano',       label: '\u5927\u94a2\u7434', en: 'Grand Piano' },
    { value: 'bright_acoustic_piano',      label: '\u4eae\u97f3\u94a2\u7434', en: 'Bright Piano' },
    { value: 'electric_grand_piano',       label: '\u7535\u94a2\u7434', en: 'Elec. Grand Piano' },
    { value: 'honkytonk_piano',            label: '\u9152\u5427\u94a2\u7434', en: 'Honky-tonk Piano' },
    { value: 'electric_piano_1',           label: '\u7535\u94a2\u74341', en: 'Elec. Piano 1' },
    { value: 'electric_piano_2',           label: '\u7535\u94a2\u74342', en: 'Elec. Piano 2' },
    { value: 'harpsichord',                label: '\u5927\u952e\u7434', en: 'Harpsichord' },
    { value: 'clavinet',                   label: '\u53e4\u94a2\u7434', en: 'Clavinet' },
    { value: 'celesta',                    label: '\u94a2\u7247\u7434', en: 'Celesta' },
    { value: 'glockenspiel',               label: '\u949f\u7434', en: 'Glockenspiel' },
    { value: 'music_box',                  label: '\u97f3\u4e50\u76d2', en: 'Music Box' },
    { value: 'vibraphone',                 label: '\u98a4\u97f3\u7434', en: 'Vibraphone' },
    { value: 'marimba',                    label: '\u9a6c\u6797\u5df4', en: 'Marimba' },
    { value: 'xylophone',                  label: '\u6728\u7434', en: 'Xylophone' },
    { value: 'tubular_bells',              label: '\u7ba1\u949f', en: 'Tubular Bells' },
    { value: 'dulcimer',                   label: '\u626c\u7434', en: 'Dulcimer' },
    { value: 'drawbar_organ',              label: '\u62c9\u6746\u98ce\u7434', en: 'Drawbar Organ' },
    { value: 'percussive_organ',           label: '\u6572\u51fb\u98ce\u7434', en: 'Perc. Organ' },
    { value: 'rock_organ',                 label: '\u6447\u6eda\u98ce\u7434', en: 'Rock Organ' },
    { value: 'church_organ',               label: '\u6559\u5802\u98ce\u7434', en: 'Church Organ' },
    { value: 'accordion',                  label: '\u624b\u98ce\u7434', en: 'Accordion' },
    { value: 'acoustic_guitar_nylon',      label: '\u5c3c\u9f99\u5f26\u5409\u4ed6', en: 'Nylon Guitar' },
    { value: 'acoustic_guitar_steel',      label: '\u94a2\u5f26\u5409\u4ed6', en: 'Steel Guitar' },
    { value: 'electric_guitar_jazz',       label: '\u7235\u58eb\u7535\u5409\u4ed6', en: 'Jazz Guitar' },
    { value: 'electric_guitar_clean',      label: '\u6e05\u97f3\u7535\u5409\u4ed6', en: 'Clean Guitar' },
    { value: 'overdriven_guitar',          label: '\u8fc7\u8f7d\u5409\u4ed6', en: 'Overdrive Guitar' },
    { value: 'distortion_guitar',          label: '\u5931\u771f\u5409\u4ed6', en: 'Dist. Guitar' },
    { value: 'acoustic_bass',              label: '\u539f\u58f0\u8d1d\u65af', en: 'Acoustic Bass' },
    { value: 'electric_bass_finger',       label: '\u6307\u5f39\u8d1d\u65af', en: 'Finger Bass' },
    { value: 'violin',                     label: '\u5c0f\u63d0\u7434', en: 'Violin' },
    { value: 'viola',                      label: '\u4e2d\u63d0\u7434', en: 'Viola' },
    { value: 'cello',                      label: '\u5927\u63d0\u7434', en: 'Cello' },
    { value: 'contrabass',                 label: '\u4f4e\u97f3\u63d0\u7434', en: 'Contrabass' },
    { value: 'pizzicato_strings',          label: '\u62e8\u5f26\u5f26\u4e50', en: 'Pizzicato' },
    { value: 'orchestral_harp',            label: '\u7ad6\u7434', en: 'Harp' },
    { value: 'string_ensemble_1',          label: '\u5f26\u4e50\u5408\u594f', en: 'String Ens.' },
    { value: 'trumpet',                    label: '\u5c0f\u53f7', en: 'Trumpet' },
    { value: 'trombone',                   label: '\u957f\u53f7', en: 'Trombone' },
    { value: 'french_horn',                label: '\u5706\u53f7', en: 'French Horn' },
    { value: 'brass_section',              label: '\u94dc\u7ba1\u7ec4', en: 'Brass Section' },
    { value: 'soprano_sax',                label: '\u9ad8\u97f3\u8428\u514b\u65af', en: 'Soprano Sax' },
    { value: 'alto_sax',                   label: '\u4e2d\u97f3\u8428\u514b\u65af', en: 'Alto Sax' },
    { value: 'tenor_sax',                  label: '\u6b21\u4e2d\u97f3\u8428\u514b\u65af', en: 'Tenor Sax' },
    { value: 'oboe',                       label: '\u53cc\u7bf3\u7ba1', en: 'Oboe' },
    { value: 'clarinet',                   label: '\u5355\u7bf3\u7ba1', en: 'Clarinet' },
    { value: 'piccolo',                    label: '\u77ed\u7b1b', en: 'Piccolo' },
    { value: 'flute',                      label: '\u957f\u7b1b', en: 'Flute' },
    { value: 'pan_flute',                  label: '\u6392\u7bab', en: 'Pan Flute' },
    { value: 'whistle',                    label: '\u53e3\u54e8', en: 'Whistle' },
    { value: 'lead_1_square',             label: '\u65b9\u6ce2\u4e3b\u97f3', en: 'Square Lead' },
    { value: 'lead_2_sawtooth',           label: '\u952f\u9f7f\u4e3b\u97f3', en: 'Sawtooth Lead' },
    { value: 'pad_1_new_age',              label: '\u65b0\u4e16\u7eaa\u6c1b\u56f4', en: 'New Age Pad' },
    { value: 'pad_2_warm',                 label: '\u6e29\u6696\u6c1b\u56f4', en: 'Warm Pad' },
    { value: 'fx_1_rain',                  label: '\u96e8\u58f0\u6548\u679c', en: 'Rain FX' },
    { value: 'synth_drum',                 label: '\u5408\u6210\u9f13', en: 'Synth Drum' }
  ],

  t: function(key) {
    return this.LANG[this.currentLang][key] || this.LANG['zh'][key] || key;
  },

  getInstLabel: function(inst) {
    return this.currentLang === 'zh' ? inst.label : (inst.en || inst.label);
  }
};

Musion.state = {
  activeNotes: {},
  octaveOffset: 0,
  heldKeys: {},
  isMouseDown: false,
  lastDraggedNote: null
};

Musion.dom = {};