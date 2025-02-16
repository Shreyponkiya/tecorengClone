import React from "react";
import "../App.css";
import "./Video.css";
const Video = () => {
  const [ishoverin, setisHoverin] = React.useState(false);
  const [ishoverout, setisHoverout] = React.useState(false);
  const functionallity1 = [
    { image: "asset 4.webp", data: "Web Development" },
    { image: "asset 9.webp", data: "Mobile App Development" },
    { image: "asset 14.webp", data: "Graphics Design" },
    { image: "asset 19.webp", data: "UI/UX Design" },
    { image: "asset 24.webp", data: "Quality Assurance (QA)" },
    { image: "asset 29.webp", data: "Digital Marketing" },
  ];
  const onHover_Functionallity1 = [
    {
      original_image: "asset 4.webp",
      title: "Web Development",
      dec: "Transform your business concepts with our web development services, crafting innovative and next-generation websites.",
      image1: "asset 5.svg",
      image1: "asset 6.svg",
      image1: "asset 7.svg",
      image1: "asset 8.svg",
    },
    {
      original_image: "asset 9.webp",
      title: "Mobile App Development",
      dec: "Drive digital evolution by creating scalable, compelling, and feature-rich mobile applications.",
      image1: "asset 10.svg",
      image1: "asset 11.svg",
      image1: "asset 12.svg",
      image1: "asset 13.svg",
    },
    {
      original_image: "asset 14.webp",
      title: "Graphics Design",
      dec: "Through our creatively inspired and strategically guided solutions, we assist your brand in establishing emotional connections with consumers.",
      image1: "asset 15.svg",
      image1: "asset 16.svg",
      image1: "asset 17.svg",
      image1: "asset 18.svg",
    },
    {
      original_image: "asset 19.webp",
      title: "UI/UX Design",
      dec: "We specialise in crafting professional and creative websites.Our designers create websites that are both search engine and user-friendly.",
      image1: "asset 20.svg",
      image1: "asset 21.svg",
      image1: "asset 22.svg",
      image1: "asset 23.svg",
    },
    {
      original_image: "asset 24.webp",
      title: "Quality Assurance (QA)",
      dec: "Explore our user-friendly and seamless website and app development services, designed for easy management.",
      image1: "asset 25.svg",
      image1: "asset 26.svg",
      image1: "asset 27.svg",
      image1: "asset 28.svg",
    },
    {
      original_image: "asset 29.webp",
      title: "Digital Marketing",
      dec: "Leverage our digital marketing services to achieve outstanding sales conversions and maximise ROl.",
      image1: "asset 30.svg",
      image1: "asset 31.svg",
      image1: "asset 32.svg",
      image1: "asset 33.svg",
    },
  ];

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
              onClick={() => {
                handleFull();
              }}
            >
              <img src="asset 3.svg" alt="react" height={34} width={34} />
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#112542" }}
          className="flex justify-center items-center pb-20 mb-20"
        >
          <div className="w-5/6 mt-7">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-6xl text-white leading-tight">
                  Transfer your <br /> enterprise with digital <br /> innovation
                </h1>
                <p className="text-white my-4">
                  Your success as a market innovator reflects our strides as a
                  unified partner. Committed to assisting you in attaining
                  excellence through our solutions, we boast a team of adept
                  professionals and dynamic facilitators. Our steadfast
                  commitment to a collaborative strategy, coupled with agile
                  methodologies, propels business expansion. Rely on our
                  strategic insights and development processes, and we will fuel
                  your concepts to manifest as groundbreaking disruptions.
                </p>
                <button className="bg-orange-500 bg-gradient-to-r from-orange-300 to-orange-600 py-3 px-6 text-3xl z-50 md:border-b-4 hover:-translate-y-1 hover:border-b-6  border-amber-700  text-white font-semibold rounded-2xl">
                  HIRE NOW
                </button>
              </div>

              <div className="ml-10">
                <img
                  src="infinite.c057ea68.webp"
                  height={3200}
                  width={3200}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mb-15">
          <div className="w-6/7">
            <h1 className="text-6xl text-white mb-3 ">Services We Offer</h1>
            <p className="text-white">
              We offer a full range of web app development services that make
              things better for enterprises and companies we work with. Our team
              of dedicated mobile app developers fulfils your diverse business
              requirements through a number of services. We specialise in the
              following services:
            </p>
            <div className="mt-18">
              {/* {functionallity1.map((item, index) => (
                <div
                  onMouseEnter={() => setisHoverin(true)}
                  onMouseLeave={() => setisHoverout(true)}
                  key={index}
                  id="web"
                  className="flex pl-6 border-1 border-gray-600 mt-10 h-30 items-center rounded-3xl hover:bg-gradient-to-r hover:from-sky-900 web"
                >
                  <img src={item.image} alt="" />
                  <h1 className="text-white pl-13 text-2xl">{item.data}</h1>
                </div>
              ))} */}
              {ishoverin ? (
                onHover_Functionallity1.map((item, index) => (
                  <div
                    key={index}
                    id="web"
                    className="flex pl-6 border-1 border-gray-600 mt-10 h-30 items-center rounded-3xl hover:bg-gradient-to-r hover:from-sky-900 web"
                  >
                    <img src={item.original_image} alt="" />
                    <h1 className="text-white pl-13 text-2xl">{item.title}</h1>
                    <p>{item.dec}</p>
                  </div>
                ))
              ) : functionallity1.map((item, index) => (
                <div
                  onMouseEnter={() => setisHoverin(true)}
                  onMouseOut={() => setisHoverin(false)}
                  key={index}
                  id="web"
                  className="flex pl-6 border-1 border-gray-600 mt-10 h-30 items-center rounded-3xl hover:bg-gradient-to-r hover:from-sky-900 web"
                >
                  <img src={item.image} alt="" />
                  <h1 className="text-white pl-13 text-2xl">{item.data}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{ backgroundColor: "#112542" }}
          className="flex justify-center items-center pb-20 mb-20"
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
                requirements. Harnessing our expertise and enthusiasm, we
                breathe life into your ideas. Backed by a team of seasoned
                developers with extensive knowledge in various programming
                technologies, our dedication is unwavering, ensuring the
                delivery of outstanding results. Our mission is straightforward:
                decode the language of binary and transform it into
                extraordinary digital solutions that empower your business.
              </p>
              <button className="bg-orange-500 bg-gradient-to-r from-orange-300 to-orange-600 py-3 px-6 text-3xl z-50 md:border-b-4 hover:-translate-y-1 hover:border-b-6  border-amber-700  text-white font-semibold rounded-2xl mt-7 mb-18">
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
      </div>
    </div>
  );
};

export default Video;
