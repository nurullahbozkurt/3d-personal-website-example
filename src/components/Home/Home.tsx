import React from "react";
import { Layout } from "@/components/Layout";
import { BubbleThree } from "@/components/BubbleThree";
import { ComputerThree } from "@/components/ComputerThree";
import { TimeLine } from "../VerticalTimeline";

type Props = {};

const Home = (props: Props) => {
  return (
    <Layout>
      <BubbleThree />
      <ComputerThree />
      <TimeLine />
    </Layout>
  );
};

export default Home;
