"use client";
import React, { useRef, useLayoutEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function OfferingsGrid() {
    const sectionRef = useRef(null);
    const [scrollWidth, setScrollWidth] = useState(0);

    useLayoutEffect(() => {
        // Calculate total scrollable width
        const section = sectionRef.current;
        if (!section) return;
        const totalWidth = section.scrollWidth - window.innerWidth;
        setScrollWidth(totalWidth > 0 ? totalWidth : window.innerWidth);
    }, []);

    // Bind framer-motion scroll tracking
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    // Smooth horizontal movement mapped to scroll progress
    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${scrollWidth}px`]);

    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.3, 0.7, 1],
        ["#0f0f0f", "#f5f5f0", "#f5f5f0", "#1a1a1a"]
    );

    const textColor = useTransform(
        scrollYProgress,
        [0, 0.3, 0.7, 1],
        ["#ffffff", "#1a1a1a", "#1a1a1a", "#ffffff"]
    );

    const offerings = [
        {
            number: "01",
            title: "Career Discovery",
            subtitle: "workshops",
            description:
                "Explore diverse career paths through immersive workshops",
            image:
                "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=1200&q=80&auto=format&fit=crop",
        },
        {
            number: "02",
            title: "Podcast Shoots",
            subtitle: "with industry experts",
            description: "Record conversations with leaders from various industries",
            image:
                "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80&auto=format&fit=crop",
        },
        {
            number: "03",
            title: "1:1 Mentorship",
            subtitle: "with top professionals",
            description: "Personal guidance from experienced industry veterans",
            image:
                "https://images.unsplash.com/photo-1498079022511-d15614cb1c02?w=1200&q=80&auto=format&fit=crop",
        },
        {
            number: "04",
            title: "Academic Excellence",
            subtitle: "scientifically built",
            description: "Boost your scores with proven methodologies",
            image:
                "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&q=80&auto=format&fit=crop",
        },
        {
            number: "05",
            title: "Forge Bonds",
            subtitle: "with driven teens",
            description: "Connect with like-minded peers on similar journeys",
            image:
                "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80&auto=format&fit=crop",
        },
        {
            number: "06",
            title: "Harvard & UCL",
            subtitle: "weekly mentorship",
            description: "Learn from mentors at world's top universities",
            image:
                "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80&auto=format&fit=crop",
        },
        {
            number: "07",
            title: "Career Counsellor",
            subtitle: "monthly meetings",
            description: "Regular sessions to align your goals and progress",
            image:
                "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&auto=format&fit=crop",
        },
        {
            number: "08",
            title: "Build Resilience",
            subtitle: "face challenges",
            description: "Develop mental strength through real-world experiences",
            image:
                "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80&auto=format&fit=crop",
        },
        {
            number: "09",
            title: "Build Empathy",
            subtitle: "connect deeply",
            description:
                "Understand perspectives and build emotional intelligence",
            image:
                "https://images.unsplash.com/photo-1484882917165-4f72e360b39f?w=1200&q=80&auto=format&fit=crop",
        },
    ];

    return (
        <motion.section ref={sectionRef} className="relative" style={{ height: `${offerings.length * 30}vh` }}>
            <motion.div
                className="sticky top-0 h-screen overflow-hidden flex flex-col"
                style={{ backgroundColor }}
            >
                {/* Section Header */}
                <div className="absolute top-0 left-0 right-0 z-20 pt-24 pb-8 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto">
                        <motion.span
                            className="text-[#CDFE04] text-sm tracking-[0.3em] uppercase block mb-4"
                        >
                            What We Offer
                        </motion.span>
                        <motion.h2
                            className="text-3xl md:text-5xl lg:text-6xl font-black"
                            style={{ color: textColor }}
                        >
                            THE <span className="text-[#CDFE04]">ALCOVIA</span> EXPERIENCE
                        </motion.h2>
                    </div>
                </div>

                {/* Horizontal Cards */}
                <div className="flex-1 flex items-center overflow-hidden">
                    <motion.div
                        className="flex gap-6 md:gap-8 pl-6 md:pl-12 pr-[20vw]"
                        style={{ x }}
                    >
                        {offerings.map((offer, index) => (
                            <motion.div
                                key={index}
                                className="shrink-0 w-[70vw] sm:w-[50vw] md:w-[35vw] lg:w-[28vw] h-[50vh] relative group"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg shadow-black/30">
                                    <img
                                        src={offer.image}
                                        alt={offer.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
                                    <div className="absolute top-4 right-4 md:top-6 md:right-6 text-[#CDFE04] text-6xl font-black opacity-50">
                                        {offer.number}
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <span className="text-[#CDFE04] text-xs uppercase tracking-widest">
                                            {offer.subtitle}
                                        </span>
                                        <h3 className="text-white text-2xl font-bold mt-1">
                                            {offer.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            {offer.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        <div className="shrink-0 w-12 md:w-24" />
                    </motion.div>
                </div>

                {/* Scroll progress */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4">
                    <span className="text-[#CDFE04] text-sm font-bold">01</span>
                    <div className="w-32 md:w-48 h-1 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-[#CDFE04] origin-left"
                            style={{ scaleX: scrollYProgress }}
                        />
                    </div>
                    <motion.span className="text-sm font-bold" style={{ color: textColor }}>
                        09
                    </motion.span>
                </div>
            </motion.div>
        </motion.section>
    );
}
