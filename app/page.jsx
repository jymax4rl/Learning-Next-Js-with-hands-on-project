import React from "react";
import SlideArrowButton from "./components/animata/button/slide-arrow-button";
import Link from "next/link";

export const metadata = {
  title: "test",
  description: "project for learning Next.js with Oreilly",
};

const HomePage = () => {
  console.log("root page.jsx file");
  return (
    <div className="h-min-full bg-amber-300 border-2 flex flex-col w-full ">
      <h1 className="text-3xl">welcome</h1>
      <Link href="/users">
        <SlideArrowButton text="Users Page"></SlideArrowButton>
      </Link>
      <Link href="/reactEssentials">
        <SlideArrowButton text="React Essentials"></SlideArrowButton>
      </Link>
    </div>
  );
};

export default HomePage;
