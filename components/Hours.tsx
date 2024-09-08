import React from "react";
import { LuClock9 } from "react-icons/lu";
import { TextGenerateEffect } from "./ui/TextGenerate";
import BorderButton from "./ui/BorderButton";

const Hours = () => {
  return (
    <div className=" md:flex ">
      <div
        className="w-full h-[50vh] flex flex-col items-center justify-center"
        id="hours"
      >
        <h1 className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold pb-12">
          Business <span className="text-red-700">Hours</span>
        </h1>
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
      <div
        className="w-full h-[50vh] flex flex-col items-center justify-center"
        id="hours"
      >
        <h1 className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold md:pb-24">
          Contact <span className="text-red-700">Me</span>
        </h1>
        <div className="flex md:w-[60%] w-full gap-8 py-8 items-center justify-center">
          <a href="">
            <BorderButton title={"Email Me"} position={"left"} />
            {/* mailto:email */}
          </a>
          <a href="">
            <BorderButton title={"Call or Text"} position={"right"} />
            {/* tel:number */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hours;
