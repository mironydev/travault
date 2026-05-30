import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black/95 text-gray-400 text-center md:text-left px-4 pt-12 pb-4">
      <div className="container mx-auto">
        <div className="mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-white">
            Travault
          </h1>
          <p className="mt-4 max-w-xl">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        {/* Grid section */}
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-4 gap-10">
          {/* Newsletter */}
          <div>
            <h3 className="text-white mb-3 tracking-wide">NEWSLETTER</h3>
            <p className="mb-4 text-sm">
              Subscribe for exclusive travel deals and inspiration.
            </p>

            <div
              className="flex 
            items-center
             bg-gray-800 "
            >
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent outline-none flex-1 text-sm px-4 py-3 w-full"
              />
              <button className="text-white text-lg cursor-pointer active:scale-105 duration-75 bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-600 px-4 py-2">
                ↗
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-3 tracking-wide">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Destinations</li>
              <li className="hover:text-white cursor-pointer">My Bookings</li>
              <li className="hover:text-white cursor-pointer">My Profile</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white mb-3 tracking-wide">SUPPORT</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-3 tracking-wide">CONTACT US</h3>
            <ul className="space-y-2">
              <li>+1 234 567 8910</li>
              <li>info@travault.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-4 flex flex-col md:flex-row justify-between items-center md:px-20">
          <p className="text-sm">
            © {new Date().getFullYear()} Travault. All rights reserved.
          </p>

          <div className="flex gap-5 mt-4 md:mt-0 text-white text-lg">
            <span className="cursor-pointer">
              <FaXTwitter />
            </span>
            <span className="cursor-pointer">
              <FaLinkedin />
            </span>
            <span className="cursor-pointer">
              <FaInstagram />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
