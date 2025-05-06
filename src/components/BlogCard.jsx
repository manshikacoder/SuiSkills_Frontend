import React from 'react';

const BlogCard = ({ image, title, description, date }) => {
  return (
    <div
      className="relative h-100 w-full rounded-xl overflow-hidden shadow-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white/90"></div>

      {/* Date Badge */}
      <span className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-sm rounded-full shadow">
        {date}
      </span>

      {/* Content */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-700 text-md mt-1">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
