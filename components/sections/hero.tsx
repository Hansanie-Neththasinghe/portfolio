"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
            {/* Background Gradient Blob */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 max-w-3xl"
            >
                <div className="space-y-2">
                    <h2 className="text-sm md:text-base font-medium text-primary tracking-wide uppercase">
                        Hansanie Neththasinghe
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                        Software Engineer <br />
                        <span className="text-muted-foreground">& Full Stack Developer</span>
                    </h1>
                </div>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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
