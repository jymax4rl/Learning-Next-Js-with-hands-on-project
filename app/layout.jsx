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
      <body className="min-h-screen bg-black ">
        <Navbar></Navbar>
        <main className="pt-24 min-h-screen">{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
