// TopWorkerCard.jsx
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Heading from '../components/Heading';
import WorkerCard from './WorkerCard';

const topWorkers = [
  {
    id: 1,
    name: 'Rakesh Kumar',
    avatar: '/assets/rakesh.png',
    rating: 4.9,
    role: 'Electrician (Team)',
    company: 'SparkPro Services',
    completedJobs: 25,
  },
  // Add 5 more worker objects...
];

const TopWorkerSection = () => {
  const responsiveOptions = {
    0: { items: 1 },
    640: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
  };

  return (
    <div className="bg-sky-100 py-10">
          <div className="max-w-7xl mx-auto px-4">
              <Heading
          title="Top Verified Workers"
          subtitle="Hire skilled workers"
          textAlign="text-center"
          titleColor="text-black-800"
          subtitleColor="text-gray-500"
          fontWeight="font-bold"
          titleSize="text-5xl"
        />
      <OwlCarousel
        className="owl-theme py-6"          
        loop
        margin={20}
        nav
        autoplay
        responsive={responsiveOptions}
      >
        {topWorkers.map((worker) => (
          <div key={worker.id} className="item">
            <WorkerCard worker={worker} />
          </div>
        ))}
      </OwlCarousel>
    </div>
    </div>
  );
};

export default TopWorkerSection;
