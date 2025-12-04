import React, { useEffect } from 'react';
import CustomCursor from '../components/alcovia/CustomCursor';
import HeroSection from '../components/alcovia/HeroSection';
import ManifestoSection from '../components/alcovia/ManifestoSection';
import OfferingsGrid from '../components/alcovia/OfferingsGrid';
import SchoolToggle from '../components/alcovia/SchoolToggle';
import SocialsFooter from '../components/alcovia/SocialsFooter';

export default function Home() {
    useEffect(() => {
        document.body.style.cursor = 'none';
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => {
            document.body.style.cursor = 'auto';
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return (
        <div className="bg-[#1a1a1a] min-h-screen overflow-x-hidden">
            <CustomCursor />

            <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <a href="/" className="text-[#CDFE04] text-xl font-black tracking-wider hover:opacity-80 transition-opacity cursor-pointer">
                        ALCOVIA
                    </a>
                    <div className="hidden md:flex items-center gap-8">
                        <a href="https://alcovia.life/about-us" target="_blank" rel="noopener noreferrer" className="text-white text-sm tracking-wider hover:text-[#CDFE04] transition-colors cursor-pointer">
                            ABOUT
                        </a>
                        <a href="https://alcovia.life/contact-us" target="_blank" rel="noopener noreferrer" className="text-white text-sm tracking-wider hover:text-[#CDFE04] transition-colors cursor-pointer">
                            CONTACT
                        </a>
                    </div>
                    <a
                        href="https://alcovia.life/contact-us"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#CDFE04] text-black px-6 py-3 rounded-full text-sm font-bold tracking-wider hover:bg-white transition-colors cursor-pointer"
                    >
                        JOIN NOW
                    </a>
                </div>
            </nav>

            <HeroSection />
            <ManifestoSection />
            <OfferingsGrid />
            <SchoolToggle />
            <SocialsFooter />
        </div>
    );
}
