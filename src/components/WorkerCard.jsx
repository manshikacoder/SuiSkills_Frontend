// components/WorkerCard.jsx
import React from 'react';

const WorkerCard = ({ worker }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full relative">
      {/* Trophy Icon */}
      <div className="absolute top-2 right-2">
        <img src="./src/assets/trophy.png" alt="Top Worker" className="w-9 h-9" />
      </div>

      {/* Status Badge */}
      <div className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full inline-flex items-center mb-3">
        <span className="mr-1">⚡</span> Available
      </div>

      {/* Avatar */}
      <div className="flex justify-center">
        <img
          src={worker.avatar}
          alt={worker.name}
          className="w-20 h-20 rounded-full object-cover border-2 border-blue-400"
        />
      </div>

      {/* Name & Rating */}
      <div className="text-center mt-3">
        <h3 className="font-semibold text-lg text-gray-800">{worker.name}</h3>
        <div className="flex justify-center items-center text-yellow-500 text-sm mt-1">
          ⭐ {worker.rating}
        </div>

        {/* Role and Company */}
        <p className="text-sm text-gray-600 mt-2">
          {worker.role} | {worker.company}
        </p>

        {/* Completed Jobs */}
        <p className="text-xs text-gray-500 mt-1">
          | {worker.completedJobs} Completed Jobs
        </p>

        {/* CTA Button */}
        <button className="mt-4 px-4 py-1 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default WorkerCard;
