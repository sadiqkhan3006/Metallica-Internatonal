import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import contactUs from "../assets/contactUs.jpg";
import ContactForm from "./ContactForm";
function Contact() {
  return (
    <>
      <div className=" h-[750px] relative">
        <div className="h-full w-full">
          <img
            loading="lazy"
            className="object-cover h-full w-full"
            src={contactUs}
          />
        </div>
        <div
          className="pt-7 pb-7  rounded-lg absolute z-10 bg-[#281D49] bg-opacity-90 md:left-[15%] md:right-[15%] 
        left-[7%] right-[7%] -bottom-[150px] w-[86%] md:w-[70%] flex flex-col gap-y-3 pl-[7%] md:pl-0 md:items-center justify-center
"
        >
          <h1 className="font-bold text-[36px] md:text-[40px] leading-[48px] tracking-tight text-[#FF5A33]  ">
            Contact Us
          </h1>

          <p className=" w-[85%] lg:w-[70%] text-[16px] md:text-xl text-left text-white mb-4">
            With a focus on delivering excellence in every aspect of our
            operations, we strive to provide innovative and efficient services
            to meet the diverse needs of our clients. Whether you're looking to
            explore new trading opportunities, optimize your mining operations,
            or streamline your logistics processes, our experienced team is here
            to assist you every step of the way. Contact us today to learn more
            about how we can help your business succeed.
          </p>
        </div>
      </div>
      <div className="mt-[calc(75px+130px)] lg:mt-[calc(75px+150px)] ml-[7%] mr-[7%] text-[#281D49] ">
        <div className="flex flex-col lg:flex-row w-full  gap-x-10 gap-y-10 items-center justify-between ">
          <div className="w-full bg-white flex flex-col justify-center contact-Style h-[400px] gap-y-12">
            <h1 className="text-4xl font-bold ml-[10%] mr-3">
              Connect with Us
            </h1>
            <div className="flex flex-col ml-[10%] mr-3 gap-y-6">
              <div className="flex w-[100%] flex-row items-center gap-x-4 text-2xl">
                <span>
                  <MdOutlineEmail />
                </span>
                <p className="text-wrap w-[80%] ">dummymail123@gmail.com</p>
              </div>
              <div className="flex items-center gap-x-4 text-2xl">
                <span>
                  <IoCall />
                </span>
                <p className="text-wrap w-[80%] ">+91 1234567891</p>
              </div>
              <div className="flex items-center gap-x-4 text-2xl">
                <span>
                  <IoLocationSharp />
                </span>
                <p className="text-wrap w-[80%] ">Dubai</p>
              </div>
            </div>
          </div>

          <div className="w-full h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0060394430707!2d72.83461397520614!3d19.1073909821037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sSVKM&#39;s%20Dwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1708438262143!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="mt-[60px]">
          <h1 className="text-center text-4xl font-bold mb-[36px]">
            Reach Out To Us
          </h1>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
{
  /* <div className="  h-[400px] w-full  ">
            <div className="flex flex-col gap-y-4 ml-[5%]  mr-[5%] mb-[10%]  h-[100%] bg-white contact-Style">
              <div className="mt-[10%] ml-[10%] mr-[10%] flex flex-col gap-y-6">
                <h1 className="text-4xl font-bold mb-4">Connect with Us</h1>
                <div className="flex flex-row items-center gap-x-4 text-2xl">
                  <span>
                    <MdOutlineEmail />
                  </span>
                  <p>dummymail123@gmail.com</p>
                </div>
                <div className="flex flex-row items-center gap-x-4 text-2xl">
                  <span>
                    <IoCall />
                  </span>
                  <p>+91 1234567891</p>
                </div>
                <div className="flex flex-row items-center gap-x-4 text-2xl">
                  <span>
                    <IoLocationSharp />
                  </span>
                  <p>Dubai</p>
                </div>
              </div>
            </div>
          </div> */
}
export default Contact;
{
  /* <div className="w-full bg-white flex flex-col justify-center contact-Style h-[400px] gap-y-12">
            <h1 className="text-4xl font-bold ml-[10%]">Connect with Us</h1>
            <div className="flex w-[100%] flex-col ml-[10%] gap-y-6">
              <div className="flex w-[100%] flex-row items-center gap-x-4 text-2xl">
                <span>
                  <MdOutlineEmail />
                </span>
                <p className="flex-1">dummymail123@gmail.com</p>
              </div>
              <div className="flex flex-row items-center gap-x-4 text-2xl">
                <span>
                  <IoCall />
                </span>
                <p>+91 1234567891</p>
              </div>
              <div className="flex flex-row items-center gap-x-4 text-2xl">
                <span>
                  <IoLocationSharp />
                </span>
                <p>Dubai</p>
              </div>
            </div>
          </div> */
}
