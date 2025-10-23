"use client";
import React from "react";
import SlideArrowButton from "../components/animata/button/slide-arrow-button";
import Link from "next/link";
import Logo from "./blackAnkhLogo.png";
import Image from "next/image";
import { KAMA_HOTELS } from "./data";

const reactDescriptions = ["Important", "Core", "Essential"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcept({ title, image, description }) {
  return (
    <li className="flex h-full mt-24  ">
      <Image
        className="cursor-pointer  h-full w-1/4  ml-4.5 rounded-2xl shadow-lg shadow-gray-400"
        width=""
        height=""
        src={image}
        alt=""
      />
      <div className="w-full ml-6 grid grid-rows-2 gap-2.5 place-content-stretch ">
        <h3 className="cursor-pointer h-auto  capitalize text-2xl mask-b-from-neutral-800 from-neutral-600">
          {title}
        </h3>
        <p className=" justify-center h-auto ">{description}</p>
      </div>
    </li>
  );
}

const ReactEssentials = () => {
  const description = reactDescriptions[getRandomInt(2)];

  return (
    <>
      {/* <div className="bg-gradient-to-r from-violet-600 to-indigo-600 flex flex-col pt-10 items-center justify-center w-full h-1/2 ">
        <Image
          alt="logo"
          className="rounded-full shadow-2xl"
          width="75"
          height="75"
          src={Logo}
        />
        <h1 className="text-4xl text-blue-100 font-extrabold uppercase shadow-blue-200 p-2 rounded-2xl">
          React Essentials
        </h1>
        <p className="pb-3.5 text-white">
          Learning {description} React concepts with Oreilly course by Max
          Schzmuller.
        </p>
      </div> */}
      <section className="border-4 h-auto">
        <div>
          <ul className="h-1/2 p-4 items-center justify-center">
            {KAMA_HOTELS.map((hotel) => {
              return (
                <CoreConcept
                  image={hotel.image}
                  title={hotel.title}
                  description={hotel.description}
                ></CoreConcept>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ReactEssentials;
