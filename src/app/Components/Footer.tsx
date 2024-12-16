import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"; // Example social icons
import { SiGithub } from "react-icons/si";

function Footer() {
  return (
    <footer className="max-w-screen-2xl mx-auto bg-[#F2F0F1] py-10">
      {/* Footer Section */}
      <div className="container max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row lg:flex-row items-start gap-8">
          {/* About Shop.co */}
          <div className="lg:w-1/4">
            <h3 className="font-extrabold text-4xl mb-4 text-black hover:scale-y-150 transition-all">
              SHOP.CO
            </h3>
            <p className="text-gray-600 mb-4">
              We have clothes that suit your style and which you are proud to
              wear. From women to men.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <FaFacebookF className="text-gray-800 hover:text-blue-500 cursor-pointer" />
              <FaInstagram className="text-gray-800 hover:text-pink-500 cursor-pointer" />
              <FaTwitter className="text-gray-800 hover:text-blue-400 cursor-pointer" />
              <SiGithub className="text-gray-800 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          {/* Links: Company, Help, FAQ, Resources */}
          <div className="flex flex-col md:flex-row lg:flex-row lg:w-3/4 gap-8">
            {/* Company */}
            <div className="lg:w-1/4">
              <h3 className="font-bold text-lg mb-4 text-black hover:scale-y-150 transition-all">
                COMPANY
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Career
                  </a>
                </li>
              </ul>
            </div>

            {/* Help */}
            <div className="lg:w-1/4">
              <h3 className="font-bold text-lg mb-4 text-black hover:scale-y-150 transition-all">
                HELP
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:underline">
                    Customer Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Delivery Details
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="lg:w-1/4">
              <h3 className="font-bold text-lg mb-4 text-black hover:scale-y-150 transition-all">
                FAQ
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:underline">
                    Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Manage Deliveries
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Payments
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="lg:w-1/4">
              <h3 className="font-bold text-lg mb-4 text-black hover:scale-y-150 transition-all">
                RESOURCES
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:underline">
                    Free eBooks
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Development Tutorial
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    How to - Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Youtube Playlist
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-left text-gray-700 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
          {/* Footer Text */}
          <p className="lg:w-auto text-sm text-gray-600 hover:scale-y-150 transition-all">
            Shop.co © 2000-2023, All Rights Reserved
          </p>

          {/* Payment Icons */}
          <div className="flex flex-wrap justify-center gap-4 hover:scale-125">
            <Image
              src="/Assets/paymentcards.png"
              alt="cards"
              width={281}
              height={30}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
