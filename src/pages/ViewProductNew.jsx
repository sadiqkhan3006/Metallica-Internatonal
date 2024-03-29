import React from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import images from "../data/productGallery";
import Products from "../data/product_description";
import ProductCardNew from "../components/ProductCardNew";
import GradientButton from "../components/GradientButton";
import ContactSection from "../components/ContactSection";
function ViewProduct() {
  const navigate = useNavigate();
  const [searchParams, setsearchParams] = useSearchParams();
  console.log("Location: ", searchParams.get("productId"));
  const productId = parseInt(searchParams.get("productId"));
  const product = Products.filter((item) => item.id === productId)[0];
  console.log("prodcut ", product);
  let randomThreeProducts = () => {
    let randomProducts = [];

    while (randomProducts.length < 3) {
      const randomIndex = Math.floor(Math.random() * 7);
      const randomProduct = Products[randomIndex];
      if (!randomProducts.includes(randomProduct)) {
        randomProducts.push(randomProduct);
      }
    }

    console.log(randomProducts);
    return randomProducts;
  };
  const randomTwoProducts = () => {
    let randomProducts = [];
    // for (let i = 0; i < 2; i++) {
    //   const randomIndex = Math.floor(Math.random() * 7);
    //   randomProducts.push(Products[randomIndex]); // Push the randomly selected product to the array

    // }

    while (randomProducts.length < 2) {
      const randomIndex = Math.floor(Math.random() * 7);
      const randomProduct = Products[randomIndex];
      if (!randomProducts.includes(randomProduct)) {
        randomProducts.push(randomProduct);
      }
    }
    return randomProducts;
  };

  const productsToDisplay =
    window.innerWidth < 768 ? randomTwoProducts() : randomThreeProducts();

  return (
    <div className="pt-[calc(96px+26px)]">
      <div className="ml-[7%] mr-[7%] flex flex-row font-Inter text-[14px] leading-[26px] text-[#B8BABC] gap-x-1 mb-8 ">
        <div>Home/</div>
        <div>Services/</div>
        <div>Trading/</div>
        <div className="text-[#F45634]"> {product.title}</div>
      </div>
      <div className=" ml-[7%] mr-[7%] flex flex-col md:flex-row  lg:gap-x-[56px] gap-y-[16px] md:gap-x-[43px] lg:items-center ">
        <div className="md:w-[60%] ">
          <img
            className="w-full md:h-full h-[172px] object-cover "
            src={images[product.id]}
          />
        </div>
        <div className="w-full h-full flex flex-col gap-y-[8px] md:gap-y-[16px] lg:gap-y-[24px]">
          <h1 className=" text-[18px] leading-[22px]  md:text-[24px] md:leading-[28px] lg:text-[48px] text-[#281C49] font-Ptsans font-bold     ">
            {product.title}
          </h1>
          <p className="font-Inter  text-[12px] leading-[18px] lg:text-[16px] lg:leading-[26px] ">
            {product.description}
          </p>
          <div className="flex flex-col gap-y-4">
            <p className="font-Inter lg:text-[16px] font-bold  text-[14px]  leading-[18px] lg:leading-[20px] text-[#6C6C6C] ">
              <span className="font-Inter font-bold  text-black ">CAS No:</span>{" "}
              {product?.CASNo}
            </p>
            <p className="font-Inter lg:text-[16px] font-bold text-[14px]  leading-[18px] lg:leading-[20px] text-[#6C6C6C]">
              <span className="font-Inter  font-bold  text-black ">
                Molecular Wt:
              </span>{" "}
              {product?.MolecularWt}
            </p>
          </div>
        </div>
      </div>
      {/* Specifications */}
      {/* <div className="flex flex-col gap-y-5 ml-[7%] mr-[7%] lg:ml-[14%] lg:mr-[14%] mt-[60px]">
        <h1 className="text-4xl text-center mb-[36px] font-semibold text-[#281D49]  ">
          Specifications
        </h1>
        <div className="text-xl text-[#281D49]">
          <p>Product: {product?.Product}</p>
          <p>CAS No: {product?.CASNo}</p>
          <p>Molecular Wt: {product?.MolecularWt}</p>
        </div>
      </div> */}
      {/* table */}
      <div className="flex flex-col ml-[7%] mr-[7%]  mt-[24px] lg:mt-[32px] mb-[40px] md:mb-[60px] lg:mb-[120px]">
        <div className="font-Inter font-bold text-[16px]  leading-[20px] mb-[16px]">
          Chemical Properties:
        </div>
        <table className="border border-[#E3E3E4] bg-white  text-[#252526] ">
          <thead className="bg-[#F4F0FF]  text-left font-Inter font-bold text-[14px]  leading-[18px] md:text-[16px]  md:leading-[20px] text-[#252526]">
            <tr className="h-[34px] md:h-[36px]  ">
              <th className="w-[15%]  lg:w-[30%] pl-4">
                <div>No.</div>
              </th>
              <th className="w-[60%] lg:w-[50%]">Parameters</th>
              <th className="pr-4">
                <div>Value</div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#FBF9FF]">
            {product?.chemicalProperties.map((item) => (
              <tr
                key={item.id}
                className="font-Inter  text-[12px] leading-[18px] md:text-[16px] md:leading-[26px]  h-[50px] md:h-[58px] border-t border-[#E3E3E4]"
              >
                <td className="pl-4 ">{item.id}</td>
                <td className="">{item.parameter}</td>
                <td className="pr-4">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {product?.physicalProperties.length !== 0 ? (
          <div className="flex flex-col mt-[36px] ">
            <div className="font-Inter text-[16px] font-bold leading-[20px] mb-[16px]  ">
              Physical Properties:
            </div>
            <table className="border border-[#E3E3E4] text-[#252526]">
              <tbody className="bg-[#FBF9FF]">
                {product?.physicalProperties.map((item) => (
                  <tr
                    key={item.id}
                    className="font-Inter   text-[12px] leading-[18px] md:text-[16px] md:leading-[26px]  h-[50px] md:h-[58px] border-t border-[#E3E3E4]"
                  >
                    <td className="w-[15%] lg:w-[30%] pl-4 ">{item.id}</td>
                    <td className=" w-[60%] lg:w-[50%]">{item.parameter}</td>
                    <td className="pr-4">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* explore other products */}
      <div className="mb-[40px] md:mb-[60px] lg:mb-[120px]">
        <h1 className="  text-[24px] leading-[28px] md:text-[32px] lg:text-[48px] text-[#281C49] font-Ptsans font-bold    text-center md:mb-[36px] mb-[16px]  lg:mb-[64px]">
          Explore Other Products
        </h1>
        <div className=" lg:ml-[12%] lg:mr-[12%] mx-[7%] ">
          <div>
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-x-[24px] lg:gap-x-[62px]  gap-y-[64px]">
              {productsToDisplay.map((product) => (
                <ProductCardNew key={product.id} productData={product} />
              ))}
            </div>
            <div
              onClick={() => {
                navigate(`/services/trading`);
              }}
              className="w-full flex justify-center md:mt-[36px] mt-[16px] lg:mt-[64px]"
            >
              <GradientButton
                text={`View All Products`}
                fontStyle={`font-Inter text-[14px] leading-[20px] font-semibold text-[#F1F1F2] `}
              />
            </div>
          </div>
        </div>
      </div>

      <ContactSection />
      {/* <div className="flex flex-row justify-end ml-[7%] mr-[7%]">
        {" "}
        <button
          onClick={() => {
            navigate(`/services/trading`);
          }}
          className="btn w-[200px] text-[20px] mt-[40px]"
        >
          Back to products
        </button>
      </div> */}
    </div>
  );
}

export default ViewProduct;
