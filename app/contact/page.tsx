"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Message sent! (This is a demo)");
        }, 1500);
    };

    return (
        <div className="container mx-auto px-6 py-12 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
                <p className="text-foreground/60 text-lg">
                    I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Link
                                href="mailto:hansanie@example.com"
                                className="flex items-center gap-3 text-foreground/60 hover:text-indigo-600 transition-colors group"
                            >
                                <div className="p-2 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors">
                                    <Mail className="h-4 w-4 text-indigo-600" />
                                </div>
                                <span>hansanie@example.com</span>
                            </Link>
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                className="flex items-center gap-3 text-foreground/60 hover:text-indigo-600 transition-colors group"
                            >
                                <div className="p-2 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors">
                                    <Linkedin className="h-4 w-4 text-indigo-600" />
                                </div>
                                <span>LinkedIn Profile</span>
                            </Link>
                            <Link
                                href="https://github.com"
                                target="_blank"
                                className="flex items-center gap-3 text-foreground/60 hover:text-indigo-600 transition-colors group"
                            >
                                <div className="p-2 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors">
                                    <Github className="h-4 w-4 text-indigo-600" />
                                </div>
                                <span>GitHub Profile</span>
                            </Link>
                            <div className="flex items-center gap-3 text-foreground/60">
                                <div className="p-2 bg-indigo-100 rounded-lg">
                                    <MapPin className="h-4 w-4 text-indigo-600" />
                                </div>
                                <span>Sri Lanka</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Send a Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-foreground/70">Name</label>
                                <Input id="name" placeholder="Your name" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground/70">Email</label>
                                <Input id="email" type="email" placeholder="Your email" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground/70">Message</label>
                                <Textarea id="message" placeholder="Your message..." className="min-h-[120px]" required />
                            </div>
                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : (
                                    <>
                                        Send Message <Send className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
