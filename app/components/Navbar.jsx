"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/blackAnkhLogo.png";
import { DotPattern } from "./DotPattern";
const Navbar = () => {
  // hamburger toggle
  const hamburgerToggle = () => {
    console.log("clicked the hamburger");
    document.getElementById("hamburger").classList.toggle("active");
  };

  const slidePropertiesSection = () => {
    document.getElementById("propertiesNavMenu").classList.toggle("slideUp");
  };
  return (
    <>
      <nav className="navbar fixed top-0  h-24 w-full shadow-2xs bg-white ">
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
          <div className=" navbar h-full hidden sm:flex items-center">
            <Link
              className="nav-link nav-link-ltr h-full flex justify-center items-center"
              href="/"
            >
              Home
            </Link>
            <Link
              className="nav-link nav-link-ltr h-full  flex justify-center  items-center"
              href="#"
            >
              About
            </Link>
            <Link
              className={`nav-link nav-link-ltr h-full  flex justify-center items-center`}
              // className="nav-link nav-link-ltr h-full  flex justify-center items-center"
              href="/properties"
            >
              Properties
            </Link>
            <Link
              id="propertiesNav"
              className={`propertiesNavBtn nav-link nav-link-ltr h-full  flex justify-center items-center`}
              // className="propertiesNavBtn nav-link nav-link-ltr h-full  flex justify-center items-center"
              href="/properties/add"
              onClick={slidePropertiesSection}
            >
              Add Property
            </Link>
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
              <g strokeWidth="2" strokeLinecap="round">
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
                  fillRule="evenodd"
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
                  fillRule="evenodd"
                  stroke="black"
                />
                <path
                  d="M100.75 125.143h28.75"
                  fill="#009100"
                  fillRule="evenodd"
                  stroke="black"
                />
              </g>
            </svg>
          </div>
          {/* end of hamburger for mobile*/}
        </div>
      </nav>

      {/* dropped down menu design, to expand when hovering a nav link */}
      <div
        id="propertiesNavMenu"
        className="propertiesNavMenu  h-3/4 text-amber-50 bg-black w-3/4 fixed top-24 right-0 grid grid-cols-2 grid-rows-2"
      >
        <div className="cursor-pointer capitalize  transition-all relative items-center justify-center  hover:bg-blue-950 ease-in-out">
          Paris
          <DotPattern className="  absolut -z-1 w-full h-full" glow={true} />
        </div>
        <div className="cursor-pointer flex items-center justify-center">
          Paris
        </div>
        <div className="cursor-pointer flex items-center justify-center">
          Paris
        </div>
        <div className="cursor-pointer relative items-center justify-center">
          Paris
          <DotPattern className="  absolut -z-1 w-full h-full" glow={true} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
