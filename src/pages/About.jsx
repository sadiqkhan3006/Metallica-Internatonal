import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import AboutUs from "../assets/aboutDisplay.jpg";
import Mining from "../assets/mining_logo.png";
import Trading from "../assets/trading_logo.png";
import Logistics from "../assets/logistics_logo.png";
import { useNavigate } from "react-router-dom";
const ImgLoader = React.lazy(() => import("../components/ImgLoader"));
function About() {
  const businessPlan = [
    {
      id: 1,
      title: "Strategic Sourcing",
      desc: "With our strong technical know-how we will source critical raw materials as close as possible to the points of delivery thereby cut down the millions of $ in costs borne primarily by the mining industry.",
    },
    {
      id: 2,
      title: "Shorten Supply Chain",
      desc: "This will come from our extensive experience of shipping ,logistics and warehousing thereby moving products to the industries which require them in the shortest possible time frames and the least possible costs.",
    },
    {
      id: 3,
      title: "Leverage Financial Capability",
      desc: "Leverage our financial capability to achieve economies of scale thereby maximize value for our clients.",
    },
    {
      id: 4,
      title: "Strategic Operations Management",
      desc: "This will entail going a step further than delivering products and will involve addressing key technical problems at client facilities, to ensure greater dependence on our overall value delivery.",
    },
    {
      id: 5,
      title: "Customer Relationship Management",
      desc: "Build upon our knowledge of the market to create long term customer engagements to complement economies of scale approach to value creation.",
    },
  ];
  const execution = [
    {
      id: 1,
      desc: "Validate identified deposits in SADC region of important mineral/natural resources essential for our targeted industries.",
    },
    {
      id: 2,
      desc: "Create technical collaborations and partnerships in different regions in SADC to exploit the deposits economically and efficiently.",
    },
    {
      id: 3,
      desc: "Develop and build logistics infrastructure to ensure speedy and efficient delivery.",
    },
    {
      id: 4,
      desc: "Acquire and service top customers by volumes in mining and agriculture industries, thereby achieving high tonnages and robust cash flows.",
    },
    {
      id: 5,
      desc: "Relentless focus on operations efficiency, process improvements and technical enhancements even at client end to maximize value delivery and ensure customer delight.",
    },
  ];
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
  const navigate = useNavigate();
  const tradeRef = useRef();
  let [tradingHeight, settradingHeight] = useState(null);
  // clientHeight

  useEffect(() => {
    console.log(tradeRef.current.clientHeight);
    settradingHeight(tradeRef.current.clientHeight);
    console.log(tradingHeight);
  }, []);
  return (
    <div>
      {/* hero Section */}
      <div className=" h-[750px] w-full  relative">
        <div className="h-full w-full">
          <Suspense
            fallback={
              <div className="h-full w-full flex justify-center items-center">
                <div className="loader"></div>
              </div>
            }
          >
            <ImgLoader
              imgSrc={AboutUs}
              imgstyle="h-full w-full object-cover"
              altText="AboutUs"
            />
          </Suspense>
          {/* <img
            src={AboutUs}
            loading="lazy"
            className="h-full w-full object-cover"
          /> */}
        </div>
        <div
          ref={tradeRef}
          className={`pt-7 pb-7   rounded-lg min-h-[300px] absolute z-10 bg-[#281D49] bg-opacity-90  
    left-[7%] right-[7%] -bottom-[calc(532px/2)] md:-bottom-[calc(476px/2)] lg:-bottom-[calc(308px/2)]  w-[86%]  flex flex-col `}
        >
          <h1
            className="text-[36px] text-center md:text-[40px]  leading-[48px] ml-[7%]  mr-[7%] tracking-tight text-[#FF5A33] mb-[8px]
  font-bold  "
          >
            About Us
          </h1>
          <p className=" mb-8  ml-[7%] mr-[7%] text-sm md:text-xl text-left text-white">
            Metallica Resources International FZCO (Metallica) is founded by
            entrepreneurs with decades of experience in natural resources,
            manufacturing, shipping, inland logistics and trade finance in
            Southern and East African region. Leveraging this solid experience,
            knowledge and strong financial capability, Metallica is able to make
            niche offerings to several manufacturing industries in Africa
            thereby making it a value creating enterprise not just for the
            shareholders but also for the industry at large. The focus of
            Metallica is on trading of natural resources and raw materials used
            by mining & metals, fertilizer, paint, glass and agriculture
            industries. The products are planned to be sourced largely from the
            African region but also from several other parts of the world
            depending on availability and overall price competitiveness.
          </p>
        </div>
      </div>
      {/* Businesss Plan */}
      <div className="ml-[7%] mr-[7%] mt-[calc(532px/2+60px)] md:mt-[calc(476px/2+60px)] lg:mt-[calc(308px/2+50px)] mb-[70px]">
        <div>
          <h1 className="text-[40px] font-bold text-center text-[#281D49]">
            Strategic Pillars
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-10  ">
            {businessPlan.map((item) => (
              <div
                className="bg-white business-card h-[350px] mt-[30px] "
                key={item.id}
              >
                <div className="flex flex-col ml-[4%] mr-[4%]  mt-[10%] mb-[10%] gap-y-4">
                  <h1 className="text-2xl font-bold text-[#FF5A33] ">
                    {item.title}
                  </h1>
                  <p className="text-xl font-medium text-left text-[#281D49] ">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* execution */}
      <div className="ml-[7%] mr-[7%] mb-[70px]">
        <h1 className="text-[40px] font-bold text-center text-[#281D49] uppercase">
          Execution
        </h1>
        <div>
          <div className="flex flex-col gap-y-[80px] items-center justify-center mt-[40px]">
            {execution.map((item) => (
              <div
                className="flex relative   flex-row w-[70%] justify-center 
            gap-x-4 "
              >
                <div className=" h-[20px] w-[20px] md:h-[25px] md:w-[25px] bg-[#FF5A33] rounded-full ]"></div>
                <p className="text-xl w-[100%] font-medium text-left text-[#281D49]">
                  {item.desc}
                </p>
                {item.id !== 5 && (
                  <div className="absolute -z-10 left-[7px] md:left-[10.5px] h-[calc(100%+80px)]   border-dashed border-[#FF5A33] border-s-2  "></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* mission and vison  */}
      <div className="mb-[70px]  bg-[#281D49]">
        <div className="ml-[7%] mr-[7%] ">
          <div className="flex flex-col pt-16 pb-16 text-white text-xl font-normal gap-y-7">
            <h1 className=" text-4xl  font-bold text-left text-[#FF5A33] uppercase">
              Mission & Vision
            </h1>
            <p>
              Our mission is to become the #1 company in trading of chosen
              natural resources and niche raw materials for industrial sector in
              South African Development Community (SADC) region by 2027.
            </p>
            <p>
              Our vision is to become a listed entity by 2030, creating value by
              virtue of owning high grade mineral assets and servicing an
              enviable client base comprising of top industrial customers in
              SADC region.
            </p>
          </div>
        </div>
      </div>
      {/* sevices */}
      <div className="ml-[7%] mr-[7%] ">
        <h1
          className="md:w-[45%] mb-[20px] lg:w-[30%] text-center md:leading-[71px] tracking-tighter mx-auto 
        font-semibold  text-5xl md:text-[40px] text-[#281D49]"
        >
          Explore Our Services
        </h1>
        <div className="flex  flex-col gap-y-10 lg:flex-row mt-[8px] gap-x-[80px] pb-[50px]  ">
          {cards.map((card) => (
            <div
              className="flex business-card flex-col bg-white lg:w-[456px]  card-Style "
              key={card.id}
            >
              <div className="ml-[8%] mr-[3%]">
                <div className="mt-[8px]">
                  <img className="object-cover " src={card.logo} />
                </div>
                <div className="">
                  <h2 className="text-4xl font-bold mt-[8px] text-[#281D49]">
                    {card.title}
                  </h2>
                  <p className="w-[96%] text-[#281D49] text-left font-normal text-xl leading-[30px] mt-[8px] h-[250px]">
                    {card.description}
                  </p>
                </div>
                <button
                  onClick={() => {
                    navigate(`/services/${card.title.toLowerCase()}`);
                  }}
                  className="btn mt-[5px] mb-[24px]"
                >
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
