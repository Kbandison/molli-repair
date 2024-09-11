"use client";
import React from "react";
import { LayoutGrid } from "./ui/LayoutGrid";
import { TextGenerateEffect } from "./ui/TextGenerate";

export function Grid2() {
  return (
    <section
      id="about"
      className="h-[120vh] lg:-mt-72 2xl:-mt-36 mb-28 w-full relative flex flex-col flex-1"
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
        A malfunctioning stove can disrupt your cooking plans and daily meals.
        At Allset Appliance Repair, we offer comprehensive stove repair services
        to address issues like uneven heating, faulty burners, ignition
        problems, or electrical malfunctions. Our technicians are experienced in
        repairing all major brands, ensuring that your stove is safe and
        reliable. We are committed to providing you with efficient service so
        you can get back to cooking your favorite dishes without worry.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Dishwasher Repair
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        When your dishwasher isn&apos;t cleaning properly, leaking, or showing
        error codes, Allset Appliance Repair is here to help. Our expert
        technicians are trained to troubleshoot and repair a wide range of
        dishwasher problems, restoring your appliance to peak performance. We
        understand the importance of a well-functioning dishwasher in your daily
        routine and strive to offer timely, reliable, and affordable repair
        services that save you from the hassle of hand-washing dishes.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Washing Machine Repair
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        At Allset Appliance Repair, we specialize in washer repair services that
        get your laundry routine back on track. Whether your washer is leaking,
        not spinning, making strange noises, or refusing to start, our skilled
        technicians have the expertise to diagnose and fix the problem
        efficiently. We handle all major brands and models, ensuring your washer
        operates smoothly and effectively. With our reliable and quick service,
        we aim to minimize any disruption to your day.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Dryer Repair</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A malfunctioning dryer can be a major inconvenience, and that&apos;s
        where Allset Appliance Repair comes in. Our team is equipped to handle
        all types of dryer issues, from inadequate heating and excessive noise
        to failure to start or tumbling problems. We use high-quality parts and
        the latest repair techniques to ensure your dryer is running safely and
        efficiently, helping you avoid costly replacements and ensuring your
        clothes are dried properly every time.
      </p>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Refrigerator Repair
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A faulty refrigerator can lead to spoiled food and costly waste. At
        Allset Appliance Repair, we offer prompt and effective refrigerator
        repair services to keep your food fresh and your appliance running
        efficiently. Our technicians are well-versed in diagnosing and fixing
        issues such as cooling problems, leaks, strange noises, and
        malfunctioning ice makers. With our reliable repair solutions, we aim to
        extend the lifespan of your refrigerator and help you avoid the expense
        of a replacement.
      </p>
    </div>
  );
};

const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Oven Repair</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Whether your oven is not heating up properly, has a broken door, or is
        displaying error codes, our team at Allset Appliance Repair has you
        covered. We provide professional oven repair services that address a
        range of problems to get your appliance functioning as it should. With
        our attention to detail and dedication to quality, we aim to restore
        your oven to optimal condition, ensuring even cooking results and a safe
        cooking environment for your family.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/stove-repair2.jpeg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/featured-image-dishwasher-repair.jpeg.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "washer-repair2.jpeg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "dryer-repair.jpeg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-2",
    thumbnail: "refrigerator-repair.jpeg",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "col-span-1",
    thumbnail: "oven-repair.jpeg",
  },
];
