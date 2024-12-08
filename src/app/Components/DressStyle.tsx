// import React from 'react'
// import Image from 'next/image'

// function DressStyle() {
//   return (
//     <div className="bg-[#F0F0F0] flex flex-col rounded-2xl mt-8 mx-4 md:mx-8 lg:mx-12 xl:mx-20">
//     <h2 className=" text-3xl md:text-5xl lg:text-5xl text-black text-center mt-8 hover:scale-x-125 font-extrabold">
//       BROWSE BY DRESS STYLE
//     </h2>

//     {/* First Row of Images */}
//     <div className="flex flex-col  sm:flex-row sm:space-x-10 sm:space-y-0 space-y-6 sm:mt-10">
//       <Image
//         className="cursor-pointer hover:scale-110 rounded-lg mx-auto sm:ml-14"
//         src="/assets/casual.png"
//         alt="casual"
//         height={300}
//         width={400}
//       />
//       <Image
//         className="cursor-pointer hover:scale-110 rounded-lg mx-auto md:h-[300px] md:w-[800px] lg:h-[300px] lg:w-[800px]"
//         src="/assets/formal.png"
//         alt="formal"
//         height={200}
//         width={400}
//       />
//     </div>

//     {/* Second Row of Images */}
//     <div className="flex flex-col sm:flex-row mt-8 mb-8 space-x-0 sm:space-x-10 sm:space-y-0 space-y-6 sm:mt-10">
//       <Image
//         className="cursor-pointer hover:scale-110 rounded-lg mx-auto h-[220px] w-[300px] md:h-[300px] md:w-[800px] lg:h-[300px] lg:w-[800px]"
//         src="/assets/party.png"
//         alt="party"
//         height={300}
//         width={800}
//       />
//       <Image
//         className="cursor-pointer hover:scale-110 rounded-lg mx-auto"
//         src="/assets/gym.png"
//         alt="gym"
//         height={300}
//         width={400}
//       />
//     </div>
//   </div>
//   )
// }

// export default DressStyle

import React from "react";
import Image from "next/image";

function DressStyle() {
  return (
    <div className="bg-[#F0F0F0] flex flex-col rounded-2xl mt-8 mx-4 md:mx-8 lg:mx-12 xl:mx-20">
      <h2 className="text-3xl md:text-5xl lg:text-5xl text-black text-center mt-8 hover:scale-x-125 font-extrabold">
        BROWSE BY DRESS STYLE
      </h2>

      {/* First Row of Images */}
      <div className="flex flex-col sm:flex-row sm:space-x-10 sm:space-y-0 space-y-6 sm:mt-10">
        <div className="flex justify-center sm:w-1/2">
          <Image
            className="cursor-pointer hover:scale-110 rounded-lg"
            src="/assets/casual.png"
            alt="casual"
            height={300}
            width={400}
          />
        </div>
        <div className="flex justify-center sm:w-1/2">
          <Image
            className="cursor-pointer hover:scale-110 rounded-lg"
            src="/assets/formal.png"
            alt="formal"
            height={300}
            width={800}
          />
        </div>
      </div>

      {/* Second Row of Images */}
      <div className="flex flex-col sm:flex-row mt-8 mb-8 space-y-6 sm:space-y-0 sm:space-x-10 sm:mt-10">
        <div className="flex justify-center sm:w-1/2">
          <Image
            className="cursor-pointer hover:scale-110 rounded-lg"
            src="/assets/party.png"
            alt="party"
            height={300}
            width={400}
          />
        </div>
        <div className="flex justify-center sm:w-1/2">
          <Image
            className="cursor-pointer hover:scale-110 rounded-lg"
            src="/assets/gym.png"
            alt="gym"
            height={300}
            width={400}
          />
        </div>
      </div>
    </div>
  );
}

export default DressStyle;
