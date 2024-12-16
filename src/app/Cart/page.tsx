import React from "react";
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoTag } from "react-icons/go";
import Link from "next/link";

function Cart() {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <nav className="mx-10 py-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          <li className="inline-flex items-center cursor-pointer hover:underline">
            <Link href="http://localhost:3000">Home</Link>
          </li>

          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>

              <Link
                className="hover:underline cursor-pointer"
                href="http://localhost:3000/Casual"
              >
                Casual
              </Link>
            </div>
          </li>
        </ol>
      </nav>
      <h2 className="md:text-5xl lg:text-4xl text-black ml-12 px-5 font-extrabold">
        YOUR CART
      </h2>
      <div className="flex sm:flex-col lg:flex-row justify-center space-x-4 my-11">
        <div className="w-2/4 border border-gray-200 rounded-2xl mb-8">
          <div className="flex justify-start space-x-3 m-4">
            {" "}
            <Image
              src="/Assets/gradientTshirt.png"
              alt="gradientShirt"
              width={124}
              height={100}
              className="rounded-xl"
            />
            <div className="w-3/4 ">
              <h4 className="flex justify-between items-center font-semibold mt-2">
                Gradient Graphic T-shirt{" "}
                <span className="text-red-400 ">
                  <RiDeleteBinLine />
                </span>
              </h4>
              <p className="mt-2 text-sm text-gray-400 ">Size: Large</p>
              <p className="text-sm text-gray-400 ">Color: White</p>
              <h4 className="font-semibold mt-4">$145</h4>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-black bg-[#F0F0F0] py-2 px-10 focus:outline-none focus:ring-4 font-medium rounded-full text-sm text-center mb-2 "
                >
                  - 1 +
                </button>
              </div>
            </div>{" "}
          </div>{" "}
          <hr className="border-t-1 border-gray-200 m-4" />
          <div className="flex justify-start space-x-3 m-4">
            {" "}
            <Image
              src="/Assets/checkshirt.png"
              alt="gradientShirt"
              width={124}
              height={124}
              className="rounded-xl"
            />
            <div className="w-3/4 ">
              <h4 className="flex justify-between items-center font-semibold mt-2">
                Checkered Shirt
                <span className="text-red-400 ">
                  <RiDeleteBinLine />
                </span>
              </h4>
              <p className="mt-2 text-sm text-gray-400 ">Size: Medium</p>
              <p className="text-sm text-gray-400 ">Color: red</p>
              <h4 className="font-semibold mt-4">$180</h4>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-black bg-[#F0F0F0] py-2 px-10 focus:outline-none focus:ring-4 font-medium rounded-full text-sm text-center mb-2 "
                >
                  - 1 +
                </button>
              </div>
            </div>{" "}
          </div>
          <hr className="border-t-1 border-gray-200 m-4" />
          <div className="flex justify-start space-x-3 m-4">
            {" "}
            <Image
              src="/Assets/pant1.png"
              alt="checksShirt"
              width={124}
              height={100}
              className="rounded-xl"
            />
            <div className="w-3/4 ">
              <h4 className="flex justify-between items-center font-semibold mt-2">
                Skinny Fit Jeans{" "}
                <span className="text-red-400 ">
                  <RiDeleteBinLine />
                </span>
              </h4>
              <p className="mt-2 text-sm text-gray-400 ">Size: Large</p>
              <p className="text-sm text-gray-400 ">Color: Blue</p>
              <h4 className="font-semibold mt-4">$240</h4>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-black bg-[#F0F0F0] py-2 px-10 focus:outline-none focus:ring-4 font-medium rounded-full text-sm text-center mb-2 "
                >
                  - 1 +
                </button>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="w-4/4 border border-gray-200 rounded-2xl p-4 mb-20">
          <h3 className="font-semibold text-base ">Order Summary</h3>
          <div className="flex justify-between text-sm mt-4">
            <h4 className="text-gray-400">Subtotal </h4>
            <span className="font-semibold">$565</span>
          </div>
          <div className="flex justify-between text-sm mt-4">
            <h4 className="text-gray-400">Discount (-20%)</h4>
            <span className="text-red-600 font-semibold">-$113</span>
          </div>
          <div className="flex justify-between text-sm mt-4">
            <h4 className="text-gray-400">Delivery Fee</h4>
            <span className="font-semibold">$15</span>
          </div>
          <hr className="border-t-1 border-gray-200 m-4" />
          <p className="flex justify-between text-sm mt-4">
            Total <span className="font-semibold text-sm">$467</span>
          </p>
          <div className="flex mt-4">
            <button
              type="button"
              className="text-gray-400  bg-gray-200 font-medium rounded-full text-sm px-20 py-2 text inline-flex items-left dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              <GoTag />
              Add promo code
            </button>
            <button
              type="button"
              className="bg-black text-white py-2 px-10 focus:outline-none focus:ring-4 font-medium rounded-full text-sm text-center mb-2 "
            >
              Apply
            </button>
          </div>
          <div className="mt-4">
            <button
              type="button"
              className="text-white bg-black  focus:ring-4  focus:outline-none font-medium rounded-full mx-10 text-xs md:text-sm w-30 px-20 py-3 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2"
            >
              Go to Checkout
              <FaArrowRightLong className="ml-2" />
            </button>{" "}
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </main>
  );
}

export default Cart;
