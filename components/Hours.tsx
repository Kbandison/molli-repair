import React from "react";
import { LuClock9 } from "react-icons/lu";
import { TextGenerateEffect } from "./ui/TextGenerate";

const Hours = () => {
  return (
    <div className="border w-full h-[50vh] flex flex-col items-center justify-center">
      <TextGenerateEffect
        className="text-center text-[40px] md:text-5xl lg:text-6xl"
        words="What are our Hours Of Operation?"
      />
      <p className="flex items-center justify-center gap-10">
        Monday:{" "}
        <span className="flex items-center justiify-center gap-2">
          <LuClock9 /> 9:00AM - 6PM
        </span>
      </p>
      <p className="flex items-center justify-center gap-10">
        Tuesday:{" "}
        <span className="flex items-center justiify-center gap-2">
          <LuClock9 /> 9:00AM - 6PM
        </span>
      </p>
      <p className="flex items-center justify-center gap-10">
        Wednesday:{" "}
        <span className="flex items-center justiify-center gap-2">
          <LuClock9 /> 9:00AM - 6PM
        </span>
      </p>
      <p className="flex items-center justify-center gap-10">
        Thursday:{" "}
        <span className="flex items-center justiify-center gap-2">
          <LuClock9 /> 9:00AM - 6PM
        </span>
      </p>
      <p className="flex items-center justify-center gap-10">
        Friday:{" "}
        <span className="flex items-center justiify-center gap-2">
          <LuClock9 /> 9:00AM - 6PM
        </span>
      </p>
      <p className="flex items-center justify-center gap-10">
        Saturday:{" "}
        <span className="flex items-center justiify-center gap-2">
          <LuClock9 /> 9:00AM - 6PM
        </span>
      </p>
      <p className="flex items-center justify-center gap-10">
        Sunday:{" "}
        <span className="flex items-center justiify-center gap-2">
          <LuClock9 /> 9:00AM - 6PM
        </span>
      </p>
    </div>
  );
};

export default Hours;
