import BookingsCard from "@/components/BookingsCard";
import React, { Suspense } from "react";
import { fetchBookings } from "../lib/fetch";
import { auth } from "../lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

const BookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = session?.user?.id;

  const bookingsArray = await fetchBookings(userId);

  return (
    <div className="container mx-auto px-4 mb-14">
      <div className="text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extralight mt-8">
          My Bookings
        </h2>
        <p className="text-gray-600 mb-6 mt-2">
          Manage and view your upcoming travel plans
        </p>
      </div>
      <Suspense
        fallback={
          <div className="flex justify-center my-26">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        {!userId ? (
          <div className="text-center py-10 bg-base-300">
            <p>
              <Link href={"/login"} className="underline text-blue-950">
                Login
              </Link>{" "}
              to view your bookings.
            </p>
          </div>
        ) : bookingsArray.length <= 0 ? (
          <div className="bg-base-300  text-center py-20 px-4">
            <h3 className="text-5xl text-gray-500 pb-3">Empty</h3>
            <p>
              Book your trips from the{" "}
              <Link href={"/destinations"} className=" underline text-blue-900">
                Destinations
              </Link>{" "}
              page.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {bookingsArray.map((bookings) => (
              <BookingsCard bookings={bookings} key={bookings._id} />
            ))}
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default BookingsPage;
