"use client";
import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const Reviews = () => {
  // Sample reviews
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",

      review:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      id: 2,
      name: "Alex K.",

      review:
        " Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      id: 3,
      name: "James L.",
      review:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co.he selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    {
      id: 4,
      name: "Albert M.",

      review:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerView = 3; // How many cards to show at once

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + reviewsPerView >= reviews.length
        ? 0
        : prevIndex + reviewsPerView
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - reviewsPerView < 0
        ? reviews.length - reviewsPerView
        : prevIndex - reviewsPerView
    );
  };

  return (
    <div className="relative p-8 mt-8 sm:flex-col lg:flex-row ">
      {/* Carousel Title */}
      <h2 className="sm:text-2xl md:text-4xl lg:text-4xl font-extrabold mb-8 hover:scale-y-125">
        OUR HAPPY CUSTOMERS
      </h2>

      {/* Carousel */}
      <div className="relative">
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 focus:outline-none"
          onClick={goToPrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Carousel Items */}
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform ease-in-out duration-300"
            style={{
              transform: `translateX(-${
                (currentIndex * 100) / reviewsPerView
              }%)`,
            }}
          >
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="w-full sm:w-1/3 p-4 flex-shrink-0"
              >
                <div className="bg-white p-6 rounded-lg shadow-md ">
                  <div className="flex items-center space-x-4">
                    <div>
                      <div className="flex items-center">
                        <span className="text-yellow-500">&#9733;</span>
                        <span className="text-yellow-500">&#9733;</span>
                        <span className="text-yellow-500">&#9733;</span>
                        <span className="text-yellow-500">&#9733;</span>
                        <span className="text-yellow-500">&#9733;</span>
                      </div>
                      <h3 className="text-xl font-semibold flex items-center ">
                        {review.name}{" "}
                        <FaRegCheckCircle className="text-white bg-green-500 rounded-full" />
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-700">{review.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 focus:outline-none"
          onClick={goToNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Reviews;
