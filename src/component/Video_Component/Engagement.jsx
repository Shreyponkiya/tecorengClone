import React from "react";

const Engagement = () => {
  const engagementList = [
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
  ];

  return (
    <div className="overflow-hidden">
      <h1 className="text-white text-5xl mt-30 font-semibold">
        Our Flexible Engagement Models
      </h1>
      <p className="text-white mt-10 mr-50">
        Our team is your partner for the next big digital leap. Our customized
        and highly flexible engagement models are designed to meet business
        objectives. All of our service engagements are focused on customer
        satisfaction, and we ensure that clear communication is maintained
        throughout.
      </p>
      <div className="flex gap-5 rounded-2xl justify-between mt-10 items-center mb-15">
        {engagementList.map((item, index) => (
          <div
            key={index}
            className="relative border border-white rounded-3xl h-100 w-110 overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-cyan-500 transition-transform duration-700 scale-y-0 origin-top group-hover:scale-y-100"></div>
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
  );
};

export default Engagement;
