import React from "react";

const Why_tecoreng = () => {
  const functionallity2 = [
    { isimage: true, image: "asset 34.webp", data: "Reporting & Analysis" },
    { isimage: true, image: "asset 35.webp", data: "On-Time Delivery" },
    { isimage: true, image: "asset 36.webp", data: "Seamless Communication" },
    { isimage: true, image: "asset 37.webp", data: "Post Launch Support" },
    { isimage: false, image: "asset 24.webp", data: "Agile Methodology" },
    { isimage: false, image: "asset 29.webp", data: "Certified Experts" },
    { isimage: false, image: "asset 34.webp", data: "Budget Friendly" },
    { isimage: false, image: "asset 39.webp", data: "100% Client Expectation" },
  ];
  return (
    <div
      style={{ backgroundColor: "#112542" }}
      className="flex justify-center items-center pb-20 mb-20 shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
    >
      <div className="w-5/6 mt-7">
        <div className="justify-between items-center">
          <h1 className="text-7xl text-white mb-5">
            WHY TECORENG FOR YOUE NEXT PROJECT
          </h1>
          <p className="text-white pt-4 mr-70">
            Introducing Technical Core Engineers (TCE), the intersection of
            technology and innovation. At TCE, we excel in delivering
            exceptional IT services customized to fulfill your development
            requirements. Harnessing our expertise and enthusiasm, we breathe
            life into your ideas. Backed by a team of seasoned developers with
            extensive knowledge in various programming technologies, our
            dedication is unwavering, ensuring the delivery of outstanding
            results. Our mission is straightforward: decode the language of
            binary and transform it into extraordinary digital solutions that
            empower your business.
          </p>
          <button className="bg-orange-500 bg-gradient-to-r from-orange-300 duration-500 to-orange-600 py-3 px-6 text-3xl z-30 md:border-b-4 hover:-translate-y-1 hover:border-b-6  border-amber-700  text-white font-semibold rounded-2xl mt-7 mb-18">
            GET IN TOUCH
          </button>
        </div>
        <div className="">
          <div className="flex flex-wrap gap-5 ">
            {functionallity2.map((item, index) => (
              <div
                key={index}
                className="h-30 w-70 rounded-2xl mb-8 shadow-[0_35px_35px_rgba(0,0,0,0.25)] text-center flex justify-center items-center functionallity"
              >
                <div className="flex-col">
                  {item.isimage ? (
                    <div className="flex justify-center items-center">
                      <img src={item.image} alt="" />
                    </div>
                  ) : (
                    <h1></h1>
                  )}
                  <h1 className="text-white">{item.data}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why_tecoreng;
