"use client";
import React, { useState } from "react";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import Shop from "@/app/Shop/page";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <div className="w-full h-10 bg-black flex justify-center items-center">
        <div className="w-full max-w-screen-xl flex justify-center items-center px-4">
          <h1 className="text-white text-sm text-center">
            Sign up and get 20% off your first order.{" "}
            <b>
              <span className="inline-block hover:underline hover:scale-110">
                Sign Up Now
              </span>
            </b>
          </h1>
        </div>
        <RxCross1 className="text-white mr-8" />
      </div>

      {/* Navbar */}
      <div className="w-full h-auto bg-white flex justify-center items-center">
        <div className="bg-white shadow-sm w-full">
          <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <h1 className="text-black text-xl md:text-2xl xl:text-3xl font-extrabold hover:scale-125">
                SHOP.CO
              </h1>
            </div>

            {/* Navigation Links */}
            <div
              className={`md:flex items-center md:space-x-6 text-black font-medium ${
                menuOpen ? "block" : "hidden"
              } absolute md:static bg-white left-0 top-24 w-full md:w-auto z-10`}
            >
              <div className="md:inline font-bold hover:scale-110 px-4 py-3 md:px-0">
                {/* Corrected Link for Shop page */}
                <Link
                  href="http://localhost:3000/Shop"
                  className="block md:inline font-bold hover:scale-110 px-4 py-3 md:px-0"
                >
                  Shop
                </Link>
                <select name="" id=""></select>
              </div>
              <a
                href="#"
                className="block md:inline font-bold hover:scale-110 px-4 py-2 md:px-0"
              >
                On Sale
              </a>
              <a
                href="#"
                className="block md:inline font-bold hover:scale-110 px-4 py-2 md:px-0"
              >
                New Arrivals
              </a>
              <a
                href="#"
                className="block md:inline font-bold hover:scale-110  px-4 py-2 md:px-0"
              >
                Brands
              </a>
            </div>

            {/* Search Bar */}
            <div className="relative mt-4 md:mt-0">
              <input
                type="text"
                placeholder="Search for products..."
                className="pl-10 pr-10 py-2 w-80 rounded-full bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none hover:scale-105"
              />
              <svg
                className="w-5 h-5 absolute left-3 top-2.5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Icons (Cart, Profile) */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <IoCartOutline className="hover:scale-125" />
              <CgProfile className="hover:scale-125" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
