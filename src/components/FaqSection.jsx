// FaqSection.jsx
import React from 'react';
import Faq from './Faq';
import Heading from '../components/Heading';

const faqData = [
    {
        question: 'How can Sui Assistant help me apply for jobs?',
        answer: 'Sui Assistant can guide you in creating your resume, filling out job applications, and providing job recommendations based on your profile.',
    },
    {
        question: 'Can I use Sui Assistant in my native language?',
        answer: 'Yes, Sui Assistant supports multiple languages to help you communicate more easily and naturally.',
    },
    {
        question: 'Is the use of Sui Assistant free?',
        answer: 'Yes, using Sui Assistant for creating profiles and job applications is completely free.',
    },
    {
        question: 'How do I start chatting with Sui Assistant?',
        answer: 'You can start chatting by clicking on the "Ask to Sui" button on the homepage and typing your query.',
    },
    {
        question: 'What kind of jobs can I find using this platform?',
        answer: 'You can find jobs in various fields like electrician, plumbing, cleaning, carpentry, AC servicing, and more.',
    },
];

const FaqSection = () => {
    return (
        <div className="bg-sky-100 py-10">
            <div className="max-w-4xl mx-auto px-4">
                <Heading
                    title="Frequently Asked Questions"
                    subtitle="Find quick answers to common questions about our assistant"
                    textAlign="text-center"
                    titleColor="text-4xl font-bold text-sky-900"
                    subtitleColor="text-gray-600"
                    fontWeight="font-bold"
                    titleSize="text-5xl"
                />

                <div className="mt-8">
                    {faqData.map((faq, index) => (
                        <Faq key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
