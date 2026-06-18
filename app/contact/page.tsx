
"use client";

import React, { useState } from 'react';
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            setSubmitted(true);
        } else {
            alert("Failed to send message. Please try again.");
        }
        setIsSubmitting(false);
    };

    return (
        <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500 selection:text-white">
            <div className="sticky top-0 z-[100] w-full flex flex-col">
                <TopBanner />
                <Navbar />
            </div>

            <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
                <p className="text-[#FF6B58] text-[10px] tracking-[0.3em] uppercase font-light mb-6">Get in Touch</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-8">
                    Let's start the <br />
                    <span className="text-[#FF6B58] font-extralight">conversation.</span>
                </h1>
                <p className="text-zinc-400 font-light text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
                    Whether you have a project in mind or just want to explore what's possible, our team is ready to help (and we're friendly, too).
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    <div className="bg-zinc-900/50 p-8 border border-zinc-800 rounded-sm overflow-hidden relative">
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center p-12 text-center animate-in fade-in zoom-in duration-500">
                                <div className="w-16 h-16 bg-[#FF6B58] rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-[#FF6B58]/20">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-light text-white mb-2">Message Received</h3>
                                <p className="text-zinc-500 text-sm font-light">We'll get back to you faster than you can brew a fresh pot of coffee.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-8 text-[10px] uppercase tracking-widest text-[#FF6B58] font-bold hover:text-white transition-colors"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6 ">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-black border border-zinc-800 p-4 text-sm font-light text-white focus:outline-none focus:border-[#FF6B58] transition-colors"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-black border border-zinc-800 p-4 text-sm font-light text-white focus:outline-none focus:border-[#FF6B58] transition-colors"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Message</label>
                                    <textarea
                                        required
                                        className="w-full bg-black border border-zinc-800 p-4 text-sm font-light text-white focus:outline-none focus:border-[#FF6B58] transition-colors h-40 resize-none"
                                        placeholder="Tell us about your project..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-[#FF6B58] text-white py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#ff8575] disabled:opacity-50 transition-all duration-300"
                                >
                                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                                </button>
                            </form>
                        )}
                    </div>

                    
                    <div className="flex flex-col gap-12 lg:pl-12">
                        <div>
                            <p className="text-[#FF6B58] text-[9px] tracking-[0.4em] uppercase font-bold mb-4">Direct Communication</p>
                            <h3 className="text-xl font-light text-white mb-2">General Inquiries</h3>
                            <p className="text-zinc-500 text-lg md:text-2xl font-light">info@forgedigitaltechnologies.com</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-light text-white mb-2">Technical Support</h3>
                            <p className="text-zinc-500 text-lg md:text-2xl font-light">info@forgedigitaltechnologies.com</p>
                        </div>
                        <div className="pt-8 border-t border-white/5">
                            <p className="text-[#FF6B58] text-[9px] tracking-[0.4em] uppercase font-bold mb-4">Headquarters</p>
                            <h3 className="text-xl font-light text-white mb-2">Hyderabad Office</h3>
                            <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed">
                                Innovation Hub, Building 4<br />
                                HITEC City, Hyderabad<br />
                                Telangana, India 500081
                            </p>
                        </div>
                    </div>
                </div>

            </section>

            <Footer />
        </main>
    );
}
