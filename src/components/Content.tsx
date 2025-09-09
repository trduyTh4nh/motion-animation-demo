import React, { useEffect, useState } from "react"
import { MotionValue, number, useMotionValueEvent, useTransform, motion } from "framer-motion"

function Content({ size }: { size: MotionValue<number> }) {
    const [scrollYProgress, setScrollYProgress] = React.useState<number>(1)
    const [scrollNumber, setScrollNumber] = React.useState<MotionValue<number>>(size)
    useMotionValueEvent(size, "change", (latest) => {
        setScrollYProgress(latest)
        setScrollNumber(size)
        console.log("size: ", size)
        console.log("stateSize: ", Math.round(latest * 100) / 100)
    })
    const view2Opacity = useTransform(
        scrollNumber,
        [0.3, 0.5, 0.7],
        [0, 1, 0]
    );
    const view2Y = useTransform(
        scrollNumber,
        [0.3, 0.5, 0.7],
        ["100%", "0%", "-100%"]
    );
    const view2Scale = useTransform(
        scrollNumber,
        [0.3, 0.5, 0.7],
        [0.8, 2.8, 0.8]
    );

    
    const funGetScale = (info: number) => {
        return Math.round(info * 1000) / 300
    }

    return (
        <motion.p

            style={{
                scale: view2Scale,
                opacity: view2Opacity,
                y: view2Y,
            }}
            className="absolute"
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam ac rhoncus quam.
        </motion.p>
    )
}

export default Content
