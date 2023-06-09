import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Loader,
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  Stars,
} from "@react-three/drei";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "900",
});

function Model({ url }: any) {
  const { nodes } = useGLTF(url);
  return (
    <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -7, 0]} scale={7}>
      <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.planet002.geometry}
          material={nodes.planet002.material}
        />
        <mesh
          geometry={nodes.planet003.geometry}
          material={nodes.planet003.material}
        />
      </group>
    </group>
  );
}

export default function Three() {
  return (
    <div className="relative w-full flex">
      <div className="bg" />
      <div className="flex w-full">
        <div className="w-full col-span-1 flex-1 flex items-end justify-center lg:items-center">
          <div className="bg-[#060816] w-[500px] flex flex-col gap-5 text-white p-10 rounded border-[#060816] shadow-xl">
            <h1 id="contact" className={`text-4xl ${poppins.className}`}>
              CONTACT
            </h1>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-lg">Your Name</label>
              <input
                className="border bg-white/10 border-black p-2 rounded-[7px] placeholder:text-sm placeholder:text-white/60 placeholder:font-bold"
                placeholder="What is your name ?"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-lg">Your Email</label>
              <input
                className="border bg-white/10 border-black p-2 rounded-[7px] placeholder:text-sm placeholder:text-white/60 placeholder:font-bold"
                placeholder="What is your email ?"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-lg">Message</label>
              <textarea
                placeholder="What do you want to say ?"
                className="border min-h-[200px] bg-white/10 border-black p-2 rounded-[7px] placeholder:text-sm placeholder:text-white/60 placeholder:font-bold"
              />
            </div>
            <button className="text-white bg-slate-900/70 border border-slate-900 hover:bg-slate-900 p-2 rounded">
              SEND
            </button>
          </div>
        </div>
      </div>
      <Canvas dpr={[1.5, 2]} linear shadows>
        <fog attach="fog" args={["#272730", 16, 30]} />
        <ambientLight intensity={0.75} />
        <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>
          <pointLight intensity={1} position={[-10, -25, -10]} />
          <spotLight
            castShadow
            intensity={2.25}
            angle={0.2}
            penumbra={1}
            position={[-25, 20, -15]}
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
        <Suspense fallback={null}>
          <Model url="/scene.glb" />
        </Suspense>
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Stars radius={500} depth={50} count={1000} factor={20} />
      </Canvas>

      <div className="layer " />
      <Loader />
    </div>
  );
}
