
"use client";

import React, { useState, useEffect } from 'react';
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function OurWorkPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#FF6B58] selection:text-white">
            <div className="sticky top-0 z-[100] w-full flex flex-col">
                <TopBanner />
                <Navbar />
            </div>

            <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
                <p className="text-[#FF6B58] text-[10px] tracking-[0.3em] uppercase font-light mb-6">Featured Work</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-8">
                    Selected projects <br />
                    <span className="text-[#FF6B58] font-extralight">we are proud of.</span>
                </h1>
                <p className="text-zinc-400 font-light text-lg md:text-xl max-w-3xl leading-relaxed mb-16">
                    A curated look at our partner projects where we have delivered strategy, design, and engineering.
                </p>

                
                <div className="group cursor-pointer w-full">
                    
                    <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-zinc-900 mb-8 overflow-hidden rounded-sm relative border border-zinc-800">
                        
                        <img
                            src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=2000"
                            alt="Student Forge Platform"
                            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                        <div className="absolute top-6 right-6 flex gap-3">
                            <span className="bg-black/50 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full">EdTech</span>
                            <span className="bg-[#FF6B58] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full">2026</span>
                        </div>
                    </div>

                    
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-t border-zinc-800 pt-8">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-light text-white group-hover:text-[#FF6B58] transition-colors mb-3">Student Forge</h3>
                            <p className="text-zinc-500 font-light text-sm tracking-wide">Strategy • Design • Full Stack Development</p>
                        </div>
                        <p className="text-zinc-400 font-light text-sm md:text-base max-w-xl leading-relaxed">
                            A comprehensive educational technology ecosystem designed to empower the next generation of learners.
                            We built a scalable platform connecting students with mentorship, resources, and real-world opportunities
                            to foster growth and leadership.
                        </p>
                        <div className="flex items-center justify-center w-12 h-12 rounded-full border border-zinc-700 text-white group-hover:bg-[#FF6B58] group-hover:border-[#FF6B58] transition-all duration-300">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </div>
                    </div>
                </div>

            </section>

            <CTASection />
            <Footer />
        </main>
    );
}
