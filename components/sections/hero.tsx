"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Terminal, FileCode, Coffee, ChevronRight, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const roles = ["Software Engineer", "Full Stack Developer", "DevOps Enthusiast"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState<"ts" | "json" | "sh">("ts");

  // Typewriter effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && currentText === fullText) {
      // Pause before starting deletion
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const codeData = {
    ts: `// portfolio.ts
const developer = {
  name: "Hansanie Neththasinghe",
  education: "BSc (Hons) in IT",
  major: "Software Engineering",
  gpa: "3.61 / 4.0",
  achievements: [
    "Dean's List (2022, 2023, 2025)"
  ],
  isAvailableForHire: true
};`,
    json: `// skills.json
{
  "frontend": [
    "React.js", "Next.js", "Tailwind"
  ],
  "backend": [
    "Node.js", "Express.js", "Java"
  ],
  "cloud": [
    "AWS", "Docker", "CI/CD"
  ],
  "databases": [
    "MongoDB", "MySQL"
  ]
}`,
    sh: `# contact.sh
curl -X POST \\
  -H "Content-Type: application/json" \\
  -d '{"message": "Let\\'s collaborate!"}' \\
  https://hansanie.dev/api/contact

# Status Code: 200 OK ✅`,
  };

  return (
    <section className="min-h-[85vh] flex items-center px-4 py-12 md:py-20 relative overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-400/10 dark:bg-indigo-400/15 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-violet-400/10 dark:bg-violet-400/15 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Description & Actions */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Seeking Associate Software Engineer Roles
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Hi, I&apos;m Hansanie Neththasinghe<br />
              <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
                {currentText}
              </span>
              <span className="animate-pulse text-indigo-500">|</span>
            </h1>
            <p className="text-base md:text-lg text-foreground/60 max-w-xl leading-relaxed">
              Software Engineering graduate specializing in building clean, responsive web applications and secure scalable services. Experienced in the MERN stack, DevOps pipelines, and AWS cloud deployment.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/projects">
              <Button size="lg" className="group shadow-lg hover:shadow-indigo-500/20 bg-indigo-600 hover:bg-indigo-700 text-white border-0 cursor-pointer">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-border hover:bg-muted/50 cursor-pointer">
                Contact Me
              </Button>
            </Link>
            <a href="/Hansanie Neththasinghe - Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="lg" className="hover:bg-muted/50 cursor-pointer">
                Download CV <Download className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Code IDE Console Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 w-full max-w-lg mx-auto"
        >
          <div className="relative rounded-2xl border border-border bg-card/60 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Top Bar (OS Buttons & Tabs) */}
            <div className="flex items-center justify-between px-4 py-3 bg-muted/40 border-b border-border/80">
              <div className="flex space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex space-x-1 text-xs">
                <button
                  onClick={() => setActiveTab("ts")}
                  className={`flex items-center space-x-1.5 px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    activeTab === "ts"
                      ? "bg-card text-indigo-500 font-semibold border border-border/60"
                      : "text-foreground/50 hover:text-foreground/80"
                  }`}
                >
                  <FileCode size={12} />
                  <span>developer.ts</span>
                </button>
                <button
                  onClick={() => setActiveTab("json")}
                  className={`flex items-center space-x-1.5 px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    activeTab === "json"
                      ? "bg-card text-indigo-500 font-semibold border border-border/60"
                      : "text-foreground/50 hover:text-foreground/80"
                  }`}
                >
                  <Settings size={12} />
                  <span>skills.json</span>
                </button>
                <button
                  onClick={() => setActiveTab("sh")}
                  className={`flex items-center space-x-1.5 px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    activeTab === "sh"
                      ? "bg-card text-indigo-500 font-semibold border border-border/60"
                      : "text-foreground/50 hover:text-foreground/80"
                  }`}
                >
                  <Terminal size={12} />
                  <span>contact.sh</span>
                </button>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-5 font-mono text-xs overflow-x-auto min-h-[250px] relative">
              <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none">
                <Coffee size={120} className="text-foreground" />
              </div>
              
              <AnimatePresence mode="wait">
                <motion.pre
                  key={activeTab}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.15 }}
                  className="text-foreground/85 leading-relaxed text-left whitespace-pre"
                >
                  {codeData[activeTab].split("\n").map((line, i) => (
                    <div key={i} className="table-row">
                      <span className="table-cell select-none pr-4 text-foreground/30 text-right w-6">
                        {i + 1}
                      </span>
                      <span className="table-cell">
                        {line.split(/(const|let|var|class|function|return|true|false|curl|-X|-H|-d|http|status)/i).map((part, index) => {
                          const lower = part.toLowerCase();
                          if (["const", "let", "var", "class", "function", "return"].includes(lower)) {
                            return <span key={index} className="text-violet-500 dark:text-violet-400 font-bold">{part}</span>;
                          }
                          if (["true", "false"].includes(lower)) {
                            return <span key={index} className="text-amber-500 font-semibold">{part}</span>;
                          }
                          if (["curl", "-x", "-h", "-d"].includes(lower)) {
                            return <span key={index} className="text-emerald-500 font-semibold">{part}</span>;
                          }
                          if (part.startsWith("//") || part.startsWith("#")) {
                            return <span key={index} className="text-foreground/40 italic">{part}</span>;
                          }
                          if (part.startsWith("http")) {
                            return <span key={index} className="text-indigo-400 underline">{part}</span>;
                          }
                          return <span key={index}>{part}</span>;
                        })}
                      </span>
                    </div>
                  ))}
                </motion.pre>
              </AnimatePresence>
            </div>
            
            {/* Terminal Status bar */}
            <div className="px-4 py-2 bg-muted/20 border-t border-border flex items-center justify-between text-[10px] text-foreground/45">
              <span className="flex items-center gap-1">
                <ChevronRight size={10} /> UTF-8
              </span>
              <span>SLIIT Student Server</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
