import { Separator } from "@heroui/react";
import React from "react";

const Banner = () => {
  return (
    <div className=" bg-[url('/assets/banner.png')] bg-no-repeat bg-cover bg-center text-white  flex justify-between flex-col items-center  gap-5 h-150">
      <div className="p-5 text-center flex justify-center flex-col items-center flex-1">
        <h1 className=" text-6xl sm:text-7xl">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="text-xl sm:text-2xl pt-5 pb-10 sm:pb-14 font-light sm:font-normal">
          Explore breathtaking destinations and create unforgettable memories{" "}
          <br />
          with our curated travel experiences.
        </p>

        <div className="flex gap-5">
          <button className="uppercase bg-cyan-500 px-5 py-3 cursor-pointer">
            Explore Now
          </button>

          <button className="uppercase px-5 py-3 bg-white/40 cursor-pointer">
            View Destination
          </button>
        </div>
      </div>

      <div className=" bg-white/30 w-full hidden sm:block">
        <div className="container mx-auto">
          <div className="flex justify-between gap-5 w-full items-center">
            <div className="flex flex-col items-center pl-4">
              <h3 className="text-sm">Location</h3>
              <p className="text-xs">Address, City or Zip</p>
            </div>

            <Separator variant="tertiary" orientation="vertical" />

            <div className="flex flex-col items-center">
              <h3 className="text-sm">Date/Duration</h3>
              <p className="text-xs">Anytime/3 Days</p>
            </div>

            <Separator variant="tertiary" orientation="vertical" />

            <div className="flex flex-col items-center">
              <h3 className="text-sm">Budget</h3>
              <p className="text-xs">$0-$3000</p>
            </div>

            <Separator variant="tertiary" orientation="vertical" />

            <div className="flex flex-col items-center">
              <h3 className="text-sm">People</h3>
              <p className="text-xs">5-10</p>
            </div>

            <button className="bg-cyan-500 py-3 px-5">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
