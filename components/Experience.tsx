"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { fadeIn, textVariant, staggerContainer } from "@/utils/motion";
import { useLanguage } from "@/context/LanguageContext";

interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    desc: string;
    duties: string[];
    tech: string[];
}

interface EducationItem {
    school: string;
    degree: string;
    period: string;
}



const ExperienceCard = ({ experience, index }: { experience: ExperienceItem; index: number }) => {
    const [hovered, setHovered] = useState(false);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
        setTilt({ x, y });
    };

    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            className="w-full"
        >
            <div
                className="glass p-8 rounded-2xl w-full min-h-[400px] flex flex-col justify-between cursor-pointer transition-all duration-300 relative overflow-hidden group border border-slate-700"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => {
                    setHovered(false);
                    setTilt({ x: 0, y: 0 });
                }}
                onMouseMove={handleMouseMove}
                style={{
                    transform: hovered ? `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(1.02)` : "perspective(1000px) rotateX(0) rotateY(0) scale(1)",
                    boxShadow: hovered ? "0 20px 40px rgba(0,0,0,0.4)" : "none"
                }}
            >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{experience.title}</h3>
                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-600 group-hover:border-accent">
                            <FaBriefcase className="text-accent" />
                        </div>
                    </div>

                    <p className="text-slate-400 text-sm font-bold mb-1">{experience.company}</p>
                    <p className="text-slate-500 text-xs mb-4 italic">{experience.period}</p>

                    <p className="text-slate-300 text-sm mb-4 leading-relaxed">{experience.desc}</p>

                    <ul className="list-disc list-outside ml-4 space-y-2 mb-6 text-slate-400 text-sm">
                        {experience.duties.map((duty, i) => (
                            <li key={i}>{duty}</li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {experience.tech.map((tech, i) => (
                        <span key={i} className="text-[12px] px-2 py-1 rounded bg-slate-800 text-accent border border-slate-700">
                            #{tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const EducationCard = ({ education, index }: { education: EducationItem; index: number }) => {
    return (
        <motion.div
            variants={fadeIn("left", "spring", index * 0.5, 0.75)}
            className="flex gap-4 relative"
        >
            {/* Timeline Line */}
            <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-accent z-10 box-content border-4 border-bg-color" />
                <div className="w-1 h-full bg-slate-700 -mt-2" />
            </div>

            <div className="glass p-6 rounded-xl mb-8 flex-1 border border-slate-700 hover:border-accent transition-colors">
                <div className="flex items-center gap-3 mb-2">
                    <FaGraduationCap className="text-3xl text-accent" />
                    <div>
                        <h3 className="text-xl font-bold text-white">{education.school}</h3>
                        <p className="text-slate-400 text-sm">{education.degree}</p>
                    </div>
                </div>
                <p className="text-slate-500 text-sm italic mt-2">{education.period}</p>
            </div>
        </motion.div>
    )
}

const Experience = () => {
    const { t } = useLanguage();
    const experiences = t("experience.list") as ExperienceItem[];
    const education = t("experience.education_list") as EducationItem[];
    
    return (
        <section id="experience" className="py-20 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div variants={textVariant(0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <p className="text-accent text-center text-lg uppercase tracking-wider mb-2">{t("experience.subtitle")}</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
                        {t("experience.title")}
                    </h2>
                </motion.div>

                <motion.div
                    variants={staggerContainer(0.1, 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
                >
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} index={index} />
                    ))}
                </motion.div>

                {/* Education Section */}
                <motion.div variants={textVariant(0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
                        {t("experience.education_title")}
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {education.map((edu, index) => (
                        <EducationCard key={index} education={edu} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Experience;
