"use client";

import React from 'react';

const BottomBanner = () => {
    return (
        <footer className="w-full bg-black text-white py-12 px-6 md:px-12 lg:px-20 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                
                {/* Brand Identity */}
                <div className="flex items-center gap-4">
                    <div className="h-5 w-[1px] bg-white/30 hidden md:block"></div>
                    <p className="text-[14px] text-white/60 font-light tracking-tight">
                        Developed and Managed by <span className="text-white font-medium underline underline-offset-4 decoration-white/20">Forge Digital Team</span>
                    </p>
                </div>

                {/* Interaction Link */}
                <a
                    href="https://forgedigital.team/support"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-[14px] font-medium transition-all duration-300"
                >
                    <span className="text-white/80 group-hover:text-white">Support and Assistance</span>
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                        <svg 
                            width="12" 
                            height="12" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2.5" 
                            className="text-white group-hover:text-black transition-colors"
                        >
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </div>
                </a>
                
            </div>
        </footer>
    );
};

export default BottomBanner;
