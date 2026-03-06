"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const socialLinks = [
        { icon: FaGithub, href: "https://github.com/hung20187237", label: "GitHub" },
        { icon: FaFacebook, href: "https://www.facebook.com/tranduchung308", label: "Facebook" },
        { icon: FaLinkedin, href: "https://www.linkedin.com/in/hung-tran-566a27214/", label: "LinkedIn" },
    ];

    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="text-2xl font-bold text-white mb-4">
                            HungTran<span className="text-accent">.dev</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {t("footer.description")}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4">{t("footer.quick_links")}</h3>
                        <ul className="space-y-2 text-slate-400 text-sm">
                            <li><a href="#about" className="hover:text-accent transition-colors">{t("nav.about")}</a></li>
                            <li><a href="#experience" className="hover:text-accent transition-colors">{t("nav.experience")}</a></li>
                            <li><a href="#projects" className="hover:text-accent transition-colors">{t("nav.projects")}</a></li>
                            <li><a href="#contact" className="hover:text-accent transition-colors">{t("nav.contact")}</a></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="text-white font-bold mb-4">{t("footer.socials")}</h3>
                        <div className="flex justify-center md:justify-start gap-4">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-white transition-all duration-300"
                                    aria-label={link.label}
                                >
                                    <link.icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Back to Top */}
                    <div className="flex flex-col items-center md:items-end justify-start">
                        <button
                            onClick={scrollToTop}
                            className="group flex flex-col items-center gap-2 text-slate-500 hover:text-accent transition-colors"
                        >
                            <div className="w-12 h-12 rounded-full border border-slate-700 group-hover:border-accent flex items-center justify-center transition-colors">
                                <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
                            </div>
                            <span className="text-xs font-mono lowercase">{t("footer.back_to_top")}</span>
                        </button>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Tran Duc Hung. {t("footer.rights")}</p>
                </div>
            </div>
        </footer>
    );
}
