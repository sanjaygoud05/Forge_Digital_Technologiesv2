function PortfolioPage() {
    const projects = window.PROJECTS_DATA || [];

    return (
        <div className="bg-[#06060c] min-h-screen text-white pt-20 md:pt-28 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 reveal reveal-up">
                    <div className="inline-flex items-center gap-4 mb-4">
                        <div className="h-px bg-purple-500 w-10 sm:w-12"></div>
                        <h2 className="text-[11px] font-bold tracking-[0.2em] text-purple-400 uppercase">OUR WORK</h2>
                        <div className="h-px bg-purple-500 w-10 sm:w-12"></div>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Projects</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Explore our portfolio of successful projects that showcase our expertise in building innovative digital solutions.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((proj, idx) => (
                        <div 
                            key={proj.id || idx} 
                            onClick={() => window.location.hash = `#project-${proj.id || idx}`}
                            className={`group relative rounded-xl overflow-hidden bg-[#0a0a16] border border-[#1f1f3a] hover:border-purple-500/50 transition-all duration-500 flex flex-col reveal reveal-up delay-${(idx % 4) * 100 + 100} cursor-pointer`}
                        >
                            {/* Image */}
                            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#111122]">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a16] via-transparent to-transparent z-10 opacity-80"></div>
                                <img
                                    src={proj.image}
                                    alt={proj.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="w-10 h-10 rounded-full bg-purple-600/90 text-white flex items-center justify-center backdrop-blur-sm shadow-[0_0_20px_rgba(147,51,234,0.5)]">
                                        <div className="icon-arrow-up-right text-lg"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4 sm:p-5 relative z-20 -mt-8 bg-gradient-to-t from-[#0a0a16] via-[#0a0a16] to-transparent pt-10">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <div className="text-[8px] font-bold tracking-widest text-blue-400 uppercase mb-1">{proj.category}</div>
                                        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-purple-300 transition-colors">{proj.name}</h4>
                                    </div>
                                    <div className="w-6 h-6 rounded-full border border-[#2a2a4a] group-hover:border-purple-500 flex items-center justify-center text-gray-400 group-hover:text-purple-400 transition-colors shrink-0 bg-[#0a0a16]">
                                        <div className="icon-arrow-right text-[10px] transform group-hover:-rotate-45 transition-transform"></div>
                                    </div>
                                </div>
                                <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-2">{proj.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center reveal reveal-up">
                    <div className="inline-block p-8 sm:p-12 rounded-3xl border border-[#1f1f3a] bg-[#0d0d1a]/50 backdrop-blur-xl">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Have a Project in Mind?</h3>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Let's discuss how we can help bring your vision to life with our expertise and innovative solutions.
                        </p>
                        <a 
                            href="#contact-page" 
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-full shadow-xl shadow-purple-500/20 transition-all"
                        >
                            <span>Start a Project</span>
                            <div className="icon-arrow-right text-sm bg-white text-purple-600 rounded-full w-5 h-5 flex items-center justify-center"></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

window.PortfolioPage = PortfolioPage;
