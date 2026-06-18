
"use client";

import { useState } from "react";
import { login } from "./actions";
import Link from "next/link";

export default function AdminLogin() {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (formData: FormData) => {
        setIsLoading(true);
        setError("");
        const result = await login(formData);
        if (result?.error) {
            setError(result.error);
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 selection:bg-[#FF6B58]">
            
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
                </div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6B58]/5 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF6B58]/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="relative z-10 w-full max-w-md">
                
                <div className="flex flex-col items-center mb-12">
                    <Link href="/" className="mb-6 group">
                        <div className="w-16 h-16 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#FF6B58]/50 transition-all duration-500">
                            <svg width="32" height="36" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FF6B58]">
                                <path d="M12 0C12 0 4 7 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 12 18 8 15 4L12 0Z" fill="currentColor" />
                                <path d="M12 23C12 23 14 21 14 18C14 16 13 15 12 14" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                    </Link>
                    <h1 className="text-2xl font-light tracking-tight text-white mb-2">Admin Access</h1>
                    <p className="text-zinc-500 text-xs tracking-[0.2em] uppercase font-light">Forge Digital Technologies</p>
                </div>

                
                <div className="bg-white/[0.02] border border-white/5 p-8 md:p-10 backdrop-blur-xl">
                    <form action={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] uppercase tracking-widest p-3 text-center font-bold">
                                {error}
                            </div>
                        )}

                        <div className="space-y-1.5">
                            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 ml-1">Email Address</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="info@forgedigitaltechnologies.com"
                                className="w-full bg-white/5 border border-white/10 p-4 text-sm font-light focus:outline-none focus:border-[#FF6B58] transition-colors placeholder:text-zinc-700"
                                required
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 ml-1">Security Key</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-white/5 border border-white/10 p-4 text-sm font-light focus:outline-none focus:border-[#FF6B58] transition-colors placeholder:text-zinc-700"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#FF6B58] hover:bg-[#ff8575] disabled:opacity-50 text-white text-[11px] font-bold uppercase tracking-[0.3em] py-5 transition-all duration-300 group overflow-hidden relative"
                        >
                            <div className="relative z-10 flex items-center justify-center gap-2">
                                {isLoading ? "Authenticating..." : "Authorize Login"}
                                {!isLoading && (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                )}
                            </div>
                        </button>
                    </form>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/" className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-600 hover:text-[#FF6B58] transition-colors">
                        ← Return to safety
                    </Link>
                </div>
            </div>
        </div>
    );
}
