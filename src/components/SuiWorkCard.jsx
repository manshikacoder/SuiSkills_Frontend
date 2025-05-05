import React from "react";
import Heading from "./Heading"
const SuiWorkCard = () => {

  const cardData = [
    {
      title: "How SUI Works for Workers",
      bgImage: "./src/assets/bg-worker.png", // bottom right positioned image
      steps: [
        "Register your skill profile",
        "Upload proof or take AI skill test",
        "Earn verified Skill NFTs on-chain",
          "Apply for global job opportunities",
         "Talk to our AI Assistant any language, anytime",
      ],
    },
    {
      title: "How SUI Works for Employers",
      bgImage: "./src/assets/bg-employer.png",
      steps: [
        "Post jobs or explore talent pool",
        "View matched workers instantly",
        "Access real-time worker analytics",
        "Hire & pay securely via wallet",
        "Hire with trust, transparency & traceability",
      ],
    },
  ];

  return (
      <div className="max-w-7xl mx-auto p-[2rem]">
                 <Heading
  title="How SuiSkills Works"
  subtitle="From earning skill NFTs to getting rated and hired — discover how blockchain transforms your journey."
/>

          
          <div className="grid md:grid-cols-2 gap-6 p-6 max-w-7xl  py-6">
             
      {cardData.map((card, index) => (
        <div
          key={index}
          className="relative bg-sky-100 rounded-2xl shadow-lg text-gray-800 p-8 min-h-[350px] flex flex-col justify-center overflow-hidden"
        >
          <img
            src={card.bgImage}
            alt="Card visual"
            className="absolute bottom-0 right-0 w-40 md:w-60  z-0"
          />

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-sky-500 mb-6">{card.title}</h3>
            <ul className="relative list-none pl-8 before:absolute before:left-3 before:top-4 before:bottom-4 before:w-[2px] before:bg-blue-900">
              {card.steps.map((step, i) => (
                <li key={i} className="relative ps-1.5 mb-6 text-lg font-medium">
                  <span className="absolute -left-6 top-1.5 w-5 h-5 bg-white text-blue-900 text-sm font-bold rounded-full flex items-center justify-center ring-2 ring-blue-900">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
      </div>
  );
};

export default SuiWorkCard;
