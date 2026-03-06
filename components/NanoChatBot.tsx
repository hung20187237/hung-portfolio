"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCommentDots, FaTimes, FaPaperPlane, FaUser } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

interface ChatMessage {
    name: string;
    text: string;
    timestamp: number;
}

const NanoChatBot = () => {
    const { t } = useLanguage();
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [comments, setComments] = useState<ChatMessage[]>([]);

    // Load saved messages and name
    useEffect(() => {
        const savedComments = localStorage.getItem("nanoChatComments");
        const savedName = localStorage.getItem("nanoChatClientName");
        if (savedComments) setComments(JSON.parse(savedComments));
        if (savedName) setName(savedName);
    }, []);

    // Save messages
    useEffect(() => {
        localStorage.setItem("nanoChatComments", JSON.stringify(comments));
    }, [comments]);

    // Save name
    useEffect(() => {
        if (name) localStorage.setItem("nanoChatClientName", name);
    }, [name]);

    const sendMessage = () => {
        if (!message.trim() || !name.trim()) return;
        const newMessage = { name, text: message.trim(), timestamp: Date.now() };
        setComments([...comments, newMessage]);
        setMessage("");
    };

    return (
        <>
            <AnimatePresence>
                {/* Floating Button */}
                <motion.button
                    onClick={() => setOpen(!open)}
                    className="fixed bottom-6 right-6 bg-accent text-primary p-4 rounded-full shadow-lg z-50 hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    {open ? <FaTimes size={24} /> : <FaCommentDots size={24} />}
                </motion.button>

                {/* Chat Window */}
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-24 right-6 w-80 md:w-96 bg-primary border border-slate-700/50 rounded-xl shadow-2xl flex flex-col overflow-hidden z-40"
                    >
                        {/* Header */}
                        <div className="bg-secondary p-4 flex items-center justify-between border-b border-slate-700">
                            <h3 className="text-accent font-semibold flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                {t("chat.title")}
                            </h3>
                            <span className="text-xs text-slate-400">{comments.length} {t("chat.messages")}</span>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 p-4 h-80 overflow-y-auto bg-slate-900/50 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                            {comments.length === 0 ? (
                                <div className="text-center text-slate-500 mt-20">
                                    <p className="mb-2 text-4xl">👋</p>
                                    <p>{t("chat.empty_1")}</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {comments.map((c, i) => (
                                        <div key={i} className={`flex flex-col ${c.name === name ? 'items-end' : 'items-start'}`}>
                                            <div className={`max-w-[85%] p-3 rounded-lg text-sm ${c.name === name
                                                    ? 'bg-accent/10 border border-accent/20 text-slate-200 rounded-tr-none'
                                                    : 'bg-secondary border border-slate-700 text-slate-300 rounded-tl-none'
                                                }`}>
                                                <div className="flex items-center gap-2 mb-1 opacity-70 text-xs">
                                                    <FaUser size={10} />
                                                    <span className="font-semibold">{c.name}</span>
                                                    <span className="text-[10px] ml-1">{new Date(c.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                                </div>
                                                {c.text}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-secondary border-t border-slate-700">
                            {!name ? (
                                <div className="space-y-3">
                                    <label className="text-xs text-slate-400 block">{t("chat.join_label")}</label>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder={t("chat.join_placeholder")}
                                            className="flex-1 bg-slate-900 border border-slate-700 rounded px-3 py-2 text-sm text-slate-200 outline-none focus:border-accent transition-colors"
                                            onChange={(e) => setName(e.target.value)}
                                            onKeyDown={(e) => e.key === "Enter" && name && localStorage.setItem("nanoChatClientName", name)}
                                        />
                                        <button
                                            onClick={() => name && localStorage.setItem("nanoChatClientName", name)}
                                            className="bg-accent text-primary px-4 py-2 rounded text-sm font-semibold hover:bg-accent/80 transition-colors"
                                        >
                                            {t("chat.join_btn")}
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        className="flex-1 bg-slate-900 border border-slate-700 rounded px-3 py-2 text-sm text-slate-200 outline-none focus:border-accent transition-colors"
                                        placeholder={t("chat.type_placeholder")}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                                    />
                                    <button
                                        onClick={sendMessage}
                                        className="bg-accent text-primary p-2 rounded hover:bg-accent/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={!message.trim()}
                                    >
                                        <FaPaperPlane size={16} />
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default NanoChatBot;
