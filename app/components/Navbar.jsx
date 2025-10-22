"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/blackAnkhLogo.png";
import LoginIcon from "../public/account.png";
import { DotPattern } from "./DotPattern";

const Navbar = () => {
  const propertiesMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // track hover over either the button or the menu
  const [showMenu, setShowMenu] = useState(false);

  // optional: keep function if you want to still toggle classList manually somewhere
  function slidePropertiesSection(show) {
    const el = propertiesMenuRef.current;
    if (!el) return;
    if (show) {
      el.classList.add("slideUp");
    } else {
      el.classList.remove("slideUp");
    }
  }

  // hamburger toggle using ref (no document.*)
  const hamburgerToggle = () => {
    const el = hamburgerRef.current;
    if (el) el.classList.toggle("active");
  };

  useEffect(() => {
    // If you want to sync slideUp class with showMenu state (keeps backward compatibility)
    const el = propertiesMenuRef.current;
    if (!el) return;
    if (showMenu) {
      el.classList.add("slideUp");
    } else {
      el.classList.remove("slideUp");
    }
  }, [showMenu]);

  return (
    <>
      <nav className="navbar fixed top-0 h-24 w-full shadow-2xs bg-white">
        <div className="flex justify-between items-center h-full w-full px-4 2xl:pr-0 2xl:pl-16">
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
          <div className="navbar h-full hidden sm:flex items-center">
            <Link
              className="nav-link nav-link-ltr h-full flex justify-center items-center"
              href="/"
            >
              Home
            </Link>
            <Link
              className="nav-link nav-link-ltr h-full flex justify-center items-center"
              href="#"
            >
              About
            </Link>
            <Link
              className="nav-link nav-link-ltr h-full flex justify-center items-center"
              href="/properties"
            >
              Properties
            </Link>

            {/* Add Property link - hover on this or the menu will keep menu open */}
            <Link
              id="propertiesNavAdd"
              className="propertiesNavBtn nav-link nav-link-ltr h-full flex justify-center items-center"
              href="/properties/add"
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              Add Property
            </Link>

            <Link
              id="loginNav"
              className=" nav-link nav-link-ltr h-full flex justify-center items-center"
              href="/login"
            >
              <Image alt="login icon" src={LoginIcon} className="w-10" />
            </Link>
          </div>

          {/* Start of hamburger for mobile */}
          <div
            id="hamburger"
            ref={hamburgerRef}
            className="hamburger cursor-pointer sm:hidden"
            onClick={hamburgerToggle}
          ></div>
          {/* end of hamburger for mobile */}
        </div>
      </nav>

      {/* dropped down menu design; we reference it with ref
          Note: we keep your original classes and only toggle hidden/block + slideUp via showMenu */}
      <div
        id="propertiesNavMenu"
        ref={propertiesMenuRef}
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
        className={`propertiesNavMenu ${
          showMenu ? "slideUp block" : "hidden"
        } sm:grid h-3/4 text-amber-50 bg-black w-3/4 fixed top-24 right-0 grid grid-cols-2 grid-rows-2`}
      >
        <div className="cursor-pointer capitalize transition-all relative items-center justify-center opacity-65 hover:opacity-100 ease-in-out">
          <span className="flex justify-center items-center h-full w-full text-white">
            Bamako
          </span>
          <DotPattern className="absolut -z-1 w-full h-full" glow={true} />
        </div>
        <div className="cursor-pointer capitalize transition-all relative items-center justify-center opacity-65 hover:opacity-100 ease-in-out">
          <span className="flex justify-center items-center h-full w-full text-white">
            Dakar
          </span>
          <DotPattern className="absolut -z-1 w-full h-full" glow={true} />
        </div>
        <div className="cursor-pointer capitalize transition-all relative items-center justify-center opacity-65 hover:opacity-100 ease-in-out">
          <span className="flex ease-in-out justify-center items-center h-full w-full text-white">
            Banjul
          </span>
          <DotPattern className="absolut -z-1 w-full h-full" glow={true} />
        </div>
        <div className="cursor-pointer capitalize transition-all relative items-center justify-center opacity-65 hover:opacity-100 ease-in-out">
          <span className="flex justify-center items-center h-full w-full text-white">
            Accra
          </span>
          <DotPattern className="absolut -z-1 w-full h-full" glow={true} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
