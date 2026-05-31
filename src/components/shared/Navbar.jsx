"use client";

import { authClient } from "@/app/lib/auth-client";
import { Avatar, Spinner } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { GoSignOut } from "react-icons/go";
import { motion } from "framer-motion";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const pathname = usePathname();

  const handleSignOut = async () => {
    const res = await authClient.signOut();
    if (res.data.success) {
      window.location.reload();
      toast.success("Logout successful.");
    } else {
      toast.success("Something went wrong.");
    }
  };

  const isActive = (href) => pathname === href;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/destinations", label: "Destinations" },
    { href: "/my-bookings", label: "My Bookings" },
    { href: "/add-destination", label: "Add Destination" },
    ...(user ? [{ href: "/profile", label: "My Profile" }] : []),
  ];

  return (
    <motion.div
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto max-lg:collapse select-none rounded-none">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label
          htmlFor="navbar-1-toggle"
          className="fixed inset-0 hidden max-lg:peer-checked:block"
        ></label>
        <div className="collapse-title navbar pl-4">
          <div className="navbar-start">
            <label htmlFor="navbar-1-toggle" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <Link
              href={"/"}
              className="text-3xl font-bold text-cyan-500 pl-4 lg:pl-0"
            >
              Travault
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal px-1 text-stone-600">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`py-3 px-4 transition-colors duration-300 ${
                      isActive(link.href)
                        ? "text-black font-semibold bg-cyan-100"
                        : "hover:text-black"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end font-medium">
            {isPending ? (
              <div className="flex items-center gap-4">
                <Spinner />
              </div>
            ) : user ? (
              <div className="flex items-center gap-2">
                <Link href={"/profile"}>
                  <Avatar>
                    <Avatar.Image
                      className="hover:bg-gray-300 active:bg-gray-200 duration-75 object-cover"
                      alt={user?.name}
                      src={user?.image}
                    />
                    <Avatar.Fallback className="hover:bg-gray-300 active:bg-gray-200 duration-75">
                      {user?.name?.charAt(0)}
                    </Avatar.Fallback>
                  </Avatar>
                </Link>
                <button
                  className="mr-4 text-2xl flex items-center gap-1 hover:text-cyan-500 active:scale-90 cursor-pointer duration-75"
                  onClick={handleSignOut}
                >
                  <GoSignOut />{" "}
                  <p className="hidden sm:block text-base">Logout</p>
                </button>
              </div>
            ) : (
              <>
                <Link href={"/login"}>
                  <button className="py-2 px-4 hover:bg-base-300 cursor-pointer duration-75 active:bg-base-200">
                    Login
                  </button>
                </Link>
                <Link href={"/signup"} className="hidden sm:block">
                  <button className="py-2 px-4 bg-cyan-500 active:bg-cyan-400 duration-75 text-white cursor-pointer">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="collapse-content lg:hidden z-1 bg-base-300 p-0">
          <ul className="pt-px">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  <button
                    className={`transition-colors duration-300 p-2 pl-5 ${
                      isActive(link.href)
                        ? "bg-white w-full text-left font-semibold "
                        : ""
                    }`}
                  >
                    {link.label}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
