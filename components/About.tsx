"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaDownload, FaCode, FaServer, FaCloud } from "react-icons/fa";
import { fadeIn, textVariant } from "@/utils/motion";
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
    const { t, language } = useLanguage();
    
    const stats = [
        { label: t("about.stats.experience"), value: "4+" },
        { label: t("about.stats.technologies"), value: "9+" },
        { label: t("about.stats.clients"), value: "30+" },
        { label: t("about.stats.projects"), value: "45+" },
        { label: t("about.stats.satisfaction"), value: "99%" },
    ];

    const services = [
        {
            title: t("about.services.frontend.title"),
            desc: t("about.services.frontend.desc"),
            icon: <FaCode />
        },
        {
            title: t("about.services.backend.title"),
            desc: t("about.services.backend.desc"),
            icon: <FaServer />
        },
        {
            title: t("about.services.devops.title"),
            desc: t("about.services.devops.desc"),
            icon: <FaCloud />
        }
    ];

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
                    <p className="text-accent font-mono mb-2">{t("about.intro")}</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-heading-color">{t("about.title")}</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left: Bio */}
                    <motion.div variants={fadeIn("right", "tween", 0.2, 1)} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            {t("about.headline_1")}<span className="text-accent">{t("about.headline_2")}</span>{language === 'ja' ? t("about.headline_3") : "."}
                        </h3>
                        <p className="text-slate-400 mb-6 leading-relaxed text-lg">
                            {t("about.bio")}
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="p-4 glass rounded-lg border-l-4 border-accent">
                                <p className="text-sm text-slate-500 mb-1">{t("about.degree")}</p>
                                <p className="text-white font-bold">{t("about.degree_value")}</p>
                            </div>
                            <div className="p-4 glass rounded-lg border-l-4 border-accent">
                                <p className="text-sm text-slate-500 mb-1">{t("about.university")}</p>
                                <p className="text-white font-bold">{t("about.university_value")}</p>
                            </div>
                        </div>

                        <a
                            href="/Tran-Duc-Hung-TopCV.vn-020226.115428.pdf"
                            target="_blank"
                            className="btn flex items-center gap-2 w-fit px-6 py-3"
                        >
                            {t("about.download_cv")} <FaDownload />
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
