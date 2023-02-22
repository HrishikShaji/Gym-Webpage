import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full flex h-[100px] justify-between items-center p-7 fixed top-0 z-30 bg-teal-500">
      <div className="z-30">
        <h3 className="text-3xl">YourGym</h3>
      </div>
      <div>
        {toggle ? (
          <div
            className="md:hidden p-3 bg-white h-[10px] w-[10px] rounded-full cursor-pointer"
            onClick={() => setToggle(false)}
          ></div>
        ) : (
          <div
            className="md:hidden p-3 bg-black h-[10px] w-[10px] rounded-full cursor-pointer"
            onClick={() => setToggle(true)}
          ></div>
        )}
        <ul className="hidden md:block">
          <a className="mx-3 text-xl font-semibold" href="#home">
            Home
          </a>
          <a className="mx-3 text-xl font-semibold" href="#classes">
            Classes
          </a>
          <a className="mx-3 text-xl font-semibold" href="#schedule">
            Schedule
          </a>
          <a className="mx-3 text-xl font-semibold" href="#trainer">
            Trainer
          </a>
          <a className="mx-3 text-xl font-semibold" href="#services">
            Services
          </a>
          <a className="mx-3 text-xl font-semibold" href="#contact">
            Contact
          </a>
        </ul>
      </div>
      {toggle && (
        <div className="md:hidden fixed z-30 top-[100px] left-0 right-0 h-[40%] w-full bg-black">
          <ul className="flex flex-col justify-center items-center pt-6">
            <a
              className="my-1 text-xl text-white"
              href="#home"
              onClick={() => setToggle(false)}
            >
              Home
            </a>
            <a
              className="my-1 text-xl text-white"
              href="#classes"
              onClick={() => setToggle(false)}
            >
              Classes
            </a>
            <a
              className="my-1 text-xl text-white"
              href="#schedule"
              onClick={() => setToggle(false)}
            >
              Schedule
            </a>
            <a
              className="my-1 text-xl text-white"
              href="#trainer"
              onClick={() => setToggle(false)}
            >
              Trainer
            </a>
            <a
              className="my-1 text-xl text-white"
              href="#services"
              onClick={() => setToggle(false)}
            >
              Services
            </a>
            <a
              className="my-1 text-xl text-white"
              href="#contact"
              onClick={() => setToggle(false)}
            >
              Contact
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
