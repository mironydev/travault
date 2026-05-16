import { Link } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { BiSolidStar } from "react-icons/bi";

import { MdDateRange, MdOutlinePinDrop } from "react-icons/md";

const DestinationCard = ({ destination }) => {
  const { category, country, destinationName, duration, imageUrl, price, _id } =
    destination;
  return (
    <div className="space-y-1">
      <div className="relative w-full aspect-video">
        <Image
          src={imageUrl}
          alt={category}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        ></Image>
        <span className="absolute right-5 top-5 flex items-center font-semibold gap-1 backdrop-blur-xs bg-white/60 border border-white/50 py-1 px-3">
          5.00 <BiSolidStar className="text-orange-500" />
        </span>
      </div>
      <p className="flex items-center gap-1 text-gray-500 font-medium mt-2">
        <span>
          <MdOutlinePinDrop />
        </span>
        {country}
      </p>
      <p className=" text-2xl font-medium">{destinationName}</p>
      <div className="flex justify-between">
        <p className="flex items-center gap-1 text-gray-500 ">
          <span className="text-xl">
            <MdDateRange />
          </span>
          {duration}
        </p>
        <div className="flex items-end">
          <p className="text-2xl font-medium">${price}</p>
          <p className="text-gray-500">/Person</p>
        </div>
      </div>
      <Link
        href={`/destinations/${_id}`}
        className={"text-cyan-500 text-xl mt-3 space-y-5"}
      >
        BOOK NOW
        <Link.Icon />
      </Link>
    </div>
  );
};

export default DestinationCard;
