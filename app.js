class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('App Error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-10 text-center text-red-500">
                    <h2 className="text-xl font-bold mb-2">Something went wrong.</h2>
                    <p>Please check the console for details.</p>
                </div>
            );
        }
        return this.props.children;
    }
}

const SERVICES_DATA = [
    { 
        id: "web-development",
        icon: "icon-code", 
        title: "WEB DEVELOPMENT", 
        desc: "Responsive, fast and scalable websites tailored to your business needs.",
        tagline: "Modern. Fast. Reliable.",
        taglineIcon: "icon-arrow-right-circle",
        details: [
            "Cutting-edge Next.js & React architectures",
            "Pixel-perfect, performance-obsessed design",
            "Conversion-optimized user journeys",
            "Scalable infrastructure that grows with you"
        ]
    },
    { 
        id: "saas-development",
        icon: "icon-monitor", 
        title: "SAAS PRODUCT DEVELOPMENT", 
        desc: "We build powerful SaaS products with user-friendly dashboards and automation.",
        tagline: "From Idea to Scalable Product.",
        taglineIcon: "icon-arrow-right-circle",
        details: [
            "Secure, multi-tenant cloud ecosystems",
            "Frictionless subscription management",
            "Real-time intelligence dashboards",
            "Automated customer lifecycle workflows"
        ]
    },
    { 
        id: "uiux-design",
        icon: "icon-pen-tool", 
        title: "UI/UX DESIGN", 
        desc: "Beautiful, intuitive and engaging designs that provide exceptional user experience.",
        tagline: "Design that Connects.",
        taglineIcon: "icon-arrow-right-circle",
        details: [
            "Strategic user behavior research",
            "High-conversion interface prototyping",
            "World-class visual brand identities",
            "Rigorous usability and accessibility audits"
        ]
    },
    { 
        id: "startup-solutions",
        icon: "icon-rocket", 
        title: "STARTUP TECH SOLUTIONS", 
        desc: "From MVP to full-scale products, we help startups build, launch and grow successfully.",
        tagline: "Build. Launch. Scale.",
        taglineIcon: "icon-arrow-right-circle",
        details: [
            "Hyper-fast MVP development cycles",
            "Strategic product roadmap engineering",
            "Elite tech stack consultation",
            "Agile execution for rapid market entry"
        ]
    },
    { 
        id: "automation",
        icon: "icon-settings", 
        title: "AUTOMATION & INTERNAL TOOLS", 
        desc: "Custom tools and automation systems to streamline your processes and save time.",
        tagline: "Automate. Optimize. Grow.",
        taglineIcon: "icon-arrow-right-circle",
        details: [
            "Custom-engineered workflow automation",
            "Seamless API & third-party integrations",
            "Proprietary internal efficiency tools",
            "Automated data intelligence pipelines"
        ]
    },
    { 
        id: "hosting-deployment",
        icon: "icon-server", 
        title: "HOSTING & DEPLOYMENT", 
        desc: "Secure hosting, smooth deployment and ongoing maintenance – we handle it all.",
        tagline: "Deploy. Maintain. Support.",
        taglineIcon: "icon-arrow-right-circle",
        details: [
            "Architectural cloud setup (AWS/Vercel)",
            "Automated CI/CD deployment pipelines",
            "Zero-downtime monitoring & security",
            "Redundant backup & failover protocols"
        ]
    }
];

window.SERVICES_DATA = SERVICES_DATA;

const PROJECTS_DATA = [
    { 
        id: "student-forge",
        name: "Student Forge", 
        category: "Student Innovation", 
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
        desc: "Empowering Next-Gen Innovators with cutting-edge educational tools and resources.", 
        fullDesc: "Student Forge is a revolutionary platform designed to empower the next generation of innovators. We provide cutting-edge educational tools, resources, and mentorship programs that help students transform their ideas into reality.",
        link: "https://www.studentforge.in/",
        tech: "React, Node.js, MongoDB, Tailwind CSS",
        type: "Educational Platform",
        status: "Live & Active",
        features: [
            "Interactive learning modules",
            "Mentorship program integration",
            "Project collaboration tools",
            "Skill tracking dashboard",
            "Career guidance resources",
            "Community networking features"
        ]
    },
    { 
        id: "student-forge-platform",
        name: "Student Forge Platform", 
        category: "EdTech Platform", 
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
        desc: "A comprehensive platform connecting students with opportunities and resources.", 
        fullDesc: "The Student Forge Platform serves as a comprehensive ecosystem connecting students with educational opportunities, internships, and resources. It bridges the gap between academic learning and real-world application.",
        link: "https://share.google/pAGr2bwpfjKHt5sE8",
        tech: "Next.js, PostgreSQL, Redis, AWS",
        type: "SaaS Platform",
        status: "Live & Active",
        features: [
            "Opportunity matching algorithm",
            "Real-time collaboration tools",
            "Integrated messaging system",
            "Progress analytics dashboard",
            "Automated application tracking",
            "Resource library access"
        ]
    },
    { 
        id: "assure-fund",
        name: "assure.fund", 
        category: "Financial Services", 
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
        desc: "Secure and reliable investment platform for modern financial planning.", 
        fullDesc: "assure.fund is a secure and reliable investment platform designed for modern financial planning. We provide users with intelligent investment tools, portfolio management, and expert financial guidance.",
        link: "#",
        tech: "React, Python, Django, Stripe API",
        type: "Fintech Application",
        status: "In Development",
        features: [
            "AI-powered investment recommendations",
            "Real-time portfolio tracking",
            "Risk assessment tools",
            "Automated rebalancing",
            "Tax optimization features",
            "Secure payment integration"
        ]
    },
    { 
        id: "larwa",
        name: "Larwa", 
        category: "Digital Solutions", 
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
        desc: "Innovative digital solutions for modern businesses and organizations.", 
        fullDesc: "Larwa provides innovative digital solutions tailored for modern businesses and organizations. We focus on delivering cutting-edge technology that drives growth and efficiency.",
        link: "https://larwa.org",
        tech: "React, TypeScript, Node.js, AWS",
        type: "Digital Agency",
        status: "Live & Active",
        features: [
            "Custom web development",
            "Mobile app solutions",
            "Cloud infrastructure",
            "Digital transformation consulting",
            "UI/UX design services",
            "API integration"
        ]
    }
];

window.PROJECTS_DATA = PROJECTS_DATA;

function App() {
    const [currentPage, setCurrentPage] = React.useState('home');
    const [activeService, setActiveService] = React.useState(null);
    const [activeProject, setActiveProject] = React.useState(null);

    React.useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash === '#about-page') {
                setCurrentPage('about');
                window.scrollTo(0, 0);
            } else if (hash === '#contact-page') {
                setCurrentPage('contact');
                window.scrollTo(0, 0);
            } else if (hash === '#services-page') {
                setCurrentPage('services-list');
                window.scrollTo(0, 0);
            } else if (hash === '#work-page') {
                setCurrentPage('work-page');
                window.scrollTo(0, 0);
            } else if (hash.startsWith('#service-')) {
                const serviceId = hash.replace('#service-', '');
                const service = SERVICES_DATA.find(s => s.id === serviceId);
                if (service) {
                    setActiveService(service);
                    setCurrentPage('service-detail');
                    window.scrollTo(0, 0);
                } else {
                    setCurrentPage('home');
                }
            } else if (hash.startsWith('#project-')) {
                const projectId = hash.replace('#project-', '');
                const project = PROJECTS_DATA.find(p => p.id === projectId);
                if (project) {
                    setActiveProject(project);
                    setCurrentPage('project-detail');
                    window.scrollTo(0, 0);
                } else {
                    setCurrentPage('home');
                }
            } else {
                setCurrentPage('home');
                // Allow browser to scroll to standard hashes like #services
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // check on initial load

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    React.useEffect(() => {
        const revealElements = () => {
            const reveals = document.querySelectorAll('.reveal');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, {
                threshold: 0.15 // Trigger when 15% of element is visible
            });

            reveals.forEach(el => observer.observe(el));
        };

        // Delay slightly to ensure components are rendered
        setTimeout(revealElements, 100);
    }, [currentPage]); // re-run on page change

    return (
        <ErrorBoundary>
            <div className="min-h-screen flex flex-col relative selection:bg-purple-500/30">
                <Navbar />
                
                {currentPage === 'about' ? (
                    <main className="flex-grow">
                        <AboutPage />
                    </main>
                ) : currentPage === 'contact' ? (
                    <main className="flex-grow">
                        <ContactPage />
                    </main>
                ) : currentPage === 'services-list' ? (
                    <main className="flex-grow">
                        <Services isPage={true} />
                    </main>
                ) : currentPage === 'work-page' ? (
                    <main className="flex-grow">
                        <PortfolioPage />
                    </main>
                ) : currentPage === 'service-detail' ? (
                    <main className="flex-grow">
                        <ServiceDetailPage service={activeService} />
                    </main>
                ) : currentPage === 'project-detail' ? (
                    <main className="flex-grow">
                        <ProjectDetailPage project={activeProject} />
                    </main>
                ) : (
                    <main className="flex-grow">
                        <Hero />
                        <Services />
                        <About />
                        <Process />
                        <Portfolio />
                        <Features />
                        <CTA />
                    </main>
                )}
                
                <Footer />
                
                {/* Global WhatsApp FAB - Clean Style */}
                <a
                    href="https://wa.me/916304218064?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                    target="_blank"
                    rel="noreferrer"
                    className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[100] group transition-transform hover:scale-110"
                    aria-label="Chat on WhatsApp"
                >
                    <div className="relative w-13 h-13 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl">
                        <svg 
                            viewBox="0 0 24 24" 
                            className="w-7 h-7 md:w-9 md:h-9 fill-white"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.123.543 4.197 1.574 6.04L0 24l6.117-1.605a11.787 11.787 0 005.931 1.606h.005c6.632 0 12.032-5.396 12.034-12.03a11.766 11.766 0 00-3.517-8.497z"/>
                        </svg>
                    </div>
                </a>
            </div>
        </ErrorBoundary>
    );
}

// Initialize the application
const initApp = () => {
    const container = document.getElementById('root');
    if (container) {
        const root = ReactDOM.createRoot(container);
        root.render(<App />);
    } else {
        console.error('Root element not found');
    }
};

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initApp();
} else {
    window.addEventListener('load', initApp);
}