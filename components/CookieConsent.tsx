
"use client";

import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        setIsVisible(false);
        localStorage.setItem('cookie-consent', 'true');
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[400px] z-[99999] bg-[#050505] border border-zinc-800 p-6 shadow-2xl rounded-sm animate-in slide-in-from-bottom duration-500">
            <h3 className="text-white text-lg mb-2 font-light">We value your privacy</h3>
            <p className="text-zinc-400 text-xs font-light leading-relaxed mb-6">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
            <div className="flex gap-3">
                <button
                    onClick={handleAccept}
                    className="flex-1 bg-[#FF6B58] hover:bg-[#ff8575] text-white text-[10px] font-bold uppercase tracking-widest py-3 rounded-sm transition-all"
                >
                    Accept All
                </button>
                <button
                    onClick={() => setIsVisible(false)}
                    className="flex-1 bg-transparent border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-white text-[10px] font-bold uppercase tracking-widest py-3 rounded-sm transition-all"
                >
                    Decline
                </button>
            </div>

            <a href="/cookies" className="block mt-4 text-center text-[10px] text-zinc-600 hover:text-zinc-400 border-b border-transparent hover:border-zinc-600 w-fit mx-auto transition-all">
                Read Cookie Policy
            </a>
        </div>
    );
};

export default CookieConsent;
