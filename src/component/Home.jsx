import React from "react";
import "../App.css";
const Home = () => {
  return (
    <>
    <div className="mt-26">
      <div>
        <div className="h-96 flex alien-center ">
          <div className="flex items-center mt-95 z-10">
            <h1 className="font-sans font-bold text-white relative leading-tight font-900 pl-30 text-7xl text-left mt-20">
              Web & Mobile <br></br> App <br></br> Development <br></br> Company
            </h1>
          </div>
          <div className="h-50 w-10/12 right-30 top-30 absolute">
            <img src="asset 79.svg" alt="react" />
          </div>
        </div>
      </div>
      <div>
        <div className="absolute left-30 top-189">
          <button className="bg-orange-500 bg-gradient-to-r from-orange-300 to-orange-600 py-3 px-6 text-3xl z-50 md:border-b-4 hover:-translate-y-1 hover:border-b-6  border-amber-700  text-white font-semibold rounded-2xl">
            GET STARTED
          </button>
          <div className="left-30 border-2 h-43 w-320 mt-15 mb-50 border-cyan-500 rounded-3xl">
            <div className="flex justify-evenly pt-3">
              <div className="text-center">
                <h1 className="text-white text-2xl mb-7">
                  Successful Projects
                </h1>
                <h1 className="text-cyan-400 text-7xl font-semibold">100+</h1>
              </div>
              <div className="text-center">
                <h1 className="text-white text-2xl mb-7">Repeated Client</h1>
                <h1 className="text-cyan-400 text-7xl font-semibold">80%</h1>
              </div>
              <div className="text-center">
                <h1 className="text-white text-2xl mb-7">Years in industry</h1>
                <h1 className="text-cyan-400 text-7xl font-semibold">9+</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className=" border-t-3 shadow-inner shadow-white h-17  w-full absolute top-267"></div>
      </div>
    </>
  );
};

export default Home;
