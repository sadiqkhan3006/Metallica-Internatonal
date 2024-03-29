import React from "react";
import Instagram from "../assets/Instagram.png";
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/Twitter.png";
import Logo from "../assets/logo_footer.svg";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  const navlinks = [
    {
      id: 1,
      title: "Services",
      path: "/services",
      sublinks: [
        { id: 1, title: "Trading" },
        { id: 2, title: "Mining" },
        { id: 3, title: "Logistics" },
      ],
    },
    { id: 2, title: "About Us", path: "/about" },
    { id: 3, title: "Contact Us", path: "/contact" },
    { id: 4, title: "Blogs", path: "#" },
  ];
  return (
    // <div className=" bg-[#281D49] ">
    //   <div className="ml-[7%] mr-[7%] flex flex-col items-center gap-y-[34px] mt-14 pt-12 pb-12 ">
    //     <div className="text-center">
    //       <h1 className="text-white text-4xl font-bold ">Metallica</h1>
    //       <h1 className="text-[#FF5A33] text-4xl font-bold ">
    //         Resources International
    //       </h1>
    //     </div>
    //     <div className="flex flex-row gap-x-14">
    //       <img src={Instagram} />
    //       <img src={Facebook} />
    //       <img src={Twitter} />
    //     </div>
    //     <div className="text-center  ">
    //       <p className="text-white text-xl font-extralight ">
    //         METALLICA © Copyright 2024
    //       </p>
    //       <div className="text-white flex flex-row gap-x-4 mt-2 mr-3 text-[16px]  w-[100%] font-extralight items-center justify-center">
    //         <span>Terms and conditions</span>
    //         <span className="">|</span>
    //         <span>Privacy policy</span>
    //       </div>
    //     </div>
    //   </div>
    //   {/* <div className="text-white mx-auto items-center justify-center flex flex-row gap-x-3">
    //     <span>Terms and conditions</span>
    //     <span>|</span>
    //     <span>Privacy policy</span>
    //   </div> */}
    // </div>
    <div className="flex flex-col   ">
      <div className="bg-[#231940] py-[32px] md:pt-[70px] md:pb-[54px] lg:pt-[83px] lg:pb-[37px] flex items-center justify-center ">
        <div className="flex flex-col gap-y-[32px] md:gap-y-[50px] items-center justify-center ml-[7%] mr-[7%]">
          <div className="block md:hidden">
            <img className="h-[32px]" src={Logo} />
          </div>
          <div className="flex md:flex-row flex-col gap-y-[32px] md:gap-x-[31px] text-white font-Inter font-semibold text-[16px] text-center   ">
            {navlinks.map((value) => (
              <div
                className="cursor-pointer "
                onClick={() => {
                  navigate(`${value.path}`);
                }}
                key={value.id}
              >
                {value.title}
              </div>
            ))}
          </div>
          <div className="hidden md:block">
            <img src={Logo} />
          </div>
          <div className="flex flex-col md:flex-row gap-y-[32px] md:gap-x-[31px] text-white font-Inter font-semibold text-[16px] text-center">
            <div>Privacy Policy</div>
            <div>Terms of Use</div>
          </div>
        </div>
      </div>
      <div className=" bg-[#F4F0FF]  pt-[10px] pb-[10px] flex items-center justify-center ">
        <div className="ml-[7%] mr-[7%] text-[#281C49] font-Inter text-[16px]">
          METALLICA © Copyright 2024
        </div>
      </div>
    </div>
  );
}

export default Footer;
