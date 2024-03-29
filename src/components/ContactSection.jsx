import React from "react";
import Chat from "../assets/home/Chat.svg";
import ContactFormNew from "./ContactFormNew.jsx";
import SpDesign from "../assets/about/SP_design.png";
function ContactSection() {
  return (
    <div>
      <div className="py-[32px] md:py-[46px] lg:pt-[115px] lg:pb-[115px] bg-[#281C49] relative w-screen ">
        <div className="absolute top-0 lg:right-0  right-[-400px]  ">
          <img src={SpDesign} alt="SpDesign" />
        </div>
        <div className="mx-[7%] lg:ml-[14%] lg:mr-[14%] flex flex-col gap-y-[43px] md:flex-row md:gap-x-[43px] lg:gap-x-0  justify-between items-center z-10 ">
          <div className=" w-full">
            <div className="flex flex-col gap-y-6 lg:w-[71%]">
              <div>
                <img
                  className="w-[56px] h-[56px] md:w-[87px] md:h-[87px]"
                  src={Chat}
                  alt="Chat"
                />
              </div>
              <div className="text-white  font-Ptsans text-[24px] md:text-[34px] lg:leading-[40px]  font-bold">
                Get in Touch: Connect with Metallica Resources
              </div>
              <div className="text-white font-Inter md:text-[16px] md:leading-[26px] text-[14px] leading-[18px] ">
                Whether you're seeking tailored solutions, have questions about
                our services, or wish to explore potential partnerships, our
                team is here to assist you every step of the way.
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="lg:ml-[20%]">
              <ContactFormNew />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
