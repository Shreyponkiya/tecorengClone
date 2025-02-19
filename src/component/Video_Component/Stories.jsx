import React, { useState } from "react";

const Stories = () => {
  const [iscardHover, setiscardHover] = React.useState("");
  const [Hovercardindex, setHovercardindex] = React.useState(0);
  const card = [
    {
      image: "asset 48.webp",
      video: "video3.mp4",
      title: "Betting Platform",
      dec: "Tecoreng's Online Betting Platform revolutionizes how enthusiasts engage with betting, offering seamless experiences across sports, esports, casino games, and more.",
    },
    {
      image: "asset 49.webp",
      video: "video2.mp4",
      title: "Health and Wellness",
      dec: "Excitement fills the air as we proudly unveil our Health and Wellness Platform-a pivotal portal toward maximizing your health journey.",
    },
    {
      image: "asset 50.webp",
      video: "video1.mp4",
      title: "An E - Commerce",
      dec: "Delve into the world of our custom-designed Ecommerce Platform, a true testament to Tecoreng's meticulous craftsmanship.",
    },
  ];
  return (
    <div className="mb-20">
      <h1 className="text-white text-6xl">Our Success Stories</h1>
      <div className="flex">
        {card.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => {
              setiscardHover(true);
              setHovercardindex(item.title);
            }}
            onMouseLeave={() => {
              setiscardHover(false);
              setHovercardindex("");
            }}
            className=" pl-6 mt-10 h-30 items-center rounded-3xl"
          >
            {iscardHover && Hovercardindex === item.title ? (
              <></>
            ) : (
              <div
                className="h-132 rounded-3xl "
                style={{ backgroundColor: "#112542" }}
              >
                <img src={item.image} alt="" width={4000} height={500} />
                <div className="ml-8">
                  <h1 className="text-white text-2xl my-3">{item.title}</h1>
                  <p className="text-white text-sm pr-2">{item.dec}</p>
                </div>
              </div>
            )}

            {iscardHover && Hovercardindex === item.title && (
              <div className="h-30 items-center rounded-3xl">
                {card
                  .filter((i) => i.title === item.title)
                  .map((i) => (
                    <div
                      className="h-132 rounded-3xl "
                      style={{ backgroundColor: "#112542" }}
                    >
                      <video
                        src={i.video}
                        loop
                        autoPlay
                        width={4000}
                        height={4000}
                        className="rounded-3xl"
                      ></video>
                      <div className="ml-8">
                        <h1 className="text-white text-2xl my-3">{i.title}</h1>
                        <p className="text-white text-sm pr-2">{i.dec}</p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;