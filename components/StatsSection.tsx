
import React from 'react';

const stats = [
    { title: "Platform", value: "1", suffix: "" },
    { title: "Files scanned per second", value: "928", suffix: "" },
    { title: "Transactions daily", value: "1,8M", suffix: "" },
    { title: "Frauds prevented today", value: "200", suffix: "" },
    { title: "Money saved from fraud", value: "100M", suffix: "" },
];

const StatsSection = () => {
    return (
        <section className="w-full border-t border-zinc-900 bg-black/20 backdrop-blur-sm z-10">

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-zinc-800 border-b border-zinc-900 md:border-b-0">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col p-8 md:p-10 justify-between h-56 md:h-64 relative group hover:bg-zinc-900/40 transition-colors">
                        <div className="flex justify-between items-start">
                            <h3 className="text-4xl md:text-5xl font-light text-white tracking-tighter">
                                {stat.value}
                            </h3>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-500 group-hover:text-white transition-colors opacity-60">
                                <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="mt-auto text-sm md:text-base text-zinc-400 font-medium">
                            {stat.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;
