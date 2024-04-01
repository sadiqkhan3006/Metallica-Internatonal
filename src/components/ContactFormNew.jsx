import React from "react";
import Eclipse from "../assets/Ellipse3.png";
import { useLocation, matchPath } from "react-router-dom";
import { useForm } from "@formspree/react";
import { toast } from "react-hot-toast";
function ContactForm() {
  const [state, handleSubmit] = useForm("xnqebqry");
  //console.log(state);
  const location = useLocation();
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Loading...");
    const response = await handleSubmit(e);
    console.log("Response:", response);
    if (!state.errors) {
      toast.success("Message sent successfully");
    } else {
      toast.error("Error while sending message");
    }
    toast.dismiss(toastId);
  };
  return (
    <div className=" flex flex-col items-center justify-center lg:pb-12 z-10 ">
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-[100%] bg-white items-center 
       rounded-[10px] p-[24px] formStyle "
      >
        <div className="w-full flex flex-col gap-y-4 ">
          <div className="flex flex-col gap-y-[8px] lg:gap-y-[13px]">
            <label
              htmlFor="name"
              className="text-[12px] leading-[16px] lg:text-[16px] lg:leading-5 font-Inter font-bold  text-[#281D49]"
            >
              Name<span className="text-[#FF5A33] ">*</span>
            </label>
            <input
              className={` ${
                matchRoute(`/contact`) ? "bg-[#F1F1F2]" : ""
              } pt-3 pb-3 pr-[18px] pl-[18px] h-[40px] lg:h-[50px] focus:outline-none  
              rounded-[8px]  font-Inter  border-[1px]
               border-[#E3E3E4] 
              text-[14px] leading-6 text-[#281C49]`}
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              required={true}
            />
          </div>
          <div className="flex flex-col gap-y-[8px] lg:gap-y-[13px]">
            <label
              className="text-[12px] leading-[16px] lg:text-[16px] lg:leading-5 font-Inter font-bold  text-[#281D49]"
              htmlFor="email"
            >
              Email<span className="text-[#FF5A33] ">*</span>
            </label>
            <input
              className={` ${
                matchRoute(`/contact`) ? "bg-[#F1F1F2]" : ""
              } pt-3 pb-3 pr-[18px] pl-[18px] h-[40px] lg:h-[50px] focus:outline-none  
              rounded-[8px]  font-Inter  border-[1px]
               border-[#E3E3E4] 
              text-[14px] leading-6 text-[#281C49]`}
              type="email"
              name="email"
              id="email"
              placeholder="johndoe123@gmail.com"
              required={true}
            />
          </div>
          <div className="flex flex-col gap-y-[8px] lg:gap-y-[13px]">
            <label
              className="text-[12px] leading-[16px] lg:text-[16px] lg:leading-5 font-Inter font-bold  text-[#281D49]"
              htmlFor="company"
            >
              Company
            </label>
            <input
              className={` ${
                matchRoute(`/contact`) ? "bg-[#F1F1F2]" : ""
              } pt-3 pb-3 pr-[18px] pl-[18px] h-[40px] lg:h-[50px] focus:outline-none  
              rounded-[8px]  font-Inter  border-[1px]
               border-[#E3E3E4] 
              text-[14px] leading-6 text-[#281C49]`}
              type="text"
              name="company"
              id="company"
              placeholder="Metallica Resources"
            />
          </div>
          <div className="flex flex-col gap-y-[8px] lg:gap-y-[13px]">
            <label
              className="text-[12px] leading-[16px] lg:text-[16px] lg:leading-5 font-Inter font-bold  text-[#281D49]"
              htmlFor="country"
            >
              Country<span className="text-[#FF5A33] ">*</span>
            </label>
            <input
              className={` ${
                matchRoute(`/contact`) ? "bg-[#F1F1F2]" : ""
              } pt-3 pb-3 pr-[18px] pl-[18px] h-[40px] lg:h-[50px] focus:outline-none  
              rounded-[8px]  font-Inter  border-[1px]
               border-[#E3E3E4] 
              text-[14px] leading-6 text-[#281C49]`}
              type="text"
              name="country"
              id="country"
              placeholder="Dubai"
              required={true}
            />
          </div>
          <div className="flex flex-col gap-y-[8px] lg:gap-y-[13px]">
            <label
              className="text-[12px] leading-[16px] lg:text-[16px] lg:leading-5 font-Inter font-bold  text-[#281D49]"
              htmlFor="subject"
            >
              Subject<span className="text-[#FF5A33] ">*</span>
            </label>
            <input
              className={` ${
                matchRoute(`/contact`) ? "bg-[#F1F1F2]" : ""
              } pt-3 pb-3 pr-[18px] pl-[18px] h-[40px] lg:h-[50px] focus:outline-none  
              rounded-[8px]  font-Inter  border-[1px]
               border-[#E3E3E4] 
              text-[14px] leading-6 text-[#281C49]`}
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your Subject"
              required={true}
            />
          </div>
          <div className="flex flex-col gap-y-[8px] lg:gap-y-[13px]">
            <label
              className="text-[12px] leading-[16px] lg:text-[16px] lg:leading-5 font-Inter font-bold  text-[#281D49]"
              htmlFor="message"
            >
              Message<span className="text-[#FF5A33] ">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              cols="20"
              rows="10"
              className={` ${
                matchRoute(`/contact`) ? "bg-[#F1F1F2]" : ""
              } h-[110px] pt-3 pb-3 pr-[18px] pl-[18px] focus:outline-none  
              rounded-[8px]  font-Inter  border-[1px]
               border-[#E3E3E4]
              text-[14px] leading-6 text-[#281C49]`}
              placeholder="Enter your Message"
              required={true}
              style={{
                resize: "none",
              }}
            />
          </div>
          <div className="flex  items-center justify-center">
            <button
              type="submit"
              disabled={state.submitting}
              className={`  ${
                matchRoute(`/contact/new`) ? "" : "w-full"
              } lg:pr-7 lg:pl-7 lg:pt-4 lg:pb-4  pr-[14px] pl-[14px] pt-2 pb-2 md:px-[16px] md:py-[10px]     rounded-[8px] 
  bg-gradient-to-tr from-[#1E1C49] via-[#9D2161] to-[#F45634]   text-[#FDFDFD] text-sm shadow
     transition-all delay-150 duration-250 ease-linear  font-Inter text-[14px] leading-5 font-semibold    `}
            >
              {state.submitting ? "Loading..." : "Send Message"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
