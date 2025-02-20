import React from "react";

const Industries = () => {
  return (
    <>
      <div className="">
        <h1 className="text-white text-6xl my-5">Industries We are experts in</h1>
        <div className="">
          <div className="flex gap-5 justify-between items-center mb-5">
            <div className="h-50 w-150 rounded-2xl relative">
              <h1 className="top-20 left-45 text-2xl text-white absolute z-50">
                Supply chain & Logistics
              </h1>
              <img
                src="asset 51.webp"
                alt=""
                className="h-50 w-150 overflow-hidden rounded-2xl -z-0 relative "
              />{" "}
            </div>
            <div className="h-50 w-88 rounded-2xl relative">
              <h1 className="top-21 left-25 text-2xl text-white absolute z-50">
                Healthcare
              </h1>
              <img
                src="asset 52.webp"
                alt=""
                className="object-cover h-50 w-88 overflow-hidden rounded-2xl -z-0 relative"
              />{" "}
            </div>
            <div className="h-50 w-88 rounded-2xl relative">
              <h1 className="top-23 left-31 text-2xl text-white absolute z-50">
                Education
              </h1>
              <img
                src="asset 53.webp"
                alt=""
                className="object-cover h-50 w-88 overflow-hidden rounded-2xl -z-0 relative"
              />{" "}
            </div>
          </div>
          <div className="flex gap-5 justify-between items-center">
            <div className="h-50 w-88 rounded-2xl relative">
              <h1 className="top-23 left-31 text-2xl text-white absolute z-50">
                Banking
              </h1>
              <img
                src="asset 54.webp"
                alt=""
                className="object-cover h-50 w-88 overflow-hidden rounded-2xl -z-0 relative"
              />{" "}
            </div>
            <div className="h-50 w-88 rounded-2xl relative">
              <h1 className="top-23 left-25 text-2xl text-white absolute z-50">
                E-commerce
              </h1>
              <img
                src="asset 55.webp"
                alt=""
                className="object-cover h-50 w-88 overflow-hidden rounded-2xl -z-0 relative"
              />{" "}
            </div>
            <div className="h-50 w-150 rounded-2xl relative">
              <h1 className="top-23 left-60 text-2xl text-white absolute z-50">
                Travel
              </h1>
              <img
                src="asset 56.webp"
                alt=""
                className="object-cover h-50 w-150 overflow-hidden rounded-2xl -z-0 relative"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industries;
  