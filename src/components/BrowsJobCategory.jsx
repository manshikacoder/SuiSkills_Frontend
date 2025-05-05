import React, { useState } from 'react';
import { Link } from "react-router-dom";
const categories = ['Plumber', 'Electrician', 'Carpenter', 'Painter', 'AC Technician'];

const jobs = {
  Plumber: [
    {
      id: 1,
      title: 'Pipe Fitting Expert Needed',
      company: 'Self Individual',
      avatar: './src/assets/employer-1.png',
      date: '23-April-2025',
      pay: '₹1,500/day',
      verified: true,
      description: 'Experienced plumber needed for residential pipe work in Delhi.',
    },
    {
      id: 2,
      title: 'Plumbing Helper Required',
      company: 'AquaFix Services',
      avatar: './src/assets/employer-2.png',
      date: '21-April-2025',
      pay: '₹900/day',
      verified: true,
      description: 'Assist lead plumber in daily maintenance and installations.',
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
    },
  ],
  Electrician: [
    {
      id: 1,
      title: 'AC Technician Needed',
      company: 'CoolFix Ltd.',
      avatar: './src/assets/employer-4.png',
      date: '22-April-2025',
      pay: '₹1,800/day',
      verified: true,
      description: 'Repair and install air conditioners for premium clients.',
    },
    {
      id: 2,
      title: 'Wiring Specialist',
      company: 'SafeWire',
      avatar: './src/assets/employer-img.png',
      date: '19-April-2025',
      pay: '₹1,600/day',
      verified: true,
      description: 'Handle electrical wiring in commercial buildings.',
    },
    {
      id: 3,
      title: 'Home Electrician Needed',
      company: 'Self Individual',
      avatar: '/images/employer6.png',
      date: '18-April-2025',
      pay: '₹1,200/day',
      verified: false,
      description: 'Fix small home electrical issues urgently.',
    },
  ],
};

const JobTabs = () => {
  const [activeCategory, setActiveCategory] = useState('Plumber');

  return (
      <div className='bg-sky-100 p-[2rem]'>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-">
              <h2 className='text-sky-600 py-6 text-center font-bold text-5xl'>Brows Jobs By Categories</h2>
      {/* Scrollable Tabs */}
      <div className="overflow-x-auto whitespace-nowrap mb-2 py-5 px-3 bg-sky-300 rounded">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`inline-block px-4 py-2 mr-3 rounded-full border font-semibold text-sm transition 
              ${
                activeCategory === cat
                  ? 'bg-sky-100 text-sky-800 border-sky-500'
                  : 'bg-white text-sky-800 border-sky-300 hover:bg-sky-50'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white py-6 rounded">
        {jobs[activeCategory]?.slice(0, 3).map((job) => (
  <Link
    key={job.id}
    to={`/job/${activeCategory}/${job.id}`}
    className="no-underline text-inherit cursor-pointer"
  >
    <div className="bg-white rounded-xl shadow border-2 border-blue-300 p-4 flex flex-col justify-between m-5">
      {/* Top Bar */}
      <div className="bg-sky-100 rounded-lg p-4 flex justify-between items-center mb-3">
        <div className="flex justify-baseline items-center gap-2 flex-col">
          {job.verified && (
            <span className="text-white font-semibold text-xs bg-sky-800 px-2 py-2 rounded-full flex items-center gap-1">
              <img src="./src/assets/verified.svg" alt="" />Verified
            </span>
          )}
          <span className="text-gray-700 text-sm font-medium">{job.company}</span>
        </div>
        <img
          src={job.avatar}
          alt="Employer"
          className="w-15 h-15 rounded-full object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-black mb-2">{job.title}</h3>

      {/* Badges */}
      <div className="flex gap-2 flex-wrap mb-2">
        <span className="bg-sky-100 text-sky-800 text-sm px-3 py-1 rounded-full">
          Earn {job.pay}
        </span>
        <span className="bg-sky-100 text-sky-800 text-sm px-3 py-1 rounded-full">
          {job.date}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-[15px]">{job.description}</p>
    </div>
  </Link>
))}
      </div>
    </div>
   </div>
  );
};

export default JobTabs;
