import React from "react";
import Industries from "./Video_Component/Industries";
import Appreciation from "./Video_Component/Appreciation";
import Form from "./Video_Component/Form";
import Footer from "./Video_Component/Footer";
import Stories from "./Video_Component/Stories";
import Engagement from "./Video_Component/Engagement";
import Specialization from "./Video_Component/Specialization";
import Why_tecoreng from "./Video_Component/Why_tecoreng";
import Services from "./Video_Component/Services";
import Innovation from "./Video_Component/Innovation";
import Development from "./Video_Component/Development";
import "../App.css";
import "./Video.css";

const Video = () => {
  const handleFull = () => {
    document.getElementById("full").requestFullscreen();
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative h-96 items-center justify-center top-165 ">
        <div className="flex justify-center items-center mb-6">
          <div className="w-5/6">
            <video
              id="full"
              src="Tecoreng_fullVideo.mp4"
              className="rounded-4xl overflow-hidden w-full z-0 relative"
              height="315"
              autoPlay
              loop
              muted
              content="video/mp4"
            ></video>
            <div
              className="h-25 w-25 flex justify-center italic rounded-full absolute top-145 right-40 z-50 bg-gradient-to-l from-gray-700"
              style={{ backgroundColor: "#01132e" }}
              onClick={handleFull}
            >
              <img src="asset 3.svg" alt="react" height={34} width={34} />
            </div>
          </div>
        </div>

        <Innovation />
        <Services />
        <Why_tecoreng />
        <div className="flex justify-center items-center">
          <div className="w-6/7">
            <Specialization />
            <Engagement />
          </div>
        </div>
        <Development />
        <div className="flex justify-center items-center">
          <div className="w-6/7">
            <Stories />
            <div className="relative top-100">
              <Industries />
              <Appreciation />
              <Form />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Video;
