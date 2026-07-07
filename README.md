# MUSION 🎹

基于 [MIDI.js](https://github.com/mudcube/MIDI.js) 的 Web MIDI 钢琴，支持 55 种 GM 音色、键盘/鼠标弹奏、八度切换。

## 使用

打开 `index.html` 即可使用。首次加载会从本地加载 FluidR3_GM 音色文件（约 2-6MB），请耐心等待。

### 快捷键

| 按键 | 功能 |
|------|------|
| Z-M 键 | 第一组八度白键 + 黑键 |
| Q-U 键 | 第二组八度白键 + 黑键 |
| I-/ 键 | 第三组八度白键 + 黑键 |
| ↑/↓ | 升/降八度 |
| 鼠标点击 | 弹奏琴键 |

### 功能

- 55 种 GM 标准音色（钢琴、吉他、管弦乐、合成器等）
- 本地音色库：FluidR3_GM SoundFont
- 3 个八度范围（C3–B5），可上下扩展
- 音量控制

## 技术栈

- [MIDI.js](https://github.com/mudcube/MIDI.js) — Web MIDI 播放引擎
- [FluidR3_GM](https://github.com/gleitz/midi-js-soundfonts) — GM 标准音色库
- Web Audio API — 音频输出

## 许可 & 致谢

本项目基于 MIDI.js 开发，感谢原作者 [@mudcube](https://github.com/mudcube) 的优秀工作。

- **MIDI.js** — MIT License (c) 2015 mudcube
- **FluidR3_GM SoundFont** — 由 Frank Wen 和 gleitz 提供，基于 FluidSynth 的 FluidR3 GM 音色
- **midi-js-soundfonts** — 由 [gleitz](https://github.com/gleitz/midi-js-soundfonts) 转换并提供
