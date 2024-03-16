import React, { lazy, Suspense } from "react";
import Miningjpg from "../assets/mining.jpg";
import TradingPageImg from "../assets/Trading_page.png";
const ImgLoader = React.lazy(() => import("../components/ImgLoader"));

function Mining() {
  return (
    <>
      <div className=" h-[750px] relative">
        <div className="h-full w-full">
          <Suspense
            fallback={
              <div className="h-full w-full flex justify-center items-center">
                <div className="loader"></div>
              </div>
            }
          >
            <ImgLoader
              imgSrc={TradingPageImg}
              imgstyle="h-full w-full object-cover"
              altText="Mining"
            />
          </Suspense>
          {/* <img
            loading="lazy"
            className="object-cover h-full w-full"
            src={Miningjpg}
          /> */}
        </div>
        <div
          className="pt-7 pb-7  rounded-lg absolute z-10 bg-[#281D49] bg-opacity-90 md:left-[15%] md:right-[15%] 
        left-[7%] right-[7%] -bottom-[150px] w-[86%] md:w-[70%] flex flex-col gap-y-3 pl-[7%] md:pl-0 md:items-center justify-center
"
        >
          <h1 className=" uppercase font-bold text-[36px] md:text-[40px] leading-[48px]  text-[#FF5A33]  ">
            Mining
          </h1>

          <p className=" w-[85%] lg:w-[70%] text-[16px] md:text-xl text-left text-white mb-4">
            Metallica has explored and discovered high grade carbonate mineral
            deposits in Southern and Central African regions .The exploration
            was done using highly qualified professionals and the best
            contemporary technology, to ensure long term viability of mining and
            associated manufacturing of projects
          </p>
        </div>
      </div>

      <div className=" ml-[7%] mr-[7%] font-bold  text-4xl mt-[300px] mb-[200px] text-center text-[#281D49] ">
        Project Information comming soon...
      </div>
    </>
  );
}

export default Mining;
