import React from 'react';
import Link from 'next/link';

const AboutSection = () => {
    return (

        <section className="w-full bg-white text-black py-16 md:py-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">


                <div className="flex flex-col gap-8 lg:sticky lg:top-24">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl leading-[1.2] font-light tracking-tight text-neutral-900 max-w-2xl">
                        We build <span className="text-[#FF6B58] font-extralight">modern websites</span> and apps that help your business <span className="text-[#FF6B58] font-extralight">succeed</span>.
                    </h2>

                    <p className="text-sm md:text-base text-neutral-500 font-extralight max-w-xl leading-relaxed tracking-wide">
                        Our team uses the newest technology to create beautiful digital products.
                        We make sure your online presence is fast, secure, and ready to reach
                        more customers every day.
                    </p>

                    <div className="pt-2">

                        <Link href="/#expertise" className="inline-block px-10 py-3.5 rounded-sm bg-black text-white text-[10px] font-light tracking-[0.2em] uppercase hover:bg-neutral-800 transition-all duration-300">
                            Our Expertise
                        </Link>
                    </div>
                </div>


                <div className="flex flex-col gap-4">


                    <div className="bg-[#0a0a0a] p-8 rounded-sm border border-zinc-900 flex flex-col gap-1">
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-extralight text-[#FF6B58] tracking-tighter">99.9</span>
                            <span className="text-xl font-thin text-[#FF6B58]">%</span>
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium">Uptime Reliability</p>
                        <p className="text-[11px] text-zinc-400 font-extralight mt-2 leading-relaxed">
                            Your website stays online and fast for all users.
                        </p>
                    </div>


                    <div className="bg-[#FF6B58] p-8 rounded-sm shadow-xl shadow-orange-500/20 flex flex-col gap-1">
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-extralight text-black tracking-tighter">5+</span>
                            <span className="text-xl font-thin text-black">+</span>
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-black/60 font-medium">Digital Projects</p>
                        <p className="text-[11px] text-black/80 font-extralight mt-2 leading-relaxed">
                            We have built products for many happy clients.
                        </p>
                    </div>


                    <div className="bg-[#0a0a0a] p-8 rounded-sm border border-zinc-900 flex flex-col gap-1">
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-extralight text-[#FF6B58] tracking-tighter">24</span>
                            <span className="text-xl font-thin text-[#FF6B58]">/7</span>
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium">Expert Support</p>
                        <p className="text-[11px] text-zinc-400 font-extralight mt-2 leading-relaxed">
                            Our team is always here to help you grow.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutSection;