import React from "react";
import Logistics from "../assets/logistics.jpg";
import Light from "../assets/Light.png";
import fertilizer from "../assets/fertilizer.svg";
import agritech from "../assets/agritech.svg";
import sulphur from "../assets/sulphur.svg";
import stone from "../assets/stone.svg";
import calcium from "../assets/calcium.svg";
import Products from "../data/product_description";
import ProductCardNew from "../components/ProductCardNew";
function TradeNew() {
  return (
    <div className="mt-[96px]">
      <div className="lg:h-[683px] h-[318px] md:h-[479px] mb-[40px] md:mb-[60px] lg:mb-[120px]  w-[100wv] relative  ">
        <div className="w-full h-full">
          <img
            className="h-full w-full object-cover"
            src={Logistics}
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
        <div className="absolute  z-30 top-0 left-0 lg:w-[50%] h-full flex flex-col gap-y-[12px] lg:pt-[267px]  lg:pl-[64px] lg:justify-normal justify-center  mx-[7%] lg:mx-0">
          <div className=" w-full flex flex-row">
            <div className="  w-[6px]  bg-[#F45634] rounded-l-[10px] rounded-r-[1px] mr-1 md:mr-3   "></div>
            <div className="flex flex-col pl-3 pr-3  ">
              <div className="font-Ptsans  text-white font-bold  text-[32px]   leading-[38px] lg:text-[64px]   lg:leading-[68px]  md:text-[48px]   md:leading-[56px] ">
                Efficient Trading Solutions
              </div>
              <div className="font-Ptsans  text-white font-bold  text-[32px]   leading-[38px] lg:text-[64px]   lg:leading-[68px]  md:text-[48px]   md:leading-[56px] ">
                For Seamless Operations
              </div>
            </div>
          </div>
          <p className="font-Inter text-[#E3E3E4] md:text-[16px] md:leading-[26px] text-[12px] leading-[18px] lg:text-lg lg:leading-[26px] w-full  ">
            Trading activity of Metallica focuses on strategic sourcing,
            financing and logistics of bulk cargo from different destinations
            around the globe into Africa.
          </p>
        </div>
      </div>
      <div className=" mx-[7%] lg:ml-[12%] lg:mr-[12%] mb-[40px] md:mb-[60px] lg:mb-[120px] ">
        <div className="lg:mb-[64px] mb-[32px] md:mb-[48px]">
          <h1 className=" md:text-[32px] text-[24px] lg:text-[48px] text-[#281C49] font-Ptsans font-bold   text-center mb-1 lg:mb-[8px]">
            Trading Activity
          </h1>
          <p className="font-Inter md:text-[16px] md:leading-[26px] text-[14px] leading-[20px] lg:text-lg lg:leading-7 text-[#6C6C6C] text-center ">
            Trading activity of Metallica focuses on strategic sourcing,
            financing and logistics of bulk cargo from different destinations
            around the globe into Africa. Some of the products on focus include:
          </p>
        </div>
        <div className="flex flex-row gap-x-[80px] lg:gap-y-[60px] gap-y-[24px]  w-full  flex-wrap  items-center justify-between  ">
          <div className="flex flex-row gap-x-4 lg:w-[45%]">
            <div className="w-[48px] md:w-[60px] lg:w-[80px]">
              <img
                className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"
                src={fertilizer}
              />
            </div>
            <div>
              <div className="h-[105px] w-[1px] bg-[#E3E3E4]"></div>
            </div>
            <div className="w-full">
              <h2 className="mb-1 lg:mb-[13px] font-Inter font-medium lg:text-[24px] lg:leading-8 md:text-[22px] md:leading-[28px] text-[20px] leading-[24px] text-[#281C49]">
                Fertilizers
              </h2>
              <p className="font-Inter text-[12px] leading-[16px] md:text-[14px] md:leading-[18px] lg:text-[16px] lg:leading-[26px] text-[#939596] ">
                Vessel loads of cargo from best suppliers across Asia, Eastern
                Europe and South America. This will include cargos of
                fertilizers and its constituents like MOP, SOP, DAP, MAP and
                Urea.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 lg:w-[45%]">
            <div className="w-[48px] md:w-[60px] lg:w-[80px]">
              <img
                className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"
                src={calcium}
              />
            </div>
            <div>
              <div className="h-[105px] w-[1px] bg-[#E3E3E4]"></div>
            </div>
            <div className="w-full">
              <h2 className="mb-[13px] font-Inter font-medium lg:text-[24px] lg:leading-8 md:text-[22px] md:leading-[28px] text-[20px] leading-[24px] text-[#281C49]">
                Carbonates
              </h2>
              <p className="font-Inter text-[12px] leading-[16px] md:text-[14px] md:leading-[18px] lg:text-[16px] lg:leading-[26px] text-[#939596] ">
                Processed carbonates of calcium and magnesium from within and
                outside the SADC region to meet the requirements of mining,
                agriculture, and construction industries.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 lg:w-[45%] ">
            <div className="w-[48px] md:w-[60px] lg:w-[80px]">
              <img
                className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"
                src={stone}
              />
            </div>
            <div>
              <div className="h-[105px] w-[1px] bg-[#E3E3E4]"></div>
            </div>
            <div className="w-full">
              <h2 className="mb-[13px] font-Inter font-medium lg:text-[24px] lg:leading-8 md:text-[22px] md:leading-[28px] text-[20px] leading-[24px] text-[#281C49]">
                Sulfuric Acid
              </h2>
              <p className="font-Inter text-[12px] leading-[16px] md:text-[14px] md:leading-[18px] lg:text-[16px] lg:leading-[26px] text-[#939596] ">
                Metallica is pursuing the strategy of activating a dormant
                process line to produce this key chemical needed my multitude of
                industries in SADC. We hope to bring in the supply of this
                product by August 2024.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 lg:w-[45%] ">
            <div className="w-[48px] md:w-[60px] lg:w-[80px]">
              <img
                className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"
                src={sulphur}
              />
            </div>
            <div>
              <div className="h-[105px] w-[1px] bg-[#E3E3E4]"></div>
            </div>
            <div className="w-full">
              <h2 className="mb-[13px] font-Inter font-medium lg:text-[24px] lg:leading-8 md:text-[22px] md:leading-[28px] text-[20px] leading-[24px] text-[#281C49]">
                Sulfur
              </h2>
              <p className="font-Inter text-[12px] leading-[16px] md:text-[14px] md:leading-[18px] lg:text-[16px] lg:leading-[26px] text-[#939596] ">
                This is large volume, capital intensive commodity used to
                produce acid by several mines in Zambia and DRC. Our
                capabilities are perfectly aligned to trade in this product.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 w-[100%] ">
            <div className="w-[48px] md:w-[60px] lg:w-[80px]">
              <img
                className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"
                src={agritech}
              />
            </div>
            <div>
              <div className="h-[105px] w-[1px] bg-[#E3E3E4]"></div>
            </div>
            <div className="w-full">
              <h2 className="mb-[13px] font-Inter font-medium lg:text-[24px] lg:leading-8 md:text-[22px] md:leading-[28px] text-[20px] leading-[24px] text-[#281C49]">
                Agri-Commodities
              </h2>
              <p className="font-Inter text-[12px] leading-[16px] md:text-[14px] md:leading-[18px] lg:text-[16px] lg:leading-[26px] text-[#939596] ">
                These include wheat, yellow maize, rice, sugar, and soya bean.
                Metallica's international connects from Europe, South America,
                East Africa and Asia make it possible to source and supply these
                products to the target markets at highly competitive prices.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Product cards */}
      <div className="mb-[40px] md:mb-[60px] lg:mb-[120px]">
        <h1 className=" mx-[7%] text-[24px] md:text-[32px] lg:text-[48px] text-[#281C49] font-Ptsans font-bold   text-center  mb-[16px] md:mb-[32px] lg:mb-[64px]">
          Explore Our Products
        </h1>
        <div className=" mx-[23px]  lg:ml-[12%] lg:mr-[12%] ">
          <div>
            <h1 className="font-Ptsans text-[18px] md:text-[28px] lg:text-[34px] font-bold mb-4 lg:mb-8 text-center text-[#281D49] ">
              Carbonates
            </h1>
            <div className=" grid grid-cols-2 md:grid-cols-3  gap-x-[24px] lg:gap-x-[62px] gap-y-[16px] md:gap-y-[40px] lg:gap-y-[64px]">
              {Products.map((product) =>
                product.category === "Carbonates" ? (
                  <ProductCardNew key={product.id} productData={product} />
                ) : (
                  ""
                )
              )}
            </div>
          </div>
          <div>
            <h1 className="font-Ptsans text-[18px] md:text-[28px] lg:text-[34px] font-bold mb-4 lg:mb-8 text-center text-[#281D49] lg:mt-[64px] mt-[16px] md:mt-[32px]  ">
              SULPHUR
            </h1>
            <div className=" flex flex-row justify-center ">
              {Products.map((product) =>
                product.category === "Sulphur" ? (
                  <div className="w-[42%] md:w-[29%]">
                    <ProductCardNew key={product.id} productData={product} />
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradeNew;
