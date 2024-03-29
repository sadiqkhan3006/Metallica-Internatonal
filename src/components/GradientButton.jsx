import React from "react";

function gradientButton({ text, fontStyle }) {
  return (
    <div>
      <button
        className={`flex  items-center justify-center lg:pr-7 lg:pl-7 lg:pt-4 lg:pb-4  pr-[14px] pl-[14px] pt-2 pb-2 md:px-[16px] md:py-[10px]  rounded-[8px] 
  bg-gradient-to-tr from-[#1E1C49] via-[#9D2161] to-[#F45634]   text-[#FDFDFD] text-sm shadow
   hover:scale-[1.1]  transition-all delay-150 duration-250 ease-linear ${fontStyle}      `}
      >
        {text}
      </button>
    </div>
  );
}

export default gradientButton;
