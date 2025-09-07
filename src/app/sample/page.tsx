"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Star,
  Code,
  Palette,
  Rocket,
} from "lucide-react";
import { useRef } from "react";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  console.log("scroll y progress: ", scrollYProgress);

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], ["0%", "-100%"]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  const view2Opacity = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6],
    [0, 1, 0]
  );
  const view2Y = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6],
    ["100%", "0%", "-100%"]
  );
  const view2Scale = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6],
    [0.8, 1, 0.8]
  );

  const view3Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.7, 0.9],
    [0, 1, 0]
  );
  const view3Y = useTransform(
    scrollYProgress,
    [0.5, 0.7, 0.9],
    ["100%", "0%", "-100%"]
  );
  const view3Scale = useTransform(
    scrollYProgress,
    [0.5, 0.7, 0.9],
    [0.8, 1, 0.8]
  );

  const finalViewOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const finalViewY = useTransform(scrollYProgress, [0.8, 1], ["100%", "0%"]);

  const springY = useSpring(heroY, { stiffness: 100, damping: 30 });
  const springScale = useSpring(heroScale, { stiffness: 100, damping: 30 });

  return (
    <div className="min-h-[500vh] bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      {/* <motion.div
        className="fixed inset-0 overflow-hidden"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) }}
      >
        <motion.div
          className="absolute top-20 left-10 text-primary/10"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          style={{
            y: useTransform(scrollYProgress, [0, 1], ["0px", "200px"]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, 720]),
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <Sparkles size={40} />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-primary/10"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 180, 360],
          }}
          style={{
            y: useTransform(scrollYProgress, [0, 1], ["0px", "-160px"]),
            x: useTransform(scrollYProgress, [0, 1], ["0px", "-100px"]),
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Zap size={32} />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 text-primary/10"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          style={{
            y: useTransform(scrollYProgress, [0, 1], ["0px", "240px"]),
            scale: useTransform(scrollYProgress, [0, 1], [1, 2]),
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Star size={28} />
        </motion.div>
      </motion.div> */}

      <motion.div
        ref={containerRef}
        className="fixed inset-0 z-10 flex flex-col items-center justify-center px-4 text-center"
        style={{
          opacity: heroOpacity,
          y: springY,
          scale: springScale,
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "linear" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              type: "spring",
              stiffness: 200,
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Sparkles size={16} />
            </motion.div>
            Motion Animation Demo
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Beautiful
          </motion.span>{" "}
          <motion.span
            className="inline-block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
          >
            Animations
          </motion.span>{" "}
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, rotateX: 90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Made Simple
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          Experience the power of Framer Motion with smooth, performant
          animations that bring your interfaces to life.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button size="lg" className="group">
              Get Started
              <motion.div
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <ArrowRight size={16} />
              </motion.div>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button variant="outline" size="lg">
              View Examples
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="fixed inset-0 z-10 flex flex-col items-center justify-center px-4 text-center bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20"
        style={{
          opacity: view2Opacity,
          y: view2Y,
          scale: view2Scale,
        }}
      >
        <motion.div
          className="mb-8"
          style={{
            rotateY: useTransform(scrollYProgress, [0.2, 0.4], [90, 0]),
          }}
        >
          <Code size={80} className="text-blue-500 mx-auto mb-4" />
        </motion.div>

        <motion.h2
          className="text-4xl md:text-6xl font-bold text-balance mb-6"
          style={{
            rotateX: useTransform(scrollYProgress, [0.2, 0.4], [90, 0]),
            opacity: useTransform(scrollYProgress, [0.25, 0.4], [0, 1]),
          }}
        >
          Developer
          <span className="block bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Friendly
          </span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl"
          style={{
            y: useTransform(scrollYProgress, [0.25, 0.4], [50, 0]),
            opacity: useTransform(scrollYProgress, [0.3, 0.4], [0, 1]),
          }}
        >
          Simple, declarative syntax that makes complex animations feel
          effortless. No more wrestling with CSS keyframes.
        </motion.p>
      </motion.div>

      <motion.div
        className="fixed inset-0 z-10 flex flex-col items-center justify-center px-4 text-center bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20"
        style={{
          opacity: view3Opacity,
          y: view3Y,
          scale: view3Scale,
        }}
      >
        <motion.div
          className="mb-8"
          style={{
            rotateZ: useTransform(scrollYProgress, [0.5, 0.7], [180, 0]),
            scale: useTransform(scrollYProgress, [0.5, 0.7], [0.5, 1]),
          }}
        >
          <Palette size={80} className="text-purple-500 mx-auto mb-4" />
        </motion.div>

        <motion.h2
          className="text-4xl md:text-6xl font-bold text-balance mb-6"
          style={{
            scale: useTransform(scrollYProgress, [0.5, 0.7], [0.8, 1]),
            opacity: useTransform(scrollYProgress, [0.55, 0.7], [0, 1]),
          }}
        >
          Pixel
          <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Perfect
          </span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl"
          style={{
            x: useTransform(scrollYProgress, [0.55, 0.7], [-100, 0]),
            opacity: useTransform(scrollYProgress, [0.6, 0.7], [0, 1]),
          }}
        >
          Smooth 60fps animations with spring physics that feel natural and
          responsive. Every interaction delights users.
        </motion.p>
      </motion.div>

      <motion.div
        className="fixed inset-0 z-10 flex flex-col items-center justify-center px-4 text-center bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20"
        style={{
          opacity: finalViewOpacity,
          y: finalViewY,
        }}
      >
        <motion.div
          className="mb-8"
          style={{
            y: useTransform(scrollYProgress, [0.8, 1], [100, 0]),
            rotateY: useTransform(scrollYProgress, [0.8, 1], [180, 0]),
          }}
        >
          <Rocket size={80} className="text-green-500 mx-auto mb-4" />
        </motion.div>

        <motion.h2
          className="text-4xl md:text-6xl font-bold text-balance mb-6"
          style={{
            scale: useTransform(scrollYProgress, [0.85, 1], [0.5, 1]),
            opacity: useTransform(scrollYProgress, [0.85, 1], [0, 1]),
          }}
        >
          Ready to
          <span className="block bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
            Launch?
          </span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mb-8"
          style={{
            y: useTransform(scrollYProgress, [0.9, 1], [50, 0]),
            opacity: useTransform(scrollYProgress, [0.9, 1], [0, 1]),
          }}
        >
          Start building amazing animated experiences today. Your users will
          love the smooth, polished feel.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          style={{
            scale: useTransform(scrollYProgress, [0.95, 1], [0.8, 1]),
            opacity: useTransform(scrollYProgress, [0.95, 1], [0, 1]),
          }}
        >
          <Button size="lg" className="group">
            Start Building
            <ArrowRight size={16} className="ml-2" />
          </Button>
          <Button variant="outline" size="lg">
            View Documentation
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 via-purple-500 to-green-500 z-50"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0%",
        }}
      />
    </div>
  );
}
