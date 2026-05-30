"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ReadyToStart = () => {
  return (
    <div className="relative overflow-hidden text-center text-white bg-[url('/assets/CTA.png')] bg-no-repeat bg-cover py-26 bg-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-black/60"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 space-y-4"
      >
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl font-medium"
        >
          Ready To Start Your Journey?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300"
        >
          Join thousands of travelers who have discovered the world with us
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href={"/destinations"}>
            <Button className="mt-5 rounded-none p-6 bg-cyan-500 hover:bg-teal-400">
              BOOK YOUR TRIP TODAY
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                }}
              >
                <FaArrowRightLong />
              </motion.div>
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ReadyToStart;
