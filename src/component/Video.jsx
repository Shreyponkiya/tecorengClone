import React from "react";
import Industries from "./Video_Component/Industries";
import Appreciation from "./Video_Component/Appreciation";
import Form from "./Video_Component/Form"
import Footer from "./Video_Component/Footer";
import "../App.css";
import "./Video.css";

const Video = () => {
  const [isHovered, setIsHovered] = React.useState(false); // For the hover state
  const [hoveredItem, setHoveredItem] = React.useState(""); // To track which item is hovered
  const [currentCard, setCurrentCard] = React.useState(0);
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
  // console.log(Special);
  const functionality1 = [
    { image: "asset 4.webp", data: "Web Development" },
    { image: "asset 9.webp", data: "Mobile App Development" },
    { image: "asset 14.webp", data: "Graphics Design" },
    { image: "asset 19.webp", data: "UI/UX Design" },
    { image: "asset 24.webp", data: "Quality Assurance (QA)" },
    { image: "asset 29.webp", data: "Digital Marketing" },
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
  const onHoverFunctionality1 = [
    {
      original_image: "asset 4.webp",
      title: "Web Development",
      description:
        "Transform your business concepts with our web development services, crafting innovative and next-generation websites.",
      images: [
        { img: "asset 5.svg", img_name: "React JS" },
        { img: "asset 6.svg", img_name: "Angular" },
        { img: "asset 7.svg", img_name: "laravel" },
        { img: "asset 8.svg", img_name: "Node JS" },
      ],
    },
    {
      original_image: "asset 9.webp",
      title: "Mobile App Development",
      description:
        "Drive digital evolution by creating scalable, compelling, and feature-rich mobile applications.",
      images: [
        { img: "asset 10.svg", img_name: "Mobile App" },
        { img: "asset 11.svg", img_name: "iOS" },
        { img: "asset 12.svg", img_name: "Android" },
        { img: "asset 13.svg", img_name: "Cross-Platform" },
      ],
    },
    {
      original_image: "asset 14.webp",
      title: "Graphics Design",
      description:
        "Through our creatively inspired and strategically guided solutions, we assist your brand in establishing emotional connections with consumers.",
      images: [
        { img: "asset 15.svg", img_name: "Branding" },
        { img: "asset 16.svg", img_name: "Illustration" },
        { img: "asset 17.svg", img_name: "UI Design" },
        { img: "asset 18.svg", img_name: "Print Design" },
      ],
    },
    {
      original_image: "asset 19.webp",
      title: "UI/UX Design",
      description:
        "We specialise in crafting professional and creative websites. Our designers create websites that are both search engine and user-friendly.",
      images: [
        { img: "asset 20.svg", img_name: "Web Design" },
        { img: "asset 21.svg", img_name: "User Research" },
        { img: "asset 22.svg", img_name: "Prototyping" },
        { img: "asset 23.svg", img_name: "Usability Testing" },
      ],
    },
    {
      original_image: "asset 24.webp",
      title: "Quality Assurance (QA)",
      description:
        "Explore our user-friendly and seamless website and app development services, designed for easy management.",
      images: [
        { img: "asset 25.svg", img_name: "Testing" },
        { img: "asset 26.webp", img_name: "Automation" },
        { img: "asset 27.svg", img_name: "Performance" },
        { img: "asset 28.webp", img_name: "Compliance" },
      ],
    },
    {
      original_image: "asset 29.webp",
      title: "Digital Marketing",
      description:
        "Leverage our digital marketing services to achieve outstanding sales conversions and maximise ROI.",
      images: [
        { img: "asset 30.svg", img_name: "SEO" },
        { img: "asset 31.svg", img_name: "PPC" },
        { img: "asset 32.svg", img_name: "Social Media" },
        { img: "asset 33.svg", img_name: "Content Marketing" },
      ],
    },
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
              onClick={handleFull}
            >
              <img src="asset 3.svg" alt="react" height={34} width={34} />
            </div>
          </div>
        </div>

        <div
          style={{ backgroundColor: "#112542" }}
          className="flex justify-center items-center pb-20 mb-20 z-20"
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
                <button className="bg-orange-500 bg-gradient-to-r duration-500 from-orange-300 to-orange-600 py-3 px-6 text-3xl z-50 md:border-b-4 hover:-translate-y-1 hover:border-b-6 border-amber-700 text-white font-semibold rounded-2xl">
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
            <h1 className="text-6xl text-white mb-3">Services We Offer</h1>
            <p className="text-white">
              We offer a full range of web app development services that make
              things better for enterprises and companies we work with.
            </p>
            <div className="mt-18">
              {functionality1.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => {
                    setIsHovered(true);
                    setHoveredItem(item.data);
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                    setHoveredItem("");
                  }}
                  className="flex pl-6 border-1 border-gray-600 mt-10 h-30 items-center rounded-3xl hover:bg-gradient-to-r hover:from-sky-900 web"
                >
                  <img src={item.image} alt="" />

                  {isHovered && hoveredItem === item.data ? (
                    <></>
                  ) : (
                    <h1 className="text-white pl-13 text-2xl">{item.data}</h1>
                  )}

                  {isHovered && hoveredItem === item.data && (
                    <div className="p-4 rounded-xl mt-2 z-10 justify-between">
                      {onHoverFunctionality1
                        .filter((i) => i.title === item.data)
                        .map((i) => (
                          <div key={i.title} className="flex justify-between">
                            <div className="flex justify-between align-middle">
                              <div className="mr-5">
                                <h1 className="text-white text-2xl pb-2">
                                  {i.title}
                                </h1>
                                <p className="text-gray-300 wrap">
                                  {i.description}
                                </p>
                              </div>
                              <div className="flex gap-15 pr-15 justify-end">
                                {i.images.map((img, index) => (
                                  <div className="flex flex-col items-center justify-center">
                                    <img
                                      key={index}
                                      src={img.img}
                                      alt=""
                                      height={65}
                                      width={65}
                                    />
                                    <h1 className="text-white pt-3">
                                      {img.img_name}
                                    </h1>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#112542" }}
          className="flex justify-center items-center pb-20 mb-20 shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
        >
          <div className="w-5/6 mt-7 ">
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

        <div className="flex flex-col justify-center items-center mb-15 ">
          <div className="w-6/7">
            <h1 className="text-white text-7xl">Our Specialization</h1>
            <p className="text-white mt-17 mr-65">
              We offer a full range of web app development services that make
              things better for enterprises and companies we work with. Our team
              of dedicated mobile app developers fulfils your diverse business
              requirements through a number of services. We specialize in the
              following services:
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
                  <h1 className="font-semibold py-3">
                    {Special[leftIndex].data}
                  </h1>
                  <p className="text-xs text-center px-3">
                    {Special[leftIndex].dec}
                  </p>
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
                  <h1 className="font-semibold py-3">
                    {Special[rightIndex].data}
                  </h1>
                  <p className="text-xs text-center px-3">
                    {Special[rightIndex].dec}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-white text-5xl mt-30 font-semibold">
                Our Flexible Engagement Models
              </h1>
              <p className="text-white mt-10 mr-65">
                Our team is your partner for the next big digital leap. Our
                customized and highly flexible engagement models are designed to
                meet business objectives. All of our service engagements are
                focused on customer satisfaction, and we ensure that clear
                communication is maintained throughout.
              </p>
              <div className="flex gap-5 rounded-2xl justify-between mt-10 items-center mb-15">
                <div className="flex gap-5 rounded-2xl justify-between mt-10 items-center mb-15">
                  {[
                    {
                      title: "Hire Full-time Developer",
                      text: "Looking for committed talent to drive your company's success? Our full-time dedicated developers bring expertise, reliability, and unwavering focus to your projects. With a rigorous selection process, we ensure you get top talent aligned with your goals.",
                    },
                    {
                      title: "Hire Part-time Developer",
                      text: "Need flexibility without compromising quality? Our part-time dedicated developers offer the perfect solution. Get skilled assistance on your schedule, ensuring progress without the commitment of a full-time hire.",
                    },
                    {
                      title: "Professional Services",
                      text: "Unlock your project's full potential with our professional services. From software development to project management, our experts deliver tailored solutions to drive growth and efficiency, no matter your industry or scale.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="relative border border-white rounded-3xl h-100 w-110 overflow-hidden group"
                    >
                      {/* Background sliding effect */}
                      <div className="absolute top-0 left-0 w-full h-full bg-cyan-500 transition-transform duration-500 scale-y-0 origin-top group-hover:scale-y-100"></div>

                      {/* Content with text color transition */}
                      <h1 className="relative text-center py-10 font-semibold text-2xl bg-cyan-500 rounded-2xl z-10 transition-colors duration-500 group-hover:text-black">
                        {item.title}
                      </h1>
                      <p className="relative text-white px-4 mt-3 z-10 transition-colors duration-500 group-hover:text-black">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundColor: "#112542", position: "relative" }}
          className="pb-20 mb-20 z-20"
        >
          <div className="flex flex-col justify-center  w-5/6 mx-auto">
            <h1 className="text-6xl text-white leading-tight mt-8">
              Our Development Process
            </h1>
            <div className="mt-10 relative">
              <img
                src="asset 38.svg"
                className="relative"
                height={25}
                width={55}
                alt=""
              />
              <img
                src="asset 39.svg"
                className="absolute top-6"
                height={20}
                width={60}
                alt=""
              />
            </div>

            <div className="relative w-full h-500 mt-10">
              {/* Left side div */}
              <div className="absolute top-0 left-0">
                <div class="triangle-bottomleft flex justify-baseline items-center">
                  <div
                    className="h-35 w-35 flex justify-center border-t-1 shadow-[0px_35px_40px_rgba(0,0,0,0.50)] border-white ml-10 italic rounded-full z-50 bg-gradient-to-b from-cyan-950"
                    style={{ backgroundColor: "#01132e" }}
                  >
                    <img src="asset 40.webp" alt="" height={10} width={120} />
                  </div>
                  <div className="ml-5 mt-10">
                    <h1 className="text-white text-2xl">
                      Research and Analysis
                    </h1>
                    <p className="text-white mt-5 mr-2">
                      {" "}
                      Idea, Consultation, Research, Goal Definition, &
                      Requirements Gathering
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side div */}
              <div className="absolute bottom-0 right-0 top-70">
                <div
                  class="triangle-bottomleft"
                  style={{ transform: "scale(-1, 1)" }}
                >
                  <div class="triangle-bottomleft flex justify-baseline items-center">
                    <div
                      className="h-35 w-35 flex justify-center border-t-1 shadow-[0px_35px_40px_rgba(0,0,0,0.50)] border-white ml-10 italic rounded-full z-50 bg-gradient-to-b from-cyan-950"
                      style={{ backgroundColor: "#01132e" }}
                    >
                      <img src="asset 40.webp" alt="" height={10} width={120} />
                    </div>
                    <div className="ml-5 mt-10">
                      <h1 className="text-white text-2xl">
                        Research and Analysis
                      </h1>
                      <p className="text-white mt-5 mr-2">
                        {" "}
                        Idea, Consultation, Research, Goal Definition, &
                        Requirements Gathering
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-140 left-0">
                <div class="triangle-bottomleft">
                  <div class="triangle-bottomleft flex justify-baseline items-center">
                    <div
                      className="h-35 w-35 flex justify-center border-t-1 shadow-[0px_35px_40px_rgba(0,0,0,0.50)] border-white ml-10 italic rounded-full z-50 bg-gradient-to-b from-cyan-950"
                      style={{ backgroundColor: "#01132e" }}
                    >
                      <img src="asset 40.webp" alt="" height={10} width={120} />
                    </div>
                    <div className="ml-5 mt-10">
                      <h1 className="text-white text-2xl">
                        Research and Analysis
                      </h1>
                      <p className="text-white mt-5 mr-2">
                        {" "}
                        Idea, Consultation, Research, Goal Definition, &
                        Requirements Gathering
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 top-210">
                <div
                  class="triangle-bottomleft"
                  style={{ transform: "scale(-1, 1)" }}
                >
                  <div
                    class="triangle-bottomleft flex justify-baseline items-center"
                    style={{ transform: "scale(-1, 1) " }}
                  >
                    <div
                      className="h-35 w-35 flex justify-center border-t-1 shadow-[0px_35px_40px_rgba(0,0,0,0.50)] border-white ml-10 italic rounded-full z-50 bg-gradient-to-b from-cyan-950"
                      style={{ backgroundColor: "#01132e" }}
                    >
                      <img src="asset 40.webp" alt="" height={10} width={120} />
                    </div>
                    <div className="ml-5 mt-10">
                      <h1 className="text-white text-2xl">
                        Research and Analysis
                      </h1>
                      <p className="text-white mt-5 mr-2">
                        {" "}
                        Idea, Consultation, Research, Goal Definition, &
                        Requirements Gathering
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-280 left-0">
                <div class="triangle-bottomleft">
                  <div class="triangle-bottomleft flex justify-baseline items-center">
                    <div
                      className="h-35 w-35 flex justify-center border-t-1 shadow-[0px_35px_40px_rgba(0,0,0,0.50)] border-white ml-10 italic rounded-full z-50 bg-gradient-to-b from-cyan-950"
                      style={{ backgroundColor: "#01132e" }}
                    >
                      <img src="asset 40.webp" alt="" height={10} width={120} />
                    </div>
                    <div className="ml-5 mt-10">
                      <h1 className="text-white text-2xl">
                        Research and Analysis
                      </h1>
                      <p className="text-white mt-5 mr-2">
                        {" "}
                        Idea, Consultation, Research, Goal Definition, &
                        Requirements Gathering
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 top-350">
                <div
                  class="triangle-bottomleft"
                  style={{ transform: "scale(-1, 1)" }}
                >
                  <div class="triangle-bottomleft flex justify-baseline items-center">
                    <div
                      className="h-35 w-35 flex justify-center border-t-1 shadow-[0px_35px_40px_rgba(0,0,0,0.50)] border-white ml-10 italic rounded-full z-50 bg-gradient-to-b from-cyan-950"
                      style={{ backgroundColor: "#01132e" }}
                    >
                      <img src="asset 40.webp" alt="" height={10} width={120} />
                    </div>
                    <div className="ml-5 mt-10">
                      <h1 className="text-white text-2xl">
                        Research and Analysis
                      </h1>
                      <p className="text-white mt-5 mr-2">
                        {" "}
                        Idea, Consultation, Research, Goal Definition, &
                        Requirements Gathering
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-420 left-0">
                <div class="triangle-bottomleft">
                  <div class="triangle-bottomleft flex justify-baseline items-center">
                    <div
                      className="h-35 w-35 flex justify-center border-t-1 shadow-[0px_35px_40px_rgba(0,0,0,0.50)] border-white ml-10 italic rounded-full z-50 bg-gradient-to-b from-cyan-950"
                      style={{ backgroundColor: "#01132e" }}
                    >
                      <img src="asset 40.webp" alt="" height={10} width={120} />
                    </div>
                    <div className="ml-5 mt-10">
                      <h1 className="text-white text-2xl">
                        Research and Analysis
                      </h1>
                      <p className="text-white mt-5 mr-2">
                        {" "}
                        Idea, Consultation, Research, Goal Definition, &
                        Requirements Gathering
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mb-8 ">
          <div className="w-6/7">
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
                      className="h-130 rounded-3xl "
                      style={{ backgroundColor: "#112542" }}
                    >
                      <img src={item.image} alt="" width={4000} height={500} />
                      <div className="ml-8">
                        <h1 className="text-white text-2xl my-3">
                          {item.title}
                        </h1>
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
                            className="h-130 rounded-3xl "
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
                              <h1 className="text-white text-2xl my-3">
                                {i.title}
                              </h1>
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
        </div>
        <div className="flex justify-center items-center">
          <div className="w-6/7">
            <div className="relative top-100">
              <Industries />
              <Appreciation/>
              <Form/>
            </div>
          </div>
        </div>
              <Footer/>
      </div>
    </div>
  );
};
export default Video;
