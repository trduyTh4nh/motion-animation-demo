"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import React, { useRef } from "react";

const Hook = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Theo dõi scroll của container
    const { scrollYProgress } = useScroll({
        container: containerRef,
        offset: ["start start", "end end"],
    });

    // Theo dõi scroll toàn trang
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("ScrollY:", latest);
    });

    return (
        <div ref={containerRef} className="h-screen overflow-y-scroll">
            <motion.div className="h-screen flex justify-center items-center bg-blue-200">
                <motion.h1 style={{ scale: scrollYProgress }}>
                    Section 1
                </motion.h1>
            </motion.div>
            <motion.div className="h-screen flex justify-center items-center bg-green-200">
                Section 2
            </motion.div>
        </div>
    );
};

export default Hook;
