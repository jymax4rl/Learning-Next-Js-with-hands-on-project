"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/blackAnkhLogo.png";

const Navbar = () => {
  const hamburgerToggle = () => {
    console.log("clicked the hamburger");
    document.getElementById("hamburger").classList.toggle("active");
  };
  return (
    <nav className="fixed  h-24 w-full shadow-2xs bg-white ">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:pr-0 2xl:pl-16 ">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width="75"
            height="75"
            className="cursor-pointer"
          />
        </Link>
        {/* start of nav links for wide screens */}
        <div className="navbar h-full flex items-center">
          <a
            class="nav-link nav-link-ltr h-full flex justify-center items-center"
            href="#"
          >
            Home
          </a>
          <a
            class="nav-link nav-link-ltr h-full  flex justify-center  items-center"
            href="#"
          >
            About
          </a>
          <a
            class="nav-link nav-link-ltr h-full  flex justify-center items-center"
            href="#"
          >
            Contact
          </a>
          <a
            class="nav-link nav-link-ltr h-full  flex justify-center items-center"
            href="#"
          >
            Blog
          </a>
        </div>
        {/* 
Start of hamburger for mobile
*/}
        <div
          id="hamburger"
          className="hamburger cursor-pointer  sm:hidden"
          onClick={hamburgerToggle}
        >
          <svg width="75" height="75" viewBox="0 0 200 200">
            <g stroke-width="2" stroke-linecap="round">
              <path
                d="M72 82.286h28.75"
                fill="black"
                fillRule="evenodd"
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
        {/* end of hamburger for mobile*/}
      </div>
    </nav>
  );
};

export default Navbar;
