import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerate";

const Goal = () => {
  return (
    <div
      className=" h-[50vh] flex flex-col items-center justify-center"
      id="goals"
    >
      <TextGenerateEffect
        className="text-center text-[40px] md:text-5xl lg:text-6xl"
        words="What is Our Working Goal?"
      />
      <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
        Our Goals are:
      </p>
    </div>
  );
};

export default Goal;
