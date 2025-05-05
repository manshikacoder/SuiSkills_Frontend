import React, { useEffect } from 'react';
import '../jquery-global'; // Make sure this file initializes jQuery properly
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';

const banners = [
  {
    type: 'worker',
    heading: "Build Your Digital Identity",
    subheading: "Create, showcase and own your verifiable work history on-chain.",
    image: "./src/assets/ban-1-right-img.png",
    bgColor: "bg-sky-100",
    ctas: [
      { text: "Create Identity", style: "bg-blue-600 text-white hover:bg-blue-700" },
      { text: "Explore Jobs", style: "bg-white border border-blue-600 text-blue-600 hover:bg-blue-50" }
    ]
  },
  {
    type: 'employer',
    heading: "Hire Verified Talent, Faster",
    subheading: "Access blockchain-verified profiles with real work history and ratings — no fluff, just facts.",
    image: "./src/assets/ban-2-right-img.png",
    bgColor: "bg-yellow-100",
    ctas: [
      { text: "Post a Job", style: "bg-yellow-500 text-white hover:bg-yellow-600" },
      { text: "Find Verified Talent", style: "bg-white border border-yellow-500 text-yellow-700 hover:bg-yellow-50" }
    ]
  },
  {
    type: 'ai',
    heading: "Meet Sui – Your Smart Hiring Assistant",
    subheading: "Let Sui match talent, schedule interviews, and automate your hiring pipeline with AI.",
    image: "./src/assets/ban-3-right-img.png",
    bgColor: "bg-purple-100",
    ctas: [
      { text: "Ask to Sui", style: "bg-purple-600 text-white hover:bg-purple-700" },
      { text: "Automate My Hiring", style: "bg-white border border-purple-600 text-purple-700 hover:bg-purple-50" }
    ]
  }
];

const BannerCarousel = () => {
  useEffect(() => {
    const $ = window.$;
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      items: 1,
      autoplay: true,
      nav: false,
      dots: true,
    });
  }, []);

  return (
    <div className="py-6">
      <div className="owl-carousel owl-theme">
        {banners.map((banner, index) => (
          <div key={index} className="px-4">
            <div className={`flex flex-col md:flex-row items-center max-w-7xl mx-auto ${banner.bgColor} rounded-xl shadow-md p-6`}>
              {/* Text Section */}
              <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  {banner.heading}
                </h2>
                <p className="text-lg text-gray-600 mb-6">{banner.subheading}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {banner.ctas.map((cta, i) => (
                    <button
                      key={i}
                      className={`${cta.style} px-5 py-2 rounded transition`}
                    >
                      {cta.text}
                    </button>
                  ))}
                </div>
              </div>
              {/* Image Section */}
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <img
                  src={banner.image}
                  alt="Banner"
                  className="w-[280px] md:w-[410px] h-[220px] md:h-[320px] object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
