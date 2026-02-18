"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
            {/* Background Gradient Blobs */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-400/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-violet-400/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-purple-300/15 rounded-full blur-[100px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 max-w-3xl"
            >
                <div className="space-y-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-sm font-medium mb-4"
                    >
                        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                        Available for opportunities
                    </motion.div>
                    <h2 className="text-sm md:text-base font-semibold text-indigo-500 tracking-widest uppercase">
                        Hansanie Neththasinghe
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                        Software Engineer <br />
                        <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">& Full Stack Developer</span>
                    </h1>
                </div>

                <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
                    Passionate undergraduate specializing in building modern web applications and scalable solutions.
                    Experienced in MERN stack, DevOps, and cloud technologies.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link href="/projects">
                        <Button size="lg" className="group">
                            View My Work
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" size="lg">
                            Contact Me
                        </Button>
                    </Link>
                    <Button variant="ghost" size="lg">
                        Download CV <Download className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </motion.div>
        </section>
    );
}
