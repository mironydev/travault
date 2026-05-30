"use client";

import React from "react";
import { FaFemale, FaMale } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatTravelersSay = () => {
  return (
    <div className="container mx-auto px-4 my-18">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center lg:text-left"
      >
        <h3 className="text-5xl font-extralight">What Travelers Say</h3>
        <p className="text-gray-600 mt-4 sm:mt-2">
          Real experiences from our happy travelers
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="border border-black/10 flex p-5 md:p-8"
        >
          <div className="flex flex-col justify-between gap-8">
            <p className="md:text-2xl">
              &quot;The Bali Trip Was Absolutely Magical! Every Detail Was
              Perfectly Planned. The Resorts Were Luxurious And The Cultural
              Experiences Were Unforgettable.&quot;
            </p>
            <div>
              <p className="text-xl text-cyan-500 font-light">
                — Sarah Johnson
              </p>
              <p className="text-gray-500">Singapore</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <FaFemale className="min-h-52 min-w-32 md:min-w-44" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="border border-black/10 flex p-5 md:p-8"
        >
          <div className="flex flex-col justify-between gap-8">
            <p className="md:text-2xl">
              &quot;Swiss Alps Adventure Exceeded All Expectations. The Mountain
              Views Were Breathtaking And Our Guide Was Incredibly
              Knowledgeable. Highly Recommend!&quot;
            </p>

            <div>
              <p className="text-xl text-cyan-500 font-light">
                — Adam Theodore
              </p>
              <p className="text-gray-500">New York, USA</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <FaMale className="min-h-52 min-w-32 md:min-w-44" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatTravelersSay;
