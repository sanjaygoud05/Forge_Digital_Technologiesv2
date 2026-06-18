import React from 'react';

const CTASection = () => {
    return (
        
        <section className="relative w-full h-[400px] md:h-[450px] flex items-center bg-[#050505] overflow-hidden">

            
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.02]"
                    style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
                </div>
            </div>

            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-full flex items-center">

                
                <div className="flex flex-col w-full lg:w-1/2">
                    
                    <p className="text-[#FF6B58] text-[9px] tracking-[0.4em] uppercase font-light mb-4">
                        Next Steps
                    </p>

                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-6 text-white max-w-lg">
                        Let's start building your <br />
                        <span className="text-[#FF6B58] font-extralight">next digital product.</span>
                    </h2>

                    
                    <p className="text-sm md:text-base text-zinc-500 font-extralight max-w-md leading-relaxed mb-8 tracking-wide">
                        Our team is ready to help you grow your business.
                        Contact us today to start your project.
                    </p>

                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-9 py-3 bg-[#FF6B58] text-white text-[10px] font-light tracking-[0.2em] uppercase rounded-sm hover:bg-[#ff8575] transition-all duration-300">
                            Talk to our team
                        </button>

                        <button className="px-9 py-3 bg-transparent border border-zinc-800 text-zinc-400 text-[10px] font-light tracking-[0.2em] uppercase rounded-sm hover:border-zinc-500 hover:text-white transition-all duration-300">
                            See our work
                        </button>
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
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200"
                        alt="Get started with our team"
                        className="w-full h-full object-cover opacity-50"
                    />

                    
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent"></div>

                    
                    <div className="absolute top-0 left-0 w-[1px] h-full bg-[#FF6B58]/40"></div>
                </div>
            </div>

        </section>
    );
};

export default CTASection;