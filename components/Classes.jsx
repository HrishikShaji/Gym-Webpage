import React from "react";
import Class from "./Class";
import img1 from "../public/assets/3.jpg";
import img2 from "../public/assets/4.jpg";
import img3 from "../public/assets/5.jpg";
import img4 from "../public/assets/6.jpg";
import img5 from "../public/assets/7.jpg";
import img6 from "../public/assets/8.jpg";

const Classes = () => {
  const classes = [
    {
      name: "Trainer 1",
      classy: "class Name 1",
      time: "30 minutes",
      image: img1,
    },
    {
      name: "Trainer 2",
      classy: "class Name 2",
      time: "30 minutes",
      image: img2,
    },
    {
      name: "Trainer 3",
      classy: "class Name 3",
      time: "30 minutes",
      image: img3,
    },
    {
      name: "Trainer 4",
      classy: "class Name 4",
      time: "30 minutes",
      image: img4,
    },
    {
      name: "Trainer 5",
      classy: "class Name 5",
      time: "30 minutes",
      image: img5,
    },
    {
      name: "Trainer 6",
      classy: "class Name 6",
      time: "30 minutes",
      image: img6,
    },
  ];
  return (
    <div
      id="classes"
      className="h-screen w-full bg-teal-500 relative flex justify-center items-center"
    >
      <h3 className="text-black text-3xl absolute top-[150px]">Classes</h3>
      <div className="absolute top-[250px] grid gap-2 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {classes.map((classs, index) => (
          <Class
            key={index}
            name={classs.name}
            classy={classs.classy}
            time={classs.time}
            image={classs.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Classes;
