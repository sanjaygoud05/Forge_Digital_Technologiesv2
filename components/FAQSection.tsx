"use client";

import React, { useState } from 'react';

const faqs = [
    {
        question: "Do you build websites for all types of businesses?",
        answer: "Yes. We build custom websites for startups and large companies. Every site we make is fast, secure, and easy to use on any device."
    },
    {
        question: "Will my website work on phones and tablets?",
        answer: "Absolutely. We use responsive design. This means your website will look perfect and work smoothly on smartphones, tablets, and computers."
    },
    {
        question: "How long does it take to build a mobile app?",
        answer: "Most mobile app projects take between 4 to 12 weeks. This depends on how many features you need and how complex the app is."
    },
    {
        question: "Can you help me update my current brand design?",
        answer: "Yes. Our team can refresh your old design or create a completely new look that makes your business stand out from others."
    },
    {
        question: "Do you handle the actual running of digital ads?",
        answer: "Yes. We don't just design the ads; we also help manage your marketing to make sure you get the best results for your budget."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full bg-[#050505] py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-16">

                
                <div className="lg:sticky lg:top-32 h-fit">
                    <p className="text-[#FF6B58] text-[10px] tracking-[0.4em] uppercase font-light mb-4">Support</p>
                    <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight leading-[1.2]">
                        Common <br />
                        <span className="text-zinc-500 font-extralight">Inquiries.</span>
                    </h2>
                    <div className="w-12 h-[1px] bg-[#FF6B58] mt-8"></div>
                    <p className="mt-8 text-sm text-zinc-500 font-extralight leading-relaxed max-w-[240px]">
                        Can't find what you are looking for? Contact our team for a direct consultation.
                    </p>
                </div>

                
                <div className="flex flex-col">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="group border-b border-zinc-900 hover:border-[#FF6B58]/30 transition-colors duration-500"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-start gap-6 py-8 text-left focus:outline-none"
                            >
                                
                                <span className={`text-[10px] font-mono mt-1.5 transition-colors duration-300 ${openIndex === index ? 'text-[#FF6B58]' : 'text-zinc-700'}`}>
                                    0{index + 1}
                                </span>

                                <div className="flex-grow">
                                    <h3 className={`text-lg md:text-xl font-light tracking-wide transition-all duration-300 ${openIndex === index ? 'text-[#FF6B58] translate-x-2' : 'text-zinc-300 group-hover:text-white'}`}>
                                        {faq.question}
                                    </h3>
                                </div>

                                
                                <div className="relative w-4 h-4 mt-2 flex items-center justify-center">
                                    <div className={`absolute w-full h-[0.5px] bg-[#FF6B58] transition-transform duration-500 ${openIndex === index ? 'rotate-45' : 'rotate-90'}`}></div>
                                    <div className={`absolute w-full h-[0.5px] bg-[#FF6B58] transition-transform duration-500 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}></div>
                                </div>
                            </button>

                            
                            <div className={`grid transition-all duration-500 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mb-8' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden pl-12 pr-12">
                                    <p className="text-sm md:text-base text-zinc-500 font-extralight leading-relaxed max-w-2xl">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQSection;