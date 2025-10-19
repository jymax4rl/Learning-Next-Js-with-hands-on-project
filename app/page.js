// import React from "react";
import { MainLayout } from "./layout";

export const metadata = {
  title: "test",
};

const HomePage = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <MainLayout />
        <div>{children}</div>
      </body>
    </html>
  );
};

export default HomePage;
