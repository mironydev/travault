import DestinationCard from "@/components/DestinationCard";
import React from "react";
import { fetchDestinations } from "../lib/fetch";

const DestinationsPage = async () => {
  const destinations = await fetchDestinations();
  return (
    <div className="container mx-auto px-4 mt-5">
      <h1 className="text-center sm:text-left text-5xl/tight font-extralight">
        Explore All Destinations
      </h1>
      <p className="text-center sm:text-left text-gray-600 pt-2 pb-5 text-lg">
        Find your perfect travel experience from our curated collection
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
        {destinations.map((destination) => (
          <DestinationCard destination={destination} key={destination._id} />
        ))}
      </div>
    </div>
  );
};

export default DestinationsPage;
