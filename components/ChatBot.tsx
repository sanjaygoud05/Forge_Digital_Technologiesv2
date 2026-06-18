
"use client";

import React, { useState, useRef, useEffect } from 'react';


const chatData = [
    {
        id: 1,
        question: "What services do you offer?",
        answer: "We specialize in Website Development, Mobile App Development, UI/UX Design, and Ad Design & Marketing."
    },
    {
        id: 2,
        question: "How can I contact you?",
        answer: "You can reach us via our Contact page or email us at info@forgedigitaltechnologies.com"
    },
    {
        id: 3,
        question: "Do you work with startups?",
        answer: "Yes! We love helping startups build their digital products from the ground up."
    },
    {
        id: 4,
        question: "What is your pricing model?",
        answer: "Our pricing is project-based. We customize quotes depending on your specific requirements."
    }
];

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ type: 'bot' | 'user', text: string }[]>([
        { type: 'bot', text: "Hi there! 👋 How can I help you today?" }
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleQuestionClick = (question: string, answer: string) => {
        
        setMessages(prev => [...prev, { type: 'user', text: question }]);

        
        setTimeout(() => {
            setMessages(prev => [...prev, { type: 'bot', text: answer }]);
        }, 600);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">

            
            <div
                className={`bg-white text-black shadow-2xl rounded-sm w-[320px] sm:w-[350px] mb-4 overflow-hidden border border-zinc-200 transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
                    }`}
            >
                
                <div className="bg-[#050505] p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                            <svg width="16" height="18" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FF6B58]">
                                <path d="M12 0C12 0 4 7 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 12 18 8 15 4L12 0Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-white text-sm font-medium">Forge Assistant</h3>
                            <p className="text-zinc-400 text-[10px] flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                Online
                            </p>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                
                <div className="h-[300px] overflow-y-auto p-4 bg-zinc-50 flex flex-col gap-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div
                                className={`max-w-[80%] p-3 rounded-sm text-sm font-light leading-relaxed ${msg.type === 'user'
                                        ? 'bg-[#FF6B58] text-white rounded-br-none'
                                        : 'bg-white border border-zinc-100 text-zinc-600 rounded-bl-none shadow-sm'
                                    }`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                
                <div className="p-4 bg-white border-t border-zinc-100 flex flex-col gap-2">
                    <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-widest mb-1">Suggested Questions</p>
                    <div className="flex flex-col gap-2">
                        {chatData.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleQuestionClick(item.question, item.answer)}
                                className="text-left text-xs text-zinc-600 hover:text-[#FF6B58] hover:bg-zinc-50 border border-zinc-100 p-2 rounded-sm transition-all duration-200"
                            >
                                {item.question}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            
            <div className="relative group">
                
                <div className={`absolute bottom-full right-0 mb-3 whitespace-nowrap bg-black text-white text-[10px] py-1.5 px-3 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${isOpen ? 'hidden' : 'block'}`}>
                    Need help? Chat with us!
                    <div className="absolute top-full right-4 -mt-[1px] border-4 border-transparent border-t-black"></div>
                </div>

                
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#050505] animate-ping"></span>
                )}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#050505]"></span>
                )}

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-14 h-14 bg-[#FF6B58] hover:bg-[#ff8575] rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                >
                    {isOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C12 0 4 7 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 12 18 8 15 4L12 0Z" fill="currentColor" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ChatBot;
