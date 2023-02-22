import React from "react";
import Image from "next/image";

const Class = ({ name, classy, time, image }) => {
  return (
    <div className="bg-black flex justify-between h-[50px] sm:h-[100px] md:w-[300px] w-[200px] sm:w-[250px] ">
      <div className="">
        <Image
          src={image}
          width={100}
          height={100}
          className="h-full w-[100px] object-cover"
          alt="images"
        />
      </div>
      <div className="flex flex-col justify-center items-center py-5 px-6">
        <h1 className="text-white hidden sm:block">{name}</h1>
        <h1 className="text-white text-xs sm:text-sm ">{classy}</h1>
        <h1 className="text-white hidden sm:block">{time}</h1>
      </div>
    </div>
  );
};

export default Class;
