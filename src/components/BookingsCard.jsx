"use client";

import { deleteBooking } from "@/app/lib/actions";
import { Eye } from "@gravity-ui/icons";
import { AlertDialog, Button, ModalTrigger } from "@heroui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { MdDateRange } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const BookingsCard = ({ bookings }) => {
  const {
    imageUrl,
    destinationName,
    price,
    departureDate,
    destinationId,
    _id,
  } = bookings;

  const formattedDate = departureDate
    ? new Date(departureDate).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "No date set";

  const handleBookingDelete = async (id) => {
    const res = await deleteBooking(id);

    if (res.deletedCount > 0) {
      toast.success("Booking deleted.");
    } else {
      toast.error("Something went wrong.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="flex flex-col md:flex-row gap-5 md:gap-0 border border-gray-200 shadow-sm p-4"
    >
      <div className="flex flex-col md:flex-row flex-1 gap-4">
        <div className="overflow-hidden">
          <Image
            src={imageUrl}
            alt=""
            width={200}
            height={200}
            className="h-auto w-auto transition-transform duration-300 hover:scale-105"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="space-y-2 my-auto"
        >
          <h3 className="font-semibold text-3xl">{destinationName}</h3>

          <p className="flex items-center gap-1 text-gray-600">
            <MdDateRange />
            Departure: {formattedDate}
          </p>

          <p className="text-cyan-500 font-semibold text-2xl">${price}</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="flex gap-3 items-end"
      >
        <AlertDialog>
          <ModalTrigger>
            <button className="border border-red-500 text-red-500 py-2 pr-4 pl-3 flex items-center gap-2 active:scale-95 duration-75 hover:bg-red-50 transition-colors">
              <RiDeleteBin6Line />
              Delete
            </button>
          </ModalTrigger>

          <AlertDialog.Backdrop>
            <AlertDialog.Container>
              <AlertDialog.Dialog className="sm:max-w-100 rounded-none">
                <AlertDialog.CloseTrigger />

                <AlertDialog.Header>
                  <AlertDialog.Icon status="danger" />
                  <AlertDialog.Heading>Delete Booking?</AlertDialog.Heading>
                </AlertDialog.Header>

                <AlertDialog.Body>
                  <p>
                    This will delete the booking
                    <strong> {destinationName} </strong>
                    and all of its data. This action cannot be undone.
                  </p>
                </AlertDialog.Body>

                <AlertDialog.Footer>
                  <Button
                    slot="close"
                    variant="tertiary"
                    className={"rounded-none"}
                  >
                    Cancel
                  </Button>

                  <Button
                    slot="close"
                    variant="danger"
                    className={"rounded-none"}
                    onClick={() => {
                      handleBookingDelete(_id);
                    }}
                  >
                    Delete
                  </Button>
                </AlertDialog.Footer>
              </AlertDialog.Dialog>
            </AlertDialog.Container>
          </AlertDialog.Backdrop>
        </AlertDialog>

        <Link href={`/destinations/${destinationId}`}>
          <button className="border border-cyan-500 rounded-none bg-cyan-500 text-white py-2 pr-4 pl-3 flex items-center gap-2 active:scale-95 duration-75 hover:bg-cyan-400 transition-colors">
            <Eye />
            View
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default BookingsCard;
