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
      {/* <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
        Our Goals are to:
      </p>
      <div className="py-4 flex">
        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          <span className="font-bold">
            Provide Reliable and Efficient Repairs:
          </span>{" "}
          My aim is to deliver high-quality repair services that extend the life
          of your appliances. I focus on accurately diagnosing issues and
          providing cost-effective solutions to get your appliances back in
          working order as quickly as possible.
        </p>
        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          Ensure Customer Satisfaction and Trust: I strive to build long-term
          relationships with my clients by offering transparent communication,
          fair pricing, and exceptional customer service. My goal is to become
          your go-to professional for all appliance repair needs, ensuring you
          feel confident and satisfied with the work provided.
        </p>
        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          Offer Preventive Maintenance Advice: Beyond repairs, I aim to educate
          my clients on best practices for maintaining their appliances to
          prevent future breakdowns. This includes providing tips on regular
          care, usage guidelines, and recognizing early signs of potential
          problems.
        </p>
      </div> */}
    </div>
  );
};

export default Goal;
