
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function AdDesignMarketingPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500 selection:text-white">
            <div className="sticky top-0 z-[100] w-full flex flex-col">
                <TopBanner />
                <Navbar />
            </div>

            <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
                <p className="text-[#FF6B58] text-[10px] tracking-[0.3em] uppercase font-light mb-6">Service Overview</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-8">
                    Data-driven <br />
                    <span className="text-[#FF6B58] font-extralight">Marketing & Ads.</span>
                </h1>
                <p className="text-zinc-400 font-light text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
                    We combine creativity with analytics to design compelling ad campaigns that convert. From social media to search engines, we help you reach the right audience.
                </p>

                <div className="bg-zinc-900/50 border border-zinc-800 p-12 rounded-sm mb-16">
                    <h3 className="text-2xl font-light text-white mb-6">What we deliver</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-zinc-400 font-light">
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#FF6B58]"></span>Social Media Ad Design</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#FF6B58]"></span>PPC Campaign Management</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#FF6B58]"></span>Brand Strategy</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#FF6B58]"></span>Conversion Rate Optimization</li>
                    </ul>
                </div>

            </section>

            <CTASection />
            <Footer />
        </main>
    );
}
