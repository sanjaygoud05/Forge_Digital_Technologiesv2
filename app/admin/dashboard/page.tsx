
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Career } from "@prisma/client";
import Link from "next/link";

export default function AdminDashboard() {
    const router = useRouter();
    const [careers, setCareers] = useState<Career[]>([]);
    const [applications, setApplications] = useState<any[]>([]);
    const [contactSubmissions, setContactSubmissions] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<"positions" | "applications" | "contact">("positions");
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        location: "",
        jobType: "",
        experience: "",
        salary: "",
        description: "",
        requirements: "",
        responsibilities: "",
    });

    useEffect(() => {
        if (!document.cookie.includes("admin_auth=true")) {
            router.push("/admin/login");
        } else {
            fetchData();
            setIsLoading(false);
        }
    }, []);

    const fetchData = async () => {
        const [careersRes, appsRes, contactRes] = await Promise.all([
            fetch("/api/careers"),
            fetch("/api/applications"),
            fetch("/api/contact")
        ]);

        if (careersRes.ok) {
            const data = await careersRes.json();
            setCareers(data);
        }
        if (appsRes.ok) {
            const data = await appsRes.json();
            setApplications(data);
        }
        if (contactRes.ok) {
            const data = await contactRes.json();
            setContactSubmissions(data);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this position?")) return;
        const res = await fetch(`/api/careers/${id}`, { method: "DELETE" });
        if (res.ok) fetchData();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch("/api/careers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            alert("Position published successfully!");
            setFormData({
                title: "",
                slug: "",
                location: "",
                jobType: "",
                experience: "",
                salary: "",
                description: "",
                requirements: "",
                responsibilities: "",
            });
            fetchData();
        } else {
            alert("Failed to add position");
        }
    };

    if (isLoading) return <div className="min-h-screen bg-[#050505] flex items-center justify-center font-light uppercase tracking-widest text-[#FF6B58] animate-pulse">Initializing...</div>;

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#FF6B58]">

            
            <nav className="border-b border-white/5 bg-[#050505]/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center">
                            <svg width="20" height="22" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FF6B58]">
                                <path d="M12 0C12 0 4 7 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 12 18 8 15 4L12 0Z" fill="currentColor" />
                                <path d="M12 23C12 23 14 21 14 18C14 16 13 15 12 14" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </Link>
                        <div>
                            <h1 className="text-sm font-medium tracking-tight">Admin Dashboard</h1>
                            <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold">Forge Digital Management</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="hidden lg:flex items-center gap-4 border-l border-white/10 pl-8">
                            <button
                                onClick={() => setActiveTab("positions")}
                                className={`text-[10px] uppercase tracking-widest transition-colors ${activeTab === "positions" ? "text-[#FF6B58]" : "text-zinc-500 hover:text-white"}`}
                            >
                                Positions
                            </button>
                            <button
                                onClick={() => setActiveTab("applications")}
                                className={`text-[10px] uppercase tracking-widest transition-colors ${activeTab === "applications" ? "text-[#FF6B58]" : "text-zinc-500 hover:text-white"}`}
                            >
                                Applications ({applications.length})
                            </button>
                            <button
                                onClick={() => setActiveTab("contact")}
                                className={`text-[10px] uppercase tracking-widest transition-colors ${activeTab === "contact" ? "text-[#FF6B58]" : "text-zinc-500 hover:text-white"}`}
                            >
                                Inquiries ({contactSubmissions.length})
                            </button>
                        </div>
                        <Link href="/careers" className="text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Portal</Link>
                        <button
                            onClick={() => {
                                document.cookie = "admin_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                                router.push("/admin/login");
                            }}
                            className="px-4 py-2 border border-white/10 text-[10px] uppercase tracking-widest hover:bg-white/5 transition-colors"
                        >
                            Out
                        </button>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-6 py-12">
                {activeTab === "positions" && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        
                        <div className="lg:col-span-2 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <section className="bg-white/[0.02] border border-white/5 p-8 backdrop-blur-sm">
                                <div className="mb-8">
                                    <h2 className="text-xl font-light mb-1">Position Manager</h2>
                                    <p className="text-xs text-zinc-500 font-light">Create and publish active job openings to the careers portal.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Position Title</label>
                                            <input
                                                className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:outline-none focus:border-[#FF6B58] transition-colors"
                                                placeholder="e.g. Senior Frontend Engineer"
                                                value={formData.title}
                                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Url Slug</label>
                                            <input
                                                className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:outline-none focus:border-[#FF6B58] transition-colors"
                                                placeholder="e.g. senior-frontend-engineer"
                                                value={formData.slug}
                                                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Location</label>
                                            <input
                                                className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:outline-none focus:border-[#FF6B58] transition-colors"
                                                placeholder="Remote / Hybrid / City"
                                                value={formData.location}
                                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Employment Type</label>
                                            <input
                                                className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:outline-none focus:border-[#FF6B58] transition-colors"
                                                placeholder="Full-time / Contract / Part-time"
                                                value={formData.jobType}
                                                onChange={(e) => setFormData({ ...formData, jobType: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Experience Required</label>
                                            <input
                                                className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:outline-none focus:border-[#FF6B58] transition-colors"
                                                placeholder="e.g. 3-5 years"
                                                value={formData.experience}
                                                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Salary Range</label>
                                            <input
                                                className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:outline-none focus:border-[#FF6B58] transition-colors"
                                                placeholder="e.g. $80k - $120k"
                                                value={formData.salary}
                                                onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Brief Description</label>
                                        <textarea
                                            rows={3}
                                            className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:outline-none focus:border-[#FF6B58] transition-colors resize-none"
                                            placeholder="Hook the candidate with a short summary..."
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Technical Requirements</label>
                                        <textarea
                                            rows={4}
                                            className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:outline-none focus:border-[#FF6B58] transition-colors resize-none"
                                            placeholder="List necessary skills, stack, and certs..."
                                            value={formData.requirements}
                                            onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Primary Responsibilities</label>
                                        <textarea
                                            rows={4}
                                            className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:outline-none focus:border-[#FF6B58] transition-colors resize-none"
                                            placeholder="What will they be doing day-to-day?"
                                            value={formData.responsibilities}
                                            onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#FF6B58] hover:bg-[#ff8575] text-white text-[10px] font-bold uppercase tracking-[0.3em] py-5 font-bold transition-all"
                                    >
                                        Publish Position Live
                                    </button>
                                </form>
                            </section>
                        </div>

                        
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-700">
                            <section className="bg-white/[0.02] border border-white/5 p-8 backdrop-blur-sm h-fit">
                                <div className="mb-8">
                                    <h2 className="text-xl font-light mb-1">Active Roles</h2>
                                    <p className="text-xs text-zinc-500 font-light">{careers.length} openings currently public.</p>
                                </div>

                                <div className="space-y-2">
                                    {careers.map((career: Career) => (
                                        <div key={career.id} className="group p-4 bg-white/5 border border-transparent hover:border-white/10 transition-all">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-sm font-medium pr-8">{career.title}</h3>
                                                <button
                                                    onClick={() => handleDelete(career.id)}
                                                    className="p-1.5 text-zinc-600 hover:text-red-500 transition-colors"
                                                    title="Delete Position"
                                                >
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex gap-3 text-[9px] uppercase tracking-widest font-bold text-zinc-500">
                                                <span>{career.location}</span>
                                                <span className="w-1 h-1 rounded-full bg-zinc-700 mt-1"></span>
                                                <span>{career.jobType}</span>
                                            </div>
                                        </div>
                                    ))}
                                    {careers.length === 0 && (
                                        <div className="py-20 text-center border border-dashed border-white/5">
                                            <p className="text-[10px] uppercase tracking-widest text-zinc-600">No active positions</p>
                                        </div>
                                    )}
                                </div>
                            </section>

                            <section className="bg-white/5 p-6 border border-white/5">
                                <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#FF6B58] mb-3">Quick Navigation</h4>
                                <ul className="space-y-3">
                                    <li><Link href="/careers" className="text-xs text-zinc-400 hover:text-white flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-zinc-600 group-hover:bg-[#FF6B58]"></span> Public Career Portal
                                    </Link></li>
                                    <li><button onClick={() => setActiveTab("applications")} className="text-xs text-zinc-400 hover:text-white flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-zinc-600 group-hover:bg-[#FF6B58]"></span> View {applications.length} Applications
                                    </button></li>
                                    <li><button onClick={() => setActiveTab("contact")} className="text-xs text-zinc-400 hover:text-white flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-zinc-600 group-hover:bg-[#FF6B58]"></span> View {contactSubmissions.length} Inquiries
                                    </button></li>
                                </ul>
                            </section>
                        </div>
                    </div>
                )}

                {activeTab === "applications" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-3xl font-light">Recent Applications</h2>
                                <p className="text-zinc-500 text-sm mt-1">Review candidate submissions for all open positions.</p>
                            </div>
                            <button
                                onClick={() => setActiveTab("positions")}
                                className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#FF6B58] border-b border-[#FF6B58]/30 pb-1"
                            >
                                ← Back to Position Manager
                            </button>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {applications.map((app: any) => (
                                <div key={app.id} className="bg-white/[0.02] border border-white/5 p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-white/10 transition-all">
                                    <div className="space-y-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-3">
                                                <h3 className="text-xl font-light">{app.fullName}</h3>
                                                <span className="px-3 py-1 bg-[#FF6B58]/10 text-[#FF6B58] text-[9px] font-bold uppercase tracking-widest border border-[#FF6B58]/20">
                                                    {app.career.title}
                                                </span>
                                            </div>
                                            <p className="text-zinc-500 text-xs font-light tracking-wide">{app.email} • {app.phone}</p>
                                        </div>
                                        <div className="text-[9px] uppercase tracking-widest text-zinc-600">
                                            Applied: {new Date(app.createdAt).toLocaleDateString()} at {new Date(app.createdAt).toLocaleTimeString()}
                                        </div>
                                    </div>

                                    <a
                                        href={app.resumeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full md:w-auto px-8 py-3 bg-white/5 hover:bg-[#FF6B58] text-[10px] font-bold uppercase tracking-widest transition-all text-center"
                                    >
                                        View Portfolio/Resume
                                    </a>
                                </div>
                            ))}
                            {applications.length === 0 && (
                                <div className="py-40 text-center border border-dashed border-white/5">
                                    <p className="text-[10px] uppercase tracking-widest text-zinc-600">No applications received yet</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {activeTab === "contact" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-3xl font-light">Service Inquiries</h2>
                                <p className="text-zinc-500 text-sm mt-1">Direct communication from potential clients via the contact portal.</p>
                            </div>
                            <button
                                onClick={() => setActiveTab("positions")}
                                className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#FF6B58] border-b border-[#FF6B58]/30 pb-1"
                            >
                                ← Back to Position Manager
                            </button>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {contactSubmissions.map((sub: any) => (
                                <div key={sub.id} className="bg-white/[0.02] border border-white/5 p-8 flex flex-col gap-6 group hover:border-white/10 transition-all">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-4">
                                        <div className="space-y-1">
                                            <h3 className="text-xl font-light tracking-tight">{sub.name}</h3>
                                            <p className="text-sm text-[#FF6B58]/80 font-light">{sub.email}</p>
                                        </div>
                                        <div className="text-[9px] uppercase tracking-[0.3em] font-bold text-zinc-600">
                                            Received: {new Date(sub.createdAt).toLocaleDateString()}
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Subject: {sub.subject}</p>
                                        <p className="text-zinc-400 font-light leading-relaxed whitespace-pre-line text-sm md:text-base italic">
                                            "{sub.message}"
                                        </p>
                                    </div>

                                    <div className="flex justify-end gap-3 pt-4">
                                        <a
                                            href={`mailto:${sub.email}?subject=Re: ${sub.subject}`}
                                            className="px-6 py-2 border border-[#FF6B58]/30 hover:bg-[#FF6B58] text-[10px] font-bold uppercase tracking-widest transition-all"
                                        >
                                            Reply to Inquiry
                                        </a>
                                    </div>
                                </div>
                            ))}
                            {contactSubmissions.length === 0 && (
                                <div className="py-40 text-center border border-dashed border-white/5">
                                    <p className="text-[10px] uppercase tracking-widest text-zinc-600">No service inquiries found</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
