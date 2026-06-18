
"use client";

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        
        <nav className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20 z-50 w-full bg-white border-b border-zinc-100 sticky top-0">

            
            <div className="flex items-center gap-3 group cursor-pointer">
                <svg width="30" height="34" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FF6B58]">
                    <path d="M12 0C12 0 4 7 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 12 18 8 15 4L12 0Z" fill="currentColor" />
                    <path d="M12 23C12 23 14 21 14 18C14 16 13 15 12 14" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                </svg>

                <div className="flex flex-col">
                    <div className="flex flex-col leading-[0.85] text-[#FF6B58]">
                        <span className="text-[17px] font-black tracking-tight uppercase">Forge</span>
                        <span className="text-[17px] font-black tracking-tight uppercase">Digital</span>
                    </div>
                    <span className="text-[7.5px] font-bold tracking-[0.45em] uppercase text-[#FF6B58] mt-1.5 border-t border-[#FF6B58]/20 pt-1">
                        Technologies
                    </span>
                </div>
            </div>

            
            <div className="flex items-center gap-10">

                
                <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-zinc-800">
                    <Link href="/" className="hover:text-[#FF6B58] transition-colors duration-300">Home</Link>
                    <Link href="/about" className="hover:text-[#FF6B58] transition-colors duration-300">About</Link>

                    
                    <div className="relative group h-full py-4 cursor-pointer">
                        <div className="flex items-center gap-1 hover:text-[#FF6B58] transition-colors">
                            <span>Services</span>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-180 transition-transform duration-300">
                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[240px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <div className="bg-white border border-zinc-100 shadow-xl rounded-sm py-2 flex flex-col">
                                <Link href="/services/website-development" className="px-5 py-3 text-sm text-zinc-600 hover:text-[#FF6B58] hover:bg-zinc-50 transition-colors text-left">Website Development</Link>
                                <Link href="/services/mobile-app-development" className="px-5 py-3 text-sm text-zinc-600 hover:text-[#FF6B58] hover:bg-zinc-50 transition-colors text-left">Mobile App Development</Link>
                                <Link href="/services/ui-ux-design" className="px-5 py-3 text-sm text-zinc-600 hover:text-[#FF6B58] hover:bg-zinc-50 transition-colors text-left">UI / UX Design</Link>
                                <Link href="/services/ad-design-marketing" className="px-5 py-3 text-sm text-zinc-600 hover:text-[#FF6B58] hover:bg-zinc-50 transition-colors text-left">Ad Design & Marketing</Link>
                            </div>
                        </div>
                    </div>

                    <Link href="/our-work" className="hover:text-[#FF6B58] transition-colors duration-300">Our Work</Link>
                    <Link href="/careers" className="hover:text-[#FF6B58] transition-colors duration-300">Careers</Link>
                </div>

                
                <div className="flex items-center gap-4">
                    <Link href="/contact" className="hidden md:flex items-center justify-center px-6 py-2.5 text-[11px] font-bold tracking-wider text-zinc-600 border border-zinc-200 rounded-sm hover:border-[#FF6B58] hover:text-[#FF6B58] transition-all duration-300 uppercase">
                        Contact Us
                    </Link>
                    <Link href="/contact" className="flex items-center justify-center px-6 py-2.5 text-[11px] font-bold tracking-wider text-white bg-[#FF6B58] rounded-sm hover:bg-[#ff8575] transition-all duration-300 uppercase shadow-md shadow-orange-500/10">
                        Book Consultation
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;