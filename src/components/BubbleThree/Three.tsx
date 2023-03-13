import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { a } from "@react-spring/web";
import Overlay from "./Overlay";
import Scene from "./Scene";
import Link from "next/link";
import { AiFillCode } from "react-icons/ai";
import { useApp } from "@/states/app";
import { Layout } from "../Layout";
type Props = {};

const Three = (props: Props) => {
  const { set, background, fill } = useApp();

  return (
    <div className="flex w-full h-full -mb-[200px]">
      <Canvas className="canvas h-full order-2 flex-1" dpr={[1, 2]}>
        <Scene setBg={set} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
      <Overlay fill={fill} />
    </div>
  );
};

export default Three;
