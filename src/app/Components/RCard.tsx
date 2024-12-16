import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";

interface IProps {
  name: string;
  description: string;
  postedOn: string;
}
function Card(props: IProps) {
  const { name, description, postedOn } = props;
  return (
    <div className="max-w-screen-2xl h-[241px] p-4 sm:p-6 mx-auto  card border border-gray-300 rounded-xl items-center space-y-4">
      <div className="card header">
        <p className="flex justify-end text-gray-400">
          {" "}
          <BsThreeDots />
        </p>
      </div>
      <div>
        <h2 className="card title text-xl font-bold text-black flex items-center">
          {name}
          <FaRegCheckCircle className="text-white bg-green-500 rounded-full" />
        </h2>
      </div>
      <div>
        <p className=" card description sm:text-xs  text-gray-400 text-sm leading-6">
          {description}
        </p>
        <div>
          <p className="card description text-gray-400 text-sm mt-4">
            {postedOn}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
