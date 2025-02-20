import React from "react";
import "./Industries.css"
const Industries = () => {
  return (
    <>
      <div className="">
        <h1 className="text-white text-6xl my-5">Industries We are experts in</h1>
        <div className="indu-main-div">
          <div>
          <div className="flex gap-5 justify-between items-center mb-5" id="indu-div">
            <div className="h-50 w-150 rounded-2xl relative">
              <h2 className="top-20 left-45 text-2xl text-white absolute z-50 name10">
                Supply chain & Logistics
              </h2>
              <img
                src="asset 51.webp"
                alt=""
                className="h-50 w-150 overflow-hidden rounded-2xl -z-0 relative indu-img"
              />{" "}
            </div>
            <div className="h-50 w-88 rounded-2xl relative">
              <h2 className="top-21 left-25 text-2xl text-white absolute z-50 name2">
                Healthcare
              </h2>
              <img
                src="asset 52.webp"
                alt=""
                id="indu-img-100"
                className="object-cover h-50 w-88 overflow-hidden rounded-2xl -z-0 relative indu-img1"
              />{" "}
            </div>
            <div className="h-50 w-88 rounded-2xl relative">
              <h2 className="top-23 left-31 text-2xl text-white absolute z-50 name3">
                Education
              </h2>
              <img
                src="asset 53.webp"
                alt=""
                className="object-cover h-50 w-88 overflow-hidden rounded-2xl -z-0 relative indu-im1"
              />{" "}
            </div>
          </div>
          <div className="flex gap-5 justify-between items-center" id="indu-div">
            <div className="h-50 w-88 rounded-2xl relative">
              <h2 className="top-23 left-31 text-2xl text-white absolute z-50 name4">
                Banking
              </h2>
              <img
                src="asset 54.webp"
                alt=""
                className="object-cover h-50 w-88 overflow-hidden rounded-2xl -z-0 relative indu-img1"
              />{" "}
            </div>
            <div className="h-50 w-88 rounded-2xl relative">
              <h2 className="top-23 left-25 text-2xl text-white absolute z-50 name5">
                E-commerce
              </h2>
              <img
                src="asset 55.webp"
                alt=""
                className="object-cover h-50 w-88 overflow-hidden rounded-2xl -z-0 relative indu-img1"
              />{" "}
            </div>
            <div className="h-50 w-150 rounded-2xl relative">
              <h2 className="top-23 left-60 text-2xl text-white absolute z-50 name6">
                Travel
              </h2>
              <img
                src="asset 56.webp"
                alt=""
                className="object-cover h-50 w-150 overflow-hidden rounded-2xl -z-0 relative indu-img"
              />{" "}
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industries;
  