function ServiceDetailPage({ service }) {
    if (!service) return null;

    return (
        <div className="bg-[#06060c] min-h-screen text-white pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Link */}
                <a 
                    href="#services-page" 
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors mb-12 group"
                >
                    <div className="icon-arrow-left text-sm group-hover:-translate-x-1 transition-transform"></div>
                    <span className="text-sm font-medium uppercase tracking-widest">Back to Services</span>
                </a>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side: Content */}
                    <div className="reveal reveal-left">
                        <div className="inline-flex items-center gap-4 mb-6">
                            <div className="h-px bg-purple-500 w-12"></div>
                            <h2 className="text-[11px] font-bold tracking-[0.3em] text-purple-400 uppercase">OUR SERVICE</h2>
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
                            {service.title.split(' ').slice(0, -1).join(' ')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">{service.title.split(' ').slice(-1)}</span>
                        </h1>
                        
                        <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
                            {service.desc}
                        </p>

                        <div className="space-y-8 mb-12">
                            <h3 className="text-lg font-semibold text-white">What's included in this service:</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {service.details.map((detail, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-[#1f1f3a] bg-[#0d0d1a] hover:border-purple-500/30 transition-colors group">
                                        <div className="w-8 h-8 rounded-full bg-purple-900/20 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all">
                                            <div className="icon-check text-xs"></div>
                                        </div>
                                        <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">{detail}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <a 
                            href="#contact-page" 
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-full shadow-xl shadow-purple-500/20 transition-all"
                        >
                            <span>Start a Project</span>
                            <div className="icon-arrow-right text-sm bg-white text-purple-600 rounded-full w-5 h-5 flex items-center justify-center"></div>
                        </a>
                    </div>

                    {/* Right Side: Visual/Feature List */}
                    <div className="reveal reveal-right delay-200">
                        <div className="relative">
                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-600/10 rounded-full blur-[80px]"></div>
                            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-600/10 rounded-full blur-[100px]"></div>
                            
                            <div className="relative z-10 p-8 sm:p-12 rounded-3xl border border-[#1f1f3a] bg-[#0d0d1a]/50 backdrop-blur-xl shadow-2xl">
                                <div className="w-20 h-20 rounded-2xl bg-purple-900/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-10 shadow-lg shadow-purple-500/10">
                                    <div className={`${service.icon} text-4xl`}></div>
                                </div>
                                
                                <h3 className="text-2xl font-bold mb-6">Our Approach</h3>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    We don't just deliver code; we deliver strategic digital assets. Our methodology focuses on four key pillars that ensure your {service.title} project is a resounding success.
                                </p>
                                
                                <ul className="space-y-6">
                                    {[
                                        { title: "Deep Discovery", text: "We dive deep into your business goals and user needs." },
                                        { title: "Elite Execution", text: "Crafted with the highest standards of engineering and design." },
                                        { title: "Continuous Optimization", text: "Data-driven refinements to maximize your ROI." },
                                        { title: "Seamless Support", text: "We're your long-term partners in digital growth." }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></div>
                                            <div>
                                                <h4 className="font-semibold text-white text-base mb-1">{item.title}</h4>
                                                <p className="text-sm text-gray-400">{item.text}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

window.ServiceDetailPage = ServiceDetailPage;
