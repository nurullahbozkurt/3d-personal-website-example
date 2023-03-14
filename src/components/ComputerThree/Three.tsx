import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, useGLTF, ContactShadows } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a as three } from "@react-spring/three";
import { a as web } from "@react-spring/web";
import Model from "./Model";
import { useApp } from "@/states/app";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "900",
});

const Three = () => {
  // This flag controls open state, alternates between true & false
  const [open, setOpen] = useState(true);
  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({ open: Number(open) });

  const { set, background, fill } = useApp();

  return (
    <web.main style={{ background: background }} className={"h-[500px]"}>
      <web.div
        style={{
          color: fill,
          background: background,
        }}
        className="mt-20"
      >
        <h1 className={`${poppins.className} text-[50px] text-center`}>
          Innovative And Advanced Technology
        </h1>
      </web.div>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 35 }}>
        <three.pointLight
          position={[10, 10, 10]}
          intensity={1.5}
          color={props.open.to([0, 1], ["#f0f0f0", "#d25578"])}
        />
        <Suspense fallback={null}>
          <group
            rotation={[0, Math.PI, 0]}
            onClick={(e) => (e.stopPropagation(), setOpen(!open))}
          >
            <Model open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
          </group>
          <Environment preset="city" />
        </Suspense>
        <ContactShadows
          position={[0, -4.5, 0]}
          opacity={0.4}
          scale={20}
          blur={1.75}
          far={4.5}
        />
      </Canvas>
    </web.main>
  );
};
export default Three;
