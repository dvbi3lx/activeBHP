"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    variant?: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'scale-up';
    once?: boolean;
}

export default function AnimatedSection({
    children,
    className = "",
    delay = 0,
    duration = 0.5,
    variant = 'fade-up',
    once = true,
}: AnimatedSectionProps) {
    const getVariants = () => {
        switch (variant) {
            case 'fade-up':
                return {
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                };
            case 'fade-in':
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                };
            case 'fade-left':
                return {
                    hidden: { opacity: 0, x: 40 },
                    visible: { opacity: 1, x: 0 },
                };
            case 'fade-right':
                return {
                    hidden: { opacity: 0, x: -40 },
                    visible: { opacity: 1, x: 0 },
                };
            case 'scale-up':
                return {
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: { opacity: 1, scale: 1 },
                };
            default:
                return {
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                };
        }
    };

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-50px" }}
            transition={{ duration, delay, ease: "easeOut" }}
            variants={getVariants()}
        >
            {children}
        </motion.div>
    );
}
