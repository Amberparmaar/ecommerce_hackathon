import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#F2F0F1] ">
        <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold text-black leading-tight hover:scale-y-125">
              FIND CLOTHES <br />
              THAT MATCHES <br />
              YOUR STYLE
            </h1>
            <p className="text-gray-600 text-base md:text-lg">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            <button className="bg-black text-white px-12 py-2 rounded-full hover:scale-125 text-xl font-bold ml-6">
              Shop Now
            </button>

            {/* Stats Section */}
            <div className="mt-8 flex flex-col sm:flex-row justify-between text-center sm:text-left ">
              <div className="mb-4 sm:mb-0 ">
                <h2 className="text-2xl font-bold text-black hover:scale-125 ">
                  200+
                </h2>
                <p className="text-gray-600 font-bold hover:scale-125">
                  International Brands
                </p>
              </div>
              <div className="mb-4 sm:mb-0">
                <h2 className="text-2xl font-bold text-black hover:scale-125 ">
                  2,000+
                </h2>
                <p className="text-gray-600 font-bold  hover:scale-125">
                  High-Quality Products
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-black hover:scale-125">
                  30,000+
                </h2>
                <p className="text-gray-600 font-bold hover:scale-125">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}

          <div className=" md:w-1/2 mt-10 md:mt-0">
            {/* Main Image */}

            <Image
              className="cursor-pointer hover:scale-x-110 pr-30 md:pr-0 lg:pr-0"
              src="/Assets/heropic.png"
              alt="Fashion Image"
              height={800}
              width={800}
            />
          </div>
        </div>
      </div>

      {/* Brands Section */}
      <div className="bg-black py-8">
        <div className="containerflex mx-auto px-6 sm:px-12 md:px-16 lg:px-20">
          <div className="flex flex-wrap justify-center items-center gap-12">
            <Image
              className="cursor-pointer hover:scale-125 border-2 border-transparent  rounded-md transition duration-300 p-2"
              src="/Assets/varsace.png"
              alt="vercase"
              height={150}
              width={150}
            />
            <Image
              className="cursor-pointer hover:scale-125 border-2 border-transparent rounded-md transition duration-300 p-2"
              src="/Assets/zara.png"
              alt="zara"
              height={80}
              width={80}
            />
            <Image
              className="mt-1 px-2 cursor-pointer hover:scale-125 border-2 border-transparent  rounded-md transition duration-300 p-2"
              src="/Assets/gucci.png"
              alt="gucci"
              height={150}
              width={150}
            />
            <Image
              className="cursor-pointer hover:scale-125 border-2 border-transparent rounded-md transition duration-300 p-2"
              src="/Assets/parada.png"
              alt="parada"
              height={150}
              width={150}
            />
            <Image
              className="cursor-pointer hover:scale-125 border-2 border-transparent rounded-md transition duration-300 p-2"
              src="/Assets/calvin.png"
              alt="calvinkelin"
              height={150}
              width={150}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
