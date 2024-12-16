import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";

export default function Men() {
  return (
    <div className="max-w-screen-2xl flex flex-col lg:flex-row justify-center gap-8 mt-4 mx-auto">
      {/* First column with 3 images */}
      <div className="flex flex-col gap-4 w-full lg:w-1/3">
        <div className="relative rounded-lg">
          <Image
            className="rounded-lg"
            src="/Assets/graphic1.png"
            alt="Image 1"
            width={120}
            height={200}
          />
        </div>
        <div className="relative">
          <Image
            className="rounded-lg"
            src="/Assets/graphic2.png"
            alt="Image 2"
            width={120}
            height={150}
          />
        </div>
        <div className="relative">
          <Image
            className="rounded-lg"
            src="/Assets/graphic3.png"
            alt="Image 3"
            width={120}
            height={150}
          />
        </div>
      </div>

      {/* Second column with 1 image */}
      <div className="relative lg:w-2/3">
        <Image
          className="rounded-lg"
          src="/Assets/graphic4.png"
          alt="Image 4"
          width={350}
          height={100}
        />
      </div>

      <div className="space-y-4">
        <h2 className="sm:text-2xl md:text-3xl lg:text-3xl font-extrabold text-black leading-2 ">
          ONE LIFE GRAPHIC T-SHIRT
        </h2>
        <div className="flex items-center">
          <svg
            className="w-4 h-4 text-yellow-300 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>

        <div className="text-2xl font-bold text-black">
          $260{" "}
          <span className="text-xl font-medium text-gray-400 line-through dark:text-white">
            $300
          </span>{" "}
          <span className="text-sm border bg-red-100 rounded-full px-2 text-red-300">
            -40%
          </span>
        </div>

        <p className="w-[590px] h-[33px] text-sm text-gray-400">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and <br />
          breathable fabric, it offers superior comfort and style.
        </p>
        <hr className="border-t-1 border-gray-200 my-4" />
        <span className="text-sm text-gray-400">Select Colors</span>
        <div></div>
        <div className="flex gap-2">
          <CiCircleCheck className="w-6 h-6 bg-[#4F4631] rounded-full" />

          <CiCircleCheck className="w-6 h-6 bg-[#314F4A] rounded-full" />
          <CiCircleCheck className="w-6 h-6 bg-[#31344F] rounded-full" />
        </div>
        <hr className="border-t-1 border-gray-200 my-4" />
        <span className="text-sm text-gray-400">Choose Size</span>

        <div className="flex gap-2">
          <button
            type="button"
            className="text-gray-900 bg-[#F0F0F0] border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Small
          </button>
          <button
            type="button"
            className="text-gray-900 bg-[#F0F0F0] border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Medium
          </button>
          <button
            type="button"
            className="text-gray-900 hover:text-white bg-[#F0F0F0]  border border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Large
          </button>
          <button
            type="button"
            className="text-gray-900 bg-[#F0F0F0] border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            X-Large
          </button>
        </div>

        <hr className="border-t-1 border-gray-200 my-4" />
        <div className="space-x-2">
          <button
            type="button"
            className="text-black bg-[#F0F0F0] py-2 px-10 focus:outline-none focus:ring-4 font-medium rounded-full text-sm text-center mb-2 "
          >
            - 1 +
          </button>

          <button
            type="button"
            className="text-white bg-[#050708] font-medium rounded-full text-sm px-20 py-2 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

