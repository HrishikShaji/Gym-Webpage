import React from "react";
import Image from "next/image";
import img1 from "../public/assets/9.png";

const Services = () => {
  return (
    <div
      id="services"
      className="h-screen w-full bg-black relative flex flex-col justify-center items-center"
    >
      <h3 className="text-white text-3xl absolute top-[150px]">Our Services</h3>
      <div className="absolute bottom-[20px] sm:bottom-[100px] sm:px-10">
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <div className="sm:h-[100px] h-[50px] w-[50px] sm:w-[100px]  bg-teal-500 flex justify-center items-center">
            <div className="sm:h-[50px] h-[25px] w-[25px] sm:w-[50px] rounded-full  bg-black" />
          </div>
          <p className="text-white text-xs sm:text-xl md:mx-4 my-4 px-10">
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor
            <br className="hidden sm:block" />. Aenean massa. Cum sociis natoque
            penatibus . Cras dapibus. Vivamus elementum '
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <div className="sm:h-[100px] h-[50px] w-[50px] sm:w-[100px]  bg-teal-500 flex justify-center items-center">
            <div className="sm:h-[50px] h-[25px] w-[25px] sm:w-[50px] rounded-full  bg-black" />
          </div>
          <p className="text-white text-xs sm:text-xl md:mx-4 my-4 px-10">
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor
            <br className="hidden sm:block" />. Aenean massa. Cum sociis natoque
            penatibus . Cras dapibus. Vivamus elementum '
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <div className="sm:h-[100px] h-[50px] w-[50px] sm:w-[100px]  bg-teal-500 flex justify-center items-center">
            <div className="sm:h-[50px] h-[25px] w-[25px] sm:w-[50px] rounded-full  bg-black" />
          </div>
          <p className="text-white text-xs sm:text-xl md:mx-4 my-4 px-10">
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor
            <br className="hidden sm:block" />. Aenean massa. Cum sociis natoque
            penatibus . Cras dapibus. Vivamus elementum '
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
