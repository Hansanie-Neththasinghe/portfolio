"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Code2, Search, ArrowUpRight } from "lucide-react";

const experienceTimeline = [
  {
    type: "search",
    icon: <Search className="h-5 w-5" />,
    role: "Seeking Associate Software Engineer Role",
    company: "Open for Opportunities",
    period: "March 2026 onwards",
    description: "Actively seeking a full-time role to leverage full-stack development, DevOps, and cloud skills in a fast-paced team.",
    highlights: ["MERN Stack", "DevOps & CI/CD", "AWS Cloud", "Agile Methodologies"],
    color: "indigo"
  },
  {
    type: "work",
    icon: <Briefcase className="h-5 w-5" />,
    role: "Full Stack Developer Internship",
    company: "Coltex Biz Solutions Pvt. Ltd.",
    period: "July 2024 - June 2025",
    description: "Developed and maintained corporate MERN stack platforms including Restaurant Management, Service Station Management, and Pawning Systems.",
    highlights: [
      "Built RESTful APIs with Node.js/Express and optimized MongoDB database structures.",
      "Designed responsive and user-friendly interfaces in React.js from Figma design systems.",
      "Collaborated closely with cross-functional teams in an Agile Scrum model."
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Express", "Figma", "Agile", "Git"],
    color: "violet"
  },
  {
    type: "research",
    icon: <Code2 className="h-5 w-5" />,
    role: "Research & Development Lead (Punchi-Pasala)",
    company: "SLIIT Final Year Project",
    period: "June 2024 - November 2025",
    description: "Engineered a machine learning-backed educational system to assist Deaf & Mute children in Sri Lanka learning sign language.",
    highlights: [
      "Integrated Python/TensorFlow computer vision models with Next.js web application.",
      "Designed client-side webcam feed loops with real-time feedback mechanisms.",
      "Deployed project microservices to AWS cloud services."
    ],
    tech: ["React.js", "Python", "TensorFlow", "FastAPI", "AWS", "WebSockets"],
    color: "purple"
  },
  {
    type: "education",
    icon: <GraduationCap className="h-5 w-5" />,
    role: "Software Engineering Specialization",
    company: "Sri Lanka Institute of Information Technology (SLIIT)",
    period: "2022 - 2025",
    description: "Acquired rigorous training in algorithms, database design, software engineering methodologies, and mobile development.",
    highlights: [
      "Dean's List Award recipient in multiple semesters.",
      "Cumulative GPA of 3.61 / 4.0."
    ],
    color: "emerald"
  }
];

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-6 py-12 space-y-12 max-w-4xl">
      {/* Header */}
      <div className="space-y-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold tracking-tight"
        >
          My Journey
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-foreground/60 text-lg max-w-xl mx-auto"
        >
          A timeline of my professional training, academic research, and industry internships.
        </motion.p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative border-l border-border pl-6 ml-4 md:ml-8 space-y-12 py-4">
        {/* Animated Background Line Glow */}
        <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-indigo-500 via-violet-500 to-emerald-500 -translate-x-[0.5px] pointer-events-none opacity-50" />

        {experienceTimeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline node icon */}
            <span className="absolute -left-[39px] top-1 flex h-7.5 w-7.5 items-center justify-center rounded-full bg-card border border-border shadow-md text-indigo-500 dark:text-indigo-400 z-10 hover:scale-110 transition-transform duration-200">
              {item.icon}
            </span>

            {/* Content card */}
            <Card className="border-border bg-card/60 backdrop-blur-sm hover:border-indigo-500/20 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
              {/* Highlight accent band on left border */}
              <div className={`absolute top-0 left-0 w-1 h-full bg-indigo-500`} />
              
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-border/40 pb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-indigo-500 transition-colors duration-200 flex items-center gap-1">
                      {item.role}
                      {item.type === "search" && <ArrowUpRight className="h-4 w-4 animate-bounce" />}
                    </h3>
                    <p className="text-sm font-semibold text-foreground/70 mt-0.5">{item.company}</p>
                  </div>
                  <Badge variant="outline" className="w-fit border-indigo-500/30 bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 font-bold px-3 py-1 text-xs">
                    {item.period}
                  </Badge>
                </div>

                <p className="text-sm text-foreground/60 leading-relaxed">
                  {item.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-1.5 text-xs text-foreground/75 leading-relaxed pl-1">
                  {item.highlights.map((bullet, bi) => (
                    <li key={bi} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500/70" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                {item.tech && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/5 dark:bg-indigo-400/5 border border-indigo-500/10 dark:border-indigo-400/10 text-indigo-600 dark:text-indigo-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
