// import React from "react";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Learning Next.js with tailwindcss",
  description: "this is a descritption inside of metadata variable",
  keywords: "Next.js, tailwindcss, react, github etc...",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className=" ">
        <Navbar></Navbar>
        {/* <main>{children}</main> */}
      </body>
    </html>
  );
};

export default MainLayout;
