import React from "react";
import Instagram from "../assets/Instagram.png";
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/Twitter.png";
function Footer() {
  return (
    <div className=" bg-[#281D49] ">
      <div className="ml-[7%] mr-[7%] flex flex-col items-center gap-y-[34px] mt-14 pt-12 pb-12 ">
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold ">Metallica</h1>
          <h1 className="text-[#FF5A33] text-4xl font-bold ">
            Resources International
          </h1>
        </div>
        <div className="flex flex-row gap-x-14">
          <img src={Instagram} />
          <img src={Facebook} />
          <img src={Twitter} />
        </div>
        <div className="text-center  ">
          <p className="text-white text-xl font-extralight ">
            METALLICA © Copyright 2024
          </p>
          <div className="text-white flex flex-row gap-x-4 mt-2 mr-3 text-[16px]  w-[100%] font-extralight items-center justify-center">
            <span>Terms and conditions</span>
            <span className="">|</span>
            <span>Privacy policy</span>
          </div>
        </div>
      </div>
      {/* <div className="text-white mx-auto items-center justify-center flex flex-row gap-x-3">
        <span>Terms and conditions</span>
        <span>|</span>
        <span>Privacy policy</span>
      </div> */}
    </div>
  );
}

export default Footer;
