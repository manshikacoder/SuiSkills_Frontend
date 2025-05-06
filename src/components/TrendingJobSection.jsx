import React from 'react';
import Heading from '../components/Heading';
import JobCard from './JobCard';
import OwlCarousel from 'react-owl-carousel';
const trendingJobs = [
  {
    id: 1,
    title: 'Pipe Fitting Expert Needed',
    company: 'Self Individual',
    avatar: './src/assets/employer-1.png',
    date: '23-April-2025',
    pay: '₹1,500/day',
    verified: true,
    description: 'Experienced plumber needed for residential pipe work in Delhi.',
    category: 'Plumber',
  },
  {
    id: 2,
    title: 'Wiring Specialist',
    company: 'SafeWire',
    avatar: './src/assets/employer-2.png',
    date: '19-April-2025',
    pay: '₹1,600/day',
    verified: true,
    description: 'Handle electrical wiring in commercial buildings.',
    category: 'Electrician',
  },
  {
    id: 3,
    title: 'Bathroom Fittings Installer',
    company: 'Urban Bath',
    avatar: './src/assets/employer-3.png',
    date: '20-April-2025',
    pay: '₹1,200/day',
    verified: false,
    description: 'Install bathroom fixtures with precision and speed.',
    category: 'Plumber',
  },
  {
    id: 4,
    title: 'Wall Painter',
    company: 'ColorMyWall',
    avatar: './src/assets/employer-4.png',
    date: '21-April-2025',
    pay: '₹1,100/day',
    verified: true,
    description: 'Looking for skilled painters for a 3-day residential project.',
    category: 'Painter',
  },
  {
    id: 5,
    title: 'Tile Installer',
    company: 'FloorCraft',
    avatar: './src/assets/employer-5.png',
    date: '22-April-2025',
    pay: '₹1,300/day',
    verified: false,
    description: 'Install ceramic tiles with clean finishing in bathrooms.',
    category: 'Mason',
  },
  {
    id: 6,
    title: 'Ceiling Electrician',
    company: 'LiteHouse',
    avatar: './src/assets/employer-6.png',
    date: '24-April-2025',
    pay: '₹1,700/day',
    verified: true,
    description: 'Install lights and fans in newly constructed flats.',
    category: 'Electrician',
  },
];

const TrendingJobSection = () => {
  const responsiveOptions = {
    0: {
      items: 1,
    },
    640: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1024: {
      items: 3,
    },
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <Heading
          title="Trending Jobs for You"
          subtitle="Verified employers hiring skilled workers like you."
          textAlign="text-center"
          titleColor="text-black-800"
          subtitleColor="text-gray-500"
          fontWeight="font-bold"
          titleSize="text-5xl"
        />

        {/* Owl Carousel for Job Cards */}
        <div className="mt-8">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={20}
            nav={false}
            dots={false}
            autoplay
            responsive={responsiveOptions}
          >
            {trendingJobs.map((job) => (
              <div key={job.id} className="item">
                <JobCard job={job} category={job.category} />
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default TrendingJobSection
