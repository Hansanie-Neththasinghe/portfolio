import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

export default function ExperiencePage() {
    return (
        <div className="container mx-auto px-6 py-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Experience</h1>
                <p className="text-foreground/60 text-lg">
                    My professional journey and industry experience.
                </p>
            </div>

            <div className="max-w-4xl">
                <Card className="relative overflow-hidden border-indigo-200">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-violet-500" />
                    <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <CardTitle className="text-xl flex items-center gap-2">
                                    <div className="p-1.5 bg-indigo-100 rounded-lg">
                                        <Briefcase className="h-5 w-5 text-indigo-600" />
                                    </div>
                                    Full Stack Developer Internship
                                </CardTitle>
                                <CardDescription className="text-base font-medium text-foreground/70 mt-1">
                                    Coltex Biz Solutions Pvt. Ltd.
                                </CardDescription>
                            </div>
                            <Badge variant="secondary" className="w-fit text-sm">July 2024 - June 2025</Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-foreground/60">
                            Developed full-stack applications including Restaurant Management System, Service Station Management System, and Pawning Management systems using the MERN stack.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-foreground/60 marker:text-indigo-400">
                            <li>Built RESTful APIs with Node.js/Express and designed efficient schemas in MongoDB.</li>
                            <li>Created responsive UIs with React.js and designed user-friendly prototypes in Figma.</li>
                            <li>Collaborated in team projects while following Agile methodologies.</li>
                            <li>Utilized version control (GitHub) and best coding practices.</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 pt-4">
                            {["React.js", "Node.js", "MongoDB", "Express", "Figma", "Agile", "GitHub"].map((tech) => (
                                <Badge key={tech} variant="secondary">{tech}</Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
