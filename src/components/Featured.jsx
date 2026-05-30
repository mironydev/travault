"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import DestinationCard from "./DestinationCard";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import FeaturedCards from "./FeaturedCards";

const Featured = ({ featured }) => {
  const scrollRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 400;

    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div ref={ref} className="container mx-auto px-4 mt-16">
      <motion.div
        className="mb-6 text-center sm:text-left"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-5xl font-extralight">Featured Destinations</h3>
        <p className="text-gray-600 mt-4 sm:mt-2">
          Handpicked travel experiences for the adventure seekers
        </p>
      </motion.div>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="hidden sm:block absolute left-2 top-1/3 -translate-y-1/2 z-10 bg-white/80 backdrop-blur p-3 text-2xl cursor-pointer rounded-full shadow"
        >
          <FaArrowLeftLong />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden sm:block absolute right-2 top-1/3 -translate-y-1/2 z-10 bg-white/80 backdrop-blur p-3 text-2xl cursor-pointer rounded-full shadow"
        >
          <FaArrowRightLong />
        </button>

        <motion.div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {featured.map((destination) => (
            <motion.div
              key={destination._id}
              className="min-w-75 md:min-w-md lg:min-w-lg shrink-0 max-w-75 md:max-w-md lg:max-w-lg"
              variants={cardVariants}
            >
              <FeaturedCards destination={destination} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Featured;
