function Services({ isPage = false }) {
    // Use the global services data defined in app.js
    const services = window.SERVICES_DATA || [];

    return (
        <section id="services" className={`py-12 sm:py-16 ${isPage ? 'bg-[#06060c] pt-20 md:pt-28' : 'bg-[#020205]'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16 reveal reveal-up">
                    <div className="inline-flex items-center gap-4 mb-4">
                        <div className="h-px bg-purple-500/20 w-12"></div>
                        <h2 className="text-[11px] font-bold tracking-[0.3em] text-purple-400 uppercase">
                            {isPage ? 'OUR EXPERTISE' : 'SERVICES'}
                        </h2>
                        <div className="h-px bg-purple-500/20 w-12"></div>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                        {isPage ? 'Digital Solutions for the ' : 'What We '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                            {isPage ? 'Modern Era' : 'Do'}
                        </span>
                    </h1>
                    {isPage && (
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            We combine deep technical expertise with visionary design to build digital products that don't just work—they win.
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {services.map((svc, idx) => (
                        <a 
                            key={svc.id || idx} 
                            href={`#service-${svc.id}`}
                            className={`group relative rounded-2xl p-8 border border-[#1f1f3a] bg-[#0d0d1a]/40 hover:bg-[#0d0d1e] hover:border-purple-500/50 transition-all duration-500 reveal reveal-up delay-${(idx % 3) * 100 + 100} cursor-pointer block group overflow-hidden`}
                        >
                            {/* Decorative Background */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-all duration-500"></div>
                            
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                                <div className="icon-arrow-up-right text-purple-400 text-2xl"></div>
                            </div>
                            
                            <div className="mb-8 w-14 h-14 rounded-2xl bg-purple-900/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-purple-500/5">
                                <div className={`${svc.icon} text-2xl`}></div>
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                                {svc.title}
                            </h3>
                            
                            <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                                {svc.desc}
                            </p>
                            
                            <div className="flex items-center gap-2 text-purple-400 text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                <span>Learn More</span>
                                <div className="icon-arrow-right"></div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

window.Services = Services;