import Hero from "@/container/home-sections/Hero";
import { NextPage } from "next";

interface Props {}

const Home: NextPage<Props> = ({}) => {
  return <main className="h-screen flex justify-center items-center"><Hero/></main>;
};

export default Home;
