// import React from "react";
import "./globals.css";

export const metadata = {
  title: "Learning Next.js with tailwindcss",
  description: "this is a descritption inside of metadata variable",
  keywords: "Next.js, tailwindcss, react, github etc...",
};

const MainLayout = () => {
  return (
    <html lang="en">
      <body className="flex justify-center border-4 border-black h-dvh  ">
        <div
          className="flex flex-col items-center-safe justify-center space- myDiv m-auto rounded-3xl  w-1/2 h-1/2 
          p-3 shadow-xl border-1 border-solid border-b-neutral-500"
        >
          <h1 className="m-2">Learning Next.js with Tailwindcss</h1>
          <h2>this is the layout.js </h2>
        </div>
      </body>
    </html>
  );
};

export default MainLayout;
