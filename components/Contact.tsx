"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaUser, FaEnvelope, FaPen } from "react-icons/fa";
import { fadeIn, slideIn } from "@/utils/motion";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResult("");

        const formData = new FormData();
        formData.append("access_key", "ef64095e-581b-4676-a94c-1d4767d6b375"); // Keeping the same key from source or usage
        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("message", form.message);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setLoading(false);
                setResult("Thank you. I will get back to you as soon as possible.");
                setForm({
                    name: "",
                    email: "",
                    message: "",
                });
            } else {
                setLoading(false);
                setResult("Something went wrong. Please try again.");
            }
        } catch (error) {
            setLoading(false);
            setResult("Something went wrong. Please try again.");
        }
    };

    return (
        <section id="contact" className="py-20 overflow-hidden relative">
            <div className="container mx-auto px-4">
                <motion.div
                    variants={fadeIn("down", "tween", 0.2, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-accent font-mono mb-2">Get in touch</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-heading-color">Contact Me</h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-10 items-start justify-center max-w-5xl mx-auto">

                    {/* Contact Info */}
                    <motion.div
                        variants={slideIn("left", "tween", 0.2, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex-[0.5] glass p-8 rounded-2xl w-full"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Let's connect!</h3>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            I'm currently looking for new opportunities, my inbox is always open.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-accent">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold">Email</p>
                                    <a href="mailto:tranduchung308@gmail.com" className="text-slate-300 hover:text-accent transition-colors">
                                        tranduchung308@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-accent">
                                    <FaUser size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold">Phone</p>
                                    <p className="text-slate-300">0917700068</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={slideIn("right", "tween", 0.2, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex-[0.75] glass p-8 rounded-2xl w-full"
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <label className="flex flex-col">
                                <span className="text-white font-medium mb-2 flex items-center gap-2">
                                    <FaUser className="text-accent" /> Your Name
                                </span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="What's your name?"
                                    className="bg-slate-800 py-4 px-6 placeholder:text-slate-500 text-white rounded-lg outline-none border border-slate-700 focus:border-accent font-medium transition-colors"
                                    required
                                />
                            </label>
                            <label className="flex flex-col">
                                <span className="text-white font-medium mb-2 flex items-center gap-2">
                                    <FaEnvelope className="text-accent" /> Your Email
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="What's your email?"
                                    className="bg-slate-800 py-4 px-6 placeholder:text-slate-500 text-white rounded-lg outline-none border border-slate-700 focus:border-accent font-medium transition-colors"
                                    required
                                />
                            </label>
                            <label className="flex flex-col">
                                <span className="text-white font-medium mb-2 flex items-center gap-2">
                                    <FaPen className="text-accent" /> Your Message
                                </span>
                                <textarea
                                    rows={5}
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="What do you want to say?"
                                    className="bg-slate-800 py-4 px-6 placeholder:text-slate-500 text-white rounded-lg outline-none border border-slate-700 focus:border-accent font-medium transition-colors resize-none"
                                    required
                                />
                            </label>

                            <button
                                type="submit"
                                className="bg-accent text-white py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl hover:bg-opacity-90 transition-all flex items-center gap-2"
                            >
                                {loading ? "Sending..." : "Send Message"}
                                {!loading && <FaPaperPlane />}
                            </button>

                            {result && (
                                <span className={`text-sm font-bold mt-2 ${result.includes("wrong") ? "text-red-500" : "text-green-500"}`}>
                                    {result}
                                </span>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
