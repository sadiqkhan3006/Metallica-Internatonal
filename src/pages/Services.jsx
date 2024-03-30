import React from "react";
import Light from "../assets/Light.png";
import servicesHero from "../assets/servicesHero.png";
import ServicesCards from "../components/ServicesCards";
import ContactSection from "../components/ContactSection";
function Services() {
  return (
    <div className="mt-[96px]">
      <div className="lg:h-[683px] h-[318px] md:h-[479px] mb-[40px] md:mb-[60px] lg:mb-[120px]  w-[100wv] relative  ">
        <div className="w-full h-full">
          <img
            className="h-full w-full object-cover"
            src={servicesHero}
            alt="servicesHero"
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
                Tailored Solutions
              </div>
              <div className="font-Ptsans  text-white font-bold  text-[32px]   leading-[38px] lg:text-[64px]   lg:leading-[68px]  md:text-[48px]   md:leading-[56px] ">
                To Drive Your Success
              </div>
            </div>
          </div>
          <p className="font-Inter text-[#E3E3E4] md:text-[16px] md:leading-[26px] text-[12px] leading-[18px] lg:text-lg lg:leading-[26px] w-full  ">
            At Metallica Resources, we understand that every client has unique
            needs and objectives. That's why we offer customized solutions
            designed to address your specific challenges and drive your success
          </p>
        </div>
      </div>
      <div className="lg:mb-[120px] mb-[40px] md:mb-[60px] ml-[7%] mr-[7%]">
        <h1 className="text-center font-Ptsans  text-[#281C49] font-bold mb-[32px] lg:mb-[64px]  text-[24px] md:text-[32px] lg:text-[48px]">
          Explore Our Services
        </h1>
        <ServicesCards />
      </div>
      <ContactSection />
    </div>
  );
}

export default Services;
