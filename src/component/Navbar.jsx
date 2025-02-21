import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef();
  const navRef1 = useRef();
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = window.scrollY;

  const Navbar_Button = () => {
    console.log("Hello world");
    navRef.current.classList.toggle("responsive_nav");
    navRef1.current.classList.toggle("toggle-nev-bar");
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowNavbar(true); // Show navbar on scroll up
      } else {
        setShowNavbar(false); // Hide navbar on scroll down
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        id="main-nav-bar"
        className={`z-50 fixed top-0 transition-transform duration-[1500ms] ease-in-out w-full ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav
          className="h-26 border-1 border-gray-700 flex  items-center bg-[#01132e] text-white pl-8 pr-8"
          ref={navRef1}
        >
          <div className="flex justify-between items-center nav-bar-life">
            <div>
              <img src="asset 71.svg" alt="react" />
            </div>
            <ul
              className="flex justify-between items-center gap-20 font-sans mr-8 font-semibold"
              id="box"
            >
              <li id="text-bar">Services</li>
              <li id="text-bar">About Us</li>
              <li id="text-bar">Career</li>
              <li id="text-bar">Portfolio</li>
              <li id="text-bar">Blog</li>
            </ul>
            <div className="nav-bar-icon-div">
              <img
                src="asset 2.svg"
                id="icon-bar"
                style={{ display: "none" }}
                onClick={Navbar_Button}
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-4.5" id="text-bar">
            <button className="border-1 py-2.5 px-6 duration-1000 ease-in-out rounded-3xl hover:bg-orange-500 hover:bg-gradient-to-r hover:from-orange-300 hover:to-orange-600">
              Hire Developers
            </button>
            <button className="py-2.5 px-6 rounded-3xl duration-1000 ease-in-out bg-orange-500 bg-gradient-to-r from-orange-300 to-orange-600 hover:bg-gradient-to-l">
              Get a quote
            </button>
          </div>
        </nav>
      </div>
      <div ref={navRef} className="toggle-nev-bar">
        <div className="flex justify-end m-10">
          <img src="asset 0.svg" alt="" ref={navRef} onClick={Navbar_Button} />
        </div>
        <div>
          <h1 className="border-2 border-amber-700 py-5 pl-8">Services</h1>
          <h1 className="border-2 border-amber-700 py-5 pl-8">About us</h1>
          <h1 className="border-2 border-amber-700 py-5 pl-8">Career</h1>
          <h1 className="border-2 border-amber-700 py-5 pl-8">PortFolio</h1>
          <h1 className="border-2 border-amber-700 py-5 pl-8">Blog</h1>
          <div className="flex flex-col gap-8 justify-center items-centerm mt-10">
            <button className="border-1 mx-40 py-2 px-10 rounded-2xl hover:bg-orange-500 hover:bg-gradient-to-r hover:from-orange-300 hover:to-orange-600">
              Hire Developer
            </button>
            <button className="border-1 mx-40 py-2 px-10 rounded-2xl duration-1000 ease-in-out bg-orange-500 bg-gradient-to-r from-orange-300 to-orange-600 hover:bg-gradient-to-l">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
