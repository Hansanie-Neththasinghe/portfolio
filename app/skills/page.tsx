"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Layout, Terminal, Server, Smartphone } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  gradient: string;
  glowColor: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: <Layout className="h-6 w-6" />,
    gradient: "from-indigo-500 to-blue-500",
    glowColor: "group-hover:shadow-indigo-500/10",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5 & CSS3", level: 90 },
      { name: "Figma", level: 75 }
    ]
  },
  {
    title: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    gradient: "from-emerald-500 to-teal-500",
    glowColor: "group-hover:shadow-emerald-500/10",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "Java (OOP, MVC)", level: 80 },
      { name: "C#", level: 70 },
      { name: "Python", level: 70 }
    ]
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    gradient: "from-violet-500 to-purple-500",
    glowColor: "group-hover:shadow-violet-500/10",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 }
    ]
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="h-6 w-6" />,
    gradient: "from-orange-500 to-amber-500",
    glowColor: "group-hover:shadow-orange-500/10",
    skills: [
      { name: "Flutter", level: 75 },
      { name: "Android SDK", level: 70 }
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: <Terminal className="h-6 w-6" />,
    gradient: "from-slate-500 to-zinc-500",
    glowColor: "group-hover:shadow-slate-500/10",
    skills: [
      { name: "Docker", level: 80 },
      { name: "AWS (ECS, S3, IAM)", level: 75 },
      { name: "CI/CD (GitHub Actions)", level: 75 }
    ]
  },
  {
    title: "Tools & Methodologies",
    icon: <Code2 className="h-6 w-6" />,
    gradient: "from-pink-500 to-rose-500",
    glowColor: "group-hover:shadow-pink-500/10",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Agile Scrum", level: 85 },
      { name: "Microservices", level: 75 }
    ]
  }
];

function SkillBar({ name, level, gradient }: { name: string; level: number; gradient: string }) {
  return (
    <div className="space-y-1.5 w-full">
      <div className="flex justify-between text-xs font-semibold">
        <span className="text-foreground/75">{name}</span>
        <span className="text-foreground/50">{level}%</span>
      </div>
      <div className="h-1.5 w-full bg-muted/60 dark:bg-muted/30 rounded-full overflow-hidden border border-border/20">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
        />
      </div>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-6 py-12 space-y-12 max-w-5xl">
      {/* Title */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold tracking-tight"
        >
          Technical Skills
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-foreground/60 text-lg"
        >
          A detailed overview of my technical expertise, platforms, and languages.
        </motion.p>
      </div>

      {/* Grid of Categories */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-55px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div
              className={`group relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${category.glowColor}`}
            >
              {/* Top border accent line */}
              <div className={`h-1 w-full bg-gradient-to-r ${category.gradient}`} />

              {/* Card Body */}
              <div className="p-6 space-y-6">
                {/* Title and Icon */}
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} text-white shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-base font-bold text-foreground leading-tight">{category.title}</h3>
                </div>

                {/* Skill Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      gradient={category.gradient}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
