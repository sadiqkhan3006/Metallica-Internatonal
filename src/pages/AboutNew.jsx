import React, { useRef } from "react";
import AboutImage from "../assets/about/about_image.png";
import CompanyOverview from "../assets/about/Company_Overview.png";
import ExecutionImage from "../assets/about/execution_images.png";
import ExecutionDesign from "../assets/about/execution_design.png";
import { FaCaretDown } from "react-icons/fa";
import { IoCaretDownSharp } from "react-icons/io5";
import StrategicSourcing from "../assets/about/strategic_sourcing.png";
import ShortenSupplyChain from "../assets/about/shorten_supply_chain.png";
import Financial from "../assets/about/financial.png";
import RelationshipManagement from "../assets/about/relationship_management.png";
import SpDesign from "../assets/about/SP_design.png";
import Som from "../assets/about/SOM.png";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import MvBg from "../assets/about/M&V_bg.png";
import {
  Navigation,
  Pagination,
  Scrollbar,
  FreeMode,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Services from "../components/Services";
function AboutNew() {
  const swiperReff = useRef();
  const handleNext = () => {
    console.log(swiperReff.current.swiper.slideNext());
  };
  const handlePrev = () => {
    console.log(swiperReff.current.swiper.slidePrev());
  };
  const Images = [
    StrategicSourcing,
    ShortenSupplyChain,
    Financial,
    RelationshipManagement,
    Som,
  ];
  const execution = [
    {
      id: 1,
      desc: "Validate identified deposits in SADC region of important mineral/natural resources essential for our targeted industries.",
    },
    {
      id: 2,
      desc: "Create technical collaborations and partnerships in different regions in SADC to exploit the deposits economically and efficiently.",
    },
    {
      id: 3,
      desc: "Develop and build logistics infrastructure to ensure speedy and efficient delivery.",
    },
    {
      id: 4,
      desc: "Acquire and service top customers by volumes in mining and agriculture industries, thereby achieving high tonnages and robust cash flows.",
    },
    {
      id: 5,
      desc: "Relentless focus on operations efficiency, process improvements and technical enhancements even at client end to maximize value delivery and ensure customer delight.",
    },
  ];
  const businessPlan = [
    {
      id: 1,
      title: "Strategic Sourcing",
      desc: "With our strong technical know-how we will source critical raw materials as close as possible to the points of delivery thereby cut down the millions of $ in costs borne primarily by the mining industry.",
    },
    {
      id: 2,
      title: "Shorten Supply Chain",
      desc: "This will come from our extensive experience of shipping ,logistics and warehousing thereby moving products to the industries which require them in the shortest possible time frames and the least possible costs.",
    },
    {
      id: 3,
      title: "Leverage Financial Capability",
      desc: "Leverage our financial capability to achieve economies of scale thereby maximize value for our clients.",
    },
    {
      id: 4,
      title: "Strategic Operations Management",
      desc: "This will entail going a step further than delivering products and will involve addressing key technical problems at client facilities, to ensure greater dependence on our overall value delivery.",
    },
    {
      id: 5,
      title: "Customer Relationship Management",
      desc: "Build upon our knowledge of the market to create long term customer engagements to complement economies of scale approach to value creation.",
    },
  ];
  return (
    <div>
      {/* hero section */}
      <div className="relative  mt-[96px] h-[683px] bg-red-200 mb-[120px]">
        <img
          className="h-full w-full object-cover "
          src={AboutImage}
          alt="AboutImage"
        />
        <div className="absolute z-10 left-[64px] top-[294px] flex flex-col w-[45%]">
          <div className=" w-full flex flex-row">
            <div className="  w-[6px]  bg-[#F45634] rounded-l-[10px] rounded-r-[1px] mr-3   "></div>
            <div className="flex flex-col pl-3 pr-3  ">
              <div className="font-Ptsans text-[64px] text-white font-bold leading-[68px] ">
                Metallica Resources
              </div>
              <div className="font-Ptsans text-[64px] text-white font-bold leading-[68px] ">
                What is our Focus ?
              </div>
            </div>
          </div>
          <p className="font-Inter text-[#E3E3E4] text-lg leading-[26px] w-full mt-3 ">
            Formed by skilled professionals with over a decade of profound
            expertise in mining, agriculture, and logistics & warehousing
            sectors, the company strives to offer optimal solutions to large and
            medium-sized business groups across Africa.
          </p>
          <div className="mt-[32px] flex flex-row gap-x-6">
            <button
              className="flex  items-center justify-center pr-7 pl-7 pt-4 pb-4   w-[132px] h-[52px] rounded-[8px] 
          bg-gradient-to-tr from-[#1E1C49] via-[#9D2161] to-[#F45634]  font-Inter text-[#FDFDFD] text-sm leading-5 shadow
           hover:scale-125 transition-all delay-150 duration-250 ease-linear       "
            >
              Contact Us
            </button>
            <button
              className="flex items-center justify-center  pr-7 pl-7 pt-4 pb-4   w-[156px] h-[52px] rounded-[8px] 
            font-Inter text-[#FDFDFD] text-sm leading-5 shadow-xs border-[1px] border-[#FDFDFD] hover:bg-[#FDFDFD] hover:text-black font-semibold 
            transition-all delay-150 duration-250 ease-linear"
            >
              View Services
            </button>
          </div>
        </div>
      </div>
      {/* company overview  */}
      <div className="mb-[120px]  ">
        <div className="flex flex-row ml-[7%] mr-[7%]  ">
          <div className="bg-red-200 w-full  ">
            <img
              className="h-full w-full object-cover"
              src={CompanyOverview}
              alt="CompanyOverview"
            />
          </div>
          <div className="w-full ">
            <div className="flex flex-col gap-y-4 mt-[38px] mb-[38px] ml-[40px]">
              <div className="text-[#281C49] font-Ptsans text-[48px] font-bold">
                Our Company Overview
              </div>
              <div className="font-Inter text-lg leading-7 text-[#6C6C6C]  ">
                Metallica Resources International FZE (Metallica) is founded by
                entrepreneurs with decades of experience in natural resources,
                manufacturing, shipping, inland logistics and trade finance in
                Southern and East African region. Leveraging this solid
                experience, knowledge and strong financial capability, Metallica
                is able to make niche offerings to several manufacturing
                industries in Africa thereby making it a value creating
                enterprise not just for the shareholders but also for the
                industry at large.
              </div>
              <div className="font-Inter text-lg leading-7 text-[#6C6C6C]">
                The focus of Metallica is on trading of natural resources and
                raw materials used by mining & metals, fertilizer, paint, glass
                and agriculture industries. The target clients are large,
                reputed corporates in the industries mentioned above. The
                products are planned to be sourced largely from the African
                region but also from several other parts of the world depending
                on availability and overall price competitiveness.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Stretigic Pillars  */}
      <div className=" bg-[#281C49] mb-[120px] pt-[92px] pb-[132px] relative overflow-hidden">
        <div className="absolute  right-0 top-0">
          <img src={SpDesign} alt={SpDesign} />
        </div>
        <div className=" ml-[1%] mr-[1%]">
          <div className="mb-[64px]">
            <h1 className=" text-white text-center text-[48px] font-Ptsans font-bold mb-2 ">
              Strategic Pillars
            </h1>
            <p className="text-center font-Inter text-lg leading-[26px] text-[#F1F1F2]">
              Operational Excellence: Building a Foundation for Success
            </p>
          </div>
          <div className="flex flex-row gap-x-[56px] items-center">
            <button
              onClick={handlePrev}
              className=" z-10 text-white w-[80px] h-[50px] rounded-full flex items-center justify-center text-xl
              bg-gradient-to-tr from-[#1E1C49] via-[#9D2161] to-[#F45634]"
            >
              <FaAngleLeft />
            </button>
            <Swiper
              className=""
              slidesPerView={3}
              spaceBetween={56}
              freeMode={true}
              navigation={false}
              ref={swiperReff}
              loop={true}
              autoplay={{
                delay: 3000, // Time in milliseconds between slide transitions
                disableOnInteraction: false, // Disable autoplay when user interacts with the swiper
              }}
              modules={[Navigation, Pagination, Scrollbar, FreeMode, Autoplay]}
            >
              {businessPlan.map((value) => (
                <div key={value.id}>
                  <SwiperSlide
                    key={value.id}
                    className=" rounded-[4px] z-10 bg-white pt-[48px] pb-[48px] pl-6 pr-6 min-h-[450px] "
                  >
                    <div className="flex flex-col justify-center items-center ">
                      <div className="flex justify-center mb-[32px]">
                        <img src={Images[value.id - 1]} />
                      </div>
                      <h1 className="mb-2 text-[28px] font-Ptsans font-bold text-center text-[#281C49]">
                        {value.title}
                      </h1>
                      <p className="text-center text-[#6C6C6C] text-[16px] leading-[26px] ">
                        {value.desc}
                      </p>
                    </div>
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
            <button
              onClick={handleNext}
              className="text-white w-[80px] z-10 h-[50px] rounded-full flex items-center justify-center text-xl
               bg-gradient-to-tr from-[#1E1C49] via-[#9D2161] to-[#F45634]"
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
      {/* company execution */}
      <div className="mb-[120px] ml-[7%] mr-[7%] ">
        <div className="flex flex-col mb-[64px] ">
          <div className="mb-[8px] text-5xl font-Ptsans font-bold text-[#281C49] ">
            Execution
          </div>
          <div className="mb-[8px] text-lg font-Inter   text-[#939596] ">
            Implementation Mastery: Turning Strategy into Action into 5 steps
          </div>
        </div>
        <div className="flex flex-row  gap-x-[100px]">
          <div className="flex flex-col w-[65%]">
            <div className="flex flex-col gap-y-[80px]">
              {execution.map((eachVal) => (
                <div
                  key={eachVal.id}
                  className="flex flex-row relative items-center execution-card min-h-[116px] pt-5 pb-6 pr-8 pl-8 gap-x-8 rounded-[32px] "
                >
                  <div
                    className="flex bg-[#F45634] w-[72px] h-[72px] rounded-[16px] items-center justify-center text-white 
                  font-Inter font-bold text-[34px]  "
                  >
                    0{eachVal.id}
                  </div>
                  <div className=" w-[100%] font-Inter text-xl leading-[30px] text-[#6C6C6C]">
                    {eachVal.desc}
                  </div>
                  {eachVal.id !== 5 && (
                    <div className="">
                      <div className="absolute -z-20 left-[60px] -bottom-[80px]  h-[calc(80px)]   border-dashed border-[#281C49] border-s-4  "></div>
                      <div className=" absolute -z-10 left-[37px] -bottom-[96px]  text-[50px] text-[#281C49]">
                        {/* <FaCaretDown /> */}
                        <IoCaretDownSharp />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center w-[35%] ">
            <div className="relative">
              <img
                className="w-full object-cover"
                src={ExecutionImage}
                alt=" ExecutionImage"
              />
              <img
                className="absolute -top-[120px] right-0 -z-10"
                src={ExecutionDesign}
                alt="ExecutionDesign"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission  and vision  */}

      <div>
        <div className="min-h-[562px] MissionAndVision w-screen  mb-[120px]">
          {/* <img
            className="h-full w-full object-cover"
            src={MvBg}
            alt="Mission and vison Bg"
          /> */}
          <div className="flex flex-col w-[58%] pt-[91px] pb-[91px] ml-[7%] ">
            <div className="w-full flex flex-row">
              <div className=" w-[6px]  bg-[#F45634] rounded-l-[10px] rounded-r-[1px] mr-3   "></div>
              <div className="flex flex-col pl-3 pr-3  ">
                <div className="font-Ptsans text-[64px] text-white font-bold leading-[68px] mb-2">
                  What is Our
                </div>
                <div className="font-Ptsans text-[64px] text-white font-bold leading-[68px] ">
                  Mission & Vision
                </div>
              </div>
            </div>
            <p className=" w-full font-Inter text-[#F1F1F2] text-[20px] leading-[32px]  mt-3 ">
              Our mission is to become the #1 company in trading of chosen
              natural resources and niche raw materials for industrial sector in
              South African Development Community (SADC) region by 2027.
            </p>
            <p className=" w-full font-Inter text-[#F1F1F2] text-[20px] leading-[32px]  mt-8 ">
              Our vision is to become a listed entity by 2030, creating value by
              virtue of owning high grade mineral assets and servicing an
              enviable client base comprising of top industrial customers in
              SADC region.
            </p>
          </div>
        </div>
      </div>

      {/* Our services  */}
      <div className="mb-[120px] ml-[7%] mr-[7%]">
        <h1 className="text-center font-Ptsans text-[48px] text-[#281C49] font-bold mb-[64px] ">
          Explore Our Services
        </h1>
        <Services />
      </div>
    </div>
  );
}
// w-[683px] h-[481px]
export default AboutNew;
