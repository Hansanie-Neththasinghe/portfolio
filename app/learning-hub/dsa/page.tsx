"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Download, Eye } from "lucide-react";
import Link from "next/link";

interface Resource {
  title: string;
  description: string;
  fileName: string;
  fileSize: string;
  fileType: string;
  filePath: string;
}

const resources: Resource[] = [
  {
    title: "Stacks",
    description: "",
    fileName: "DSA_1.pdf",
    fileSize: "597 KB",
    fileType: "PDF Document",
    filePath: "/dsa/DSA_1.pdf",
  }
];

export default function DSAPage() {
  return (
    <div className="container mx-auto px-6 py-12 space-y-10 max-w-5xl">
      {/* Back Button & Title Area */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/learning-hub"
            className="inline-flex items-center text-sm font-medium text-foreground/60 hover:text-indigo-500 transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Learning Hub
          </Link>
        </motion.div>

        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight"
          >
            DSA Resources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-foreground/60 text-lg"
          >
            Select notes, references, and study aids to help master Data Structures and Algorithms.
          </motion.p>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {resources.map((res, index) => (
          <motion.div
            key={res.fileName}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
          >
            <Card className="flex flex-col h-full border-border bg-card/60 backdrop-blur-sm hover:border-indigo-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
              {/* Top Accent Strip */}
              <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-500 shrink-0">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-base leading-snug group-hover:text-indigo-500 transition-colors duration-200">
                      {res.title}
                    </CardTitle>
                    <div className="flex gap-2 text-[10px] font-semibold text-foreground/40">
                      <span>{res.fileType}</span>
                      <span>•</span>
                      <span>{res.fileSize}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-grow pb-6 px-6">
                <CardDescription className="text-xs text-foreground/60 leading-relaxed min-h-[50px]">
                  {res.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="pt-0 gap-2 p-6 border-t border-border/20 mt-auto">
                <Button variant="outline" size="sm" className="w-full text-xs cursor-pointer border-border hover:bg-muted/40 animate-none" asChild>
                  <a href={res.filePath} target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center justify-center w-full">
                      <Eye className="mr-2 h-3.5 w-3.5" /> View
                    </span>
                  </a>
                </Button>
                <Button size="sm" className="w-full text-xs cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white border-0 animate-none" asChild>
                  <a href={res.filePath} download={res.fileName}>
                    <span className="flex items-center justify-center w-full">
                      <Download className="mr-2 h-3.5 w-3.5" /> Download
                    </span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
