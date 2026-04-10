# Remotion Studio — timeline waveform repro

Tracked as [remotion-dev/remotion#7042](https://github.com/remotion-dev/remotion/issues/7042).

```bash
npm install
npm run studio
```

Open composition **WaveformRepro**. It is a single `<Audio src={staticFile("love-vibration.wav")} />` layer. The repro asset is **`public/love-vibration.wav` only** (no bundled `.mp4`).
