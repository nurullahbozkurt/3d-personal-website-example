import React from "react";
import { Layout } from "@/components/Layout";
import { BubbleThree } from "@/components/BubbleThree";
import { ComputerThree } from "@/components/ComputerThree";
import { TimeLine } from "../VerticalTimeline";
import { ReactThree } from "../FooterThree";
import { RocketThree } from "../RocketThree";

type Props = {};

const Home = (props: Props) => {
  return (
    <Layout>
      <BubbleThree />
      <ComputerThree />
      <TimeLine />
      <ReactThree />
      {/* <RocketThree /> */}
    </Layout>
  );
};

export default Home;
