"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaDownload, FaCode, FaServer, FaCloud } from "react-icons/fa";
import { fadeIn, textVariant } from "@/utils/motion";

const stats = [
    { label: "Years Experience", value: "4+" },
    { label: "Technologies Mastered", value: "9+" },
    { label: "Clients Served", value: "30+" },
    { label: "Projects Completed", value: "45+" },
    { label: "Client Satisfaction", value: "99%" },
];

const services = [
    {
        title: "Frontend Development",
        desc: "Building responsive and interactive UIs using React, Next.js, and Tailwind CSS.",
        icon: <FaCode />
    },
    {
        title: "Backend Development",
        desc: "Developing robust APIs and microservices with Node.js, Express, and Python.",
        icon: <FaServer />
    },
    {
        title: "DevOps & Cloud",
        desc: "Automating deployments and managing infrastructure with Docker, AWS, and CI/CD.",
        icon: <FaCloud />
    }
];

const About = () => {
    // Simple particle system
    const particles = Array.from({ length: 20 });

    return (
        <section id="about" className="py-20 relative overflow-hidden bg-secondary-bg/30">
            {/* Background Particles */}
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                {particles.map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-accent/20 rounded-full"
                        initial={{
                            x: Math.random() * 1000 - 500,
                            y: Math.random() * 1000 - 500,
                            opacity: 0,
                            scale: 0
                        }}
                        animate={{
                            y: [Math.random() * -100, Math.random() * 100],
                            x: [Math.random() * -100, Math.random() * 100],
                            opacity: [0, 0.5, 0],
                            scale: [0, Math.random() * 2, 0]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            width: Math.random() * 10 + 5,
                            height: Math.random() * 10 + 5,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div variants={textVariant(0.1)} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
                    <p className="text-accent font-mono mb-2">My Intro</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-heading-color">About Me</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left: Bio */}
                    <motion.div variants={fadeIn("right", "tween", 0.2, 1)} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            I am a developer who loves building <span className="text-accent">products</span>.
                        </h3>
                        <p className="text-slate-400 mb-6 leading-relaxed text-lg">
                            My career objective is to become a professional Tech Lead, leveraging a solid foundation in full-stack programming experience to gain deeper insights into the product development process. I am committed to continuous learning and enhancing my skills in management and requirements analysis to deliver solutions that optimize product value while contributing to the sustainable growth of the organization.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="p-4 glass rounded-lg border-l-4 border-accent">
                                <p className="text-sm text-slate-500 mb-1">Degree</p>
                                <p className="text-white font-bold">IT Engineer</p>
                            </div>
                            <div className="p-4 glass rounded-lg border-l-4 border-accent">
                                <p className="text-sm text-slate-500 mb-1">University</p>
                                <p className="text-white font-bold">HUST</p>
                            </div>
                        </div>

                        <a
                            href="/CV.pdf"
                            target="_blank"
                            className="btn flex items-center gap-2 w-fit px-6 py-3"
                        >
                            Download CV <FaDownload />
                        </a>
                    </motion.div>

                    {/* Right: What I Do */}
                    <motion.div variants={fadeIn("left", "tween", 0.2, 1)} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-6">
                        {services.map((service, index) => (
                            <div key={index} className="glass p-6 rounded-xl hover:border-accent transition-colors border border-transparent flex gap-4">
                                <div className="text-3xl text-accent mt-1">{service.icon}</div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                                    <p className="text-slate-400 text-sm">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    variants={fadeIn("up", "tween", 0.2, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center"
                >
                    {stats.map((stat, index) => {
                        const numericValue = parseInt(stat.value.toString());
                        const suffix = stat.value.toString().replace(/\d+/g, "");
                        return (
                            <div key={index} className="glass p-4 rounded-xl hover:scale-105 transition-transform">
                                <h3 className="text-3xl font-bold text-accent mb-2">
                                    <CountUp end={numericValue} duration={3} suffix={suffix} />
                                </h3>
                                <p className="text-slate-400 font-mono text-xs md:text-sm">{stat.label}</p>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
