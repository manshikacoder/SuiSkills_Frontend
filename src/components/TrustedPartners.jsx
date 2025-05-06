import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const partners = [
  './src/assets/partners-img/cetus.png',
  './src/assets/partners-img/Gree.png',
  './src/assets/partners-img/netmarble.png',
  './src/assets/partners-img/rpc.png',
];

const TrustedPartners = () => {
  const responsive = {
    0: { items: 2 },
    640: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
  };

  return (
    <div className="py-8 bg-sky-500">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-start justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white py-7">
            Our Trusted <br />
            Partners
          </h2>
        </div>

        <div className="w-full md:w-2/3">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={20}
            nav={false}
            dots={false}
            autoplay={true}
            autoplayTimeout={2000}
            autoplayHoverPause
            responsive={responsive}
          >
            {partners.map((logo, index) => (
              <div key={index} className="flex items-center justify-center p-2">
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="!w-[255px] !h-[120px] object-contain mx-auto"
                />
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;
