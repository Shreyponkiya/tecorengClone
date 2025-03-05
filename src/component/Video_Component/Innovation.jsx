import React from "react";
import "./Innovation.css";
const Innovation = () => {
  return (
    <div
      style={{ backgroundColor: "#112542" }}
      className="flex justify-center items-center pb-20 mb-20 z-20"
    >
      <div className="w-5/6 mt-7">
        <div className="flex justify-between items-center" id="innovation-div">
          <div>
            <h1 className="text-6xl text-white leading-tight">
              Transfer your <br /> enterprise with digital <br /> innovation
            </h1>
            <p className="text-white my-4">
              Your success as a market innovator reflects our strides as a
              unified partner. Committed to assisting you in attaining
              excellence through our solutions, we boast a team of adept
              professionals and dynamic facilitators. Our steadfast commitment
              to a collaborative strategy, coupled with agile methodologies,
              propels business expansion. Rely on our strategic insights and
              development processes, and we will fuel your concepts to manifest
              as groundbreaking disruptions.
            </p>
            <button
              id="innovation-btn"
              className="bg-orange-500 bg-gradient-to-r duration-500 from-orange-300 to-orange-600 py-3 px-6 text-3xl z-50 md:border-b-4 hover:-translate-y-1 hover:border-b-6 border-amber-700 text-white font-semibold rounded-2xl"
            >
              HIRE NOW
            </button>
          </div>

          <div className="relative ml-10 w-1100">
            <img
              src="infinite.c057ea68.webp"
              alt="Digital Innovation"
              className="w-full h-full object-contain"
            />
            <img
              src="infinite_ball.webp"
              alt="Floating Ball"
              className="w-2 sm:w-16 sm:h-16 floating-ball"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
