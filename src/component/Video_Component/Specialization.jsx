import React, { useState } from "react";
import "./Specialization.css";

const Specialization = () => {
  const [animate, setAnimate] = useState(""); 
  const [currentCard, setCurrentCard] = useState(0);

  const Special = [
    {
      image: "asset 83.svg",
      data: "Mobile App Development",
      dec: "Tecoreng is the top mobile application development company in India. Our expert team of mobile application developers is capable of creating high-quality mobile apps for multiple platforms like IOS & Android.",
    },
    {
      image: "asset 83.svg",
      data: "Web Development",
      dec: "Our web team creates high-quality websites as per custom requirements and helps to make your business digital. Tecoreng web experts continue growing with the latest technology such as Laravel, Angular, Node.Js, and more.",
    },
    {
      image: "asset 83.svg",
      data: "UI/UX Graphics & Design",
      dec: "Tecoreng is the best UI/UX graphics design agency. We have the capacity to build a smooth and high-quality design with our UI/UX team.",
    },
    {
      image: "asset 83.svg",
      data: "Digital Marketing",
      dec: "Technical Core Engineers is a Digital organization that incorporates services from creating your Brand identity to defining your ideas and increasing your brand awareness and sales in the digital market.",
    },
    {
      image: "asset 83.svg",
      data: "Internet Of Things",
      dec: "Internet of Things (IoT) applications connect physical devices with the Internet for seamless data exchange, making life more convenient.",
    },
  ];

  const handleNextCard = () => {
    setAnimate("moveRightToLeft"); 
    setTimeout(() => {
      setCurrentCard((prev) => (prev + 1) % Special.length);
      setAnimate(""); 
    }, 400);
  };

  const handlePrevCard = () => {
    setAnimate("moveLeftToRight"); 
    setTimeout(() => {
      setCurrentCard((prev) => (prev - 1 + Special.length) % Special.length);
      setAnimate(""); 
    }, 400);
  };

  const leftIndex = (currentCard - 1 + Special.length) % Special.length;
  const rightIndex = (currentCard + 1) % Special.length;

  return (
    <div>
      <h1 className="text-white text-7xl">Our Specialization</h1>
      <p className="text-white mt-17">
        We offer a full range of web app development services that make things
        better for enterprises and companies we work with. Our team of dedicated
        mobile app developers fulfill your diverse business requirements through
        various services. We specialize in the following areas:
      </p>
      <div className="flex justify-between" id="main-card-main-div">
        {/* Left Card */}
        <div
          className={`border-2 bg-gray-400 border-gray-700 mt-30 rounded-3xl h-65 w-80 items-center justify-center cursor-pointer leftcard ${animate === "moveLeftToRight" ? "leftToMiddle" : ""}`}
          onClick={handlePrevCard}
        >
          <div className="flex flex-col justify-center items-center">
            <img src={Special[leftIndex].image} alt="Left Card" className="py-5" height={22} width={22} />
            <h1 className="font-semibold py-3 text-center">{Special[leftIndex].data}</h1>
            <p className="text-xs text-center px-3">{Special[leftIndex].dec}</p>
          </div>
        </div>

        {/* Middle (Current) Card */}
        <div
          className={`border-2 bg-white border-gray-900 rounded-3xl pt-10 mt-10 h-100 w-144 items-center justify-center middleCard ${animate}`}
        >
          <div className="flex flex-col justify-center items-center">
            <img src={Special[currentCard].image} alt="Current Card" className="py-8" height={50} width={50} />
            <h1 className="text-2xl font-semibold py-3">{Special[currentCard].data}</h1>
            <p className="text-center px-3">{Special[currentCard].dec}</p>
          </div>
        </div>

        {/* Right Card */}
        <div
          className={`border-2 bg-gray-400 border-gray-700 mt-30 rounded-3xl h-65 w-80 items-center justify-center cursor-pointer rightcard ${animate === "moveRightToLeft" ? "rightToMiddle" : ""}`}
          onClick={handleNextCard}
        >
          <div className="flex flex-col justify-center items-center">
            <img src={Special[rightIndex].image} alt="Right Card" className="py-5" height={22} width={22} />
            <h1 className="font-semibold py-3 text-center">{Special[rightIndex].data}</h1>
            <p className="text-xs text-center px-3">{Special[rightIndex].dec}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialization;
