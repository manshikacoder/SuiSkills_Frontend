import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';

const partners = [
  './src/assets/partners-img/cetus.png',
  './src/assets/partners-img/Gree.png',
  './src/assets/partners-img/netmarble.png',
  './src/assets/partners-img/rpc.png',
];

const TrustedPartners = () => {
  useEffect(() => {
    const $ = window.$; // Make sure jQuery is globally available
    $('.partners-carousel').owlCarousel({
      loop: true,
      margin: 20,
        autoplay: true,
       nav: false,
        dots: false, 
      autoplayTimeout: 5000, // Slow speed: 5 seconds
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 2,
        },
        640: {
          items: 2,
        },
        768: {
          items: 3,
        },
        1024: {
          items: 5,
        },
      },
    });
  }, []);

  return (
    <div className="py-8 bg-sky-500">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-start justify-between">
        {/* Left Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white py-7">
                      Our Trusted  <br />
                      Partners
          </h2>
        </div>

        {/* Right Carousel */}
        <div className="w-full md:w-2/3 partner">
          <div className="owl-carousel owl-theme partners-carousel">
            {partners.map((logo, index) => (
              <div key={index} className="flex items-center justify-center p-2">
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="!w-[255px] !h-[120px] object-contain mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;
