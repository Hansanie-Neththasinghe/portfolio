"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2, Database } from "lucide-react";
import Link from "next/link";

interface Module {
  id: string;
  title: string;
  description: string;
  resourceCount: number;
  tags: string[];
  gradient: string;
  icon: React.ReactNode;
}

export default function LearningHubPage() {
  const modules: Module[] = [
    {
      id: "dsa",
      title: "Data Structures & Algorithms (DSA)",
      description: "Explore fundamental DSA concepts.",
      resourceCount: 1,
      tags: ["Fundamentals", "Data Structures", "Algorithms"],
      gradient: "from-blue-500 to-indigo-500",
      icon: <Code2 className="h-6 w-6 text-indigo-500" />,
    },
    {
      id: "coming-soon",
      title: "Object Oriented Concepts (OOC)",
      description: "Learn Object Oriented Concepts with practical examples and exercises.",
      resourceCount: 0,
      tags: ["OOC", "Fundamentals"],
      gradient: "from-violet-500 to-fuchsia-500",
      icon: <Code2 className="h-6 w-6 text-foreground/40" />,
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12 space-y-10 max-w-5xl">
      {/* Page Title */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
        >
          <Sparkles className="h-3.5 w-3.5" /> Learning Hub
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-extrabold tracking-tight"
        >
          Study Resources & Modules
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-foreground/60 text-lg leading-relaxed"
        >
          A curated library of learning materials, lecture notes, and reference guides compiled during my academic journey.
        </motion.p>
      </div>

      {/* Modules Grid */}
      <div className="grid md:grid-cols-2 gap-8 pt-6">
        {modules.map((mod, index) => {
          const isAvailable = mod.resourceCount > 0;
          return (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <Card className={`flex flex-col h-full border-border bg-card/60 backdrop-blur-sm transition-all duration-300 group overflow-hidden relative ${
                isAvailable 
                  ? "hover:border-indigo-500/30 hover:shadow-xl hover:-translate-y-1" 
                  : "opacity-80 border-dashed"
              }`}>
                {/* Visual Accent Header */}
                <div className={`h-2 bg-gradient-to-r ${mod.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${isAvailable ? "bg-indigo-500/10" : "bg-foreground/5"}`}>
                        {mod.icon}
                      </div>
                      <CardTitle className="text-xl leading-snug group-hover:text-indigo-500 transition-colors duration-200">
                        {mod.title}
                      </CardTitle>
                    </div>
                    {isAvailable ? (
                      <Badge variant="outline" className="border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold shrink-0">
                        {mod.resourceCount} {mod.resourceCount === 1 ? 'Resource' : 'Resources'}
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="border-border bg-muted/30 text-foreground/40 font-semibold shrink-0">
                        Coming Soon
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="flex-grow space-y-4 pb-6 px-6">
                  <CardDescription className="text-sm text-foreground/60 leading-relaxed min-h-[60px]">
                    {mod.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {mod.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-muted/80 text-foreground/70 border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                {isAvailable && (
                  <div className="p-6 pt-0 border-t border-border/20 mt-auto">
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white border-0 shadow-md cursor-pointer transition-colors duration-200 animate-none" asChild>
                      <Link href={`/learning-hub/${mod.id}`}>
                        <span className="flex items-center justify-center w-full">
                          Explore Resources <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </Button>
                  </div>
                )}
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
