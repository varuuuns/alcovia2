import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SchoolToggle() {
    const [activeState, setActiveState] = useState('school');

    const content = {
        school: {
            title: "AT SCHOOL",
            subtitle: "How Alcovia helps students ace school.",
            features: [
                "Academic excellence through scientifically-backed methods",
                "Study techniques from Harvard & UCL mentors",
                "Time management & productivity skills",
                "Subject-specific expert guidance",
                "Exam preparation strategies"
            ],
            color: "#CDFE04"
        },
        outside: {
            title: "OUTSIDE SCHOOL",
            subtitle: "How Alcovia fulfills its mission of building differentiation for each Alcovian.",
            features: [
                "Career discovery workshops & industry exposure",
                "Leadership & soft skills development",
                "Podcast shoots with industry experts",
                "Entrepreneurial mindset building",
                "Networking with like-minded peers"
            ],
            color: "#CDFE04"
        }
    };

    const active = content[activeState];

    return (
        <section className="relative bg-[#1a1a1a] py-32 overflow-hidden">
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
                    animate={{
                        backgroundColor: activeState === 'school'
                            ? 'rgba(205, 254, 4, 0.05)'
                            : 'rgba(205, 254, 4, 0.03)',
                        x: activeState === 'school' ? 0 : 100
                    }}
                    transition={{ duration: 0.8 }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#CDFE04] text-sm tracking-[0.3em] uppercase">
                        Two Worlds, One Journey
                    </span>
                </motion.div>

                <div className="flex justify-center mb-16">
                    <div className="relative bg-[#2d2d2d] rounded-full p-2 flex gap-2">
                        <motion.div
                            className="absolute h-[calc(100%-16px)] top-2 bg-[#CDFE04] rounded-full"
                            animate={{
                                left: activeState === 'school' ? 8 : '50%',
                                width: activeState === 'school' ? 'calc(50% - 8px)' : 'calc(50% - 8px)'
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                        <button
                            onClick={() => setActiveState('school')}
                            className={`relative z-10 px-8 py-4 rounded-full text-sm font-bold tracking-wider transition-colors duration-300 ${activeState === 'school' ? 'text-black' : 'text-white'
                                }`}
                        >
                            AT SCHOOL
                        </button>
                        <button
                            onClick={() => setActiveState('outside')}
                            className={`relative z-10 px-8 py-4 rounded-full text-sm font-bold tracking-wider transition-colors duration-300 ${activeState === 'outside' ? 'text-black' : 'text-white'
                                }`}
                        >
                            OUTSIDE SCHOOL
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeState}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
                                <span className="text-[#CDFE04]/20 block">
                                    {activeState === 'school' ? 'ON' : 'OFF'}
                                </span>
                                <span className="text-white block -mt-4 md:-mt-8">
                                    {activeState === 'school' ? 'TRACK' : 'TRACK'}
                                </span>
                            </h2>

                            <motion.p
                                className="text-xl md:text-2xl text-gray-300 mt-8 font-light max-w-md"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {active.subtitle}
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeState}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-4"
                        >
                            {active.features.map((feature, index) => (
                                <motion.div
                                    key={feature}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="w-8 h-8 rounded-full border border-[#CDFE04]/30 flex items-center justify-center shrink-0 group-hover:border-[#CDFE04] group-hover:bg-[#CDFE04]/10 transition-all duration-300">
                                        <svg
                                            className="w-4 h-4 text-[#CDFE04]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-gray-300 text-lg pt-1 group-hover:text-white transition-colors duration-300">
                                        {feature}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <motion.div
                    className="mt-20 relative h-64 md:h-80 rounded-3xl overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeState}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.6 }}
                            className="absolute inset-0"
                        >
                            <img
                                src={activeState === 'school'
                                    ? "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
                                    : "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80"
                                }
                                alt={activeState === 'school' ? 'Academic setting' : 'Outside activities'}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-r from-[#1a1a1a] via-transparent to-[#1a1a1a]" />
                            <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a] via-transparent to-transparent" />

                            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                                <span className="text-[#CDFE04] text-xs uppercase tracking-widest">
                                    {activeState === 'school' ? 'On Track' : 'Off Track'}
                                </span>
                                <h4 className="text-white text-2xl md:text-3xl font-bold mt-1">
                                    {activeState === 'school' ? 'At School' : 'Outside School'}
                                </h4>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}