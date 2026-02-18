import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background border-t border-border py-12 mt-20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-sm text-foreground/50">
                        © {currentYear} Hansanie Neththasinghe. All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-6">
                    <Link href="https://github.com" target="_blank" className="text-foreground/40 hover:text-indigo-600 transition-colors">
                        <Github size={20} />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" className="text-foreground/40 hover:text-indigo-600 transition-colors">
                        <Linkedin size={20} />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="mailto:contact@hansanie.dev" className="text-foreground/40 hover:text-indigo-600 transition-colors">
                        <Mail size={20} />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
