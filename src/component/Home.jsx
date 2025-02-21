import React from "react";
import "../App.css";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="mt-26" id="top-main-main-top-div overflow-hiddn">
        <div>
          <div className="h-96 flex alien-center justify-center items-center" id="main-main-home-main-div">
            <div className="flex items-center mt-95 mr-220 z-10" id="home-name-div">
              <h1 id="home-name" className="font-sans font-bold text-white relative leading-tight font-900 pl-30 text-7xl text-left mt-20">
                Web & Mobile App Development Company
              </h1>
            </div>
            <div
              className="h-200 w-10/12 right-30 top-30 absolute"
              id="home-img"
            >
            </div>
          </div>
        </div> 
        <div>
          <div className="absolute left-30 top-189" id="btn-div">
            <button className="hero-btn bg-orange-500 bg-gradient-to-r from-orange-300 to-orange-600 py-3 px-6 text-3xl z-50 md:border-b-4 hover:-translate-y-1 hover:border-b-6  border-amber-700  text-white font-semibold rounded-2xl">
              GET STARTED
            </button>
            <div
              className="border-2 h-43 mt-15 mb-50 border-cyan-500 rounded-3xl overflow-hidden"
              id="box"
            >
              <div className="flex justify-evenly pt-3">
                <div className="text-center">
                  <h1 className="text-white text-2xl mb-7 hero-name">
                    Successful Projects
                  </h1>
                  <h1 className="text-cyan-400 text-7xl font-semibold">100+</h1>
                </div>
                <div className="text-center">
                  <h1 className="text-white text-2xl mb-7 hero-name">Repeated Client</h1>
                  <h1 className="text-cyan-400 text-7xl font-semibold">80%</h1>
                </div>
                <div className="text-center">
                  <h1 className="text-white text-2xl mb-7 hero-name">
                    Years in industry
                  </h1>
                  <h1 className="text-cyan-400 text-7xl font-semibold">9+</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className=" border-t-3 shadow-inner shadow-white h-17  w-full absolute top-267"></div> */}
      </div>
    </>
  );
};

export default Home;
