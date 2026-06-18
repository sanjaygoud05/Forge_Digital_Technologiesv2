
import React from 'react';
import { prisma } from "@/lib/prisma";
import type { Career } from "@prisma/client";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function CareersPage() {
    const careers = await prisma.career.findMany({
        where: { status: true },
        orderBy: { createdAt: "desc" },
    });

    return (
        <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#FF6B58] selection:text-white overflow-hidden">

            
            <div className="sticky top-0 z-[100] w-full flex flex-col">
                <TopBanner />
                <Navbar />
            </div>

            
            <section className="relative w-full h-[350px] md:h-[450px] flex items-center bg-[#050505] overflow-hidden">

                
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 opacity-[0.02]"
                        style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
                    </div>
                </div>

                <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-full flex items-center">
                    
                    <div className="flex flex-col w-full lg:w-1/2">
                        <p className="text-[#FF6B58] text-[9px] tracking-[0.4em] uppercase font-light mb-4">Join the team</p>
                        <h1 className="text-3xl md:text-5xl font-light tracking-tight leading-[1.1] text-zinc-100 max-w-lg">
                            Build the <span className="text-[#FF6B58] font-extralight">future</span> <br />
                            with <span className="text-[#FF6B58] font-extralight">Forge Digital.</span>
                        </h1>
                        <p className="mt-4 max-w-sm text-sm text-zinc-400 font-extralight leading-relaxed tracking-wide">
                            We are looking for creative people to join our team in building modern websites and apps.
                        </p>
                    </div>
                </div>

                
                <div className="absolute top-0 right-0 h-full w-[45%] z-10 hidden lg:block">
                    <div
                        className="h-full w-full bg-zinc-900 border-l border-zinc-800 overflow-hidden"
                        style={{
                            clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)'
                        }}
                    >
                        <img
                            src="https://ddi-dev.com/uploads/agile-software-development-team-structure.png"
                            alt="Our team working"
                            className="w-full h-full object-cover opacity-50"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent"></div>
                        
                        <div className="absolute top-0 left-0 w-[1px] h-full bg-[#FF6B58]/40"></div>
                    </div>
                </div>
            </section>

            
            <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-2xl font-light tracking-tight text-white mb-4">Current Openings</h2>
                    <div className="w-10 h-[1px] bg-[#FF6B58]"></div>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {careers.map((job: Career, index: number) => (
                        <Link href={`/careers/${job.slug}`} key={job.id} className="bg-white p-8 rounded-sm flex flex-col h-full group hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 transform hover:-translate-y-1">
                            <span className="text-[10px] tracking-[0.3em] text-zinc-300 font-light uppercase mb-4">
                                {String(index + 1).padStart(2, '0')} / {job.jobType}
                            </span>

                            <h3 className="text-xl font-light text-black mb-2 tracking-tight group-hover:text-[#FF6B58] transition-colors">
                                {job.title}
                            </h3>

                            <p className="text-[11px] text-[#FF6B58] uppercase tracking-widest font-medium mb-4">
                                {job.location}
                            </p>

                            <p className="text-sm text-zinc-500 font-extralight leading-relaxed mb-8 flex-grow line-clamp-3">
                                {job.description}
                            </p>

                            
                            <div className="flex items-center justify-between border-t border-zinc-50 pt-6">
                                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-light">Apply for role</span>
                                <div className="w-8 h-8 rounded-full border border-zinc-100 flex items-center justify-center group-hover:bg-[#FF6B58] group-hover:border-[#FF6B58] transition-all duration-300">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-300 group-hover:text-white">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}

                    {careers.length === 0 && (
                        <div className="col-span-full py-12 text-center">
                            <p className="text-zinc-500 font-light">No open positions at the moment. Check back soon!</p>
                        </div>
                    )}
                </div>
            </section>

            <CTASection />
            <Footer />
        </main>
    );
}