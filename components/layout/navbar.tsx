"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-[#0f0e1a]/90 backdrop-blur-xl border-b border-indigo-900/60 shadow-sm shadow-indigo-950 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    Hansanie<span className="text-foreground/70">.dev</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-foreground/60 hover:text-indigo-600 transition-colors font-medium text-sm uppercase tracking-wider"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center space-x-4 ml-4 border-l pl-4 border-indigo-100">
                        <Link href="https://github.com" target="_blank" className="text-foreground/50 hover:text-indigo-600 transition-colors">
                            <Github size={20} />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" className="text-foreground/50 hover:text-indigo-600 transition-colors">
                            <Linkedin size={20} />
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-foreground/70 hover:text-indigo-600 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-[#0f0e1a]/95 backdrop-blur-xl border-b border-indigo-900/60 shadow-lg md:hidden"
                    >
                        <div className="flex flex-col py-8 px-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-white/80 hover:text-indigo-400 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex space-x-6 pt-4 mt-4 border-t border-indigo-900/60">
                                <Link href="https://github.com" target="_blank">
                                    <Github className="text-foreground/50 hover:text-indigo-600 transition-colors" />
                                </Link>
                                <Link href="https://linkedin.com" target="_blank">
                                    <Linkedin className="text-foreground/50 hover:text-indigo-600 transition-colors" />
                                </Link>
                                <Link href="mailto:hansanie@example.com">
                                    <Mail className="text-foreground/50 hover:text-indigo-600 transition-colors" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
