"use client";

import React from 'react';
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const techStack = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true }
];

const features = [
    {
        id: "01",
        title: "Fast Loading Speed",
        description: "We make sure your website opens quickly so your customers don't have to wait."
    },
    {
        id: "02",
        title: "Mobile Ready",
        description: "Your website will look perfect and work smoothly on every smartphone and tablet."
    },
    {
        id: "03",
        title: "Search Engine Ready",
        description: "We build your site so that Google can find your business easily online."
    }
];

export default function WebsiteDevelopmentPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#FF6B58] selection:text-white overflow-hidden">

            
            <div className="sticky top-0 z-[100] w-full flex flex-col">
                <TopBanner />
                <Navbar />
            </div>

            
            <section className="relative w-full h-[400px] md:h-[500px] flex items-center bg-[#050505] overflow-hidden border-b border-zinc-900">
                <div className="absolute inset-0 z-0 opacity-[0.02]"
                    style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
                </div>

                <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center h-full">
                    <div className="flex flex-col w-full lg:w-1/2">
                        <p className="text-[#FF6B58] text-[9px] tracking-[0.4em] uppercase font-light mb-4">Web Development</p>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-zinc-100 max-w-lg">
                            We build <span className="text-[#FF6B58] font-extralight">fast websites</span> to <br className="hidden md:block" />
                            grow your <span className="text-[#FF6B58] font-extralight">digital brand.</span>
                        </h1>
                        <p className="mt-5 max-w-sm text-sm text-zinc-400 font-extralight leading-relaxed tracking-wide">
                            We use the newest tools to create websites that help you find more customers and sell more products.
                        </p>
                    </div>
                </div>

                
                <div className="absolute top-0 right-0 h-full w-[45%] z-10 hidden lg:block">
                    <div className="h-full w-full bg-zinc-900 border-l border-zinc-800 overflow-hidden"
                        style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                            alt="Website Building"
                            className="w-full h-full object-cover opacity-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent"></div>
                    </div>
                </div>
            </section>

            
            <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-2xl font-light tracking-tight text-white mb-4">Core Capabilities</h2>
                    <div className="w-10 h-[1px] bg-[#FF6B58]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((item) => (
                        <div key={item.id} className="bg-white p-8 rounded-sm flex flex-col h-full group hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
                            <span className="text-[10px] tracking-[0.3em] text-zinc-300 font-light uppercase mb-4">Feature {item.id}</span>
                            <h3 className="text-xl font-light text-black mb-4 tracking-tight">{item.title}</h3>
                            <p className="text-sm text-zinc-500 font-extralight leading-relaxed mb-8 flex-grow">{item.description}</p>
                            <div className="w-8 h-[1px] bg-[#FF6B58] group-hover:w-full transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </section>

            
            <section className="py-20 bg-[#080808] px-6 md:px-12 lg:px-20 border-y border-zinc-900">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-baseline gap-4 mb-12">
                        <h2 className="text-2xl font-light tracking-tight text-white">Our Tech Stack</h2>
                        <p className="text-xs text-zinc-500 font-extralight tracking-widest uppercase">The tools we use</p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {techStack.map((tech, i) => (
                            <div key={i} className="flex items-center gap-4 px-6 py-3 bg-black border border-zinc-800 rounded-full hover:border-[#FF6B58] transition-all duration-300 group">
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className={`w-5 h-5 object-contain grayscale group-hover:grayscale-0 transition-all ${tech.invert ? 'brightness-0 invert group-hover:invert-0' : ''}`}
                                />
                                <span className="text-sm font-light text-zinc-400 group-hover:text-white">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </main>
    );
}