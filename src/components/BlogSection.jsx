// BlogSection.jsx or wherever you define the data
import React from 'react';
import BlogCard from './BlogCard';
import Heading from "./Heading"

const blogs = [
    {
        id: 1,
        image: './src/assets/blog-ai.png',
        title: 'AI Helping Job Seekers in 2025',
        description: 'Discover how artificial intelligence is shaping the future of hiring and job searching.',
        date: 'April 28, 2025',
    },
    {
        id: 2,
        image: './src/assets/blog-resume.png',
        title: 'Get Noticed: Optimize Your Resume',
        description: 'Learn the tricks to stand out in front of recruiters and AI filters.',
        date: 'April 22, 2025',
    },
];

const BlogSection = () => {
    return (
        <div className="bg-sky-50 py-10">
            <div className="max-w-7xl mx-auto">
                <Heading
                    title="Latest Insight"
                    subtitle="Latest Insights in Valuation & Financial Strategies"
                    textAlign="text-start"
                    titleColor="text-black-800"
                    subtitleColor="text-gray-500"
                    fontWeight="font-bold"
                    titleSize="text-5xl"
                />
            </div>
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-6 py-10">
                {blogs.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        image={blog.image}
                        title={blog.title}
                        description={blog.description}
                        date={blog.date}
                    />
                ))}
            </div>
        </div>
    );
};

export default BlogSection;
