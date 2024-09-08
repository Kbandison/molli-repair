import React from "react";
// import { ImFacebook } from "react-icons/im";

const Footer = () => {
  return (
    <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
      <p className="md:text-base text-sm md:font-normal font-light">
        Copyright © 2024 Allset Appliance Repair
      </p>
      <div className="flex items-center md:gap-3 gap-6">
        <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
          <a href="">
            <img src="" alt="" width={20} height={20} />
            <img src="" alt="" width={20} height={20} />
            <img src="" alt="" width={20} height={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
