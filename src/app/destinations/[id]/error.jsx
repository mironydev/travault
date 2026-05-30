"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FaRotateRight, FaHouse } from "react-icons/fa6";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-7xl sm:text-8xl font-bold text-red-500">Oops!</h1>

        <h2 className="mt-6 text-3xl sm:text-5xl font-semibold">
          Something Went Wrong
        </h2>

        <p className="mt-4 text-lg text-gray-400 leading-relaxed">
          An unexpected error occurred while loading this page. Please try again
          or return to the homepage.
        </p>

        <Link href="/">
          <Button className="bg-cyan-500 mt-8 px-6 py-6 rounded-none">
            <FaHouse />
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
