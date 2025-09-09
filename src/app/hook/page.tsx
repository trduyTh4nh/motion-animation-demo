"use client";

import Content from "@/components/Content";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import React, { useRef } from "react";

const Hook = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Theo dõi scroll của container chính
    const { scrollYProgress } = useScroll({
        container: containerRef,
        offset: ["start start", "end end"],
    });

    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("ScrollY: ", latest);
    });
    


    return (
        <div ref={containerRef} className="h-screen overflow-y-scroll">
            <motion.div className="h-screen flex justify-center items-center">
                <motion.h1>Section 1</motion.h1>
            </motion.div>

            <motion.div className="h-screen  relative flex justify-center items-center bg-green-200">
                {/* Progress bar cố định */}
                <motion.div
                    style={{
                        scaleX: scrollYProgress,
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 10,
                        originX: 0,
                        backgroundColor: "#ff0088",
                    }}
                    id="scroll-indicator"
                />

                <Content  size={scrollYProgress}  />
            </motion.div>

            <motion.div
                className="h-screen flex justify-center items-center"
            >
                <motion.h1>Section 3</motion.h1>
            </motion.div>
        </div>
    );
};

export default Hook;
