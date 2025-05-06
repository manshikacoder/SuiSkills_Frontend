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
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    rating: 4.9,
    role: 'Electrician (Team)',
    company: 'SparkPro Services',
    completedJobs: 25,
  },
  {
    id: 2,
    name: 'Sunita Sharma',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 4.8,
    role: 'Plumber (Freelancer)',
    company: 'PipeFix Hub',
    completedJobs: 30,
  },
  {
    id: 3,
    name: 'Amit Verma',
    avatar: 'https://randomuser.me/api/portraits/men/51.jpg',
    rating: 4.7,
    role: 'Painter (Team)',
    company: 'ColorCanvas Solutions',
    completedJobs: 40,
  },
  {
    id: 4,
    name: 'Neha Yadav',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 4.9,
    role: 'Home Cleaner (Freelancer)',
    company: 'NeatNest Services',
    completedJobs: 50,
  },
  {
    id: 5,
    name: 'Suresh Thakur',
    avatar: 'https://randomuser.me/api/portraits/men/60.jpg',
    rating: 4.6,
    role: 'AC Technician',
    company: 'CoolFix Experts',
    completedJobs: 35,
  },
  {
    id: 6,
    name: 'Priya Mehta',
    avatar: 'https://randomuser.me/api/portraits/women/72.jpg',
    rating: 5.0,
    role: 'Carpenter (Freelancer)',
    company: 'WoodCraft Works',
    completedJobs: 45,
  },
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
        nav={false}
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
