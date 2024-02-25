import React from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import images from "../data/productGallery";
import Products from "../data/product_description";
function ViewProduct() {
  const navigate = useNavigate();
  const [searchParams, setsearchParams] = useSearchParams();
  console.log("Location: ", searchParams.get("productId"));
  const productId = parseInt(searchParams.get("productId"));
  const product = Products.filter((item) => item.id === productId)[0];
  console.log("prodcut ", product);

  return (
    <div>
      <div className="w-full ">
        <div
          className={`pt-[200px] pb-[200px] w-full     bg-[#281D49] bg-opacity-90  
       flex flex-col `}
        >
          <h1
            className="text-[36px] text-center md:text-[40px]  leading-[48px]  tracking-tight text-[#FF5A33] mb-[8px]
  font-bold  "
          >
            {product.title}
          </h1>
          <p className="  ml-[7%] mr-[7%] text-lg md:text-xl text-center text-white">
            {product.description}
          </p>
        </div>
      </div>
      {/* Specifications */}
      <div className="flex flex-col gap-y-5 ml-[7%] mr-[7%] lg:ml-[14%] lg:mr-[14%] mt-[60px]">
        <h1 className="text-4xl text-center mb-[36px] font-semibold text-[#281D49]  ">
          Specifications
        </h1>
        <div className="text-xl text-[#281D49]">
          <p>Product: {product?.Product}</p>
          <p>CAS No: {product?.CASNo}</p>
          <p>Molecular Wt: {product?.MolecularWt}</p>
        </div>
      </div>
      {/* table */}
      <div className="flex flex-col ml-[7%] mr-[7%]  lg:ml-[14%] lg:mr-[14%] mt-[36px]">
        <div className="text-xl font-semibold">Chemical Properties:</div>
        <table className="border bg-white  text-[#281D49]">
          <thead>
            <tr className="h-[100px] text-2xl font-light">
              <th className="border w-[10%]">No.</th>
              <th className="border w-[60%]">Parameters</th>
              <th className="border">Value</th>
            </tr>
          </thead>
          <tbody>
            {product?.chemicalProperties.map((item) => (
              <tr key={item.id} className="text-center h-[100px] text-xl">
                <td className="border">{item.id}</td>
                <td className="border">{item.parameter}</td>
                <td className="border">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {product?.physicalProperties.length !== 0 ? (
          <div className="flex flex-col mt-[40px] ">
            <div className="text-xl font-semibold">Physical Properties:</div>
            <table className="border text-[#281D49]">
              <tbody>
                {product?.physicalProperties.map((item) => (
                  <tr key={item.id} className="text-center h-[100px] text-xl">
                    <td className="border w-[10%] ">{item.id}</td>
                    <td className="border w-[60%]">{item.parameter}</td>
                    <td className="border">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-row justify-end ml-[7%] mr-[7%]">
        {" "}
        <button
          onClick={() => {
            navigate(`/services/trading`);
          }}
          className="btn w-[200px] text-[20px] mt-[40px]"
        >
          Back to products
        </button>
      </div>
    </div>
  );
}

export default ViewProduct;
