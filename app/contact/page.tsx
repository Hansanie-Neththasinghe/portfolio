"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send, MapPin, Check, User } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form states
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <div className="container mx-auto px-6 py-12 space-y-12 max-w-4xl">
      {/* Title */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold tracking-tight"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-foreground/60 text-lg"
        >
          I&apos;m currently seeking internship/entry opportunities. Let&apos;s talk about projects or collaboration!
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-5 gap-8 items-start">
        {/* Info Column */}
        <div className="md:col-span-2 space-y-6">
          <Card className="border-border bg-card/60 backdrop-blur-sm shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Contact Information</CardTitle>
              <CardDescription className="text-xs">Feel free to connect on social media or reach out directly.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link
                href="mailto:hansanieththasinghe@gmail.com"
                className="flex items-center gap-3 text-foreground/60 hover:text-indigo-500 transition-colors group"
              >
                <div className="p-2 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/25 transition-colors duration-200">
                  <Mail className="h-4 w-4 text-indigo-500" />
                </div>
                <span className="text-sm truncate">hansanieththasinghe@gmail.com</span>
              </Link>
              
              <Link
                href="https://www.linkedin.com/in/hansanie-neththasinghe"
                target="_blank"
                className="flex items-center gap-3 text-foreground/60 hover:text-indigo-500 transition-colors group"
              >
                <div className="p-2 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/25 transition-colors duration-200">
                  <Linkedin className="h-4 w-4 text-indigo-500" />
                </div>
                <span className="text-sm">LinkedIn Profile</span>
              </Link>

              <Link
                href="https://github.com/Hansanie-Neththasinghe"
                target="_blank"
                className="flex items-center gap-3 text-foreground/60 hover:text-indigo-500 transition-colors group"
              >
                <div className="p-2 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/25 transition-colors duration-200">
                  <Github className="h-4 w-4 text-indigo-500" />
                </div>
                <span className="text-sm">GitHub Profile</span>
              </Link>

              <div className="flex items-center gap-3 text-foreground/60">
                <div className="p-2 bg-indigo-500/10 rounded-lg">
                  <MapPin className="h-4 w-4 text-indigo-500" />
                </div>
                <span className="text-sm">Sri Lanka</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Form Column */}
        <Card className="md:col-span-3 border-border bg-card/60 backdrop-blur-sm shadow-md overflow-hidden relative">
          <div className="h-1.5 bg-gradient-to-r from-indigo-500 to-violet-500" />
          <CardHeader>
            <CardTitle className="text-lg">Send a Message</CardTitle>
          </CardHeader>
          <CardContent className="min-h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-foreground/70">Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-foreground/30" />
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="pl-10 border-border bg-card/45 focus-visible:ring-indigo-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-foreground/70">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-foreground/30" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="pl-10 border-border bg-card/45 focus-visible:ring-indigo-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-foreground/70">Message</label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-[120px] border-border bg-card/45 focus-visible:ring-indigo-500"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white border-0 shadow-md cursor-pointer transition-colors duration-200"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <span className="flex items-center justify-center gap-1.5">
                        Send Message <Send className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="flex flex-col items-center justify-center text-center space-y-4 py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 350, damping: 15, delay: 0.1 }}
                    className="h-16 w-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center border border-emerald-500/20 shadow-inner"
                  >
                    <Check className="h-8 w-8" />
                  </motion.div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
                    <p className="text-sm text-foreground/50 max-w-xs mx-auto leading-relaxed">
                      Thank you for reaching out, Hansanie will receive your message and respond shortly.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="cursor-pointer border-border hover:bg-muted/40"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
