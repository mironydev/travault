import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto max-lg:collapse pl-4">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <div className="collapse-title navbar">
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
          <p className="text-3xl font-bold text-cyan-500 pl-4 lg:pl-0">
            Travault
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 text-stone-600">
            <li>
              <Link href={"/"} className="py-1 px-3 hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/"} className="py-1 px-3 hover:text-black">
                Destinations
              </Link>
            </li>
            <li>
              <Link href={"/"} className="py-1 px-3 hover:text-black">
                My Bookings
              </Link>
            </li>
            <li>
              <Link href={"/"} className="py-1 px-3 hover:text-black">
                Admin
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end font-medium">
          <Link href={"/"}>
            <button className="py-2 px-4 hover:bg-base-300 cursor-pointer active:bg-base-200">
              Login
            </button>
          </Link>
          <Link href={"/"} className="hidden sm:block">
            <button className="py-2 px-4 hover:bg-base-300 active:bg-base-200 cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      <div className="collapse-content lg:hidden z-1">
        <ul className="menu gap-0">
          <li>
            <Link href={"/"}>
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <button>Destinations</button>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <button>My Bookings</button>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <button>Admin</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
