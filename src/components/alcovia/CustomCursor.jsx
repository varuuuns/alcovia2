import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isDarkSection, setIsDarkSection] = useState(true);

    // Track mouse position and visibility
    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", updateMousePosition);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        // Detect clickable elements for hover grow effect
        const clickableEls = document.querySelectorAll("a, button, [role='button']");
        clickableEls.forEach((el) => {
            el.addEventListener("mouseenter", () => setIsHovering(true));
            el.addEventListener("mouseleave", () => setIsHovering(false));
        });

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
            clickableEls.forEach((el) => {
                el.removeEventListener("mouseenter", () => setIsHovering(true));
                el.removeEventListener("mouseleave", () => setIsHovering(false));
            });
        };
    }, []);

    // Optional: Detect background brightness for auto contrast
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const bg = window.getComputedStyle(entry.target).backgroundColor;
                    const rgb = bg.match(/\d+/g);
                    if (rgb) {
                        const brightness =
                            (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
                        setIsDarkSection(brightness < 0.5);
                    }
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll("section").forEach((sec) => observer.observe(sec));
        return () => observer.disconnect();
    }, []);

    const primaryColor = "#CDFE04";
    const secondaryColor = isDarkSection ? "#CDFE04" : "#111";

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed pointer-events-none z-9999 hidden md:flex items-center justify-center"
                    animate={{
                        x: mousePosition.x - 20,
                        y: mousePosition.y - 20,
                        scale: isHovering ? 1.6 : 1,
                        opacity: 1,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                        mass: 0.6,
                    }}
                    style={{
                        width: 40,
                        height: 40,
                        mixBlendMode: isDarkSection ? "difference" : "normal",
                    }}
                >
                    {/* Glowing outer ring */}
                    <motion.div
                        className="absolute rounded-full"
                        animate={{
                            scale: isHovering ? [1.4, 1.6, 1.4] : [1, 1.1, 1],
                            opacity: isHovering ? [0.4, 0.8, 0.4] : [0.2, 0.4, 0.2],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            width: 60,
                            height: 60,
                            backgroundColor: secondaryColor,
                            filter: `blur(15px)`,
                        }}
                    />

                    {/* Inner core */}
                    <motion.div
                        className="rounded-full border-2"
                        animate={{
                            scale: isHovering ? 1.2 : 1,
                            rotate: isHovering ? 45 : 0,
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        style={{
                            width: 24,
                            height: 24,
                            borderColor: secondaryColor,
                            backgroundColor: isDarkSection ? "transparent" : "#CDFE04",
                            boxShadow: isDarkSection
                                ? `0 0 10px ${primaryColor}, inset 0 0 10px ${primaryColor}`
                                : `0 0 8px rgba(0,0,0,0.2)`,
                        }}
                    />

                    {/* Center dot */}
                    <motion.div
                        className="absolute rounded-full"
                        animate={{
                            scale: isHovering ? [1, 1.3, 1] : [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            width: 6,
                            height: 6,
                            backgroundColor: secondaryColor,
                            boxShadow: `0 0 5px ${secondaryColor}`,
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
