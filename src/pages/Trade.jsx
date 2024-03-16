import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import TradingPageImg from "../assets/Trading_page.png";
import Products from "../data/product_description";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";
import Logistics from "../assets/logistics.jpg";
const ImgLoader = React.lazy(() => import("../components/ImgLoader"));
function Trade() {
  const location = useLocation();

  return (
    <div>
      {/* heroSetion */}
      <div className="h-[450px] md:h-[750px] w-full  relative">
        <div className="h-full w-full">
          <Suspense
            fallback={
              <div className="h-full w-full flex justify-center items-center">
                <div className="loader"></div>
              </div>
            }
          >
            <ImgLoader
              imgSrc={Logistics}
              imgstyle="h-full w-full object-cover"
              altText="Trading-image"
            />
          </Suspense>
          {/*         
          <img
            src={TradingPageImg}
            loading="lazy"
            className="h-full w-full object-cover "
          /> */}
        </div>
        <div
          className={`pt-7 pb-7  rounded-lg min-h-[300px] absolute z-10 bg-[#281D49] bg-opacity-90  
    left-[7%] right-[7%] -bottom-[calc(308px/2)] md:-bottom-[calc(624px/2)] lg:-bottom-[calc(456px/2)]  w-[86%]  flex flex-col `}
        >
          <h1
            className="text-[36px] text-center md:text-[40px]  leading-[48px] ml-[7%]  mr-[7%] tracking-tight text-[#FF5A33] mb-[8px]
  font-bold  "
          >
            TRADING
          </h1>
          <p className="  ml-[7%] mr-[7%] text-lg md:text-xl text-center md:text-left text-white">
            Trading activity of Metallica focuses on strategic sourcing,
            financing and logistics of bulk cargo from different destinations
            around the globe into Africa. Some of the products include:
            <ol className=" list-disc md:flex flex-col gap-y-4 mt-[16px] hidden ">
              <li>
                Fertilizers: Vessel loads of cargo from best suppliers across
                Asia, Eastern Europe and South America. This will include cargos
                of fertilizers and its constituents like MOP, SOP, DAP, MAP and
                Urea.
              </li>
              <li>
                Carbonates: Processed carbonates of calcium and magnesium from
                within and outside the SADC region to meet the requirements of
                mining, agriculture, and construction industries.
              </li>
              <li>
                Sulfuric Acid: Metallica is pursuing the strategy of activating
                a dormant process line to produce this key chemical needed my
                multitude of industries in SADC. We hope to bring in the supply
                of this product by August 2024.
              </li>
              <li>
                Sulfur: This is large volume, capital intensive commodity used
                to produce acid by several mines in Zambia and DRC. Our
                capabilities are perfectly aligned to trade in this product.
              </li>
              <li>
                Agri-Commodities: These include wheat, yellow maize, rice,
                sugar, and soya bean. Metallica's international connects from
                Europe, South America, East Africa and Asia make it possible to
                source and supply these products to the target markets at highly
                competitive prices.
              </li>
            </ol>
          </p>
        </div>
      </div>
      {/* products section */}
      <div className=" mt-[202px] md:mt-[360px]  lg:mt-[276px] ml-[7%] mr-[7%] ">
        <div>
          <h1 className="md:ml-[7%] md:mr-[7%] text-4xl font-bold text-[#281D49] underline  mb-[32px]  ">
            CARBONATES
          </h1>
          <div className=" grid grid-cols-1 lg:grid-cols-2 md:ml-[7%] md:mr-[7%] gap-x-10 gap-y-16">
            {Products.map((product) =>
              product.category === "Carbonates" ? (
                <ProductCard key={product.id} productData={product} />
              ) : (
                ""
              )
            )}
          </div>
        </div>
        <div>
          <h1 className="mt-[32px] md:ml-[7%] md:mr-[7%] text-4xl font-bold text-[#281D49] underline  mb-[32px]  ">
            SULPHUR
          </h1>
          <div className=" grid grid-cols-1 lg:grid-cols-2 md:ml-[7%] md:mr-[7%] gap-x-10 gap-y-16">
            {Products.map((product) =>
              product.category === "Sulphur" ? (
                <ProductCard key={product.id} productData={product} />
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trade;
