import React from "react";
import { useState } from "react";
import images from "../data/productGallery";
import { useNavigate } from "react-router-dom";
function ProductCard({ productData }) {
  const [readMore, setreadMore] = useState(false);
  const navigate = useNavigate();
  //console.log("img::", productData.img);
  return (
    <div className="Productcard-Style bg-white ">
      <div className="flex flex-col gap-y-4 mt-[5%] mb-[5%] ml-[5%] mr-[5%]">
        <div className="h-[300px] img-Style bg-white rounded-2xl">
          <img
            className="w-full h-full rounded-2xl object-cover"
            src={images[productData.id]}
          />
        </div>
        <div>
          <h1 className="  text-[32px] font-semibold text-[#281D49] ">
            {productData.title}
          </h1>
          <p
            className={`${
              readMore ? "" : ""
            }  text-left  text-lg text-[#281D49]`}
          >
            {readMore
              ? productData.description
              : productData.description.split(" ").slice(0, 30).join(" ") +
                " ..."}
            <div
              onClick={() => {
                setreadMore((prev) => !prev);
              }}
              className="cursor-pointer text-[#FF5A33]"
            >
              {readMore ? "Read less" : "Read more"}
            </div>
          </p>
        </div>
        <button
          onClick={() => {
            navigate(
              `product/${productData.title
                .toLowerCase()
                .split(" ")
                .join("-")}?productId=${productData.id}`
            );
          }}
          className="btn w-[190px] font-semibold text-[14px]"
        >
          View Specifications
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
