import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', updateMousePosition);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []);

    return (
        <motion.div
            className="fixed pointer-events-none z-9999 hidden md:block"
            animate={{
                x: mousePosition.x - 30,
                y: mousePosition.y - 30,
                opacity: isVisible ? 1 : 0
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.5
            }}
        >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    d="M10 30 Q5 20 15 15 Q25 10 30 20 Q25 25 20 28 Q15 30 10 30Z"
                    fill="#CDFE04"
                    opacity="0.9"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path
                    d="M8 35 Q3 28 10 22 Q18 18 22 26 Q18 30 14 32 Q10 34 8 35Z"
                    fill="#CDFE04"
                    opacity="0.7"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                />
                <circle cx="35" cy="25" r="8" fill="#1a1a1a" stroke="#CDFE04" strokeWidth="1.5" />
                <ellipse cx="35" cy="42" rx="10" ry="12" fill="#1a1a1a" stroke="#CDFE04" strokeWidth="1.5" />
                <motion.circle
                    cx="35"
                    cy="25"
                    r={12}
                    fill="none"
                    stroke="#CDFE04"
                    strokeWidth="0.5"
                    opacity="0.5"
                    animate={{ r: [12, 15, 12], opacity: [0.5, 0.2, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </svg>
        </motion.div>
    );
}