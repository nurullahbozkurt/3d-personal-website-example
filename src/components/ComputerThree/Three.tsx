import Model from "./Model";
import { useApp } from "@/states/app";
import { a } from "@react-spring/web";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Poppins } from "next/font/google";
import { Environment, ContactShadows, OrbitControls } from "@react-three/drei";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});

const Three = () => {
  const { set, background, fill } = useApp();

  return (
    <a.div style={{ background }} className="w-full h-full mt-20">
      <a.div
        style={{
          color: fill,
        }}
        className="flex items-center justify-center"
      >
        <h1 className={`${poppins.className} text-[40px]`}>
          Innovative And Advanced Technology
        </h1>
      </a.div>
      <div className="h-[400px] lg:h-[600px]">
        <Canvas camera={{ position: [-5, 0, -15], fov: 55 }}>
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Suspense fallback={null}>
            <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
              <Model />
            </group>
            <Environment preset="city" />
          </Suspense>
          <ContactShadows
            position={[0, -4.5, 0]}
            scale={20}
            blur={2}
            far={4.5}
          />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2.2}
            maxPolarAngle={Math.PI / 2.2}
          />
        </Canvas>
      </div>
    </a.div>
  );
};
export default Three;
