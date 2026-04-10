import { AbsoluteFill, staticFile } from "remotion";
import { Audio, Video } from "@remotion/media";

/**
 * Minimal repro for Remotion Studio: timeline waveform for standalone
 * `<Audio src={staticFile(...)}>` vs embedded audio on `<Video muted>`.
 *
 * `public/repro-audio.wav` is the PCM source; `public/repro-video-aac.mp4`
 * was muxed from that WAV with AAC audio. Playback should match; timeline
 * waveforms should overlap visually when stacked at frame 0.
 */
export const WaveformRepro: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#111" }}>
      <Video
        src={staticFile("repro-video-aac.mp4")}
        style={{ width: "100%", height: "100%" }}
        objectFit="contain"
        muted
      />
      <Audio src={staticFile("repro-audio.wav")} />
    </AbsoluteFill>
  );
};
