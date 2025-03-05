import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import "./Home.css";

const Home = () => {
  const [countProjects, setCountProjects] = useState(0);
  const [countClients, setCountClients] = useState(0);
  const [countYears, setCountYears] = useState(0);
  const boxRef = useRef(null);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isCounting) {
          setIsCounting(true);

          // Function to animate a count
          const animateCount = (setCount, start, end, duration) => {
            let stepTime = duration / end;
            let current = start;

            const timer = setInterval(() => {
              current += 1;
              if (current >= end) {
                clearInterval(timer);
                setCount(end);
              } else {
                setCount(current);
              }
            }, stepTime);
          };

          // Animate Successful Projects (0 to 100+)
          animateCount(setCountProjects, 0, 100, 3000); // 3 seconds

          // Animate Repeated Client (0% to 80%)
          animateCount(setCountClients, 0, 80, 3000); // 3.5 seconds

          // Animate Years in Industry (0 to 9+)
          animateCount(setCountYears, 0, 9, 3000); // 4 seconds
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the box is in view
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, [isCounting]);

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
            <div className="h-200 w-10/12 right-30 top-30 absolute" id="home-img"></div>
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
              ref={boxRef}
            >
              {/* Successful box */}
              <div className="flex justify-evenly pt-3">
                <div className="text-center">
                  <h1 className="text-white text-2xl mb-7 hero-name">Successful Projects</h1>
                  <h1 className="text-cyan-400 text-7xl font-semibold">{countProjects}+</h1>
                </div>
                <div className="text-center">
                  <h1 className="text-white text-2xl mb-7 hero-name">Repeated Client</h1>
                  <h1 className="text-cyan-400 text-7xl font-semibold">{countClients}%</h1>
                </div>
                <div className="text-center">
                  <h1 className="text-white text-2xl mb-7 hero-name">Years in industry</h1>
                  <h1 className="text-cyan-400 text-7xl font-semibold">{countYears}+</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
