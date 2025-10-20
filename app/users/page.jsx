import React from "react";
import NavbarPage from "../ui/navbar";
import SlideArrowButton from "../components/animata/button/slide-arrow-button";
import Link from "next/link";

const UserPage = () => {
  console.log("hello");
  return (
    <div className="w-full">
      <NavbarPage />

      <div
        className="flex flex-col items-center-safe justify-center space- myDiv m-auto rounded-3xl  w-full h-1/2 
          p-3 shadow-xl border-1 border-solid border-b-neutral-500"
      >
        <h1 className="m-2">Learning Next.js with Tailwindcss</h1>
        <h2>this the users next.js page inside users folder </h2>
        <Link href="/">
          <SlideArrowButton text="Go Home" />
        </Link>
      </div>
    </div>
  );
};

export default UserPage;
