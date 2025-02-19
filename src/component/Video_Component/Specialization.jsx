import React from "react";

const Specialization = () => {
  const [currentCard, setCurrentCard] = React.useState(0);
  const Special = [
    {
      image: "asset 83.svg",
      data: "Mobile App Development",
      dec: "Tecoreng is the top mobile application development company in India. Our expert team of mobile application developers is capable of creating high-quality mobile apps for multiple platforms like IOS & Android.",
    },
    {
      image: "asset 83.svg",
      data: "Web Development",
      dec: "Our web team creates high-quality websites as per custom requirements and helps to make your business digital. Tecoreng web experts to continue growing themself to the latest fair with technology such as Laravel, Angular, Node.Js, and so on.",
    },
    {
      image: "asset 83.svg",
      data: "UI/UX Graphics & Design",
      dec: "Tecoreng is the best UI/UX graphics design agency. We have the capacity to build a smooth and high-quality design with our UI/UX team.",
    },
    {
      image: "asset 83.svg",
      data: "Digital Marketing",
      dec: "Technical Core Engineers is a Digital organization that incorporates administrations from making your Brand character through carefully characterizing your thoughts and zeroing in on getting your items and administrations to the consistently developing computerized market subsequently expanding your image’s mindfulness, deals, and wants.",
    },
    {
      image: "asset 83.svg",
      data: "Internet Of Things",
      dec: "Web of Things(IoT) application advancement interfaces each and every actual device with the Internet to engage an exchange of data. It will in general be energized through different connection points and devices to make life favorable.",
    },
  ];

  const handleNextCard = () => {
    setCurrentCard((prev) => (prev + 1) % Special.length);
  };

  const handlePrevCard = () => {
    setCurrentCard((prev) => (prev - 1 + Special.length) % Special.length);
  };
  const leftIndex = (currentCard - 1 + Special.length) % Special.length;
  const rightIndex = (currentCard + 1) % Special.length;
  return (
    <div>
      <h1 className="text-white text-7xl">Our Specialization</h1>
      <p className="text-white mt-17 mr-65">
        We offer a full range of web app development services that make things
        better for enterprises and companies we work with. Our team of dedicated
        mobile app developers fulfils your diverse business requirements through
        a number of services. We specialize in the following services:
      </p>
      <div className="flex justify-between">
        <div
          className="border-2 bg-gray-400 border-gray-700 mt-30 rounded-3xl h-65 w-80 items-center justify-center cursor-pointer"
          onClick={handlePrevCard}
        >
          <div className="flex flex-col justify-center items-center">
            <img
              src={Special[leftIndex].image}
              alt="Left Card"
              height={35}
              width={35}
              className="py-5"
            />
            <h1 className="font-semibold py-3">{Special[leftIndex].data}</h1>
            <p className="text-xs text-center px-3">{Special[leftIndex].dec}</p>
          </div>
        </div>

        {/* Middle (Current) Card */}
        <div className="border-2 bg-white border-gray-900 rounded-3xl pt-10 mt-10 h-100 w-144 items-center justify-center middleCard">
          <div className="flex flex-col justify-center items-center">
            <img
              src={Special[currentCard].image}
              alt="Current Card"
              height={50}
              width={50}
              className="py-8"
            />
            <h1 className="text-2xl font-semibold py-3">
              {Special[currentCard].data}
            </h1>
            <p className="text-center px-3">{Special[currentCard].dec}</p>
          </div>
        </div>

        {/* Right Card */}
        <div
          className="border-2 bg-gray-400 border-gray-700 mt-30 rounded-3xl h-65 w-80 items-center justify-center cursor-pointer"
          onClick={handleNextCard}
        >
          <div className="flex flex-col justify-center items-center">
            <img
              src={Special[rightIndex].image}
              alt="Right Card"
              height={35}
              width={35}
              className="py-5"
            />
            <h1 className="font-semibold py-3">{Special[rightIndex].data}</h1>
            <p className="text-xs text-center px-3">
              {Special[rightIndex].dec}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialization;
