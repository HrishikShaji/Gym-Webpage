import React, { useState } from "react";

import Schedules from "./Schedules";

const Schedule = () => {
  const [day, setDay] = useState("sunday");

  return (
    <div
      id="schedule"
      className="relative w-full h-screen bg-black flex justify-center items-center"
    >
      <h3 className="text-white text-3xl absolute top-[150px]">Schedule</h3>
      <div className="absolute bottom-[10px] sm:bottom-[70px]">
        <div className="bg-teal-500 hidden sm:block mb-5">
          <button
            className={
              day === "sunday"
                ? "p-2 bg-white font-semibold"
                : " p-2 hover:bg-white font-semibold"
            }
            onClick={() => setDay("sunday")}
          >
            Sunday
          </button>
          <button
            className={
              day === "monday"
                ? "p-2 bg-white font-semibold"
                : " p-2 hover:bg-white font-semibold"
            }
            onClick={() => setDay("monday")}
          >
            Monday
          </button>
          <button
            className={
              day === "tuesday"
                ? "p-2 bg-white font-semibold"
                : " p-2 hover:bg-white font-semibold"
            }
            onClick={() => setDay("tuesday")}
          >
            Tuesday
          </button>
          <button
            className={
              day === "wednesday"
                ? "p-2 bg-white font-semibold"
                : " p-2 hover:bg-white font-semibold"
            }
            onClick={() => setDay("wednesday")}
          >
            Wednesday
          </button>
          <button
            className={
              day === "thursday"
                ? "p-2 bg-white font-semibold"
                : " p-2 hover:bg-white font-semibold"
            }
            onClick={() => setDay("thursday")}
          >
            Thursday
          </button>
          <button
            className={
              day === "friday"
                ? "p-2 bg-white font-semibold"
                : " p-2 hover:bg-white font-semibold"
            }
            onClick={() => setDay("friday")}
          >
            Friday
          </button>
          <button
            className={
              day === "saturday"
                ? "p-2 bg-white font-semibold"
                : " p-2 hover:bg-white font-semibold"
            }
            onClick={() => setDay("saturday")}
          >
            Saturday
          </button>
        </div>
        <div className="bg-teal-500 sm:hidden mb-5">
          <button
            className="p-2 hover:bg-white font-semibold"
            onClick={() => setDay("sunday")}
          >
            Sun
          </button>
          <button
            className="p-2 hover:bg-white font-semibold"
            onClick={() => setDay("monday")}
          >
            Mon
          </button>
          <button
            className="p-2 hover:bg-white font-semibold"
            onClick={() => setDay("tuesday")}
          >
            Tue
          </button>
          <button
            className="p-2 hover:bg-white font-semibold"
            onClick={() => setDay("wednesday")}
          >
            Wed
          </button>
          <button
            className="p-2 hover:bg-white font-semibold"
            onClick={() => setDay("thursday")}
          >
            Thu
          </button>
          <button
            className="p-2 hover:bg-white font-semibold"
            onClick={() => setDay("friday")}
          >
            Fri
          </button>
          <button
            className="p-2 hover:bg-white font-semibold"
            onClick={() => setDay("saturday")}
          >
            Sat
          </button>
        </div>
        <Schedules day={day} />
      </div>
    </div>
  );
};

export default Schedule;
