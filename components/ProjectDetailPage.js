function ProjectDetailPage({ project }) {
    if (!project) return null;

    return (
        <div className="bg-[#06060c] min-h-screen text-white pt-20 md:pt-28 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Link */}
                <div className="mb-8 reveal reveal-up">
                    <a 
                        href="#work" 
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors group"
                    >
                        <div className="icon-arrow-left text-sm transform group-hover:-translate-x-1 transition-transform"></div>
                        <span className="text-sm">Back to Projects</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side: Content */}
                    <div className="reveal reveal-left">
                        <div className="inline-flex items-center gap-4 mb-6">
                            <div className="h-px bg-purple-500 w-12"></div>
                            <h2 className="text-[11px] font-bold tracking-[0.3em] text-purple-400 uppercase">OUR WORK</h2>
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
                            {project.name}
                        </h1>
                        
                        <div className="inline-block px-4 py-2 rounded-full bg-purple-900/20 border border-purple-500/30 text-purple-400 text-sm font-semibold mb-8">
                            {project.category}
                        </div>

                        <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
                            {project.fullDesc || project.desc}
                        </p>

                        <div className="space-y-8 mb-12">
                            <h3 className="text-lg font-semibold text-white">Key Features:</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {(project.features || [
                                    "Modern and intuitive user interface",
                                    "Responsive design across all devices",
                                    "High-performance architecture",
                                    "Scalable and maintainable codebase"
                                ]).map((feature, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-[#1f1f3a] bg-[#0d0d1a] hover:border-purple-500/30 transition-colors group">
                                        <div className="w-8 h-8 rounded-full bg-purple-900/20 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all">
                                            <div className="icon-check text-xs"></div>
                                        </div>
                                        <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {project.link && project.link !== "#" && (
                            <a 
                                href={project.link} 
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-full shadow-xl shadow-purple-500/20 transition-all"
                            >
                                <span>Visit Official Site</span>
                                <div className="icon-external-link text-sm"></div>
                            </a>
                        )}
                    </div>

                    {/* Right Side: Visual/Project Info */}
                    <div className="reveal reveal-right delay-200">
                        <div className="relative">
                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-600/10 rounded-full blur-[80px]"></div>
                            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-600/10 rounded-full blur-[100px]"></div>
                            
                            <div className="relative z-10">
                                {/* Project Image */}
                                <div className="rounded-3xl overflow-hidden border border-[#1f1f3a] mb-8 shadow-2xl">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-80 object-cover"
                                    />
                                </div>

                                {/* Project Info Card */}
                                <div className="p-8 sm:p-12 rounded-3xl border border-[#1f1f3a] bg-[#0d0d1a]/50 backdrop-blur-xl shadow-2xl">
                                    <h3 className="text-2xl font-bold mb-6">Project Details</h3>
                                    
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></div>
                                            <div>
                                                <h4 className="font-semibold text-white text-base mb-1">Category</h4>
                                                <p className="text-sm text-gray-400">{project.category}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></div>
                                            <div>
                                                <h4 className="font-semibold text-white text-base mb-1">Technology Stack</h4>
                                                <p className="text-sm text-gray-400">{project.tech || "React, Node.js, Tailwind CSS"}</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></div>
                                            <div>
                                                <h4 className="font-semibold text-white text-base mb-1">Project Type</h4>
                                                <p className="text-sm text-gray-400">{project.type || "Web Application"}</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></div>
                                            <div>
                                                <h4 className="font-semibold text-white text-base mb-1">Status</h4>
                                                <p className="text-sm text-gray-400">{project.status || "Live & Active"}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-[#1f1f3a]">
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            This project showcases our expertise in delivering high-quality digital solutions. We focused on creating an exceptional user experience while maintaining robust performance and scalability.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

window.ProjectDetailPage = ProjectDetailPage;
