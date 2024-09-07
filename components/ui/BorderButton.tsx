import React from "react";

const BorderButton = ({
  title,
}: // icon,
// position,
// handleClick,
// otherClasses,
{
  title: string;
  icon?: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="p-[3px] relative w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-yellow-500 rounded-lg" />
      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        {title}
      </div>
    </button>
  );
};

export default BorderButton;
