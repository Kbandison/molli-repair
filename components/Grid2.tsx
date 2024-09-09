"use client";
import React from "react";
import { LayoutGrid } from "./ui/LayoutGrid";
import { TextGenerateEffect } from "./ui/TextGenerate";

export function Grid2() {
  return (
    <section
      id="about"
      className="h-[120vh] -mt-72 mb-28 w-full relative flex flex-col flex-1"
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
        Dishwasher Repair
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Many people hate hand-washing dishes. They invest in dishwashers to make
        washing dishes faster and easier. Keeping the dishwasher in good
        condition and running smoothly can save time and energy. It can also
        extend the life of the dishwasher. Therefore, it is essential to be
        aware of the signs that a dishwasher needs repair.
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
        Washing machines make the lives of many people easier. They make doing
        laundry easier. So, washing machines can save time and energy. However,
        the malfunctioning of washing machines is a major inconvenience to many
        people. Unfortunately, many people do not have the knowledge, skills,
        and tools to do washing machine repairs on their own.
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
        Choosing a reliable dryer repair service in NYC isn’t an easy task.
        There are dozens of dryer repair companies operating in the area, but
        all of them are not created equal. Your research is crucial to picking
        the right service provider for the job. The internet is a great place to
        start your research and find a suitable company for your project. Look
        for a service provider with a good reputation and expertise in the
        repair project that you require. They should have the right tools and
        equipment to do a perfect job.
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        If you are looking for a reputable and experienced dryer repair company
        in NYC, you don’t have to look further than Global Solutions Appliance
        Repair. We are your trusted partner in appliance repairs. Call Global
        Solutions Appliance Repair today for all of your appliance repair needs.
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
        Refrigerators are necessary appliances for every household serving to
        keep our meals fresh and provide us with chilled beverages on hot days.
        Proper maintenance is paramount to ensure its optimal functionality over
        time. In this guide, we will cover all the steps you need to maximize
        the performance and longevity of your refrigerator – including
        temperature settings, cleaning techniques, organization tips, and
        regular maintenance.
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
        The oven is an indispensable kitchen appliance that plays a vital role
        in making those hearty meals for you and your loved ones. However, even
        the most advanced and reliable ovens experience issues that hinder their
        performance. Most of these problems can be easily fixed when addressed
        early, but overlooking them only leads to further complications down the
        line, some of which might see you making a new purchase altogether. But
        what are these issues you should be aware of? This post will look at the
        telltale signs your oven needs repair.
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
    thumbnail:
      "https://www.capitanappliance.com/wp-content/uploads/2023/01/g9e2BwkAVS6touFGLqCCap7df6DguSwj1673541070.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://p7u2b8q4.rocketcdn.me/wp-content/uploads/2022/05/dryer-repair.webp",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-2",
    thumbnail:
      "https://aggielandappliancerepair.com/wp-content/uploads/fridge1.jpg",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "col-span-1",
    thumbnail:
      "https://www.sickappliances.com/wp-content/uploads/2022/01/ranges-and-oven-repair.jpeg",
  },
];
