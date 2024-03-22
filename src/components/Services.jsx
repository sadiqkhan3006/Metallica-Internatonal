import React from "react";
import Trading from "../assets/about/trading.png";
import Mining from "../assets/about/mining.png";
import Logistics from "../assets/about/logistics.png";
function Services() {
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
      <div className="  flex flex-row gap-x-[62px] min-h-[490px] items-center justify-center ml-[6%] mr-[6%]  ">
        {cards.map((value) => (
          <div
            key={value.id}
            className="bg-white services-card min-h-[490px] p-7 "
          >
            <div
              className={` ${
                value.id == 3 ? "mb-[50px]" : "mb-[8px]"
              } flex items-center justify-center`}
            >
              <img src={value.logo} />
            </div>
            <div className="flex flex-col gap-y-1 mb-[16px]">
              <h1 className="mb-2 text-[34px]  font-Ptsans font-bold text-center text-[#281C49]">
                {value.title}
              </h1>
              <p className="text-center text-[#6C6C6C] text-[16px] leading-[26px] ">
                {value.description}
              </p>
            </div>
            <div className="flex items-center justify-center">
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
