import { fetchDestinationDetails } from "@/app/lib/fetch";
import DeleteModal from "@/components/DeleteModal";
import DestinationDetailsCard from "@/components/DestinationDetailsCard";
import EditModal from "@/components/EditModal";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const destiDetails = await fetchDestinationDetails(id);
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center select-none mb-5">
        <div className="flex items-center gap-2 hover:bg-base-300 py-2 px-4 w-fit border border-transparent hover:border hover:border-black/10 duration-100">
          <span>
            <BiArrowBack />
          </span>
          <p>Back to Destination</p>
        </div>
        <div className="flex gap-4">
          <EditModal destiDetails={destiDetails} />
          <DeleteModal destiDetails={destiDetails} />
        </div>
      </div>
      <DestinationDetailsCard destiDetails={destiDetails} />
    </div>
  );
};

export default DestinationDetailsPage;
