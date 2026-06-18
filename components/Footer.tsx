"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
    
    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <footer className="w-full bg-white text-black pt-32 pb-12 px-6 md:px-12 lg:px-20 border-t border-neutral-100 relative overflow-hidden">
            
            {/* 1. Guaranteed Clickability Fix: Background Watermark 
                z-[-1] and pointer-events-none ensures it acts as a background "ghost" and never blocks links */}
            <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03] z-0">
                <h1 className="text-[16vw] font-black text-black uppercase tracking-tighter whitespace-nowrap leading-none">
                    Forge Digital
                </h1>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* 2. Main Redesigned Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
                    
                    {/* Brand Identity - ORIGINAL LOGO PRESERVED */}
                    <div className="lg:col-span-5 flex flex-col gap-10">
                        <div className="flex items-center gap-3">
                            <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
                                <path d="M12 0C12 0 4 7 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 12 18 8 15 4L12 0Z" fill="currentColor" />
                                <path d="M12 23C12 23 14 21 14 18C14 16 13 15 12 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            <div className="flex flex-col">
                                <div className="flex flex-col leading-[0.85] text-black">
                                    <span className="text-[14px] font-black tracking-tight uppercase">Forge</span>
                                    <span className="text-[14px] font-black tracking-tight uppercase">Digital</span>
                                </div>
                                <span className="text-[7px] font-bold tracking-[0.45em] uppercase text-black mt-1 border-t border-black/10 pt-1">
                                    Technologies
                                </span>
                            </div>
                        </div>
                        
                        <div className="space-y-6">
                            <p className="text-neutral-500 text-[17px] font-light leading-relaxed max-w-sm">
                                We engineer high-performance digital systems and iconic designs that define the next generation of business.
                            </p>
                            {/* Redesigned Social Icons with large hit-boxes */}
                            <div className="flex items-center gap-4">
                                <a 
                                    href="https://www.linkedin.com/company/forgedigitaltechnologies/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full border border-neutral-100 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-500 pointer-events-auto relative z-20"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </a>
                                <a 
                                    href="https://www.instagram.com/forgedigitaltechnologies/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full border border-neutral-100 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-500 pointer-events-auto relative z-20"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4">
                        <div className="flex flex-col gap-6">
                            <h4 className="text-[12px] font-bold text-neutral-300 uppercase tracking-[0.2em]">Services</h4>
                            <ul className="flex flex-col gap-4">
                                <li><Link href="/services/website-development" className="text-[15px] text-neutral-600 hover:text-black transition-colors">Website Design</Link></li>
                                <li><Link href="/services/mobile-app-development" className="text-[15px] text-neutral-600 hover:text-black transition-colors">Mobile Apps</Link></li>
                                <li><Link href="/services/ui-ux-design" className="text-[15px] text-neutral-600 hover:text-black transition-colors">UI/UX Design</Link></li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-6">
                            <h4 className="text-[12px] font-bold text-neutral-300 uppercase tracking-[0.2em]">Company</h4>
                            <ul className="flex flex-col gap-4">
                                <li><Link href="/about" className="text-[15px] text-neutral-600 hover:text-black transition-colors">Our Story</Link></li>
                                <li><Link href="/contact" className="text-[15px] text-neutral-600 hover:text-black transition-colors">Contact Us</Link></li>
                                <li><Link href="/careers" className="text-[15px] text-neutral-600 hover:text-black transition-colors">Careers</Link></li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
                            <h4 className="text-[12px] font-bold text-neutral-300 uppercase tracking-[0.2em]">Legal</h4>
                            <ul className="flex flex-col gap-4">
                                <li><Link href="/privacy-policy" className="text-[15px] text-neutral-600 hover:text-black transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/terms-of-service" className="text-[15px] text-neutral-600 hover:text-black transition-colors">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 3. Bottom Utility Bar */}
                <div className="pt-10 border-t border-neutral-100 flex flex-col md:row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <p className="text-neutral-400 text-[12px] font-light">
                            © 2026 Forge Digital Technologies.
                        </p>
                        <div className="h-1 w-1 bg-neutral-200 rounded-full hidden md:block"></div>
                        <p className="text-neutral-300 text-[12px] font-light italic">
                            Redefining digital boundaries.
                        </p>
                    </div>

                    {/* Redesigned Back to Top */}
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-3 group pointer-events-auto relative z-20"
                    >
                        <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-black transition-colors">Back to top</span>
                        <div className="w-10 h-10 border border-neutral-100 group-hover:border-black rounded-full flex items-center justify-center transition-all duration-300">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-300 group-hover:text-black transition-colors">
                                <path d="M18 15l-6-6-6 6" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
