
"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function CareerDetailPage() {
    const params = useParams();
    const slug = params.slug;
    const [career, setCareer] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        resumeUrl: "",
    });

    useEffect(() => {
        const fetchCareer = async () => {
            const res = await fetch("/api/careers");
            if (res.ok) {
                const data = await res.json();
                const found = data.find((c: any) => c.slug === slug);
                setCareer(found);
            }
            setIsLoading(false);
        };
        fetchCareer();
    }, [slug]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        const res = await fetch("/api/applications", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...formData,
                careerId: career.id,
            }),
        });

        if (res.ok) {
            setSubmitted(true);
        } else {
            alert("Failed to submit application. Please try again.");
        }
        setIsSubmitting(false);
    };

    if (isLoading) return <div className="min-h-screen bg-[#050505] flex items-center justify-center text-[#FF6B58] font-light tracking-widest uppercase animate-pulse">Loading Position...</div>;
    if (!career) return <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white font-light">Position not found.</div>;

    return (
        <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#FF6B58]">
            <TopBanner />
            <Navbar />

            
            <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 border-b border-white/5 bg-white/[0.01]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <p className="text-[#FF6B58] text-[10px] tracking-[0.4em] uppercase font-bold mb-6">Active Opening</p>
                            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">{career.title}</h1>
                            <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B58]"></span> {career.location}
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span> {career.jobType}
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span> {career.experience} EXP
                                </span>
                            </div>
                        </div>
                        {career.salary && (
                            <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
                                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Annual Compensation</p>
                                <p className="text-xl font-light text-[#FF6B58]">{career.salary}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            
            <section className="py-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20">

                    
                    <div className="lg:col-span-2 space-y-16">
                        <div className="space-y-6 text-zinc-400 font-light leading-relaxed">
                            <h2 className="text-white text-2xl font-light tracking-tight flex items-center gap-4">
                                Role Overview <span className="flex-grow h-[1px] bg-white/10"></span>
                            </h2>
                            <p className="text-lg">{career.description}</p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-white text-2xl font-light tracking-tight flex items-center gap-4">
                                Key Responsibilities <span className="flex-grow h-[1px] bg-white/10"></span>
                            </h2>
                            <div className="grid grid-cols-1 gap-4">
                                {career.responsibilities.split('\n').map((line: string, i: number) => line.trim() && (
                                    <div key={i} className="flex gap-4 p-4 bg-white/[0.02] border border-white/5">
                                        <span className="text-[#FF6B58] font-bold text-xs mt-1">0{i + 1}</span>
                                        <p className="text-zinc-400 font-light">{line}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-white text-2xl font-light tracking-tight flex items-center gap-4">
                                Technical Requirements <span className="flex-grow h-[1px] bg-white/10"></span>
                            </h2>
                            <div className="flex flex-wrap gap-4 text-xs font-light text-zinc-400">
                                {career.requirements.split('\n').map((line: string, i: number) => line.trim() && (
                                    <span key={i} className="px-6 py-3 border border-white/10 bg-white/5 uppercase tracking-widest">
                                        {line}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    
                    <div className="lg:col-span-1">
                        <div className="sticky top-32">
                            {submitted ? (
                                <div className="bg-white/[0.02] border border-[#FF6B58]/30 p-12 text-center backdrop-blur-md">
                                    <div className="w-16 h-16 bg-[#FF6B58] rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-light mb-4 text-white">Application Sent</h3>
                                    <p className="text-sm text-zinc-500 font-light leading-relaxed">
                                        Thank you for your interest! Our recruitment team will review your application and get back to you shortly.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-8 text-[10px] uppercase tracking-widest text-[#FF6B58] font-bold hover:text-white transition-colors"
                                    >
                                        Send another application
                                    </button>
                                </div>
                            ) : (
                                <div className="bg-white/[0.02] border border-white/5 p-8 md:p-10 backdrop-blur-md">
                                    <div className="mb-8">
                                        <h3 className="text-xl font-light mb-2">Apply for this role</h3>
                                        <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Forge Your Future</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="John Doe"
                                                className="w-full bg-white/5 border border-white/10 p-4 text-sm font-light focus:outline-none focus:border-[#FF6B58] transition-colors"
                                                value={formData.fullName}
                                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="john@example.com"
                                                className="w-full bg-white/5 border border-white/10 p-4 text-sm font-light focus:outline-none focus:border-[#FF6B58] transition-colors"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="+1 (555) 000-0000"
                                                className="w-full bg-white/5 border border-white/10 p-4 text-sm font-light focus:outline-none focus:border-[#FF6B58] transition-colors"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Resume / Portfolio Link</label>
                                            <input
                                                type="url"
                                                required
                                                placeholder="https://linkedin.com/in/johndoe"
                                                className="w-full bg-white/5 border border-white/10 p-4 text-sm font-light focus:outline-none focus:border-[#FF6B58] transition-colors"
                                                value={formData.resumeUrl}
                                                onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-[#FF6B58] hover:bg-[#ff8575] text-white text-[10px] font-bold uppercase tracking-[0.3em] py-5 transition-all duration-300 disabled:opacity-50"
                                        >
                                            {isSubmitting ? "Processing..." : "Submit Application"}
                                        </button>
                                        <p className="text-[9px] text-zinc-600 font-light text-center leading-relaxed px-4">
                                            By clicking submit, you agree to our privacy policy and terms regarding talent recruitment.
                                        </p>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </main>
    );
}
