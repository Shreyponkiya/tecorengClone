import React from "react";
import Slider from "react-slick";
import "./Appreciation.css"; // Import CSS file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Appreciation = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const clientList = [
    {
      name: "Juan S Ortiz Salazar",
      position: "Acme Corp",
      commit:
        "They were honest about their abilities from the beginning, have fantastic communication skills, and are overall a dream to work with! Myself and my team felt beyond confident of their abilities and that they were doing the work on a week to week basis just as they stated they would. I will definitely be looking to hiring Tecoreng first before considering anyone else on Upwork!!",
    },
    {
      name: "Tim Loenders",
      position: "BPOS LOENDERS GCV",
      commit:
        "Paresh worked out the infrastructure topology and did a fine job on that. He gave me insights about how to tackle setup that I didn't have which saved the project time and money.",
    },
    {
      name: "Denis Cartin",
      position: "CTO, SoSFba",
      commit:
        "They have good timing and quality in task solving. Their project management was outstanding. Always delivered on time and quickly replied to our needs and demands. The Communication was effective and running smoothly, with constant updates on the project's progress. They also shared significant insights and suggestions for developing the project.",
    },
    {
      name: "Kean Graham",
      position: "CEO, MonetizeMore",
      commit:
        "What most impressed us about Technical Core Engineers was their wide range of knowledge and commitment to the completion of our project. They exceeded our expectations rather than meeting them. Their ability to quickly understand the difficulties of our business and personalize their solutions to our specific need was absolutely impressive.",
    },
    {
      name: "Chetan Patwardhan",
      position: "CEO, HiQuest Group of IT Companies",
      commit:
        "What most impressed us about Technical Core Engineers was their commitment to delivering a service that exceeded our expectations. Their commitment to the project, dedication to excellence, and willingness to go the extra mile truly distinguish them. They demonstrated a thorough understanding of the business and adjusted their solutions to meet our specific needs.",
    },
  ];
  return (
    <div className="overflow-hidden">
      <h1 className="text-white text-6xl my-8">Appreciation from Clients</h1>
      <div className="py-10">
        <div className="max-w-7xl mx-auto"  id="c-div">
          <Slider {...settings}>
            {clientList.map((item, index) => (
              <div key={index} className="p-4 flex justify-center items-center">
                <div id="app-card-div" className="border-2 h-100 w-100 p-6 rounded-2xl text-black shadow-[inset_0px_13px_49px_4px_#90cdf4]">
                  <h2 className="text-xl text-white font-semibold">{item.name}</h2>
                  <p className="text-sm italic text-white">{item.position}</p>
                  <p className="mt-3 text-sm text-white">{item.commit}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Appreciation;
