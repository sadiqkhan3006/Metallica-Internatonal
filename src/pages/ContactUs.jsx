import React from "react";
import Light from "../assets/Light.png";
import ContatcPage from "../assets/ContatcPage.png";
import ContactForm from "../components/ContactFormNew";
import mailIcon from "../assets/mailIcon.svg";
import phoneIcon from "../assets/phoneIcon.svg";
import locationIcon from "../assets/locationIcon.svg";
function ContactUs() {
  return (
    <div className="mt-[96px]">
      <div className="h-[318px] md:h-[479px] lg:h-[683px]  w-[100wv] relative  ">
        <div className="w-full h-full">
          <img
            className="h-full w-full object-cover"
            src={ContatcPage}
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
        <div className="absolute  z-30 top-0 left-0  lg:w-[45%] h-full flex flex-col gap-y-[12px] lg:pt-[294px]  lg:pl-[64px]  mx-[7%] lg:mx-0  justify-center lg:justify-normal ">
          <div className=" w-full flex flex-row">
            <div className="  w-[6px]  bg-[#F45634] rounded-l-[10px] rounded-r-[1px] md:mr-3 mr-1   "></div>
            <div className="flex flex-col pl-3 pr-3  ">
              <div className="font-Ptsans  text-white font-bold  text-[32px]   leading-[38px] lg:text-[64px]   lg:leading-[68px]  md:text-[48px]   md:leading-[56px] ">
                Get in touch
              </div>
              <div className="font-Ptsans  text-white font-bold  text-[32px]   leading-[38px] lg:text-[64px]   lg:leading-[68px]  md:text-[48px]   md:leading-[56px]">
                With Metallica Resources
              </div>
            </div>
          </div>
          <p className="font-Inter text-[#E3E3E4] text-[12px] leading-[18px] md:text-[16px] md:leading-[26px] w-full  md:mt-3 ">
            With a focus on delivering excellence in every aspect of our
            operations, we strive to provide innovative and efficient services
            to meet the diverse needs of our clients.Contact us today to learn
            more about how we can help your business succeed.
          </p>
        </div>
      </div>
      {/* map and contatct section */}
      <div className="flex flex-col-reverse lg:flex-row gap-x-[82px] md:gap-y-[25px] lg:mr-[3%] lg:ml-0 ">
        <div className="w-full  ">
          <iframe
            className="lg:h-full lg:w-full h-[255px] md:h-[408px]  w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.4987177469357!2d55.37312019678956!3d25.118824800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f65006738f61f%3A0xf34fd1b52dc98a67!2sBuilding%20A4%2C%20Dubai%20Digital%20Park%2C%20Dubai%20Silicon%20Oasis!5e0!3m2!1sen!2sin!4v1710569841532!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="w-full pt-[35px] md:pt-[67px] lg:pt-[43px]">
          <div>
            <h1 className="text-[#281C49] font-Ptsans text-[24px] lg:text-[34px] lg:leading-[40px] font-bold mb-[16px] md:mb-[24px] lg:mb-[64px] ml-[24px] mr-[24px] lg:text-left text-center">
              Fill up the form our team will get back to you{" "}
            </h1>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="bg-[#F4F0FF] py-[32px] lg:py-[64px] lg:pl-[7%] lg:pr-[7%] md:pl-[3%] md:pr-[3%] px-[7%]">
        <div className=" flex flex-col md:flex-row lg:justify-between gap-x-[16px] gap-y-[24px]  ">
          <div className="flex flex-row gap-x-2 items-center">
            <div>
              <img
                className="w-[32px] h-[32px] lg:h-full lg:w-full"
                src={mailIcon}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="font-Inter text-[12px] font-bold leading-[16px] text-[#B8BABC] ">
                Email
              </div>
              <div className="font-Inter text-[13px] leading-[17px] lg:text-[16px]  lg:leading-[26px] font-bold  text-[#281C49] ">
                info@metallicainternational.com
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-x-2 items-center">
            <div className="">
              <img
                className="w-[32px] h-[32px] lg:h-full lg:w-full"
                src={phoneIcon}
              />
            </div>
            <div className="flex flex-col gap-y-2 h-full w-full">
              <div className="font-Inter text-[12px] font-bold leading-[16px] text-[#B8BABC] ">
                Phone Number
              </div>
              <div className="font-Inter text-[13px] leading-[17px] lg:text-[16px]  lg:leading-[26px] text-[#281C49] font-bold">
                +91 9167730572 / +971 585879167
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-x-2 items-center">
            <div>
              <img
                className="w-[32px] h-[32px] lg:h-full lg:w-full"
                src={locationIcon}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="font-Inter text-[12px] font-bold leading-[16px] text-[#B8BABC] ">
                Location
              </div>
              <div className="font-Inter  font-bold  text-[13px] leading-[17px] lg:text-[16px]  lg:leading-[26px] text-[#281C49] ">
                Silicon Oasis, Dubai (UAE)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
