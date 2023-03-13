import React from "react";
import { a } from "@react-spring/web";

import { Paytone_One, Poppins } from "next/font/google";
const paytoneOne = Paytone_One({
  subsets: ["latin"],
  weight: "400",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "800",
});

export default function Overlay({ fill }: any) {
  // Just a Figma export, the fill is animated
  return (
    <div className="overlay relative order-1 flex-1 pointer-events-none">
      <a.div
        style={{
          color: fill,
        }}
      >
        <div className="flex flex-col gap-9 px-20 py-44">
          <div className="flex flex-col gap-4">
            <h1 className={`${paytoneOne.className} text-[60px]`}>
              Hi, I'm <span className="text-[#fbbd05]">Nurullah</span>
            </h1>
            <p className="text-2xl font-semibold">
              I'm a full stack developer. I develop web applications using{" "}
              <span className="font-bold">React</span> and{" "}
              <span className="font-bold">NodeJS</span> technologies.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className={`${poppins.className} text-[40px]`}>Overwiev</h1>
            <p className="text-lg leading-9">
              I'm a skilled software developer with experience in TypeScript and
              JavaScript, and expertise in frameworks like React, Node.js. I'm a
              quick learner and collaborate closely with clients to create
              efficient, scalable, and user-friendly solutions that solve
              real-world problems. Let's work together to bring your ideas to
              life!
            </p>
          </div>
        </div>
      </a.div>
    </div>
  );
}
