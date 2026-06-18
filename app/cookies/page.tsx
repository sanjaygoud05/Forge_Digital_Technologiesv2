
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CookiesPage() {
    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-[#FF6B58] selection:text-white">
            <div className="sticky top-0 z-[100] w-full flex flex-col">
                <TopBanner />
                <Navbar />
            </div>

            <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
                <h1 className="text-4xl font-light tracking-tight mb-8">Cookie Policy</h1>
                <p className="text-sm text-zinc-500 mb-12">Last Updated: February 2026</p>

                <div className="flex flex-col gap-10 text-zinc-700 font-light leading-relaxed">
                    <div>
                        <h2 className="text-xl font-medium text-black mb-4">1. What Are Cookies?</h2>
                        <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-medium text-black mb-4">2. How We Use Cookies</h2>
                        <p>We use cookies for several reasons:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li><strong>Strictly Necessary Cookies:</strong> These are essential for you to browse the website and use its features, such as accessing secure areas of the site.</li>
                            <li><strong>Performance Cookies:</strong> These cookies collect information about how you use our website, for instance which pages you go to most often. These cookies don't collect information that identifies you.</li>
                            <li><strong>Functionality Cookies:</strong> These cookies allow the website to remember choices you make (such as your user name, language or the region you are in) and provide enhanced, more personal features.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-medium text-black mb-4">3. Managing Cookies</h2>
                        <p>Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-medium text-black mb-4">4. Changes to This Cookie Policy</h2>
                        <p>We may update our Cookie Policy from time to time. We encourage you to review this Cookie Policy frequently to be informed of how we are protecting your information.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
