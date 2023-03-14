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
    <div className="overlay relative pointer-events-none">
      <a.div
        style={{
          color: fill,
        }}
      >
        <div className="flex flex-col gap-9 lg:px-20">
          <div className="flex flex-col gap-4">
            <h1 className={`${paytoneOne.className} text-[60px]`}>
              Hi, I'm <span className="text-[#fbbd05]">Nurullah</span>
            </h1>
            <p id="about" className="text-2xl font-semibold">
              I'm a full stack developer. I develop web applications using{" "}
              <span className="font-bold">React</span> and{" "}
              <span className="font-bold">NodeJS</span> technologies.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className={`${poppins.className} text-[40px]`}>Overwiev</h1>
            <p className="text-lg font-semibold leading-8">
              I'm a skilled software developer with experience in TypeScript and
              JavaScript, and expertise in frameworks like React, Node.js. I'm a
              quick learner and collaborate closely with clients to create
              efficient, scalable, and user-friendly solutions that solve
              real-world problems. Let's work together to bring your ideas to
              life!
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-5">
            <div className="bg-[#060816]/80 border-2 p-5 flex flex-col items-center lg:w-[140px] lg:h-[160px] w-full h-[260px] justify-center gap-5 rounded-[7px] border-purple-500">
              <img src="/react.svg" className="lg:h-10 lg:w-10 w-28 h-28" />
              <div className="flex flex-col items-center justify-center">
                <h1 className="lg:text-sm text-2xl font-semibold text-white">
                  Web{" "}
                </h1>
                <h2 className="lg:text-sm text-2xl font-semibold text-white">
                  Development
                </h2>
              </div>
            </div>

            <div className="bg-[#060816]/80 border-2 p-5 flex flex-col items-center lg:w-[140px] lg:h-[160px] w-full h-[260px] justify-center gap-5 rounded-[7px] border-purple-500">
              <img
                src="/react-native.png"
                className="lg:h-10 lg:w-10 w-28 h-28"
              />
              <div className="flex flex-col items-center justify-center">
                <h1 className="lg:text-sm text-2xl font-semibold text-white">
                  React Native{" "}
                </h1>
                <h2 className="lg:text-sm text-2xl font-semibold text-white">
                  Development
                </h2>
              </div>
            </div>

            <div className="bg-[#060816]/80 border-2 p-5 flex flex-col items-center lg:w-[140px] lg:h-[160px] w-full h-[260px] justify-center gap-5 rounded-[7px] border-purple-500">
              <img src="/node.jpg" className="lg:h-12 lg:w-10 w-28 h-32" />
              <div className="flex flex-col items-center justify-center">
                <h1 className="lg:text-sm text-2xl font-semibold text-white">
                  Backend{" "}
                </h1>
                <h2 className="lg:text-sm text-2xl font-semibold text-white">
                  Development
                </h2>
              </div>
            </div>

            <div className="bg-[#060816]/80 border-2 p-5 flex flex-col items-center lg:w-[140px] lg:h-[160px] w-full h-[260px] justify-center gap-5 rounded-[7px] border-purple-500">
              <img
                src="/content-creator.png"
                className="lg:h-10 lg:w-10 w-28 h-28"
              />
              <div className="flex flex-col items-center justify-center">
                <h1 className="lg:text-sm text-2xl font-semibold text-white">
                  Content{" "}
                </h1>
                <h2 className="lg:text-sm text-2xl font-semibold text-white">
                  Creator
                </h2>
              </div>
            </div>
          </div>
        </div>
      </a.div>
    </div>
  );
}
