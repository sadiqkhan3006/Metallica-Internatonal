import React from "react";
import Eclipse from "../assets/Ellipse3.png";
import { useLocation, matchPath } from "react-router-dom";
import { useForm } from "@formspree/react";
import { toast } from "react-hot-toast";
function ContactForm() {
  const [state, handleSubmit] = useForm("mleqbyak");
  console.log(state);
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
    <div className=" flex flex-col items-center justify-center pb-12 ">
      <img
        className={`${
          matchRoute("/contact") ? "hidden" : ""
        } absolute -z-20  top-[2300px] -right-[0px]`}
        src={Eclipse}
      />
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-[100%] lg:w-[70%] bg-white items-center formStyle
      md:rounded-[30px] rounded-lg "
      >
        <div className="md:w-[60%] w-[90%] flex flex-col gap-y-5 mt-[50px] mb-[40px] ">
          <div className="flex flex-col gap-y-1">
            <label htmlFor="name" className="text-xl font-light text-[#281D49]">
              Name<span className="text-[#FF5A33] ">*</span>
            </label>
            <input
              className="p-3 h-[60px] focus:outline-none  rounded-[10px]  placeholder:font-extralight input-field
              text-lg   "
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              required="true"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-xl font-light text-[#281D49]"
              htmlFor="email"
            >
              Email<span className="text-[#FF5A33] ">*</span>
            </label>
            <input
              className="h-[60px] text-lg  rounded-[10px] focus:outline-none p-3 placeholder:font-extralight input-field"
              type="email"
              name="email"
              id="email"
              placeholder="johndoe123@gmail.com"
              required="true"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-xl font-light text-[#281D49]"
              htmlFor="company"
            >
              Company
            </label>
            <input
              className="h-[60px] text-lg  rounded-[10px] focus:outline-none p-3 placeholder:font-extralight input-field"
              type="text"
              name="company"
              id="company"
              placeholder="Metallica Resources"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-xl font-light text-[#281D49]"
              htmlFor="country"
            >
              Country<span className="text-[#FF5A33] ">*</span>
            </label>
            <input
              className="h-[60px] rounded-[10px] text-lg focus:outline-none  p-3 placeholder:font-extralight input-field"
              type="text"
              name="country"
              id="country"
              placeholder="Dubai"
              required="true"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-xl font-light text-[#281D49]"
              htmlFor="subject"
            >
              Subject<span className="text-[#FF5A33] ">*</span>
            </label>
            <input
              className="h-[60px] rounded-[10px] text-lg focus:outline-none p-3 placeholder:font-extralight input-field"
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your Subject"
              required="true"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-xl font-light text-[#281D49]"
              htmlFor="message"
            >
              Message<span className="text-[#FF5A33] ">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              cols="20"
              rows="10"
              className="h-[400px] rounded-[10px] text-lg focus:outline-none p-3 placeholder:font-extralight input-field"
              placeholder="Enter your Message"
              required="true"
              style={{
                resize: "none",
              }}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="btn w-[150px] mb-[50px]"
        >
          {state.submitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
