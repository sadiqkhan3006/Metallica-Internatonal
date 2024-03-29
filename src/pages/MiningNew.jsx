import React from "react";
//import TradingPageImg from "../assets/Trading_page.png";
import Light from "../assets/Light.png";
import MiningHero from "../assets/mining/miningHero.png";
import team from "../assets/mining/team.svg";
import tech from "../assets/mining/technology.svg";
import collaboration from "../assets/mining/collaboration.svg";
import forest from "../assets/mining/forest.svg";
import comingSoon from "../assets/coming-soon.png";
function MiningNew() {
  return (
    <div className="mt-[96px]">
      <div className="lg:h-[683px] h-[318px] md:h-[479px] mb-[40px] md:mb-[60px] lg:mb-[120px]  w-[100wv] relative  ">
        <div className="w-full h-full">
          <img
            className="h-full w-full object-cover"
            src={MiningHero}
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
        <div className="absolute  z-30 top-0 left-0 lg:w-[50%] h-full flex flex-col gap-y-[12px] lg:pt-[267px]  lg:pl-[64px] lg:justify-normal justify-center  mx-[7%] lg:mx-0">
          <div className=" w-full flex flex-row">
            <div className="  w-[6px]  bg-[#F45634] rounded-l-[10px] rounded-r-[1px] mr-1 md:mr-3   "></div>
            <div className="flex flex-col pl-3 pr-3  ">
              <div className="font-Ptsans  text-white font-bold  text-[32px]   leading-[38px] lg:text-[64px]   lg:leading-[68px]  md:text-[48px]   md:leading-[56px] ">
                Unlock
              </div>
              <div className="font-Ptsans  text-white font-bold  text-[32px]   leading-[38px] lg:text-[64px]   lg:leading-[68px]  md:text-[48px]   md:leading-[56px] ">
                Mineral Wealth
              </div>
            </div>
          </div>
          <p className="font-Inter text-[#E3E3E4] md:text-[16px] md:leading-[26px] text-[12px] leading-[18px] lg:text-lg lg:leading-[26px] w-full lg:mt-3 ">
            Metallica has explored and discovered high grade carbonate mineral
            deposits in Southern and Central African regions .The exploration
            was done using highly qualified professionals and the best
            contemporary technology, to ensure long term viability of mining and
            associated manufacturing of projects
          </p>
        </div>
      </div>
      <div className=" mx-[7%] lg:ml-[12%] lg:mr-[12%] mb-[0px] md:mb-[0px] lg:mb-[0px] ">
        <div className="lg:mb-[64px] mb-[32px] md:mb-[48px]">
          <h1 className=" md:text-[32px] text-[24px] lg:text-[48px] text-[#281C49] font-Ptsans font-bold   text-center mb-1 lg:mb-[8px]">
            Our Assistance
          </h1>
          <p className="font-Inter md:text-[16px] md:leading-[26px] text-[14px] leading-[20px] lg:text-lg lg:leading-7 text-[#6C6C6C] text-center ">
            Our services are designed to uncover valuable mineral resources and
            ensure the long-term viability of mining and associated
            manufacturing projects. Here's how we can assist you:
          </p>
        </div>
        <div className="flex flex-row gap-x-[80px] lg:gap-y-[60px] gap-y-[24px]  w-full  flex-wrap  items-center justify-between  ">
          <div className="flex flex-row gap-x-4 lg:w-[45%]">
            <div className="w-[48px] md:w-[60px] lg:w-[80px]">
              <img
                className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"
                src={team}
              />
            </div>
            <div>
              <div className="h-[105px] w-[1px] bg-[#E3E3E4]"></div>
            </div>
            <div className="w-full">
              <h2 className="mb-1 lg:mb-[13px] font-Inter font-medium lg:text-[24px] lg:leading-8 md:text-[22px] md:leading-[28px] text-[20px] leading-[24px] text-[#281C49]">
                Expert Exploration Teams
              </h2>
              <p className="font-Inter text-[12px] leading-[16px] md:text-[14px] md:leading-[18px] lg:text-[16px] lg:leading-[26px] text-[#939596] ">
                We employ highly qualified professionals with extensive
                experience in mineral exploration. Our teams are equipped with
                the latest technologies and methodologies to efficiently survey
                and assess potential mineral deposits.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 lg:w-[45%]">
            <div className="w-[48px] md:w-[60px] lg:w-[80px]">
              <img
                className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"
                src={tech}
              />
            </div>
            <div>
              <div className="h-[105px] w-[1px] bg-[#E3E3E4]"></div>
            </div>
            <div className="w-full">
              <h2 className="mb-[13px] font-Inter font-medium lg:text-[24px] lg:leading-8 md:text-[22px] md:leading-[28px] text-[20px] leading-[24px] text-[#281C49]">
                Cutting-Edge Technology
              </h2>
              <p className="font-Inter text-[12px] leading-[16px] md:text-[14px] md:leading-[18px] lg:text-[16px] lg:leading-[26px] text-[#939596] ">
                Metallica Resources utilizes the best contemporary technology to
                enhance the accuracy and effectiveness of our exploration
                efforts. From drilling and sampling techniques, we leverage
                advanced tools to uncover mineral resources with precision.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 lg:w-[45%] ">
            <div className="w-[48px] md:w-[60px] lg:w-[80px]">
              <img
                className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"
                src={collaboration}
              />
            </div>
            <div>
              <div className="h-[105px] w-[1px] bg-[#E3E3E4]"></div>
            </div>
            <div className="w-full">
              <h2 className="mb-[13px] font-Inter font-medium lg:text-[24px] lg:leading-8 md:text-[22px] md:leading-[28px] text-[20px] leading-[24px] text-[#281C49]">
                Collaborative Approach
              </h2>
              <p className="font-Inter text-[12px] leading-[16px] md:text-[14px] md:leading-[18px] lg:text-[16px] lg:leading-[26px] text-[#939596] ">
                By engaging in transparent and inclusive practices, we strive to
                build mutually beneficial relationships and contribute to
                socio-economic development in the regions where we operate.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 lg:w-[45%] ">
            <div className="w-[48px] md:w-[60px] lg:w-[80px]">
              <img
                className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"
                src={forest}
              />
            </div>
            <div>
              <div className="h-[105px] w-[1px] bg-[#E3E3E4]"></div>
            </div>
            <div className="w-full">
              <h2 className="mb-[13px] font-Inter font-medium lg:text-[24px] lg:leading-8 md:text-[22px] md:leading-[28px] text-[20px] leading-[24px] text-[#281C49]">
                Environmental Considerations
              </h2>
              <p className="font-Inter text-[12px] leading-[16px] md:text-[14px] md:leading-[18px] lg:text-[16px] lg:leading-[26px] text-[#939596] ">
                Metallica Resources prioritizes environmental sustainability in
                all exploration activities. We adhere to strict environmental
                regulations and implement responsible practices to minimize
                ecological impact.
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

export default MiningNew;
