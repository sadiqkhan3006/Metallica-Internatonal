import React from "react";
import { useState } from "react";
import images from "../data/productGallery";
import { useLocation, useNavigate } from "react-router-dom";

function ProductCard({ productData }) {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("heyy22 :", location.pathname);
  //console.log("img::", productData.img);
  return (
    <div className="Productcard-Style bg-white rounded-[4px] ">
      <div className="flex flex-col  ">
        <div className="lg:h-[263px] h-[120px] md:h-[170px] rounded-t-[4px] ">
          <img
            className="w-full h-full rounded-t-[4px] object-cover"
            src={images[productData.id]}
          />
        </div>
        <div className="lg:px-[24px]  md:py-[16px] md:px-[16px] py-[8px] px-[8px]  ">
          <h1 className="  font-Ptsans text-[14px] md:text-[18px] lg:text-2xl font-bold text-[#281C49] text-center mb-1 ">
            {productData.title}
          </h1>
          <p
            className={` font-Inter font-normal  text-center text-[12px] leading-[18px] lg:text-[16px] lg:leading-[26px]  text-[#6C6C6C] mb-1 md:mb-4 `}
          >
            {productData.shortDesc}
          </p>
          <div className="text-center">
            <button
              onClick={() => {
                navigate(
                  `/services/trading/product/${productData.title
                    .toLowerCase()
                    .split(" ")
                    .join("-")}?productId=${productData.id}`,
                  { replace: true }
                );
                // window.location.href = `/services/trading/product/${productData.title
                //   .toLowerCase()
                //   .split(" ")
                //   .join("-")}?productId=${productData.id}`;
                //     .split(" ")
                //     .join("-")}?productId=${productData.id}`,
              }}
              className="font-Inter  text-[12px]  md:text-[16px]  lg:text-[18px] lg:leading-[26px]  gradient-text-button"
            >
              {`View Specifications ->`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
