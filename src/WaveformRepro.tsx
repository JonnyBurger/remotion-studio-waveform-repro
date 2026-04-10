import { AbsoluteFill, staticFile } from "remotion";
import { Audio } from "@remotion/media";

/** Real track: timeline waveform in Studio vs this file’s audio. */
export const WaveformRepro: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#111" }}>
      <Audio src={staticFile("love-vibration.wav")} />
    </AbsoluteFill>
  );
};
