import { motion, MotionValue, useMotionValueEvent, useTransform } from "framer-motion"
import React from "react";

const FlyCard = ({ parameter }: { parameter: MotionValue<number> }) => {
    const [scrollYProgress, setScrollYProgress] = React.useState<number>(0);

    useMotionValueEvent(parameter, "change", (latest) => {
        setScrollYProgress(latest);
    })

    // Box A: Rotate Y and move left
    const rotateY_Box1 = useTransform(
        parameter,
        [0.4, 0.6, 0.8],
        ["0deg", "90deg", "360deg"]
    )

    const translateX_Box1 = useTransform(
        parameter,
        [0.4, 0.6, 0.8],
        ["0rem", "-90rem", "-0rem"]
    )

    // Box B: Rotate and move left
    const rotate_Box2 = useTransform(
        parameter,
        [0.4, 0.6, 0.8],
        ["0deg", "90deg", "340deg"]
    )

    const translateX_Box2 = useTransform(
        parameter,
        [0.4, 0.6, 0.8],
        ["0rem", "-90rem", "-0rem"]
    )

    // Box C: Zig-zag movement while moving left
    const translateY_Box3 = useTransform(
        parameter,
        [0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9],
        ["0px", "4rem", "-4rem", "4rem", "-4rem", "4rem", "-4rem", "4rem", "0rem"]
    )

    const translateX_Box3 = useTransform(
        parameter,
        [0.4, 0.6, 0.8],
        ["0rem", "-90rem", "-0rem"]

    )

    return (
        <motion.div className="flex gap-[100px] flex-col items-center justify-center min-h-screen">
            {/* Box A */}
            <motion.div
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "#03A688",
                    rotateY: rotateY_Box1,
                    x: translateX_Box1,
                }}
                transition={{
                    type: "spring",
                    damping: 15,
                    stiffness: 100
                }}
                className="flex items-center justify-center shadow-lg rounded-lg"
            >
                <p className="text-[50px] font-bold text-white drop-shadow-md">A</p>
            </motion.div>

            {/* Box B */}
            <motion.div
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "#F2668B",
                    rotate: rotate_Box2,
                    x: translateX_Box2,
                }}
                transition={{
                    type: "spring",
                    damping: 15,
                    stiffness: 100
                }}
                className="flex items-center justify-center shadow-lg rounded-lg"
            >
                <p className="text-[50px] font-bold text-white drop-shadow-md">B</p>
            </motion.div>

            {/* Box C */}
            <motion.div
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "#9FC131",
                    y: translateY_Box3,
                    x: translateX_Box3,
                }}
                transition={{
                    type: "spring",
                    damping: 15,
                    stiffness: 100
                }}
                className="flex items-center justify-center shadow-lg rounded-lg"
            >
                <p className="text-[50px] font-bold text-white drop-shadow-md">C</p>
            </motion.div>
        </motion.div>
    )
}

export default FlyCard