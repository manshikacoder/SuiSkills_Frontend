import React, { useState } from "react";

const SuiAssistant = () => {
    const [chatOpen, setChatOpen] = useState(false);
    const [userMessage, setUserMessage] = useState("");
    const [chatMessages, setChatMessages] = useState([
        { sender: "sui", text: "Hello! How can I assist you today?" },
    ]);

    const handleSend = () => {
        if (!userMessage.trim()) return;
        setChatMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
        // Simulate bot response
        setTimeout(() => {
            setChatMessages((prev) => [
                ...prev,
                { sender: "sui", text: "Thanks for your message! We'll help you shortly." },
            ]);
        }, 1000);
        setUserMessage("");
    };

    return (
        <div className="bg-[linear-gradient(67deg,_#7dd3fc,_#ffffff)] py-10 relative">
            {/* Heading */}
            <div className="max-w-7xl mx-auto px-4 text-center p-[2rem]">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-black to-sky-800 bg-clip-text text-transparent mb-4">
                    Talk To our Job Assistant Sui
                </h2>
                <p className="text-gray-500 font-bold max-w-2xl mx-auto">
                    Get instant support in any language to create your profile, apply for jobs, or find skilled workers — just by talking.
                </p>
            </div>

            {/* Cards */}
            <div className="flex flex-col md:flex-row gap-8 justify-center mt-10 px-4 max-w-7xl mx-auto py-6">
                {/* Card 1 - Woman using AI */}
                <div
                    className="relative w-full md:w-1/2 h-[400px] bg-cover bg-center rounded-xl overflow-hidden"
                    style={{ backgroundImage: "url('./src/assets/woman-ai.png')" }}
                >
                    {/* Animated Blobs */}
                    <div className="absolute top-10 left-10 w-[180px] h-[180px] rounded-full bg-white flex items-center justify-center z-20 shadow-2xl cursor-pointer">
                        <div className="absolute w-full h-full rounded-full animate-blob blur-2xl opacity-50 z-10"></div>
                        <button
                            onClick={() => setChatOpen(true)}
                            className="text-black font-semibold z-30 relative"
                        >
                            Ask To Sui
                        </button>
                    </div>
                </div>

                {/* Card 2 - AI Bot */}
                <div
                    className="w-full md:w-1/2 h-[400px] bg-cover bg-center rounded-xl"
                    style={{ backgroundImage: "url('./src/assets/ai-bot.png')" }}
                ></div>
            </div>

            {/* Chat Popup */}
            {chatOpen && (
                <div className="fixed bottom-5 right-5 w-[350px] bg-white rounded-xl shadow-2xl p-4 z-50 border">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold">Sui Assistant</h3>
                        <button onClick={() => setChatOpen(false)} className="text-xl font-bold">
                            ×
                        </button>
                    </div>
                    <div className="h-[200px] overflow-y-auto border rounded-md p-2 mb-2">
                        {chatMessages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`mb-1 text-sm ${msg.sender === "sui" ? "text-left text-blue-600" : "text-right text-gray-800"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="flex">
                        <input
                            type="text"
                            className="flex-1 border rounded-l-md px-2 py-1 text-sm focus:outline-none"
                            placeholder="Type your message..."
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        />
                        <button
                            onClick={handleSend}
                            className="bg-blue-600 text-white px-4 rounded-r-md text-sm"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SuiAssistant;
