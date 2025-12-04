import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
    const [isLoaded, setIsLoaded] = useState(false);
    const { scrollY } = useScroll();

    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className="relative min-h-screen bg-[#1a1a1a] overflow-hidden flex items-center justify-center">
            <motion.div
                className="absolute inset-0 opacity-5"
                style={{ y }}
            >
                <svg width="100%" height="100%" className="absolute inset-0">
                    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#CDFE04" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </motion.div>

            <motion.div
                className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#CDFE04]/10 blur-3xl"
                animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-32 right-20 w-48 h-48 rounded-full bg-[#CDFE04]/5 blur-3xl"
                animate={{
                    x: [0, -40, 0],
                    y: [0, 30, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="relative z-10 text-center px-6 md:px-12 max-w-6xl mx-auto"
                style={{ opacity }}
            >
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8"
                >
                    <h2 className="text-[#CDFE04] text-xl md:text-2xl tracking-[0.3em] font-light">
                        ALCOVIA
                    </h2>
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                >
                    <span className="block">Dare to become</span>
                    <motion.span
                        className="block text-[#CDFE04]"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    >
                        everything
                    </motion.span>
                    <span className="block">you were born to be.</span>
                </motion.h1>

                <motion.p
                    className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light tracking-wide"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                >
                    Empowering teenagers to discover their potential through mentorship,
                    self-discovery, and transformative experiences.
                </motion.p>

                <motion.div
                    className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={isLoaded ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    <motion.div
                        className="w-6 h-10 border-2 border-[#CDFE04]/50 rounded-full flex justify-center pt-2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <motion.div
                            className="w-1.5 h-3 bg-[#CDFE04] rounded-full"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div
                className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block"
                initial={{ opacity: 0, x: -50 }}
                animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 1 }}
            >
                <div className="text-[#CDFE04]/30 text-xs tracking-widest -rotate-90 whitespace-nowrap">
                    AHEAD OF THE CURVE
                </div>
            </motion.div>

            <motion.div
                className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block"
                initial={{ opacity: 0, x: 50 }}
                animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 1 }}
            >
                <div className="text-[#CDFE04]/30 text-xs tracking-widest rotate-90 whitespace-nowrap">
                    SINCE 2024
                </div>
            </motion.div>
        </section>
    );
}
