import React from "react";
import Logisticsjpg from "../assets/logistics.jpg";
function Logistics() {
  return (
    <>
      <div className=" h-[750px] relative">
        <div className="h-full w-full">
          <img
            loading="lazy"
            className="object-cover h-full w-full"
            src={Logisticsjpg}
          />
        </div>
        <div
          className="pt-7 pb-7  rounded-lg absolute z-10 bg-[#281D49] bg-opacity-90 md:left-[15%] md:right-[15%] 
        left-[7%] right-[7%] -bottom-[150px] w-[86%] md:w-[70%] flex flex-col gap-y-3 pl-[7%] md:pl-0 md:items-center justify-center
"
        >
          <h1 className=" uppercase font-bold text-[36px] md:text-[40px] leading-[48px]  text-[#FF5A33]  ">
            Logistics
          </h1>

          <p className=" w-[85%] lg:w-[70%] text-[16px] md:text-xl text-left text-white mb-4">
            Metallica has close alliances with a network of of the largest and
            most professional companies to handle Steve doring , port operation
            , inland logistics and warehousing . THIS Network ensures smooth
            moving of cargo from source of supply to the users thereby giving
            the highest level of satisfaction to its valued client.
          </p>
        </div>
      </div>
      <div className=" ml-[7%] mr-[7%] font-bold  text-4xl mt-[300px] mb-[200px] text-center text-[#281D49] ">
        COMMING SOON...
      </div>
    </>
  );
}

export default Logistics;
