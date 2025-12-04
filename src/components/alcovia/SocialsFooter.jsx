import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

export default function SocialsFooter() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const socialCards = [
        {
            id: 1,
            platform: "LinkedIn",
            icon: Linkedin,
            url: "https://www.linkedin.com/company/alcovia-life/",
            color: "#0A66C2",
            rotation: -8
        },
        {
            id: 2,
            platform: "Instagram",
            icon: Instagram,
            url: "https://www.instagram.com/alcovia.life/",
            color: "#E4405F",
            rotation: 8
        }
    ];

    return (
        <section className="relative bg-[#0f0f0f] overflow-hidden">
            <div className="py-32">
                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight">
                            WHAT'S UP
                        </h2>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#CDFE04] uppercase tracking-tight">
                            ON SOCIALS
                        </h2>
                    </motion.div>
                </div>

                <div className="max-w-3xl mx-auto px-6 md:px-12">
                    <motion.div
                        className="relative h-[350px] md:h-[400px] flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {socialCards.map((card, index) => {
                            const isHovered = hoveredCard === card.id;
                            const otherHovered = hoveredCard !== null && hoveredCard !== card.id;

                            return (
                                <motion.a
                                    key={card.id}
                                    href__={card.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute w-56 md:w-72 h-72 md:h-80 rounded-3xl overflow-hidden shadow-2xl cursor-pointer border border-white/10"
                                    style={{
                                        zIndex: isHovered ? 50 : 10 - index,
                                        background: `linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)`
                                    }}
                                    initial={{
                                        rotate: card.rotation,
                                        x: card.rotation * 4
                                    }}
                                    animate={{
                                        rotate: isHovered ? 0 : card.rotation,
                                        x: isHovered ? 0 : (otherHovered ? card.rotation * 6 : card.rotation * 4),
                                        y: isHovered ? -20 : 0,
                                        scale: isHovered ? 1.1 : (otherHovered ? 0.95 : 1),
                                        width: isHovered ? "320px" : undefined
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 20
                                    }}
                                    onHoverStart={() => setHoveredCard(card.id)}
                                    onHoverEnd={() => setHoveredCard(null)}
                                >
                                    <div className="relative w-full h-full p-8 flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <div
                                                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                                                style={{ backgroundColor: card.color }}
                                            >
                                                <card.icon className="w-8 h-8 text-white" />
                                            </div>
                                            <motion.div
                                                animate={{
                                                    rotate: isHovered ? 45 : 0,
                                                    scale: isHovered ? 1.2 : 1
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <ArrowUpRight className="w-6 h-6 text-[#CDFE04]" />
                                            </motion.div>
                                        </div>

                                        <div>
                                            <h3 className="text-white text-2xl md:text-3xl font-bold">
                                                {card.platform}
                                            </h3>
                                            <p className="text-gray-400 text-sm mt-2">
                                                Follow us for updates
                                            </p>

                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{
                                                    opacity: isHovered ? 1 : 0,
                                                    height: isHovered ? "auto" : 0
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-4 border-t border-white/10 mt-4">
                                                    <span className="text-[#CDFE04] text-sm font-medium">
                                                        @alcovia.life
                                                    </span>
                                                </div>
                                            </motion.div>
                                        </div>

                                        <div
                                            className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20"
                                            style={{ backgroundColor: card.color }}
                                        />
                                    </div>
                                </motion.a>
                            );
                        })}
                    </motion.div>
                </div>
            </div>

            <footer className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
                        <div className="md:col-span-4">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-[#CDFE04] rounded-lg flex items-center justify-center">
                                    <span className="text-black font-black text-lg">A</span>
                                </div>
                                <span className="text-white text-xl font-bold tracking-wider">
                                    ALCOVIA
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                                Empowering the next generation of leaders through mentorship,
                                self-discovery, and transformative experiences.
                            </p>
                        </div>

                        <div className="md:col-span-2">
                            <h4 className="text-white font-semibold mb-6 text-sm">
                                Company
                            </h4>
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        href__="https://alcovia.life/about-us"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 text-sm hover:text-[#CDFE04] transition-colors duration-300"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href__="https://alcovia.life/contact-us"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 text-sm hover:text-[#CDFE04] transition-colors duration-300"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="md:col-span-2">
                            <h4 className="text-white font-semibold mb-6 text-sm">
                                Legal
                            </h4>
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        href__="https://alcovia.life/privacy-policy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 text-sm hover:text-[#CDFE04] transition-colors duration-300"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href__="https://alcovia.life/terms-and-conditions"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 text-sm hover:text-[#CDFE04] transition-colors duration-300"
                                    >
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="md:col-span-4">
                            <h4 className="text-white font-semibold mb-6 text-sm">
                                Get in Touch
                            </h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-[#CDFE04] mt-0.5 shrink-0" />
                                    <span className="text-gray-400 text-sm">
                                        WeWork, Two Horizon Centre, DLF Phase 5, Gurugram
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-[#CDFE04] shrink-0" />
                                    <a
                                        href__="tel:+919070606050"
                                        className="text-gray-400 text-sm hover:text-[#CDFE04] transition-colors duration-300"
                                    >
                                        +91 9070606050
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="w-4 h-4 text-[#CDFE04] shrink-0" />
                                    <a
                                        href__="mailto:info@alcovia.life"
                                        className="text-gray-400 text-sm hover:text-[#CDFE04] transition-colors duration-300"
                                    >
                                        info@alcovia.life
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-xs">
                            © {new Date().getFullYear()} Alcovia. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <a
                                href__="https://www.linkedin.com/company/alcovia-life/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-[#CDFE04] transition-colors duration-300"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a
                                href__="https://www.instagram.com/alcovia.life/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-[#CDFE04] transition-colors duration-300"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
}