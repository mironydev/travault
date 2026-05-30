import DestinationCard from "@/components/DestinationCard";
import React, { Suspense } from "react";
import { fetchDestinations } from "../lib/fetch";
import Link from "next/link";

const DestinationsPage = async () => {
  const destinations = await fetchDestinations();
  return (
    <div className="container mx-auto px-4 mt-5 mb-16">
      <h1 className="text-center sm:text-left text-4xl md:text-5xl/tight font-extralight">
        Explore All Destinations
      </h1>
      <p className="text-center sm:text-left text-gray-600 pt-2 pb-5">
        Find your perfect travel experience from our curated collection
      </p>
      <Suspense
        fallback={
          <div className="flex justify-center my-26">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        {destinations.length <= 0 ? (
          <div className="bg-base-300  text-center py-20 px-4">
            <h3 className="text-5xl text-gray-500 pb-3">Empty</h3>
            <p>
              Add a destination on the{" "}
              <Link
                href={"/add-destination"}
                className=" underline text-blue-800"
              >
                Add Destinations
              </Link>{" "}
              page.
            </p>
          </div>
        ) : (
          ""
        )}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
          {destinations.map((destination) => (
            <DestinationCard destination={destination} key={destination._id} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default DestinationsPage;
