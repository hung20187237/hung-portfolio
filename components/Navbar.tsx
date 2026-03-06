"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
    const [theme, setTheme] = useState("dark");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        // Check local storage or system preference
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.setAttribute("data-theme", storedTheme);
        }
    }, []);

    const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTheme = e.target.checked ? "light" : "dark";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Prevent scrolling when menu is open
        document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "auto";
    };

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'ja' : 'en');
    };

    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo">
                        HungTran<span style={{ color: "var(--accent-color)" }}>.dev</span>
                    </div>

                    {/* Desktop Nav */}
                    <ul className="nav-links">
                        <li><Link href="#about">{t("nav.about")}</Link></li>
                        <li><Link href="#experience">{t("nav.experience")}</Link></li>
                        <li><Link href="#projects">{t("nav.projects")}</Link></li>
                        <li><Link href="#skills">{t("nav.skills")}</Link></li>
                        <li><Link href="#contact">{t("nav.contact")}</Link></li>
                    </ul>

                    <div className="nav-controls flex items-center gap-4">
                        {/* Language Switcher */}
                        <button 
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 text-slate-300 hover:text-accent transition-colors text-sm font-semibold"
                            aria-label="Toggle Language"
                        >
                            <FaGlobe />
                            <span>{language.toUpperCase()}</span>
                        </button>

                        <div className="theme-switch-wrapper">
                            <label className="theme-switch" htmlFor="checkbox">
                                <input
                                    type="checkbox"
                                    id="checkbox"
                                    onChange={toggleTheme}
                                    checked={theme === "light"}
                                    aria-label="Toggle Dark Mode"
                                />
                                <div className="slider round"></div>
                            </label>
                        </div>

                        {/* Hamburger Icon */}
                        <div className="hamburger" onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </div>
                    </div>

                    {/* Mobile Nav Overlay */}
                    <div className={`mobile-nav ${isMobileMenuOpen ? "active" : ""}`}>
                        <ul className="mobile-nav-links">
                            <li><Link href="#about" onClick={toggleMobileMenu}>{t("nav.about")}</Link></li>
                            <li><Link href="#experience" onClick={toggleMobileMenu}>{t("nav.experience")}</Link></li>
                            <li><Link href="#projects" onClick={toggleMobileMenu}>{t("nav.projects")}</Link></li>
                            <li><Link href="#skills" onClick={toggleMobileMenu}>{t("nav.skills")}</Link></li>
                            <li><Link href="#contact" onClick={toggleMobileMenu}>{t("nav.contact")}</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
