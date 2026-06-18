import React from 'react';

const reasons = [
    {
        title: "Modern Technology",
        description: "We use the latest tools and code to make sure your business stays ahead of the competition.",
    },
    {
        title: "Fast Delivery",
        description: "Our team works quickly and carefully to get your digital products ready for your customers.",
    },
    {
        title: "Custom Strategy",
        description: "We don't use one-size-fits-all. We build special plans that fit your exact business goals.",
    }
];

const WhyChooseUsSection = () => {
    return (
        
        <section className="relative w-full h-[450px] md:h-[500px] flex items-center bg-white text-black overflow-hidden border-y border-neutral-100">

            
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
                </div>
            </div>

            
            <div className="absolute top-0 left-0 h-full w-[50%] z-10 hidden lg:block">
                <div
                    className="h-full w-full bg-neutral-100 border-r border-neutral-200 overflow-hidden"
                    style={{
                        
                        clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)'
                    }}
                >
                    <img
                        src="https://media.istockphoto.com/id/1947499362/photo/happy-group-of-business-people-discussing-strategy-during-team-meeting-at-the-office-desk.jpg?s=612x612&w=0&k=20&c=UXPrlQx09d8EP4_kTdAa-vC2LxD_ppY1tiG7eTPGVbE="
                        alt="Team meeting"
                        className="w-full h-full object-cover"
                    />

                    
                    <div className="absolute inset-0 bg-white/10"></div>

                    
                    <div className="absolute top-0 right-0 w-[2px] h-full bg-[#FF6B58]"></div>
                </div>
            </div>

            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-full flex items-center justify-end">

                
                <div className="flex flex-col w-full lg:w-[45%]">

                    
                    <div className="mb-8">
                        <p className="text-[#FF6B58] text-[10px] tracking-[0.3em] uppercase font-light mb-3">Why choose us</p>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight leading-tight text-neutral-900">
                            We help your <span className="text-[#FF6B58] font-extralight">business grow</span> <br />
                            with <span className="text-neutral-400 font-extralight">smart digital engineering.</span>
                        </h2>
                    </div>

                    
                    <div className="flex flex-col gap-6">
                        {reasons.map((reason, index) => (
                            <div key={index} className="flex gap-4 group">
                                
                                <div className="mt-1 min-w-[24px] h-[24px] rounded-sm border border-neutral-200 flex items-center justify-center text-[10px] text-[#FF6B58] group-hover:bg-[#FF6B58] group-hover:text-white group-hover:border-[#FF6B58] transition-all duration-300">
                                    0{index + 1}
                                </div>

                                <div className="flex flex-col">
                                    <h3 className="text-base font-light text-neutral-800 group-hover:text-[#FF6B58] transition-colors duration-300">
                                        {reason.title}
                                    </h3>
                                    <p className="text-[13px] text-neutral-500 font-extralight leading-relaxed max-w-sm mt-1">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    );
};

export default WhyChooseUsSection;