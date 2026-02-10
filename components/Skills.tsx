"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";

interface Skill {
    name: string;
    level: number; // 0-100
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

const skillsData: SkillCategory[] = [
    {
        title: "Frontend Core",
        skills: [
            { name: "React, Next.js", level: 95 },
            { name: "JavaScript, TypeScript", level: 90 },
            { name: "Redux Toolkit / Saga", level: 85 },
            { name: "HTML5, CSS3", level: 95 }
        ]
    },
    {
        title: "UI/UX Libraries",
        skills: [
            { name: "TailwindCSS", level: 95 },
            { name: "Ant Design, MUI", level: 90 },
            { name: "Styled-components", level: 85 },
            { name: "Radix UI, shadcn-ui", level: 80 }
        ]
    },
    {
        title: "Data Visualization",
        skills: [
            { name: "ECharts", level: 85 },
            { name: "Chart.js", level: 80 },
            { name: "D3.js", level: 70 }
        ]
    },
    {
        title: "Backend & DevOps",
        skills: [
            { name: "Node.js", level: 85 },
            { name: "Flask (Python)", level: 80 },
            { name: "MongoDB, PostgreSQL", level: 80 },
            { name: "Docker, K8s", level: 75 }
        ]
    }
];

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
    return (
        <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
                <span className="text-slate-300 font-medium text-sm">{skill.name}</span>
                <span className="text-slate-500 text-xs">{skill.level}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
                <motion.div
                    className="bg-accent h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                />
            </div>
        </div>
    );
};

const SkillCategoryCard = ({ category, index }: { category: SkillCategory; index: number }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className="glass p-6 rounded-xl hover:border-accent border border-transparent transition-colors"
        >
            <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-2 inline-block">
                {category.title}
            </h3>
            <div>
                {category.skills.map((skill, i) => (
                    <SkillBar key={i} skill={skill} index={i} />
                ))}
            </div>
        </motion.div>
    )
}

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-accent font-mono mb-2">My Toolbox</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-heading-color">Skills & Abilities</h2>
                </motion.div>

                <motion.div
                    variants={staggerContainer(0.1, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skillsData.map((category, index) => (
                        <SkillCategoryCard key={index} category={category} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
