# Remotion Studio — timeline waveform alignment repro

Tracked as [remotion-dev/remotion#7042](https://github.com/remotion-dev/remotion/issues/7042).

```bash
npm install
npm run studio
```

Open composition **WaveformRepro**. In the timeline, compare the waveform drawn for:

1. Embedded AAC audio on `<Video muted />` (`repro-video-aac.mp4`)
2. Standalone `<Audio src={staticFile("repro-audio.wav")} />` (PCM source used to encode that AAC)

Both layers start at frame 0 with default trim. If the two waveforms are visibly offset while the underlying audio matches, that matches the bug report.

Media was generated with ffmpeg (`lavfi` sine + AAC mux) so the repo contains no third-party audio.
