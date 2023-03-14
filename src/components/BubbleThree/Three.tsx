import React from "react";
import { useApp } from "@/states/app";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Overlay from "./Overlay";
import Scene from "./Scene";
type Props = {};

const Three = (props: Props) => {
  const { set, background, fill } = useApp();

  return (
    <div className="flex lg:flex-row flex-col-reverse">
      <Overlay fill={fill} />
      <div className="hidden lg:flex">
        <Canvas className="canvas" dpr={[1, 2]}>
          <Scene setBg={set} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default Three;
