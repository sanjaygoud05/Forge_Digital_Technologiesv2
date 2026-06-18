
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-[#FF6B58] selection:text-white">
            <div className="sticky top-0 z-[100] w-full flex flex-col">
                <TopBanner />
                <Navbar />
            </div>

            <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
                <h1 className="text-4xl font-light tracking-tight mb-8">Privacy Policy</h1>
                <p className="text-sm text-zinc-500 mb-12">Last Updated: February 2026</p>

                <div className="flex flex-col gap-10 text-zinc-700 font-light leading-relaxed">
                    <div>
                        <h2 className="text-xl font-medium text-black mb-4">1. Introduction</h2>
                        <p>Forge Digital Technologies ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-medium text-black mb-4">2. Information We Collect</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
                            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-medium text-black mb-4">3. Use of Your Information</h2>
                        <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>Create and manage your account.</li>
                            <li>Compile anonymous statistical data and analysis for use internally.</li>
                            <li>Email you regarding your account or order.</li>
                            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-medium text-black mb-4">4. Contact Us</h2>
                        <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                        <p className="mt-2 font-medium">Forge Digital Technologies</p>
                        <p>Hyderabad, India</p>
                        <p>Email: info@forgedigitaltechnologies.com</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
