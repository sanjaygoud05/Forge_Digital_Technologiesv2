"use client";

import React from 'react';
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-[#FF6B58] selection:text-white">

            
            <div className="sticky top-0 z-[100] w-full flex flex-col">
                <TopBanner />
                <Navbar />
            </div>

            
            <section className="bg-[#050505] pt-32 pb-24 px-6 md:px-12 lg:px-20 overflow-hidden relative">
                <div className="max-w-7xl mx-auto relative z-10">
                    <p className="text-[#FF6B58] text-[10px] tracking-[0.4em] uppercase font-light mb-6">Our Mission</p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-8 text-white">
                        Building the <span className="text-[#FF6B58] font-extralight">ecosystem</span> for <br />
                        tomorrow's <span className="text-zinc-500 font-extralight">leaders.</span>
                    </h1>
                    <p className="text-zinc-400 font-light text-lg md:text-xl max-w-3xl leading-relaxed">
                        Forge Digital Technologies is more than a tech company. Based in the heart of
                        <span className="text-white italic"> Hyderabad</span>, we build the tools and
                        communities that help the next generation learn, lead, and grow.
                    </p>
                </div>
                
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF6B58]/5 rounded-full blur-[120px]"></div>
            </section>

            
            <section className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-start">

                    
                    <div className="flex flex-col gap-8">
                        <p className="text-[#FF6B58] text-[10px] tracking-[0.3em] uppercase font-light">Leadership</p>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-neutral-900">Jashwanth Sonti</h2>
                            <p className="text-[#FF6B58] text-sm font-light tracking-widest">Founder & CEO — He/Him</p>
                        </div>

                        <div className="flex flex-col gap-6 text-neutral-600 font-extralight text-base md:text-lg leading-relaxed max-w-2xl">
                            <p>
                                As the Founder & CEO of Student Forge, Jashwanth believes that students are the spark of every revolution. His focus is on solving the real challenge — not a lack of talent, but a lack of the right ecosystem and guidance.
                            </p>
                            <p>
                                Through his journey, he has built student-led communities, launched mentorship programs, and enabled real-world learning beyond the classroom. His goal is simple: empower people to learn, lead, and grow together.
                            </p>
                            <blockquote className="border-l-2 border-[#FF6B58] pl-6 py-2 text-neutral-900 italic font-light">
                                "The journey is rooted in action, consistency, and purpose—from launching campus initiatives to building impact-driven platforms."
                            </blockquote>
                        </div>
                    </div>

                    
                    <div className="flex flex-col gap-4">
                        <div className="bg-[#0a0a0a] p-8 rounded-sm border border-zinc-900 flex flex-col gap-6 text-white">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#FF6B58] mb-1">Based In</p>
                                <p className="text-xl font-light">Hyderabad, India</p>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#FF6B58] mb-1">Education</p>
                                <p className="text-sm font-light text-zinc-300 leading-relaxed">CMR Institute of Technology, <br /> Hyderabad</p>
                            </div>
                            <div className="pt-4 border-t border-zinc-800">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#FF6B58] mb-3">Currently Focused On</p>
                                <ul className="flex flex-col gap-3 text-[13px] font-extralight text-zinc-400">
                                    <li className="flex gap-2"><span>•</span> Building student-led ecosystems</li>
                                    <li className="flex gap-2"><span>•</span> Connecting talent to real opportunities</li>
                                    <li className="flex gap-2"><span>•</span> Promoting growth through community</li>
                                </ul>
                            </div>
                            <button className="w-full py-3 mt-2 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-light rounded-sm hover:bg-[#FF6B58] hover:text-white transition-all duration-500">
                                Connect on LinkedIn
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="py-20 bg-neutral-50 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
                    <div>
                        <p className="text-3xl font-extralight text-neutral-900">800+</p>
                        <p className="text-[10px] uppercase tracking-widest text-neutral-400 mt-2">Active Followers</p>
                    </div>
                    <div>
                        <p className="text-3xl font-extralight text-neutral-900">500+</p>
                        <p className="text-[10px] uppercase tracking-widest text-neutral-400 mt-2">Global Connections</p>
                    </div>
                    <div>
                        <p className="text-3xl font-extralight text-neutral-900">Action</p>
                        <p className="text-[10px] uppercase tracking-widest text-neutral-400 mt-2">Rooted Culture</p>
                    </div>
                    <div>
                        <p className="text-3xl font-extralight text-neutral-900">Growth</p>
                        <p className="text-[10px] uppercase tracking-widest text-neutral-400 mt-2">Driven Purpose</p>
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </main>
    );
}