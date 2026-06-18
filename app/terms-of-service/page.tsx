
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-[#FF6B58] selection:text-white">
            <div className="sticky top-0 z-[100] w-full flex flex-col">
                <TopBanner />
                <Navbar />
            </div>

            <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
                <h1 className="text-4xl font-light tracking-tight mb-8">Terms of Service</h1>
                <p className="text-sm text-zinc-500 mb-12">Last Updated: February 2026</p>

                <div className="flex flex-col gap-10 text-zinc-700 font-light leading-relaxed">
                    <div>
                        <h2 className="text-xl font-medium text-black mb-4">1. Agreement to Terms</h2>
                        <p>These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Forge Digital Technologies ("Company", "we", "us", or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-medium text-black mb-4">2. Intellectual Property Rights</h2>
                        <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-medium text-black mb-4">3. User Representations</h2>
                        <p>By using the Site, you represent and warrant that:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>All registration information you submit will be true, accurate, current, and complete.</li>
                            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                            <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                            <li>You are not a minor in the jurisdiction in which you reside.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-medium text-black mb-4">4. Limitations of Liability</h2>
                        <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-medium text-black mb-4">5. Governing Law</h2>
                        <p>These Terms shall be governed by and defined following the laws of India. Forge Digital Technologies and yourself irrevocably consent that the courts of Hyderabad, India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
