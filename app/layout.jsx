// import React from "react";
import "./globals.css";

export const metadata = {
  title: "Learning Next.js with tailwindcss",
  description: "this is a descritption inside of metadata variable",
  keywords: "Next.js, tailwindcss, react, github etc...",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex justify-center border-4 border-black h-dvh  ">
        {children}
      </body>
    </html>
  );
};

export default MainLayout;
