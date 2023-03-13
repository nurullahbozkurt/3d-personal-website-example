import React from "react";
import { Layout } from "@/components/Layout";
import { BubbleThree } from "@/components/BubbleThree";
import { ComputerThree } from "@/components/ComputerThree";

type Props = {};

const Home = (props: Props) => {
  return (
    <Layout>
      <BubbleThree />
      <ComputerThree />
    </Layout>
  );
};

export default Home;
