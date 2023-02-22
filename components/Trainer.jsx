import React from "react";
import Image from "next/image";

const Trainer = ({ name, desc, image, index }) => {
  return (
    <div
      key={index}
      className="bg-teal-400 flex sm:flex-col justify-around  sm:justify-center items-center md:h-[220px] md:w-[200px] sm:h-[130px] sm:w-[200px] h-[50px] w-[200px]"
    >
      <Image
        className="sm:h-[60px] sm:w-[60px] h-[30px] w-[30px] rounded-full mt-1"
        src={image}
        height={100}
        width={100}
        alt="image"
      />
      <h3 className="text-black mt-3">{name}</h3>
      <p className="hidden md:block p-3">{desc}</p>
    </div>
  );
};

export default Trainer;
