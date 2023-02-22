import React from "react";
import Image from "next/image";
import img from "../public/assets/1.jpg";

const Hero = () => {
  return (
    <div
      id="home"
      className="h-screen  w-full relative flex justify-center items-center"
    >
      <h3 className="text-4xl sm:text-6xl text-white z-10 absolute bottom-[300px]">
        Welcome to{" "}
      </h3>
      <h3 className="text-teal-500 text-6xl sm:text-8xl z-10 absolute bottom-[220px] sm:bottom-[200px] md:right-[300px] sm:right-[200px]">
        {" "}
        YourGym
      </h3>
      <button className="bg-teal-500 text-black font-semibold p-4 z-10 absolute bottom-[100px]">
        Get Started
      </button>
      <Image
        src={img}
        width={4608}
        height={3456}
        className="absolute object-cover h-screen w-screen"
        alt="image"
      />
    </div>
  );
};

export default Hero;
