"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/ankhLogoWhiteBg.png";

const Navbar = () => {
  const hamburgerToggle = () => {
    console.log("clicked the hamburger");
    document.getElementById("hamburger").classList.toggle("active");
  };
  return (
    <nav className="fixed  h-24 w-full shadow-xl bg-white">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width="75"
            height="75"
            className="cursor-pointer"
          />
        </Link>

        <div
          id="hamburger"
          className="hamburger cursor-pointer"
          onClick={hamburgerToggle}
        >
          <svg width="75" height="75" viewBox="0 0 200 200">
            <g stroke-width="2" stroke-linecap="round">
              <path
                d="M72 82.286h28.75"
                fill="black"
                fill-rule="evenodd"
                stroke="black"
              />
              <path
                d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                fill="none"
                stroke="black"
              />
              <path
                d="M72 125.143h28.75"
                fill="#009100"
                fill-rule="evenodd"
                stroke="black"
              />
              <path
                d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                fill="none"
                stroke="black"
              />
              <path
                d="M100.75 82.286h28.75"
                fill="#009100"
                fill-rule="evenodd"
                stroke="black"
              />
              <path
                d="M100.75 125.143h28.75"
                fill="#009100"
                fill-rule="evenodd"
                stroke="black"
              />
            </g>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
