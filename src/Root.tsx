import { Composition } from "remotion";
import { WaveformRepro } from "./WaveformRepro";

const FPS = 30;
const DURATION_SEC = 30;

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="WaveformRepro"
      component={WaveformRepro}
      durationInFrames={Math.round(DURATION_SEC * FPS)}
      fps={FPS}
      width={1280}
      height={720}
      defaultProps={{}}
    />
  );
};
