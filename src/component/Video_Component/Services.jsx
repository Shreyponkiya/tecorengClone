import React from "react";

const Services = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [hoveredItem, setHoveredItem] = React.useState("");
  const functionality1 = [
    { image: "asset 4.webp", data: "Web Development" },
    { image: "asset 9.webp", data: "Mobile App Development" },
    { image: "asset 14.webp", data: "Graphics Design" },
    { image: "asset 19.webp", data: "UI/UX Design" },
    { image: "asset 24.webp", data: "Quality Assurance (QA)" },
    { image: "asset 29.webp", data: "Digital Marketing" },
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
  return (
    <div className="flex justify-center items-center mb-15">
      <div className="w-6/7">
        <h1 className="text-6xl text-white mb-3">Services We Offer</h1>
        <p className="text-white">
          We offer a full range of web app development services that make things
          better for enterprises and companies we work with.
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
  );
};

export default Services;
