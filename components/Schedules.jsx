import React, { useEffect, useState } from "react";
import {
  sundays,
  mondays,
  tuesdays,
  wednesdays,
  thursdays,
  fridays,
  saturdays,
} from "./days";
import Image from "next/image";

const Schedules = ({ day }) => {
  const [Days, setDays] = useState([]);

  useEffect(() => {
    if (day === "sunday") {
      setDays(sundays);
    } else if (day === "monday") {
      setDays(mondays);
    } else if (day === "tuesday") {
      setDays(tuesdays);
    } else if (day === "wednesday") {
      setDays(wednesdays);
    } else if (day === "thursday") {
      setDays(thursdays);
    } else if (day === "friday") {
      setDays(fridays);
    } else if (day === "saturday") {
      setDays(saturdays);
    } else {
      console.log("invalid");
    }
  });

  return (
    <div className="mt-5">
      {Days.map((Day, index) => (
        <div
          className="mb-5 flex justify-around items-center bg-teal-500 hover:bg-white "
          key={index}
        >
          <Image
            src={Day.image}
            width={100}
            height={100}
            alt="images"
            className=" object-cover h-[75px] w-[75px]"
          />
          <h1 className="">{Day.classes}</h1>
          <h1 className="hidden sm:block">{Day.trainer}</h1>
          <h1 className="">{Day.time}</h1>
        </div>
      ))}
    </div>
  );
};

export default Schedules;
