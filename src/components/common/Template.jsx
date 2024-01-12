import React from "react";

const Template = ({ heading, text, para }) => {
  return (
    <div className=" bg-hero-pattern">
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-14 text-center text-black">
        <header className="text-4xl text-stone-900  mx-auto pt-20 font-semibold lg:w-[70%] leading-snug">
          {heading}

          <p className="mx-auto mt-4 text-center text-base font-medium text-gray-800 lg:w-[95%] leading-6">
            {para}
          </p>
        </header>
        <div className="sm:h-[70px] lg:h-[150px]"></div>
      </div>
    </div>
  );
};

export default Template;
