import { fetchDestinationDetails } from "@/app/lib/fetch";
import DeleteModal from "@/components/DeleteModal";
import DestinationDetailsCard from "@/components/DestinationDetailsCard";
import EditModal from "@/components/EditModal";
import Link from "next/link";
import React, { Suspense } from "react";
import { BiArrowBack } from "react-icons/bi";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const destiDetails = await fetchDestinationDetails(id);
  return (
    <div className="container mx-auto px-4 mt-5 mb-10">
      <div className="flex justify-between items-center select-none mb-5">
        <Link
          href={"/destinations"}
          className="flex items-center gap-2 hover:bg-base-300 bg-base-300 sm:bg-white py-3 px-4 w-fit border sm:border-transparent border-black/10 hover:border hover:border-black/10 duration-100"
        >
          <span>
            <BiArrowBack />
          </span>
          <p className="hidden sm:block">Back to Destination</p>
        </Link>
        <div className="flex gap-4">
          <EditModal destiDetails={destiDetails} />
          <DeleteModal destiDetails={destiDetails} />
        </div>
      </div>
      <Suspense
        fallback={
          <div className="flex justify-center my-26">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <DestinationDetailsCard destiDetails={destiDetails} />
      </Suspense>
    </div>
  );
};

export default DestinationDetailsPage;
