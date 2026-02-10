"use client";

import React, { useState, useEffect, memo } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
    FaPython, FaJava, FaPhp, FaHtml5, FaCss3Alt, FaReact, FaAngular, FaVuejs,
    FaNodeJs, FaDocker, FaAws, FaGitAlt, FaLinux, FaRust, FaGithub, FaLinkedin, FaTwitter
} from 'react-icons/fa';
import {
    SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiKubernetes, SiNextdotjs,
    SiTailwindcss, SiRuby, SiJavascript, SiTypescript, SiC, SiCplusplus, SiExpress
} from 'react-icons/si';
import { fadeIn, staggerContainer } from "@/utils/motion";

// Memoized Icon Component with Color-Shift
const Icon = memo(({ icon: IconComp, title, color }: any) => (
    <motion.div
        className="relative group p-2"
        initial={{ filter: 'hue-rotate(0deg)' }}
        animate={{ filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)'] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
    >
        <IconComp
            title={title}
            className={`text-slate-500 hover:text-accent transition-all duration-300 transform hover:scale-125 cursor-pointer`}
            style={{ fontSize: '3rem' }} // Ensure consistent size
        />
        <motion.div
            className="absolute -top-2 left-1/2 w-2 h-2 bg-accent rounded-full opacity-0"
            initial={{ opacity: 0, scale: 0 }}
            whileHover={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
            transition={{ duration: 0.6, repeat: 1 }}
            style={{ x: "-50%" }}
        />
    </motion.div>
));

Icon.displayName = "Icon";

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [particles, setParticles] = useState<{ top: string; left: string; size: string; delay: number }[]>([]);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Initialize particles
        setParticles(
            Array.from({ length: 15 }).map(() => ({
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                size: Math.random() * 4 + 2 + 'px',
                delay: Math.random() * 5,
            }))
        );

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const techIcons = [
        { icon: FaReact, title: "React", color: "#61DAFB" },
        { icon: SiNextdotjs, title: "Next.js", color: "#FFFFFF" },
        { icon: SiTypescript, title: "TypeScript", color: "#3178C6" },
        { icon: FaNodeJs, title: "Node.js", color: "#339933" },
        { icon: FaPython, title: "Python", color: "#3776AB" },
        { icon: FaDocker, title: "Docker", color: "#2496ED" },
        { icon: FaAws, title: "AWS", color: "#FF9900" },
        { icon: SiMongodb, title: "MongoDB", color: "#47A248" },
        { icon: SiPostgresql, title: "PostgreSQL", color: "#4169E1" },
        { icon: SiFirebase, title: "Firebase", color: "#FFCA28" },
        { icon: FaJava, title: "Java", color: "#007396" },
        { icon: FaGitAlt, title: "Git", color: "#F05032" },
        { icon: SiTailwindcss, title: "Tailwind", color: "#38B2AC" },
        { icon: FaLinux, title: "Linux", color: "#FCC624" },
    ];

    // Double the icons for seamless marquee
    const iconsLayer1 = [...techIcons, ...techIcons];
    const iconsLayer2 = [...techIcons.slice().reverse(), ...techIcons.slice().reverse()];

    return (
        <section id="hero" className="hero relative min-h-screen flex items-center pt-[100px] overflow-hidden bg-primary">
            {/* Background Particles */}
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-accent rounded-full opacity-20 pointer-events-none"
                    style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 3 + Math.random() * 2,
                        delay: p.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}

            <motion.div
                variants={staggerContainer(0.1, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="container grid md:grid-cols-2 gap-8 items-center relative z-10"
            >
                {/* Left Content */}
                <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="hero-content space-y-6">
                    <p className="text-accent font-mono text-lg">Hi, my name is</p>
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-200 tracking-tight">
                        Trần Đức Hùng.
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-400">
                        <TypeAnimation
                            sequence={[
                                "I build things for the web.", 1000,
                                "I build accessible products.", 1000,
                                "I focus on React & Node.js.", 1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-accent"
                        />
                    </h2>
                    <p className="max-w-xl text-slate-400 text-lg leading-relaxed">
                        I am a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I am focused on building accessible, human-centered products at <span className="text-accent">CYAI-NCS</span>.
                    </p>

                    <div className="flex gap-4 pt-4">
                        <a href="#projects" className="px-6 py-3 border border-accent text-accent rounded hover:bg-accent/10 transition-colors font-mono">
                            Check out my work!
                        </a>
                        <div className="flex gap-6 items-center ml-4">
                            <a href="https://github.com/hungtran" target="_blank" rel="noreferrer" className="text-2xl text-slate-400 hover:text-accent transition-colors hover:-translate-y-1 transform duration-300">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com/in/hungtran" target="_blank" rel="noreferrer" className="text-2xl text-slate-400 hover:text-accent transition-colors hover:-translate-y-1 transform duration-300">
                                <FaLinkedin />
                            </a>
                            <a href="https://twitter.com/hungtran" target="_blank" rel="noreferrer" className="text-2xl text-slate-400 hover:text-accent transition-colors hover:-translate-y-1 transform duration-300">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} className="hero-image flex justify-center relative">
                    <motion.div
                        className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full border-4 border-accent overflow-hidden z-10 bg-secondary"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    >
                        {/* Placeholder for now / replace with actual image */}
                        <div className="w-full h-full flex items-center justify-center bg-slate-800 text-6xl text-slate-600 font-bold">
                            Hi!
                        </div>
                        {/* Glow Effect Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                    </motion.div>

                    {/* Decorative glow behind image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent/20 rounded-full blur-[80px] z-0 animate-pulse"></div>
                </motion.div>
            </motion.div>

            {/* Scrolling Tech Stack (Marquee) */}
            <div className="absolute bottom-10 w-full overflow-hidden space-y-8 pointer-events-none opacity-50 hover:opacity-100 transition-opacity duration-300">
                {/* Top Row: scroll left */}
                <motion.div
                    className="flex gap-12"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ repeat: Infinity, ease: 'linear', duration: 30 }}
                >
                    {iconsLayer1.map((item, index) => (
                        <div key={`layer1-${index}`} className="pointer-events-auto">
                            <Icon {...item} />
                        </div>
                    ))}
                </motion.div>

                {/* Bottom Row: scroll right */}
                <motion.div
                    className="flex gap-12 ml-12"
                    animate={{ x: ['-50%', '0%'] }}
                    transition={{ repeat: Infinity, ease: 'linear', duration: 35 }}
                >
                    {iconsLayer2.map((item, index) => (
                        <div key={`layer2-${index}`} className="pointer-events-auto">
                            <Icon {...item} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
