import * as THREE from "three";
import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Trail, Line, Sphere, Stars } from "@react-three/drei";
import { a } from "@react-spring/web";
import { useApp } from "@/states/app";
import { RocketThree } from "../RocketThree";

export default function App() {
  const { set, background, fill } = useApp();
  return (
    <a.div
      style={{
        background: background,
        color: fill,
      }}
      className="flex w-full h-[1000px]"
    >
      {/* <Canvas camera={{ position: [0, 0, 10] }}>
        <Stars saturation={30} count={500} speed={5.5} />
      </Canvas> */}

      <div className="flex w-full">
        <RocketThree />
      </div>
    </a.div>
  );
}
