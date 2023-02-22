import React from "react";
import Trainer from "./Trainer";
import { trainerData } from "./TrainerData";

const Trainers = () => {
  return (
    <div
      id="trainer"
      className="h-screen w-full bg-teal-500 relative flex justify-center items-center"
    >
      <h3 className="text-black text-3xl absolute top-[150px]">Our Trainers</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 absolute bottom-[80px]">
        {trainerData.map((trainer, index) => (
          <Trainer
            name={trainer.name}
            desc={trainer.desc}
            image={trainer.image}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Trainers;
