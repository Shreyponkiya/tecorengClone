import React, { useRef, useState } from "react";
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
import Insights from "./Video_Component/Insights";
import "../App.css";
import "./Video.css";

const Video = () => {
  const fullScreenVideoRef = useRef(null); // Reference for the full-screen video
  const [isFullScreen, setIsFullScreen] = useState(false); // Track full-screen state

  const handleFull = () => {
    // Create video element only if it doesn't exist
    if (!fullScreenVideoRef.current) {
      const fullScreenVideo = document.createElement("video");
      fullScreenVideo.src = "Tecoreng_fullVideo.mp4";
      fullScreenVideo.controls = true;
      fullScreenVideo.autoplay = true;
      fullScreenVideo.style.position = "fixed";
      fullScreenVideo.style.top = "0";
      fullScreenVideo.style.left = "0";
      fullScreenVideo.style.width = "0vw";
      fullScreenVideo.style.height = "0vh";
      fullScreenVideo.style.zIndex = "9999";
      fullScreenVideo.style.backgroundColor = "black";

      document.body.appendChild(fullScreenVideo);
      fullScreenVideoRef.current = fullScreenVideo; // Save reference
      setIsFullScreen(true); // Mark full-screen mode active

      // Request full-screen mode
      if (fullScreenVideo.requestFullscreen) {
        fullScreenVideo.requestFullscreen();
      } else if (fullScreenVideo.mozRequestFullScreen) {
        fullScreenVideo.mozRequestFullScreen();
      } else if (fullScreenVideo.webkitRequestFullscreen) {
        fullScreenVideo.webkitRequestFullscreen();
      } else if (fullScreenVideo.msRequestFullscreen) {
        fullScreenVideo.msRequestFullscreen();
      }

      // Listen for ESC key
      document.addEventListener("keydown", handleEscape);
      fullScreenVideo.onended = removeVideo; // Remove when the video ends
    }
  };

  // Handle ESC press logic
  const handleEscape = (event) => {
    if (event.key === "Escape") {
      if (isFullScreen) {
        // First ESC press: Exit full-screen
        document.exitFullscreen();
        setIsFullScreen(false);
      } else {
        // Second ESC press: Remove the video
        removeVideo();
      }
    }
  };

  // Remove video from the DOM
  const removeVideo = () => {
    if (fullScreenVideoRef.current) {
      document.body.removeChild(fullScreenVideoRef.current);
      fullScreenVideoRef.current = null;
      setIsFullScreen(false);
      document.removeEventListener("keydown", handleEscape);
    }
  };

  return (
    <div className="relative h-96 items-center justify-center top-165" id="main-size">
      <div className="flex justify-center items-center mb-6">
        <div className="w-6/7" id="size-div">
          <video
            id="full"
            src="small_video.mp4"
            className="rounded-4xl overflow-hidden w-full z-0 relative"
            height="315"
            autoPlay
            loop
            muted
            content="video/mp4"
          ></video>
          {/* Full-screen play button */}
          <div
            className="h-25 w-25 flex justify-center italic rounded-full absolute top-145 right-40 z-50 bg-gradient-to-l from-gray-700"
            style={{ backgroundColor: "#01132e" }}
            onClick={handleFull}
            id="Full_screen"
          >
            <img src="asset 3.svg" alt="react" height={34} width={34} />
          </div>
        </div>
      </div>
      <Innovation />
      <Services />
      <Why_tecoreng />
      <div className="flex justify-center items-center">
        <div className="w-6/7" id="div1">
          <Specialization />
          <Engagement />
        </div>
      </div>
      <Development />
      <div className="flex justify-center items-center">
        <div className="w-6/7 stori" id="div2">
          <Stories />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-6/7" id="div2">
          <div className="relative top-100" id="other-div">
            <Industries />
            <Appreciation />
            <Insights />
            <Form />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Video;
