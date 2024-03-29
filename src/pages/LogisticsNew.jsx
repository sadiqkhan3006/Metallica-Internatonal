import React from "react";
import Logisticsjpg from "../assets/logistics.jpg";
import TradingPageImg from "../assets/Trading_page.png";
import Light from "../assets/Light.png";
import logistics from "../assets/logistics/logistics.svg";
import port from "../assets/logistics/port.svg";
import supplyChain from "../assets/logistics/supply-chain.svg";
import warehouse from "../assets/logistics/warehouse.svg";
import comingSoon from "../assets/coming-soon.png";
function LogisticsNew() {
  return (
    <div className="mt-[96px]">
      <div className="lg:h-[683px] h-[318px] md:h-[479px] mb-[40px] md:mb-[60px] lg:mb-[120px]  w-[100wv] relative  ">
        <div className="w-full h-full">
          <img
            className="h-full w-full object-cover"
            src={TradingPageImg}
            alt="ContatcPage"
          />
        </div>
        {/* blur */}
        <div className="w-full h-full bg-[#281C49] absolute top-0 left-0 bg-opacity-[60%] z-10  "></div>
        {/* //light */}
        <div className=" absolute top-0 right-0 z-20 h-full ">
          <img className="h-full object-cover" src={Light} />
        </div>
        {/* text */}
        <div className="absolute  z-30 top-0 left-0 lg:w-[55%] h-full flex flex-col gap-y-[12px] lg:pt-[267px]  lg:pl-[64px] lg:justify-normal justify-center  mx-[7%] lg:mx-0">
          <div className=" w-full flex flex-row">
            <div className="  w-[6px]  bg-[#F45634] rounded-l-[10px] rounded-r-[1px] mr-1 md:mr-3   "></div>
            <div className="flex flex-col pl-3   ">
              <div className="font-Ptsans  text-white font-bold  text-[32px]   leading-[38px] lg:text-[64px]   lg:leading-[68px]  md:text-[48px]   md:leading-[56px] ">
                Seamless Logistics Solutions
              </div>
              <div className="font-Ptsans  text-white font-bold  text-[32px]   leading-[38px] lg:text-[64px]   lg:leading-[68px]  md:text-[48px]   md:leading-[56px] ">
                Our Integrated Network
              </div>
            </div>
          </div>
          <p className="font-Inter text-[#E3E3E4] md:text-[16px] md:leading-[26px] text-[12px] leading-[18px] lg:text-lg lg:leading-[26px] w-full  ">
            Metallica has close alliances with a network of of the largest and
            most professional companies to handle Stevedoring , port operation ,
            inland logistics and warehousing . This Network ensures smooth
            moving of cargo from source of supply to the end users thereby
            giving the highest level of satisfaction to its valued clients.
          </p>
        </div>
      </div>
      <div className=" mx-[7%] lg:ml-[12%] lg:mr-[12%] mb-[0px] md:mb-[0px] lg:mb-[0px] ">
        <div className="lg:mb-[64px] mb-[32px] md:mb-[48px]">
          <h1 className=" md:text-[32px] text-[24px] lg:text-[48px] text-[#281C49] font-Ptsans font-bold   text-center mb-1 lg:mb-[8px]">
            Logistic Solutions
          </h1>
          <p className="font-Inter md:text-[16px] md:leading-[26px] text-[14px] leading-[20px] lg:text-lg lg:leading-7 text-[#6C6C6C] text-center ">
            With our extensive network and industry expertise, we offer a
            comprehensive range of services to meet your transportation,
            warehousing, and distribution needs. Explore our logistics offerings
            below:
          </p>
        </div>
        <div className="flex flex-row gap-x-[80px] lg:gap-y-[60px] gap-y-[24px]  w-full  flex-wrap  items-center justify-between  ">
          <div className="flex flex-row gap-x-4 lg:w-[45%]">
            <div className="w-[48px] md:w-[60px] lg:w-[80px]">
              <img
                className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"
                src={port}
              />
            </div>
            <div>
              <div className="h-[105px] w-[1px] bg-[#E3E3E4]"></div>
            </div>
            <div className="w-full">
              <h2 className="mb-1 lg:mb-[13px] font-Inter font-medium lg:text-[24px] lg:leading-8 md:text-[22px] md:leading-[28px] text-[20px] leading-[24px] text-[#281C49]">
                Port Operations
              </h2>
              <p className="font-Inter text-[12px] leading-[16px] md:text-[14px] md:leading-[18px] lg:text-[16px] lg:leading-[26px] text-[#939596] ">
                Our network includes top-notch port operators who manage port
                facilities and ensure smooth cargo handling, vessel berthing,
                and customs clearance.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 lg:w-[45%]">
            <div className="w-[48px] md:w-[60px] lg:w-[80px]">
              <img
                className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"
                src={logistics}
              />
            </div>
            <div>
              <div className="h-[105px] w-[1px] bg-[#E3E3E4]"></div>
            </div>
            <div className="w-full">
              <h2 className="mb-[13px] font-Inter font-medium lg:text-[24px] lg:leading-8 md:text-[22px] md:leading-[28px] text-[20px] leading-[24px] text-[#281C49]">
                Inland Logistics
              </h2>
              <p className="font-Inter text-[12px] leading-[16px] md:text-[14px] md:leading-[18px] lg:text-[16px] lg:leading-[26px] text-[#939596] ">
                We collaborate with inland logistics providers to manage the
                transportation of goods from ports to final destinations,
                utilizing various modes of transport including road, rail, and
                waterways
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 lg:w-[45%] ">
            <div className="w-[48px] md:w-[60px] lg:w-[80px]">
              <img
                className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"
                src={warehouse}
              />
            </div>
            <div>
              <div className="h-[105px] w-[1px] bg-[#E3E3E4]"></div>
            </div>
            <div className="w-full">
              <h2 className="mb-[13px] font-Inter font-medium lg:text-[24px] lg:leading-8 md:text-[22px] md:leading-[28px] text-[20px] leading-[24px] text-[#281C49]">
                Warehousing Solutions
              </h2>
              <p className="font-Inter text-[12px] leading-[16px] md:text-[14px] md:leading-[18px] lg:text-[16px] lg:leading-[26px] text-[#939596] ">
                Metallica Resources offers access to modern warehousing
                facilities equipped with state-of-the-art technology for safe
                and efficient storage of goods.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 lg:w-[45%] ">
            <div className="w-[48px] md:w-[60px] lg:w-[80px]">
              <img
                className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"
                src={supplyChain}
              />
            </div>
            <div>
              <div className="h-[105px] w-[1px] bg-[#E3E3E4]"></div>
            </div>
            <div className="w-full">
              <h2 className="mb-[13px] font-Inter font-medium lg:text-[24px] lg:leading-8 md:text-[22px] md:leading-[28px] text-[20px] leading-[24px] text-[#281C49]">
                Supply Chain Management
              </h2>
              <p className="font-Inter text-[12px] leading-[16px] md:text-[14px] md:leading-[18px] lg:text-[16px] lg:leading-[26px] text-[#939596] ">
                Leverage our expertise in supply chain management to optimize
                the flow of goods, reduce costs, and enhance overall efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[7%] flex items-center justify-center">
        <div>
          <img src={comingSoon} alt="comingSoon" />
        </div>
      </div>
    </div>
  );
}

export default LogisticsNew;
