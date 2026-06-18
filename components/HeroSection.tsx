import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
    return (
        
        <section className="relative w-full h-[450px] md:h-[550px] flex items-center bg-[#050505] text-white overflow-hidden">

            
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.02]"
                    style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
                </div>
            </div>

            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-full flex items-center">

                
                <div className="flex flex-col w-full lg:w-1/2">

                    
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] text-zinc-100 max-w-2xl">
                        Expert <span className="text-[#FF6B58] font-extralight">Website Design</span> for <br className="hidden md:block" />
                        Modern <span className="text-[#FF6B58] font-extralight">Digital Brands</span>
                    </h1>

                    
                    <p className="mt-5 max-w-md text-sm md:text-base text-zinc-400 font-extralight leading-relaxed tracking-wide">
                        We build fast and beautiful websites that help your
                        business find more customers and look professional online.
                    </p>

                    
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link href="/our-work" className="px-7 py-2.5 text-[10px] tracking-[0.2em] font-light text-white bg-[#FF6B58] rounded-sm hover:bg-[#ff8575] transition-all uppercase">
                            View Our Work
                        </Link>
                        <Link href="/contact" className="px-7 py-2.5 text-[10px] tracking-[0.2em] font-light text-zinc-400 border border-zinc-800 rounded-sm hover:border-zinc-500 hover:text-white transition-all">
                            Get Started
                        </Link>
                    </div>
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
                        src="https://cdn.nishtyainfotech.com/content/learnings/data/blog/banner/68949b2b7b0593.00177429.webp"
                        alt="Modern Website Design"
                        className="w-full h-full object-cover opacity-60"
                    />

                    
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>

                    
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#FF6B58]/30"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;