"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [scrollNumber, setScrollNumber] = useState(0);

  // Xử lý click navigation
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  // Theo dõi section hiện tại khi scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // console.log("entry: ", entry.target.id);
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end center"],
  });

  // const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  // const heroY = useTransform(scrollYProgress, [0, 0.3], ["0%", "-100%"]);
  // const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  const view2Opacity = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6],
    [1, 0, 1]
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

  const finalViewOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const finalViewY = useTransform(scrollYProgress, [0.8, 1], ["100%", "0%"]);

  // const springY = useSpring(heroY, { stiffness: 100, damping: 30 });
  // const springScale = useSpring(heroScale, { stiffness: 100, damping: 30 });

  const [hasInIntro, setHasInIntro] = useState(true);
  const hasScrolled = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled.current) {
        hasScrolled.current = true
        setHasInIntro(false)
        console.log("scroll lần đầu")
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    } 
  }, [])


  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
  });



  const textScale = useTransform(scrollYProgress, [0, 0.2], [1, 10]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3], [1, 0]);

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], ["0%", "0%"]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1]);

  const springY = useSpring(heroY, { stiffness: 20, damping: 30 });
  const springScale = useSpring(heroScale, { stiffness: 20, damping: 30 });



  return (
    <div className="font-sans">
      {/* Navigation Header */}
      <header className="fixed bottom-0 left-0 right-0 bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800">Logo</div>

            <div className="hidden md:flex space-x-8">
              {[
                "hero",
                "about",
                "projects",
                "partners",
                "distributors",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-3 py-2 rounded-md transition-colors ${activeSection === section
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 hover:text-blue-500 hover:bg-gray-100"
                    }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-600">☰</button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="">
        <main>
          <motion.section
            transition={{ duration: 5, ease: "linear" }}
            id="hero"
            className="relative min-h-screen w-full overflow-hidden"
            ref={containerRef}
          >
            {/* Chữ T.B AR DESIGN - sẽ phóng to rồi biến mất */}
            <motion.div
              className="absolute inset-0 w-full h-full bg-green-700 flex justify-center items-center z-20"
              style={{
                scale: textScale,
                opacity: textOpacity,
              }}
              transition={{ duration: 4, ease: "linear" }}
            >
              <h1 className="text-[4rem] font-bold text-white p-8 rounded-lg">
                TB.HAND
              </h1>
            </motion.div>

            {/* Background Image - sẽ hiện dần lên */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              style={{
                opacity: heroOpacity,
                y: springY,
                scale: springScale,
              }}
            >
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/assets/bg-home.png"
                  alt="Home Background"
                  fill
                  className="object-cover"
                  priority
                  quality={100}
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              <div className="relative z-10 flex items-center justify-center h-full w-full text-white">
                <div className="text-center">
                  <h1 className="text-5xl font-bold mb-6">Your Title Here</h1>
                  <p className="text-xl mb-8">Your subtitle here</p>
                  <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* About Section */}
          <section
            id="about"
            className="min-h-screen flex items-center justify-center bg-gray-50"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">About Us</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Learn more about our company and what we do.
              </p>
            </div>
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            className="min-h-screen flex items-center justify-center"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Our Projects</h2>
              <p className="text-lg text-gray-600">Check out our latest work</p>
            </div>
          </section>

          {/* Partners Section */}
          <section
            id="partners"
            className="min-h-screen flex items-center justify-center bg-gray-50"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Partners</h2>
              <p className="text-lg text-gray-600">Our trusted partners</p>
            </div>
          </section>

          {/* Distributors Section */}
          <section
            id="distributors"
            className="min-h-screen flex items-center justify-center"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Distributors</h2>
              <p className="text-lg text-gray-600">Our distribution network</p>
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="min-h-screen flex items-center justify-center bg-gray-50"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
              <p className="text-lg text-gray-600">Get in touch with us</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
