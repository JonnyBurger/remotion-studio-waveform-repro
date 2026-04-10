import { Composition } from "remotion";
import { WaveformRepro } from "./WaveformRepro";

const FPS = 30;
/** Matches `love-vibration.wav` duration (~157.99s at 48k stereo). */
const DURATION_SEC = 157.988571;

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="WaveformRepro"
      component={WaveformRepro}
      durationInFrames={Math.ceil(DURATION_SEC * FPS)}
      fps={FPS}
      width={1280}
      height={720}
      defaultProps={{}}
    />
  );
};
