"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function OfferingsGrid() {
    const sectionRef = useRef(null);

    // Scroll tracking for horizontal movement
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    // Horizontal transform for cards
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-220%"]);

    // Background and text color transitions
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

    const accentOpacity = useTransform(
        scrollYProgress,
        [0, 0.3, 0.7, 1],
        [1, 0.8, 0.8, 1]
    );

    const offerings = [
        {
            number: "01",
            title: "Career Discovery",
            subtitle: "workshops",
            description:
                "Explore diverse career paths through immersive workshops",
            image:
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
        },
        {
            number: "02",
            title: "Podcast Shoots",
            subtitle: "with industry experts",
            description:
                "Record conversations with leaders from various industries",
            image:
                "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
        },
        {
            number: "03",
            title: "1:1 Mentorship",
            subtitle: "with top professionals",
            description:
                "Personal guidance from experienced industry veterans",
            image:
                "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
        },
        {
            number: "04",
            title: "Academic Excellence",
            subtitle: "scientifically built",
            description:
                "Boost your scores with proven methodologies",
            image:
                "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
        },
        {
            number: "05",
            title: "Forge Bonds",
            subtitle: "with driven teens",
            description:
                "Connect with like-minded peers on similar journeys",
            image:
                "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
        },
        {
            number: "06",
            title: "Harvard & UCL",
            subtitle: "weekly mentorship",
            description:
                "Learn from mentors at world's top universities",
            image:
                "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
        },
        {
            number: "07",
            title: "Career Counsellor",
            subtitle: "monthly meetings",
            description:
                "Regular sessions to align your goals and progress",
            image:
                "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
        },
        {
            number: "08",
            title: "Build Resilience",
            subtitle: "face challenges",
            description:
                "Develop mental strength through real-world experiences",
            image:
                "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800&q=80",
        },
        {
            number: "09",
            title: "Build Empathy",
            subtitle: "connect deeply",
            description:
                "Understand perspectives and build emotional intelligence",
            image:
                "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
        },
    ];

    return (
        <motion.section ref={sectionRef} className="relative" style={{ height: "300vh" }}>
            <motion.div
                className="sticky top-0 h-screen overflow-hidden flex flex-col"
                style={{ backgroundColor }}
            >
                {/* Section header */}
                <div className="absolute top-0 left-0 right-0 z-20 pt-24 pb-8 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto">
                        <motion.span
                            className="text-[#CDFE04] text-sm tracking-[0.3em] uppercase block mb-4"
                            style={{ opacity: accentOpacity }}
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

                {/* Horizontal scroll container */}
                <div className="flex-1 flex items-center overflow-hidden">
                    <motion.div
                        className="flex gap-6 md:gap-8 pl-6 md:pl-12 pr-[20vw]"
                        style={{ x }}
                    >
                        {offerings.map((offering, index) => (
                            <motion.div
                                key={index}
                                className="shrink-0 w-[70vw] sm:w-[50vw] md:w-[35vw] lg:w-[28vw] h-[45vh] md:h-[50vh] relative group"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                            >
                                <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg shadow-black/30">
                                    <motion.img
                                        src={offering.image}
                                        alt={offering.title}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
                                    <div className="absolute top-4 right-4 md:top-6 md:right-6 text-[#CDFE04] text-5xl md:text-6xl font-black opacity-50">
                                        {offering.number}
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                                        <span className="text-[#CDFE04] text-xs uppercase tracking-widest">
                                            {offering.subtitle}
                                        </span>
                                        <h3 className="text-white text-xl md:text-2xl font-bold mt-1 md:mt-2">
                                            {offering.title}
                                        </h3>
                                        <motion.p
                                            className="text-gray-300 text-xs md:text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileHover={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {offering.description}
                                        </motion.p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        <div className="shrink-0 w-12 md:w-24" />
                    </motion.div>
                </div>

                {/* Progress indicator */}
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

                {/* Scroll hint */}
                <motion.div
                    className="absolute bottom-12 right-12 hidden md:flex items-center gap-2"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <motion.span
                        className="text-xs uppercase tracking-widest"
                        style={{ color: textColor }}
                    >
                        Scroll
                    </motion.span>
                    <svg
                        className="w-6 h-6 text-[#CDFE04]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
