"use client";

import Image from "next/image";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdDateRange, MdOutlinePinDrop } from "react-icons/md";
import { DateField, Label, Description, FieldError } from "@heroui/react";
import { authClient } from "@/app/lib/auth-client";
import { addBooking } from "@/app/lib/actions";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const DestinationDetailsCard = ({ destiDetails }) => {
  const [departureDate, setDepartureDate] = useState(null);

  const { data: session } = authClient.useSession();

  const user = session?.user;

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

  const handleBooking = async () => {
    if (!user) {
      toast.error("Login to book destination!");
      return;
    }

    if (!departureDate) {
      toast.error("Please select a departure date.");
      return;
    }

    const today = new Date();
    const selected = new Date(
      `${departureDate.year}-${String(departureDate.month).padStart(2, "0")}-${String(departureDate.day).padStart(2, "0")}`,
    );

    if (selected < today) {
      toast.error("Departure date cannot be in the past.");
      return;
    }

    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      destinationId: _id,
      destinationName,
      imageUrl,
      price,
      departureDate: departureDate
        ? `${departureDate.year}-${String(departureDate.month).padStart(2, "0")}-${String(departureDate.day).padStart(2, "0")}`
        : null,
    };

    const res = await addBooking(bookingData);

    if (res.insertedId) {
      toast.success("Booking successful.");
    } else {
      toast.error("Something went wrong.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative w-full aspect-16/7 overflow-hidden">
        <Image
          src={imageUrl}
          alt={category}
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="flex flex-col md:flex-row gap-5 border-t border-black/20 pt-8 mt-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-3 min-w-0 overflow-hidden"
        >
          <div className="flex items-center gap-1 text-gray-500 font-medium">
            <span>
              <MdOutlinePinDrop />
            </span>
            <p className="wrap-break-word min-w-0">{country}</p>
          </div>

          <p className="text-5xl font-medium pt-1 pb-2 wrap-break-word">
            {destinationName}
          </p>

          <div className="flex items-center gap-1 text-gray-500 wrap-break-word">
            <span className="text-xl">
              <MdDateRange />
            </span>
            <p className="wrap-break-word min-w-0">{duration}</p>
          </div>

          <p className="text-2xl pt-4 pb-1">Overview</p>

          <p className="text-gray-600 wrap-break-word">{description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border-2 border-gray-200 flex-1 p-5 shadow-lg"
        >
          <p className="text-xs text-gray-600">Starting from</p>

          <p className="text-cyan-500 text-3xl font-semibold pt-2">${price}</p>

          <p className="text-gray-500">per person</p>

          <p className="mt-8 text-gray-600 text-sm">Departure Date</p>

          <DateField onChange={setDepartureDate}>
            <Label />

            <DateField.Group
              className={"rounded-none mb-4 border border-gray-200"}
            >
              <DateField.Input>
                {(segment) => <DateField.Segment segment={segment} />}
              </DateField.Input>
            </DateField.Group>

            <Description />
            <FieldError />
          </DateField>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleBooking}
            className="btn bg-cyan-500 rounded-none text-white w-full flex items-center gap-1 text-base"
          >
            Book Now <BsArrowRight />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DestinationDetailsCard;
