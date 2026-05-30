"use client";

import Link from "next/link";
import React from "react";
import { Button } from "@heroui/react";
import { FaArrowLeftLong } from "react-icons/fa6";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-8xl sm:text-9xl font-bold text-cyan-500">404</h1>

        <h2 className="mt-6 text-3xl sm:text-5xl font-semibold">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-400 text-lg leading-relaxed">
          The page you are looking for might have been removed, renamed, or is
          temporarily unavailable.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Link href="/">
            <Button className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-6 rounded-none">
              <FaArrowLeftLong />
              Back To Home
            </Button>
          </Link>

          <Link href="/destinations">
            <Button
              variant="bordered"
              className="border border-black/40 px-6 py-6 rounded-none"
            >
              Explore Destinations
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
