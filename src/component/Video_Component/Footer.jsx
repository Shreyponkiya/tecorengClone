import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full">
        <div className="relative top-100">
          <div
            style={{ backgroundColor: "#112542", position: "relative" }}
            className="z-20"
          >
            <div className="flex justify-between w-5/6 mx-auto gap-5 pt-10 pb-5 border-b-1 border-white">
              <div>
                <h1 className="text-2xl text-white border-b-1 border-dashed">
                  Features menu
                </h1>
                <ul className="text-white list-none">
                  <li className="mt-3">Blog</li>
                  <li className="mt-3">Services</li>
                  <li className="mt-3">Hire Developer</li>
                  <li className="mt-3">Career</li>
                  <li className="mt-3">Who We Are</li>
                </ul>
              </div>
              <div>
                <h1 className="text-2xl text-white border-b-1 border-dashed">
                  Service Menu
                </h1>
                <ul className="text-white list-none">
                  <li className="mt-3">Web Development</li>
                  <li className="mt-3">Mobile App Development</li>
                  <li className="mt-3">Game Development</li>
                  <li className="mt-3">UI/UX Design</li>
                  <li className="mt-3">Graphics Design</li>
                </ul>
              </div>
              <div>
                <ul className="text-white list-none mt-12">
                  <li className="mt-3">DevOps</li>
                  <li className="mt-3">E-Commerce</li>
                  <li className="mt-3">Digital Marketing</li>
                  <li className="mt-3">Cloud Computing</li>
                </ul>
              </div>
              <div className="w-90">
                <h1 className="text-2xl text-white border-b-1 border-dashed">
                  Contact Information
                </h1>
                <div>
                  <ul className="text-white list-none mt-2">
                    <li className="" id="loction_list">
                      904, Skywalk The Elements, Jagatpur Rd, near BSNL Office,
                      off Sarkhej - Gandhinagar Highway, Jagatpur, Ahmedabad,
                      Gujarat 382470
                    </li>
                    <li className="mt-3" id="loction_list">
                      1148 S Railroad Ave, Bronxville, New York 10708, USA.
                    </li>
                    <li className="mt-3" id="email_list">
                      sales@tecoreng.com
                    </li>
                    <li className="mt-5" id="call_list">
                      Call Us:
                    </li>
                    <li>HR - +91 63527 25452</li>
                    <li>Sales - +91 85117 46476</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-6/7">
                <div className="ml-5 flex justify-between items-center">
                  <img src="asset 71.svg" alt="" className="h-50 w-50" />
                  <h1 className="text-white text-xl">
                    Copyright © 2025 by Tecoreng
                  </h1>
                  <div className="flex gap-4">
                    <img src="asset 72.svg" alt="" />
                    <img src="asset 73.svg" alt="" />
                    <img src="asset 74.svg" alt="" />
                    <img src="asset 75.svg" alt="" />
                    <img src="asset 76.svg" alt="" />
                    <img src="asset 77.svg" alt="" />
                    <img src="asset 78.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
