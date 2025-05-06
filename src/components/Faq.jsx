// Faq.jsx
import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi'; // ✅ Import icons

const Faq = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-sky-200 rounded-md overflow-hidden mb-4">
            <button
                className="w-full flex justify-between items-center px-6 py-4 font-semibold text-gray-800 border-b border-sky-800 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{question}</span>
                <span className="text-xl">
                    {isOpen ? <FiMinus /> : <FiPlus />}
                </span>
            </button>
            {isOpen && (
                <div className="px-6 py-4 text-gray-700 bg-sky-100 transition-all duration-300 ease-in-out">
                    {answer}
                </div>
            )}
        </div>
    );
};

export default Faq;
