import React, { lazy } from "react";
import HomePageVideo from "../assets/homePage2.mp4";
import Mining from "../assets/mining_logo.png";
import Trading from "../assets/trading_logo.png";
import Logistics from "../assets/logistics_logo.png";
import Eclipse from "../assets/Ellipse1.png";
import picture from "../assets/aboutus.jpg";
import Eclipse2 from "../assets/Ellipse2.png";
import ContactForm from "../components/ContactForm";
import { useNavigate } from "react-router-dom";
function Home() {
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
    <div className="">
      <img className="absolute -z-20 top-[700px] right-0" src={Eclipse} />
      {/* //hero section */}
      <div className=" h-[750px] relative">
        <div className="h-full w-full">
          <video className="h-full w-full object-cover" muted loop autoPlay>
            <source src={HomePageVideo} type="video/mp4" />
          </video>
        </div>
        <div
          className="pt-7 pb-7  rounded-lg min-h-[300px] absolute z-10 bg-[#281D49] bg-opacity-90 md:left-[15%] md:right-[15%] 
        left-[7%] right-[7%] -bottom-[150px] w-[86%] md:w-[70%] flex flex-col items-center justify-center"
        >
          <h1 className="font-bold text-[36px] md:text-[40px] leading-[48px] tracking-tight text-white ">
            METALLICA
          </h1>
          <h1
            className="text-[36px] text-center md:text-[40px] leading-[48px] tracking-tight text-[#FF5A33] mb-[8px]
      font-bold  "
          >
            RESOURCES INTERNATIONAL
          </h1>
          <p className=" w-[85%] lg:w-[70%] text-lg md:text-xl text-center text-white">
            Metallica Resources International FZE (Metallica) is founded by
            entrepreneurs with decades of experience in natural resources,
            manufacturing, shipping, inland logistics and trade finance in
            Southern and East African region.
          </p>
        </div>
      </div>
      {/* Services Section */}
      <div className="mt-[200px]  ml-[7%] mr-[7%] ">
        <h1
          className="md:w-[45%] mb-[20px] lg:w-[30%] text-center md:leading-[71px] tracking-tighter mx-auto 
        font-semibold  text-5xl md:text-6xl text-[#281D49]"
        >
          Explore Our Solutions
        </h1>
        <div className="flex  flex-col gap-y-10 lg:flex-row mt-[8px] gap-x-[80px] pb-[50px]  ">
          {cards.map((card) => (
            <div
              className="flex flex-col bg-white lg:w-[456px]  card-Style "
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
                  <p className="w-[96%] text-[#281D49] text-left font-normal text-xl leading-[30px] mt-[8px]  h-[250px]">
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
      {/* About us section */}
      <img
        className="absolute -z-20 -left-[150px] top-[2100px]"
        src={Eclipse2}
      />
      <div className="ml-[7%] mr-[7%] mt-10">
        <div
          className="rounded-xl bg-white flex flex-col gap-y-4 md:flex-row  items-center justify-center about-container
        gap-x-5 "
        >
          <div className="w-full">
            <img
              loading="lazy"
              className="rounded-xl h-[450px] md:h-[650px] w-[100%] object-cover "
              src={picture}
            />
          </div>
          <div className="w-full ">
            <div className="ml-[14px]  w-[90%] flex flex-col gap-y-5">
              <h1 className="text-5xl lg:text-6xl font-semibold leading-[71px] tracking-tighter text-[#281D49]">
                About Us
              </h1>
              <p className="text-left text-[16px] lg:text-lg text-[#281D49]">
                Metallica Resources International FZCO is a business entity
                based out of Dubai, created by astute professionals with over a
                decade of profound experience in mining, agriculture and
                logistics & warehousing sectors in SADC region of Africa. The
                company is formed with the vision of combining in-depth
                knowledge of regional trade along with operational and
                commercial capabilities to deliver the best solutions to large &
                medium business groups in Africa. Metallica’s strength comes
                from many years of experience of its founders in building
                customer relationships, operations management, competitive
                sourcing, financing, and moving large tonnages of cargo, while
                always keeping in mind speed, safety and precision.
              </p>
              <button
                onClick={() => {
                  navigate(`/about`);
                }}
                className="btn md:w-[150px]"
              >
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* comtact form */}
      <div className="mr-[7%] ml-[7%] mt-[80px]">
        <h1
          className="md:w-[45%] mb-[20px] lg:w-[60%] text-center md:leading-[71px] tracking-tighter  mx-auto 
        font-bold text-5xl md:text-6xl text-[#281D49] "
        >
          Reach Out to Us
        </h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default Home;
