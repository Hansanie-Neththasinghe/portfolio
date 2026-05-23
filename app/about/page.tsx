"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Trophy, User, Calendar, BookOpen, Star } from "lucide-react";

function AnimatedNumber({ value, suffix = "", duration = 1 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration]);

  return <span>{count}{suffix}</span>;
}

function AnimatedFloat({ value, duration = 1 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(progress * value);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration]);

  return <span>{count.toFixed(2)}</span>;
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-12 space-y-12 max-w-5xl">
      {/* Page Title */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold tracking-tight"
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-foreground/60 text-lg leading-relaxed"
        >
          Passionate, final-year Software Engineering undergraduate (awaiting graduation in March 2026) with industry experience, committed to writing clean, maintainable, and high-performance code.
        </motion.p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Weighted GPA", element: <AnimatedFloat value={3.61} /> },
          { label: "Dean's List Semesters", element: <AnimatedNumber value={3} /> },
          { label: "Months Internship", element: <AnimatedNumber value={12} suffix="m" /> },
          { label: "Completed Projects", element: <AnimatedNumber value={15} suffix="+" /> },
        ].map((metric, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-5 rounded-2xl border border-border bg-card/60 backdrop-blur-sm text-center hover:border-indigo-500/30 transition-all duration-300 shadow-md"
          >
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent mb-1">
              {metric.element}
            </h3>
            <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">{metric.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Info Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Bio Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full border-border bg-card/60 backdrop-blur-sm hover:border-indigo-500/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2.5 text-xl">
                <div className="p-2 bg-indigo-500/10 rounded-xl">
                  <User className="h-5 w-5 text-indigo-500" />
                </div>
                Bio & Background
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/70 leading-relaxed text-sm">
              <p>
                As a developer, I believe in structured architecture and user-first execution. I have strong time management and leadership skills developed from academic projects and industry internships.
              </p>
              <p>
                Continuous learning is my core philosophy. I am eager to apply my technical background to real-world deployment challenges and write secure, scalable services.
              </p>
              <p className="font-semibold text-indigo-500 dark:text-indigo-400">
                Currently seeking Associate Software Engineer roles.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full border-border bg-card/60 backdrop-blur-sm hover:border-indigo-500/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2.5 text-xl">
                <div className="p-2 bg-indigo-500/10 rounded-xl">
                  <GraduationCap className="h-5 w-5 text-indigo-500" />
                </div>
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-2 border-indigo-500/50 pl-4 space-y-2">
                <h3 className="font-semibold text-foreground text-base">BSc (Hons) in Information Technology</h3>
                <p className="text-sm text-indigo-500 dark:text-indigo-400 font-medium">Specializing in Software Engineering</p>
                <div className="flex flex-col gap-1 text-xs text-foreground/50 font-medium">
                  <span className="flex items-center gap-1"><BookOpen size={12} /> Sri Lanka Institute of Information Technology (SLIIT)</span>
                  <span className="flex items-center gap-1"><Calendar size={12} /> Jun 2022 - 2025</span>
                  <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400"><Star size={12} /> Cumulative GPA: 3.61 / 4.0</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Achievements Timeline/Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Trophy className="h-6 w-6 text-amber-500" />
          Academic Honors
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { year: "2025", semester: "Final Year 2nd Semester", gpa: "3.83" },
            { year: "2023", semester: "2nd Year 1st Semester", gpa: "3.82" },
            { year: "2022", semester: "1st Year 2nd Semester", gpa: "3.83" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-border bg-card/60 backdrop-blur-sm hover:border-indigo-500/30 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
                <CardContent className="pt-6 space-y-3">
                  <div>
                    <Badge variant="outline" className="border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold">
                      Dean&apos;s List Award
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">{item.year}</h4>
                    <p className="text-xs text-foreground/50 mt-0.5">{item.semester}</p>
                  </div>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    Recognized for academic excellence, maintaining a high rank in class and strong project performance.
                  </p>
                  <p className="text-sm font-semibold text-indigo-500 dark:text-indigo-400">
                    GPA: {item.gpa}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
