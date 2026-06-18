import React from 'react';

const services = [
    {
        id: "01",
        title: "Website Development",
        description: "We build fast and clean websites that make your brand look great on any screen.",
        image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771382055/undraw_focused-dev_gqoa_g2bpdr.svg"
    },
    {
        id: "02",
        title: "Mobile App Development",
        description: "We create simple and powerful apps for your phone to help you reach more people.",
        image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771382052/undraw_home-cameras_hbw3_1_xukg8j.svg"
    },
    {
        id: "03",
        title: "UI / UX Design",
        description: "We design beautiful pages that are very easy for your customers to understand and use.",
        image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771381937/undraw_choose-color_wpfw_kjumsj.svg"
    },
    {
        id: "04",
        title: "Ad Design & Marketing",
        description: "We make ads that get noticed. We help you find new customers and grow your sales.",
        image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771381948/undraw_social-post_qn03_yqprnv.svg"
    }
];

const ServicesSection = () => {
    return (
        
        <section className="w-full bg-[#050505] py-20 md:py-32 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">

                
                <div className="mb-16 max-w-2xl">
                    <p className="text-[#FF6B58] text-[10px] tracking-[0.3em] uppercase font-light mb-4">Our Services</p>
                    <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
                        We build <span className="text-[#FF6B58] font-extralight">digital products</span> to grow your business.
                    </h2>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        
                        <div
                            key={service.id}
                            className="bg-white p-8 rounded-sm flex flex-col h-full hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group"
                        >
                            
                            <div className="w-full aspect-square mb-8 overflow-hidden flex items-center justify-center bg-transparent">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            
                            <div className="flex flex-col flex-grow">
                                <span className="text-[10px] tracking-[0.2em] text-zinc-300 font-light mb-3">
                                    0{service.id}
                                </span>

                                <h3 className="text-lg md:text-xl font-light text-black mb-3 tracking-tight">
                                    {service.title}
                                </h3>

                                <p className="text-sm text-zinc-500 font-extralight leading-relaxed mb-6">
                                    {service.description}
                                </p>
                            </div>

                            
                            <div className="w-8 h-[1px] bg-[#FF6B58] group-hover:w-full transition-all duration-500"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;