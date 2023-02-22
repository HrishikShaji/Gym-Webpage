import Image from "next/image";
import React from "react";
import img1 from "../public/assets/2.png";

const About = () => {
  return (
    <div className="h-screen w-full bg-black relative flex flex-col justify-center items-center">
      <h3 className="text-white text-3xl absolute top-[150px]">About</h3>
      <Image
        src={img1}
        height={200}
        width={200}
        alt="image"
        className="p-10 hidden sm:block"
      />
      <p className="text-teal-500 sm:text-xl pt-[100px] px-10 sm:pt-10 md:px-[200px]  md:text-2xl">
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum '
      </p>
    </div>
  );
};

export default About;
