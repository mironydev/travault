import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdDateRange, MdOutlinePinDrop } from "react-icons/md";

const DestinationDetailsCard = ({ destiDetails }) => {
  const {
    category,
    country,
    destinationName,
    duration,
    imageUrl,
    price,
    _id,
    description,
  } = destiDetails;
  return (
    <div>
      <div className="relative w-full aspect-16/7">
        <Image
          src={imageUrl}
          alt={category}
          fill
          className=" object-cover object-center"
          priority
        />
      </div>
      <div className="flex border-t border-black/20 pt-8 mt-10">
        <div className="flex-3">
          <p className="flex items-center gap-1 text-gray-500 font-medium">
            <span>
              <MdOutlinePinDrop />
            </span>
            {country}
          </p>
          <p className=" text-5xl font-medium pt-1 pb-2">{destinationName}</p>
          <p className="flex items-center gap-1 text-gray-500 ">
            <span className="text-xl">
              <MdDateRange />
            </span>
            {duration}
          </p>
          <p className="text-2xl pt-4 pb-1">Overview</p>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="border-2 border-gray-200 flex-1 p-5 shadow-lg">
          <p className="text-xs text-gray-600">Starting from</p>
          <p className="text-cyan-500 text-3xl font-semibold pt-2">${price}</p>
          <p className="text-gray-500">per person</p>
          <input
            type="text"
            placeholder="31/12/2026"
            className="input rounded-none outline-none w-full mt-8 mb-4 placeholder:opacity-50"
          />

          <button className="btn bg-cyan-500 rounded-none text-white w-full flex items-center gap-1 text-base">
            Book Now <BsArrowRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsCard;
