"use client";

import { Separator } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Banner = () => {
  const heading = "Discover Your Next Adventure";
  const paragraph =
    "Explore breathtaking destinations and create unforgettable memories with our curated travel experiences.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const paragraphCharVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="bg-[url('/assets/Banner.png')] bg-no-repeat bg-cover bg-center text-white flex justify-between flex-col items-center gap-5 h-150">
      <div className="p-5 text-center flex justify-center flex-col items-center flex-1">
        <motion.h1
          className="text-6xl sm:text-7xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {heading.split("").map((char, index) => (
            <motion.span key={index} variants={charVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl pt-5 pb-10 sm:pb-14 font-light sm:font-normal"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.02,
                delayChildren: 1.5,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {paragraph.split("").map((char, index) => (
            <motion.span key={index} variants={paragraphCharVariants}>
              {char}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          className="flex gap-5"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 3 }}
        >
          <button className="uppercase bg-cyan-500 px-5 py-3 cursor-pointer active:scale-95 duration-75">
            Explore Now
          </button>

          <Link href={"/destinations"}>
            <button className="uppercase px-5 py-3 bg-white/40 cursor-pointer active:scale-95 duration-75">
              View Destination
            </button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-white/30 w-full hidden sm:block"
      >
        <div className="container mx-auto">
          <div className="flex justify-between gap-5 w-full items-center">
            <div className="flex flex-col items-center pl-4">
              <h3 className="text-sm">Location</h3>
              <p className="text-xs">Address, City or Zip</p>
            </div>

            <Separator variant="tertiary" orientation="vertical" />

            <div className="flex flex-col items-center">
              <h3 className="text-sm">Date/Duration</h3>
              <p className="text-xs">Anytime/3 Days</p>
            </div>

            <Separator variant="tertiary" orientation="vertical" />

            <div className="flex flex-col items-center">
              <h3 className="text-sm">Budget</h3>
              <p className="text-xs">$0-$3000</p>
            </div>

            <Separator variant="tertiary" orientation="vertical" />

            <div className="flex flex-col items-center">
              <h3 className="text-sm">People</h3>
              <p className="text-xs">5-10</p>
            </div>

            <button className="bg-cyan-500 py-3 px-5">Search</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
