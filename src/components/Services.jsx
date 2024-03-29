import React from "react";
import Trading from "../assets/about/trading.png";
import Mining from "../assets/about/mining.png";
import Logistics from "../assets/about/logistics.png";
import { useNavigate } from "react-router-dom";
function Services() {
  const navigate = useNavigate();
  const cards = [
    {
      id: 1,
      logo: Trading,
      title: "Trading",
      description:
        "Trading activity of Metallica focuses on strategic sourcing, financing and logistics of bulk cargo from different destinations around the globe into Africa.",
    },
    {
      id: 2,
      logo: Mining,
      title: "Mining",
      description:
        "Metallica has just completed exploration and is on to commence mining and processing projects for strategic minerals to aid several industries in SADC region and beyond. ",
    },
    {
      id: 3,
      logo: Logistics,
      title: "Logistics",
      description:
        "Metallica will build on the intellectual capital and logistics networks of its founding directors to provide the best logistics services to all its clients across SADC region.",
    },
  ];
  return (
    <div>
      <div className="  flex flex-col md:flex-row gap-y-[32px] md:gap-x-[16px] lg:gap-x-[62px]   justify-center lg:ml-[6%] lg:mr-[6%]  ">
        {cards.map((value) => (
          <div
            key={value.id}
            className="bg-white services-card min-h-[352px] lg:min-h-[490px] px-4 py-2 lg:p-7 rounded-[4px]"
          >
            <div
              className={` ${
                value.id == 3
                  ? "lg:mb-[50px] mb-[30px]"
                  : "mb-[12px] lg:mb-[8px]"
              } flex items-center justify-center`}
            >
              <img src={value.logo} />
            </div>
            <div className="flex flex-col gap-y-1 lg:mb-[16px] mb-[12px]">
              <h1 className="mb-2 text-[26px] lg:text-[34px]  font-Ptsans font-bold text-center text-[#281C49]">
                {value.title}
              </h1>
              <p className="text-center text-[#6C6C6C] text-[12px] leading-[20px] lg:text-[16px] lg:leading-[26px] ">
                {value.description}
              </p>
            </div>
            <div
              onClick={() => {
                navigate(`/services/${value.title.toLowerCase()}`);
              }}
              className="flex items-center justify-center"
            >
              <button className=" font-Inter text-lg gradient-text-button">
                Learn More -&gt;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
