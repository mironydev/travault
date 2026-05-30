"use client";

import React from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { LuMap } from "react-icons/lu";
import { motion } from "framer-motion";

const WhyChooseTravault = () => {
  return (
    <div className="bg-cyan-50 mt-16 py-18 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-5xl font-extralight">Why Choose Travault</h3>
          <p className="text-gray-600 mt-4 sm:mt-2">
            Your trusted partner for exceptional travel experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl mx-auto mt-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-white p-8 space-y-3 shadow"
          >
            <div className="text-4xl text-cyan-500">
              <AiOutlineSafety />
            </div>
            <h3 className="text-2xl font-medium">Safe & Secure</h3>
            <p className="text-gray-600">
              Your safety is our priority with comprehensive travel insurance
              and 24/7 support.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-white p-8 space-y-3 shadow"
          >
            <div className="text-4xl text-cyan-500">
              <LuMap />
            </div>
            <h3 className="text-2xl font-medium">Expert Guides</h3>
            <p className="text-gray-600">
              Local experts who bring destinations to life with authentic
              cultural insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-white p-8 space-y-3 shadow"
          >
            <div className="text-4xl text-cyan-500">
              <BiSupport />
            </div>
            <h3 className="text-2xl font-medium">24/7 Support</h3>
            <p className="text-gray-600">
              Round-the-clock customer service to assist you wherever your
              journey takes you.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseTravault;
