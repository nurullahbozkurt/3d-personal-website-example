import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Poppins } from "next/font/google";
import { ComputerThree } from "../ComputerThree";
import { useApp } from "@/states/app";
import { a } from "@react-spring/web";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
});

const poppinsBold = Poppins({
  subsets: ["latin"],
  weight: "700",
});

type Props = {};

const Timeline = (props: Props) => {
  const { background, fill } = useApp();
  return (
    <div
      className={`${poppins.className} mt-[120px] lg:mt-10 -mb-[300px] lg:mb-0`}
    >
      <a.div
        id={"work"}
        style={{
          background: background,
          color: fill,
        }}
        className="p-20"
      >
        <h1 className={`${poppinsBold.className} text-[40px]`}>
          Work Experience
        </h1>
      </a.div>

      <VerticalTimeline lineColor="#060816">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#060816", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #060816" }}
          iconStyle={{ background: "#060816", color: "#fff" }}
          icon={
            <div className="flex items-center justify-center p-2">
              <img src="/react.svg" className="mt-[2px]" />
            </div>
          }
        >
          <h3 className={`text-2xl ${poppinsBold.className}`}>React.js</h3>
          <h4 className="opacity-50">Frontend</h4>
          <ul className="list-disc p-5 leading-8">
            <li>I use ReactJS to develop all web applications</li>
            <li>
              I use NextJS library to develop Server Side Rendering projects and
              to make the best SEO optimization.
            </li>
            <li>
              I use helper libraries like react-query and useSwr for the best
              data fetching operations.
            </li>
            <li>I use Socket.io to develop real time projects.</li>
            <li>I use threeJS to embed 3D visuals in the project interface.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#060816", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #060816" }}
          iconStyle={{ background: "#060816", color: "#fff" }}
          icon={
            <div className="flex items-center justify-center p-2">
              <img src="/node.jpg" className="-mt-[3px]" />
            </div>
          }
        >
          <h3 className={`text-2xl ${poppinsBold.className}`}>Node.JS</h3>
          <h4 className="opacity-50">Backend</h4>

          <ul className="list-disc p-5 leading-8">
            <li>
              While developing applications on the backend, I use the MongoDB
              database to use the data in the best way.
            </li>
            <li>
              I am using Express.js to handle HTTP requests and responses while
              working on Node.js
            </li>
            <li>
              I use common 3rd party applications such as sendgrid, stripe,
              paypal, agenda, winston to meet the payment and other possible
              needs of customers.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#060816", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #060816" }}
          iconStyle={{ background: "#060816", color: "#fff" }}
          icon={
            <div className="flex items-center justify-center p-2">
              <img src="/react-native.png" className="mt-[2px]" />
            </div>
          }
        >
          <h3 className={`text-2xl ${poppinsBold.className}`}>React Native</h3>
          <h4 className="opacity-50">Mobile App</h4>
          <ul className="list-disc p-5 leading-8">
            <li>
              I develop mobile applications for Android and iOS platforms. I am
              using React Native while developing these mobile apps. I'm still
              improving myself to develop the best mobile apps.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#060816", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #060816" }}
          iconStyle={{ background: "#060816", color: "#fff" }}
          icon={
            <div className="flex items-center justify-center p-2">
              <img src="/typescript.png" />
            </div>
          }
        >
          <h3 className={`text-2xl ${poppinsBold.className}`}>TypeScript</h3>
          <h4 className="opacity-50">Frontend & Backend</h4>
          <ul className="list-disc p-5 leading-8">
            <p>
              I use `typescript` in React and NodeJS projects to get rid of
              potential errors and to speed up and simplify the development
              process.
            </p>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
