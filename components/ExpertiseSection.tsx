import React from 'react';

const techStack = [
    {
        category: "Frontend",
        items: [
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
            { name: "Tailwindcss", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
            { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" }
        ]
    },
    {
        category: "Database",
        items: [
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "Postgres", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg", invert: true },
            { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
            { name: "Neon DB", icon: "https://neon.tech/favicon/favicon.svg" },
            { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" }
        ]
    },
    {
        category: "DevOps & Tools",
        items: [
            { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", invert: true },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true }
        ]
    }
];

const ExpertiseSection = () => {
    return (
        <section id="expertise" className="w-full bg-white text-black py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-neutral-100">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

                
                <div className="flex flex-col gap-6 lg:w-1/3 lg:sticky lg:top-32 h-fit">
                    <div>
                        <p className="text-[#FF6B58] text-[10px] tracking-[0.3em] uppercase font-light mb-4">Our Technology</p>
                        <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-[1.2] text-neutral-900">
                            The tech stack we use <br />
                            <span className="text-[#FF6B58] font-extralight">to build your products.</span>
                        </h2>
                    </div>

                    <p className="text-neutral-500 font-extralight leading-relaxed text-sm md:text-base max-w-sm">
                        We use professional and modern tools to make sure your website or app is fast, safe, and works perfectly.
                    </p>
                </div>

                
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
                    {techStack.map((category, index) => (
                        <div key={index} className="flex flex-col gap-6">
                            <h3 className="text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase border-b border-neutral-50 pb-3">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((tech, i) => (
                                    
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 px-4 py-2 bg-white border border-neutral-100 rounded-full hover:border-[#FF6B58] hover:shadow-sm transition-all duration-300 group cursor-default"
                                    >
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className={`w-4 h-4 object-contain transition-all duration-300 ${tech.invert ? 'brightness-0 grayscale group-hover:brightness-100 group-hover:grayscale-0' : 'grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100'}`}
                                        />
                                        <span className="text-[13px] text-neutral-600 font-light group-hover:text-black">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ExpertiseSection;