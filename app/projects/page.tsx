"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code, BookOpen } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  tags: string[];
  categories: string[];
  highlight?: string;
  codeUrl: string;
  demoUrl: string;
  publicationUrl?: string;
}

const projects: Project[] = [
  {
    title: "Punchi-Pasala",
    description: "An interactive educational web application designed to identify learning difficulties of Deaf and Mute students in Sri Lanka. Features guided sign language instructions and webcam inputs identified by ML models.",
    tags: ["React.js", "Node.js", "Python", "Tensorflow", "AWS"],
    categories: ["Web", "ML / Research"],
    highlight: "Research Project",
    codeUrl: "https://github.com/KCGSPerera/R25-009",
    demoUrl: "https://hansanie-neththasinghe.github.io/punchi-pasala/",
    publicationUrl: "https://www.researchgate.net/publication/401232125_Identify_Dyscalculia_Dysgraphia_Learning_Disabilities_in_Deaf_and_Mute_Primary_Students_and_Help_to_Improve_Learning_Abilities",
  },
  {
    title: "EV Charging Station Booking",
    description: "A centralized web service with client interfaces for web and mobile. Features booking management and Google Map integration.",
    tags: ["C#", "React", "Android", "Google Maps"],
    categories: ["Web", "Mobile"],
    codeUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Waste Management System",
    description: "Automated garbage collection scheduling based on bin weight limits. Includes route optimization using Google Maps and vulnerability testing with ZAP.",
    tags: ["MERN Stack", "Google Maps", "ZAP"],
    categories: ["Web"],
    codeUrl: "#",
    demoUrl: "#",
  },
  {
    title: "E-Commerce Backend",
    description: "Microservices architecture backend with automated CI/CD pipelines and cloud deployment.",
    tags: ["Node.js", "Microservices", "Docker", "AWS ECS", "CI/CD"],
    categories: ["Web", "DevOps"],
    codeUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Code Complexity Tool",
    description: "Tool to calculate Cognitive Functional Size and Code Complexity of Java code segments. Features file upload and PDF report generation.",
    tags: ["MERN Stack", "Monaco Editor"],
    categories: ["Web"],
    codeUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Planaroma",
    description: "Online event planner platform for users to organize and manage events centrally.",
    tags: ["Java", "MVC", "MySQL", "Bootstrap"],
    categories: ["Web"],
    codeUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Rheumatic Care App",
    description: "Mobile application to manage patients suffering from rheumatic disease in a clinic.",
    tags: ["Flutter", "Node.js", "MongoDB"],
    categories: ["Mobile"],
    codeUrl: "#",
    demoUrl: "#",
  }
];

const categories = ["All", "Web", "Mobile", "ML / Research", "DevOps"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter((project) =>
    filter === "All" ? true : project.categories.includes(filter)
  );

  return (
    <div className="container mx-auto px-6 py-12 space-y-10 max-w-5xl">
      {/* Title */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold tracking-tight"
        >
          Featured Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-foreground/60 text-lg"
        >
          Academic and personal projects demonstrating full-stack engineering and cloud integration.
        </motion.p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 justify-center pb-4 border-b border-border/40">
        {categories.map((cat) => {
          const isActive = filter === cat;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-colors cursor-pointer ${
                isActive ? "text-indigo-600 dark:text-indigo-400 font-bold" : "text-foreground/50 hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-indigo-500/10 dark:bg-indigo-400/10 rounded-full -z-10 border border-indigo-500/20 dark:border-indigo-400/20"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="flex flex-col h-full border-border bg-card/60 backdrop-blur-sm hover:border-indigo-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                {/* Visual Accent header */}
                <div className="h-2 bg-gradient-to-r from-indigo-500 to-violet-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start gap-2">
                    <CardTitle className="text-lg leading-snug group-hover:text-indigo-500 transition-colors duration-200">{project.title}</CardTitle>
                    {project.highlight && (
                      <Badge variant="outline" className="text-[9px] font-bold h-5 shrink-0 border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                        {project.highlight}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="flex-grow space-y-4 pb-4">
                  <CardDescription className="text-xs text-foreground/60 leading-relaxed min-h-[60px]">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-muted/80 text-foreground/70 border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0 gap-2 p-6 border-t border-border/20 flex-wrap">
                  {project.publicationUrl && (
                    <Button variant="outline" size="sm" className="w-full text-xs cursor-pointer border-indigo-500/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/10" asChild>
                      <Link href={project.publicationUrl} target="_blank">
                        <BookOpen className="mr-2 h-3.5 w-3.5" /> Publication
                      </Link>
                    </Button>
                  )}
                  <div className="flex w-full gap-2">
                    <Button variant="outline" size="sm" className="flex-1 text-xs cursor-pointer border-border hover:bg-muted/40" asChild>
                      <Link href={project.codeUrl} target="_blank">
                        <Github className="mr-2 h-3.5 w-3.5" /> Code
                      </Link>
                    </Button>
                    <Button size="sm" className="flex-1 text-xs cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white border-0" asChild>
                      <Link href={project.demoUrl} target="_blank">
                        <ExternalLink className="mr-2 h-3.5 w-3.5" /> Demo
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
