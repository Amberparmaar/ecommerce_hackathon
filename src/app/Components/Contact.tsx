import React from "react";
import Image from "next/image";
import { FaRegEnvelope } from "react-icons/fa";

function Contact() {
  return (
    // Stay Updated Section
    <div className="bg-black md:py-6 lg:py-6 flex flex-col md:flex-row lg:flex-row md:mx-8 lg:mx-8 rounded-3xl">
      {/* Left Section */}
      <div className="w-full text-center md:text-left lg:text-left md:ml-8 lg:ml-8">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mt-2 hover:scale-y-125 md:hover:scale-y-150 lg:hover:scale-y-150">
          STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
        </h2>
      </div>

      {/* Right Section */}
      <div className="flex flex-col md:flex-col lg:flex-col justify-center items-center mr-8">
        <div className="relative w-[300px] md:w-[600px] lg:w-[600px] mb-2 ml-8 md:ml-0 lg:ml-0 hover:scale-105 transition-transform duration-200">
          {/* Envelope Icon */}
          <FaRegEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />

          {/* Input Field */}
          <input
            type="email"
            placeholder="Enter your email address"
            className="pl-12 pr-4 py-2 w-full text-black rounded-full border border-gray-300 focus:outline-none focus:ring-2"
          />
        </div>

        {/* Subscribe Button */}
        <button className="bg-white text-black px-1 py-2 w-[300px] md:w-[600px] lg:w-[600px] mb-2 ml-8 md:ml-0 lg:ml-0 rounded-full font-semibold hover:scale-x-110">
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  );
}

export default Contact;
