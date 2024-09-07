"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/LayoutGrid";
import { TextGenerateEffect } from "./ui/TextGenerate";

export function Grid2() {
  return (
    <section
      id="about"
      className="h-[120vh] mt-72 mb-28 w-full relative flex flex-col flex-1"
    >
      <TextGenerateEffect
        className="text-center text-[40px] md:text-5xl lg:text-6xl"
        words="Jobs We Do for You"
      />
      <p className="text-center md:tracking-wider text-sm md:text-lg lg:text-2xl">
        Click Image to Learn More
      </p>
      <LayoutGrid cards={cards} />
    </section>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Stove Repair</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        At Global Solutions Appliance Repair, we understand that a faulty stove
        can disrupt the flow of your daily life, making it difficult to prepare
        meals for yourself and your loved ones. We offer comprehensive stove
        repair services that cater to all stove types, brands, and models.
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Whether it’s a minor component repair or a complex circuitry issue, our
        certified technicians are well-equipped to tackle any stove repair need.
        By conducting a thorough diagnostic procedure, we can accurately
        identify the underlying problem and implement the most effective repair
        strategy, restoring your stove to optimum functionality.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Stove Repair</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        At Global Solutions Appliance Repair, we understand that a faulty stove
        can disrupt the flow of your daily life, making it difficult to prepare
        meals for yourself and your loved ones. We offer comprehensive stove
        repair services that cater to all stove types, brands, and models.
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Whether it’s a minor component repair or a complex circuitry issue, our
        certified technicians are well-equipped to tackle any stove repair need.
        By conducting a thorough diagnostic procedure, we can accurately
        identify the underlying problem and implement the most effective repair
        strategy, restoring your stove to optimum functionality.
      </p>
    </div>
  );
};

const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Test Test test test 6
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Just A Test 6
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://5.imimg.com/data5/SELLER/Default/2023/10/349567014/EG/PO/AP/33864707/bosch-hob-stove-repairing-service.png",
    text: "Test Test",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-2",
    thumbnail:
      "https://5.imimg.com/data5/SELLER/Default/2023/10/349567014/EG/PO/AP/33864707/bosch-hob-stove-repairing-service.png",
    text: "Test Test",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
