"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { useLanguage } from "@/context/LanguageContext";

interface Project {
    title: string;
    meta: string;
    desc: string;
    tech: string[];
    github?: string;
    link?: string;
    image: string;
}



const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className="glass rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 group flex flex-col h-full"
        >
            {/* Placeholder Image / Gradient */}
            {/* Project Image */}
            <div className="h-48 w-full overflow-hidden relative group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-heading-color group-hover:text-accent transition-colors">{project.title}</h3>
                        <p className="text-xs text-slate-500 font-mono mt-1">{project.meta}</p>
                    </div>
                    <div className="flex gap-3">
                        <a href="#" className="text-slate-400 hover:text-accent text-lg"><FaGithub /></a>
                        <a href="#" className="text-slate-400 hover:text-accent text-lg"><FaExternalLinkAlt /></a>
                    </div>
                </div>

                <p className="text-slate-400 text-sm mb-6 flex-1 leading-relaxed">
                    {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, i) => (
                        <span key={i} className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default function Projects() {
    const { t } = useLanguage();
    const projects = t("projects.list") as Project[];
    
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-accent font-mono mb-2">{t("projects.subtitle")}</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-heading-color">{t("projects.title")}</h2>
                </motion.div>

                <motion.div
                    variants={staggerContainer(0.1, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
