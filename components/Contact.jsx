import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div
      id="contact"
      className="h-screen w-full bg-teal-500 relative flex flex-col justify-center items-center"
    >
      <h3 className="text-black text-3xl absolute top-[150px]">Contact us</h3>
      <form>
        <ul className="flex flex-col justify-center items-center w-[200px]  sm:w-[400px]">
          <input className="my-3 p-2 w-full" placeholder="Name..." />
          <input className="my-3 p-2 w-full" placeholder="Email..." />
          <textarea className="my-3 p-2 w-full " placeholder="Message..." />
          <button className="my-3 p-2 w-full bg-black text-white">
            Send Message
          </button>
        </ul>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
