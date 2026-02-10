"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [theme, setTheme] = useState("dark");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo">
                        HungTran<span style={{ color: "var(--accent-color)" }}>.dev</span>
                    </div>

                    {/* Desktop Nav */}
                    <ul className="nav-links">
                        <li><Link href="#about">About</Link></li>
                        <li><Link href="#experience">Experience</Link></li>
                        <li><Link href="#projects">Projects</Link></li>
                        <li><Link href="#skills">Skills</Link></li>
                        <li><Link href="#contact">Contact</Link></li>
                    </ul>

                    <div className="nav-controls">
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
                            <li><Link href="#about" onClick={toggleMobileMenu}>About</Link></li>
                            <li><Link href="#experience" onClick={toggleMobileMenu}>Experience</Link></li>
                            <li><Link href="#projects" onClick={toggleMobileMenu}>Projects</Link></li>
                            <li><Link href="#skills" onClick={toggleMobileMenu}>Skills</Link></li>
                            <li><Link href="#contact" onClick={toggleMobileMenu}>Contact</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
