import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export default function ManifestoSection() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const isInView = useInView(textRef, { once: false, margin: "-100px" });
    const [scrollYProgress, setScrollYProgress] = useState(null);

    useEffect(() => {
        if (sectionRef.current) {
            const { scrollYProgress: progress } = useScroll({
                target: sectionRef,
                offset: ["start end", "end start"],
            });
            setScrollYProgress(progress);
        }
    }, []);

    if (!scrollYProgress) return null;

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const offerings = [
        { title: "MENTORSHIP", subtitle: "from professionals" },
        { title: "SELF", subtitle: "Discovery" },
        { title: "BUILD", subtitle: "Leadership" },
        { title: "MEET", subtitle: "Future builders" },
    ];

    const words =
        "Unprecedented Learnings, Failing regularly, building with friends, while being on a journey of self discovery. Get on a legacy building journey today, to build the future of tomorrow.".split(
            " "
        );

    return (
        <section ref={sectionRef} className="relative bg-[#1a1a1a] py-32 overflow-hidden">
            <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-5"
                style={{ y }}
            >
                <svg
                    width="600"
                    height="300"
                    viewBox="0 0 600 300"
                    className="text-[#CDFE04]"
                >
                    <path
                        d="M50 150 Q100 50 200 100 Q300 150 350 80 Q400 10 450 100 Q500 190 550 150"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />
                </svg>
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-[#CDFE04] text-sm tracking-[0.3em] uppercase">
                        The Alcovia Way
                    </span>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-32">
                    {offerings.map((offering, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="text-center group"
                        >
                            <motion.div
                                className="relative mb-6"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <div className="w-24 h-24 md:w-28 md:h-28 mx-auto bg-[#CDFE04] rounded-2xl flex items-center justify-center group-hover:rounded-3xl transition-all duration-500 shadow-lg shadow-[#CDFE04]/20">
                                    <span className="text-black text-3xl md:text-4xl font-black">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>
                            </motion.div>
                            <h3 className="text-[#CDFE04] text-xl md:text-2xl font-black tracking-wide uppercase">
                                {offering.title}
                            </h3>
                            <p className="text-gray-400 text-sm mt-2 font-medium">
                                {offering.subtitle}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div ref={textRef} className="max-w-5xl mx-auto">
                    <motion.p className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight text-center md:text-justify uppercase tracking-tight">
                        {words.map((word, index) => {
                            const highlightWords = [
                                "Unprecedented",
                                "Failing",
                                "self",
                                "discovery.",
                                "legacy",
                                "future",
                                "tomorrow.",
                            ];
                            const isHighlight = highlightWords.some((hw) =>
                                word.toLowerCase().includes(hw.toLowerCase())
                            );

                            return (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.05,
                                        ease: "easeOut",
                                    }}
                                    className={`inline-block mr-3 ${isHighlight ? "text-[#CDFE04]" : "text-white"
                                        }`}
                                >
                                    {word}
                                </motion.span>
                            );
                        })}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="mt-20 h-px bg-linear-to-r from-transparent via-[#CDFE04]/50 to-transparent"
                />
            </div>
        </section>
    );
}
