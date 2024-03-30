import React from "react";
import HomeVideo from "../assets/homePage2.mp4";
import Light from "../assets/Light.png";
import GradientButton from "../components/GradientButton.jsx";
import WhatWeDo from "../assets/home/steptodown1.png";
import WhyChooseUs from "../assets/home/whychooseus.png";
import Services from "../components/Services.jsx";
import homeDesign from "../assets/home/homebgdesign.png";
import Gallery from "../assets/home/Gallery.png";
import World from "../assets/home/world.png";
import CheckCircle2 from "../assets/home/CheckCircle2.svg";
import Chat from "../assets/home/Chat.svg";
import ContactFormNew from "../components/ContactFormNew.jsx";
import SpDesign from "../assets/about/SP_design.png";
import ContactSection from "../components/ContactSection.jsx";
import { useNavigate } from "react-router-dom";
function HomeNew() {
  const navigate = useNavigate();
  const Strenghts = [
    {
      id: 1,
      desc: "Building Strong Client Relationships",
    },
    {
      id: 2,
      desc: "Efficient Operations Management",
    },
    {
      id: 3,
      desc: "Competitive Sourcing",
    },
    {
      id: 4,
      desc: "Effective Financing Solutions",
    },
    {
      id: 5,
      desc: "Reliable Cargo Movement with Emphasis on Speed, Safety, and Precision",
    },
  ];
  return (
    <div className="mt-[96px] overflow-hidden">
      {/* Hero section */}
      <div className="h-[318px] md:h-[570px] lg:h-[768px]   w-[100wv] relative overflow-hidden ">
        <div className="w-full h-full">
          <video className="h-full w-full object-cover" muted loop autoPlay>
            <source src={HomeVideo} type="video/mp4" />
          </video>
        </div>
        {/* blur */}
        <div className="w-full h-full bg-[#281C49] absolute top-0 left-0 bg-opacity-[60%] z-10  "></div>
        {/* //light */}
        <div className=" absolute top-0 md:right-0 -right-[70px] z-20 h-full">
          <img className="h-full object-cover" src={Light} />
        </div>
        {/* text */}
        <div className="absolute  z-30 top-0 left-0  w-full h-full flex flex-col gap-y-[16px] md:gap-y-[24px] lg:gap-y-[48px] items-center justify-center  ">
          <h1 className="text-[32px]   leading-[38px] lg:text-[64px]   lg:leading-[68px]  md:text-[48px]   md:leading-[56px] text-center ml-[3%] mr-[3%] md:ml-[7%] md:mr-[7%]  lg:w-[58%] text-[#FDFDFD] font-Ptsans">
            Your Partner in Natural Resource Trading and Industrial Solutions
          </h1>

          <div
            onClick={() => {
              navigate(`/services`);
            }}
          >
            <GradientButton
              text={`View Services`}
              fontStyle={`font-Inter font-semibold`}
            />
          </div>
        </div>
      </div>
      {/* what we do */}
      <div className=" bg-[#F9F7FF] py-[24px] md:py-[56px]   lg:pt-[120px] lg:pb-[91px] lg:mb-[120px] mb-[40px] md:mb-[60px]">
        <div className="ml-[7%] mr-[7%] flex flex-col md:flex-row gap-y-[24px] md:gap-x-[21px] lg:gap-x-[40px] lg:h-[481px] items-center">
          <div className=" h-full w-full flex flex-col gap-y-4 md:pt-[80px] md:pb-[80px] ">
            <div className="text-[#281C49] font-Ptsans text-[24px]  md:text-[32px] lg:text-[48px] font-bold">
              What We Do?
            </div>
            <div className="font-Inter text-[12px] leading-[18px]  lg:text-lg lg:leading-7 text-[#6C6C6C]  ">
              Metallica Resources International FZCO leverages the expertise of
              seasoned professionals with over a decade of experience in mining,
              agriculture, and logistics & warehousing sectors in the SADC
              region of Africa. Our company is dedicated to combining
              comprehensive knowledge of regional trade with operational and
              commercial capabilities to deliver optimal solutions to large and
              medium business groups across Africa.
            </div>
            <div
              onClick={() => {
                navigate(`/about`);
              }}
            >
              <GradientButton
                text={`Learn More ->`}
                fontStyle={`font-Inter mt-[16px] text-[14px]  font-semibold  `}
              />
            </div>
          </div>

          <div className="w-full h-full">
            <img className="h-full w-full" src={WhatWeDo} alt="WhatWeDo" />
          </div>
        </div>
      </div>
      {/* Our Strenghts */}
      <div className="mb-[40px] md:mb-[60px] lg:mb-[120px] ml-[7%] mr-[7%]  ">
        <div className=" mb-[24px] md:mb-[32px] lg:mb-[56px]">
          <h1 className="text-[24px] md:text-[32px] lg:text-[48px] text-[#281C49] font-Ptsans font-bold   text-center mb-[4px] lg:mb-[8px]">
            Our Strengths
          </h1>
          <p className="font-Inter text-[14px] leading-[18px] md:text-[16px] md:leading-[26px]   text-[#6C6C6C] text-center ">
            Our services are designed to cater to your specific needs and goals
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-y-[31px]  md:gap-x-[31px] lg:gap-x-[63px] max-h-[562px]">
          <div className="w-full">
            <img
              className="h-full w-full object-cover"
              src={Gallery}
              alt="Gallery"
            />
          </div>
          <div className=" h-full w-full flex flex-col gap-y-[12px] lg:gap-y-[48px] pt-[12px] pb-[12px] lg:pt-[53px] lg:pb-[53px] ">
            {Strenghts.map((value) => (
              <div
                key={value.id}
                className="flex flex-row gap-x-5 items-center"
              >
                <div>
                  <div className="w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] bg-[#F9F7FF] flex items-center justify-center rounded-xl text-[16px] text-[#281C49] font-Ptsans leading-[32px] ">
                    <img src={CheckCircle2} />
                  </div>
                </div>
                <div className="font-Inter text-[16px]  leading-[20px] md:leading-[24px] lg:text-xl  text-[#252526]  font-semibold ">
                  {value.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Explore our services */}
      <div className="bg-[#281C49] mb-[40px] md:mb-[60px] lg:mb-[120px] pt-[60px]  pb-[60px] md:pt-[56px]  md:pb-[56px] lg:pt-[112px]  lg:pb-[112px] overflow-hidden w-screen relative ">
        <div className="absolute top-0 w-full h-full">
          <img className="w-full h-full object-cover" src={homeDesign} />
        </div>
        <div className="mb-[32px] lg:mb-[64px]  z-10 ml-[7%] mr-[7%]">
          <h1 className=" text-[24px] md:text-[32px] lg:text-[48px] text-white font-Ptsans font-bold   text-center  mb-[8px]">
            Explore Our Services
          </h1>
          <p className="font-Inter text-[14px] leading-[18px] md:text-[16px] md:leading-[26px]    text-[#F1F1F2]  text-center ">
            We provide exceptional services tailored to our clients' specific
            needs.
          </p>
        </div>
        <div className="ml-[7%] mr-[7%] ">
          <Services />
        </div>
      </div>

      {/* why choose us  */}
      <div className=" mb-[40px] md:mb-[60px] lg:mb-[120px] ml-[7%] mr-[7%] ">
        {/* heading and subheading */}
        <div className="mb-[32px] md:mb-[64px]">
          <h1 className="text-[24px] md:text-[32px] lg:text-[48px] text-[#281C49] font-Ptsans font-bold   text-center  mb-[8px]">
            Why you should choose us?
          </h1>
          <p className="font-Inter  text-[14px] leading-[18px] md:text-[16px] md:leading-[26px]  lg:text-lg lg:leading-7 text-[#6C6C6C] text-center ">
            Key Advantages of Choosing Our Services
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-y-[32px] md:gap-x-[30px] lg:gap-x-[75px] lg:ml-[10%] lg:mr-[10%] md:h-[316px]  lg:h-[419px] items-center ">
          <div className="h-full w-full  ">
            <img className="w-full h-full  object-cover  " src={WhyChooseUs} />
          </div>
          <div className=" h-full w-full flex flex-col gap-y-8 lg:pt-[28px] lg:pb-[28px]  ">
            <div className="flex flex-row gap-x-[8px] md:gap-x-[16px] ">
              <div>
                <div className="w-[32px] h-[32px] lg:w-[43px] lg:h-[43px] bg-[#F4F0FF] flex items-center justify-center rounded-full text-[16px] text-[#281C49] font-Ptsans leading-[32px] ">
                  1
                </div>
              </div>

              <div className="w-full flex flex-col gap-y-1">
                <div className="text-[#161C2D] font-Ptsans text-[24px] leading-[28px] md:text-[28px] md:leading-[33px] lg:text-[34px] lg:leading-[40px] font-bold">
                  Industry Expertise
                </div>
                <div className="font-Inter text-[12px] leading-[18px] md:text-[14px] md:leading-[24px] lg:text-[16px] lg:leading-[26px] text-[#6C6C6C]  ">
                  Leverage our expertise in mining, agriculture, and logistics
                  for tailored solutions to your needs
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-x-[8px] md:gap-x-[16px] ">
              <div>
                <div className="w-[32px] h-[32px] lg:w-[43px] lg:h-[43px] bg-[#F4F0FF] flex items-center justify-center rounded-full text-[16px] text-[#281C49] font-Ptsans leading-[32px] ">
                  2
                </div>
              </div>
              <div className="w-full flex flex-col gap-y-1">
                <div className="text-[#161C2D] font-Ptsans text-[24px] leading-[28px] md:text-[28px] md:leading-[33px] lg:text-[34px] lg:leading-[40px] font-bold">
                  Seamless Execution
                </div>
                <div className="font-Inter  text-[12px] leading-[18px] md:text-[14px] md:leading-[24px] lg:text-[16px] lg:leading-[26px] text-[#6C6C6C]  ">
                  Our team executes strategies with precision, ensuring timely
                  results.
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-x-[8px] md:gap-x-[16px]">
              <div>
                <div className="w-[32px] h-[32px] lg:w-[43px] lg:h-[43px] bg-[#F4F0FF] flex items-center justify-center rounded-full text-[16px] text-[#281C49] font-Ptsans leading-[32px] ">
                  3
                </div>
              </div>
              <div className="w-full flex flex-col gap-y-1">
                <div className="text-[#161C2D] font-Ptsans text-[24px] leading-[28px] md:text-[28px] md:leading-[33px] lg:text-[34px] lg:leading-[40px] font-bold">
                  Client-Centric Approach
                </div>
                <div className="font-Inter text-[12px] leading-[18px] md:text-[14px] md:leading-[24px] lg:text-[16px] lg:leading-[26px] text-[#6C6C6C]  ">
                  We prioritize satisfaction, providing flexible solutions to
                  meet your goals.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our location */}
      <div className="  pt-[24px] pb-[40px] md:pt-[32px] md:pb-[60px] lg:pt-[40px] lg:pb-[120px] bg-[#F9F7FF] relative z-10 ">
        <div className="ml-[7%] mr-[7%]">
          <div className="mb-[24px] md:mb-[32px]">
            <h1 className=" text-[24px] md:text-[32px] lg:text-[48px] text-[#281C49] font-Ptsans font-bold   text-center  mb-[4px]">
              Where We Operate
            </h1>
            <p className="font-Inter  text-[14px] leading-[18px] md:text-[16px] md:leading-[26px]  lg:text-lg lg:leading-7 text-[#6C6C6C] text-center ">
              Global reach of our export operations
            </p>
          </div>
          <div className="w-full mb-[8px] ">
            <img className="w-full " src={World} />
          </div>
          <div
            onClick={() => {
              navigate(`/contact`);
            }}
            className="w-full flex justify-center "
          >
            <button className="lg:py-[16px] lg:px-[28px] md:py-[10px] md:px-[14px] py-[8px] px-[8px] bg-white  border-[1px] gradient-border-button rounded-lg font-Inter font-semibold text-[14px] leading-[20px] ">
              <span className="gradient-text-button">Contact Us</span>
            </button>
          </div>
        </div>
      </div>

      {/* Contact section */}

      <ContactSection />
    </div>
  );
}

export default HomeNew;
