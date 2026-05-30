"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuDollarSign, LuPlane } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import EditProfileModal from "./EditProfileModal";
import { authClient } from "@/app/lib/auth-client";

const Profile = ({ totalBookings }) => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  if (isPending) {
    return (
      <div className="flex justify-center py-26">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const { name, image, email, createdAt } = user;

  return (
    <motion.div
      className="flex flex-col md:flex-row gap-7"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex-1 border border-black/10 p-5 shadow bg-gray-50"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
          {image ? (
            <Image
              src={image}
              alt="profile image"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-2xl font-bold text-gray-600">
              {name?.charAt(0)}
            </div>
          )}
        </div>

        <div className="flex flex-col items-center border-b border-black/10 pb-3 mb-3">
          <p className="text-2xl font-semibold pb- pt-3">{name}</p>

          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <MdEmail />
            <p>{email}</p>
          </div>
        </div>

        <div className="flex justify-between pb-3 text-sm">
          <p className="text-gray-500">Member since:</p>

          <p>
            {new Date(createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </p>
        </div>

        <EditProfileModal />
      </motion.div>

      <motion.div
        className="flex-3"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="font-semibold text-lg mb-2">Travel Statistics</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            {
              title: "Total Bookings",
              value: totalBookings.length,
              icon: <LuPlane />,
              bg: "bg-cyan-100",
              text: "text-cyan-500",
            },
            {
              title: "Countries Visited",
              value: "12",
              icon: <FaGlobeAmericas />,
              bg: "bg-blue-100",
              text: "text-blue-500",
            },
            {
              title: "Upcoming Trips",
              value: "4",
              icon: <FaArrowTrendUp />,
              bg: "bg-orange-100",
              text: "text-orange-500",
            },
            {
              title: "Total Spent",
              value: "$12,800",
              icon: <LuDollarSign />,
              bg: "bg-green-100",
              text: "text-green-500",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="border border-black/5 p-4 shadow-sm flex items-center justify-between bg-gray-50"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              whileHover={{ y: -4 }}
            >
              <div>
                <p className="text-sm text-gray-600">{item.title}</p>
                <p className="font-semibold text-lg">{item.value}</p>
              </div>

              <div
                className={`text-xl p-3 rounded-full ${item.bg} ${item.text}`}
              >
                {item.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Profile;
