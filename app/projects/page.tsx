import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Punchi-Pasala",
        description: "An interactive educational web application designed to identify learning difficulties of Deaf and Mute students in Sri Lanka. Features guided sign language instructions and webcam inputs identified by ML models.",
        tags: ["React.js", "Node.js", "Python", "Tensorflow", "AWS"],
        highlight: "Research Project"
    },
    {
        title: "EV Charging Station Booking",
        description: "A centralized web service with client interfaces for web and mobile. Features booking management and Google Map integration.",
        tags: ["C#", "React", "Android", "Google Maps"]
    },
    {
        title: "Waste Management System",
        description: "Automated garbage collection scheduling based on bin weight limits. Includes route optimization using Google Maps and vulnerability testing with ZAP.",
        tags: ["MERN Stack", "Google Maps", "ZAP"]
    },
    {
        title: "E-Commerce Backend",
        description: "Microservices architecture backend with automated CI/CD pipelines and cloud deployment.",
        tags: ["Node.js", "Microservices", "Docker", "AWS ECS", "CI/CD"]
    },
    {
        title: "Code Complexity Tool",
        description: "Tool to calculate Cognitive Functional Size and Code Complexity of Java code segments. Features file upload and PDF report generation.",
        tags: ["MERN Stack", "Monaco Editor"]
    },
    {
        title: "Planaroma",
        description: "Online event planner platform for users to organize and manage events centrally.",
        tags: ["Java", "MVC", "MySQL", "Bootstrap"]
    },
    {
        title: "Rheumatic Care App",
        description: "Mobile application to manage patients suffering from rheumatic disease in a clinic.",
        tags: ["Flutter", "Node.js", "MongoDB"]
    }
];

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-6 py-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Featured Projects</h1>
                <p className="text-muted-foreground text-lg">
                    A collection of my academic and personal projects showcasing my technical expertise.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <Card key={index} className="flex flex-col h-full hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <div className="flex justify-between items-start gap-2">
                                <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
                                {project.highlight && (
                                    <Badge variant="secondary" className="text-[10px] h-5">{project.highlight}</Badge>
                                )}
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-4">
                            <CardDescription className="text-sm">
                                {project.description}
                            </CardDescription>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} variant="outline" className="text-xs bg-muted/40">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="pt-0 gap-2">
                            <Button variant="outline" size="sm" className="w-full text-xs" asChild>
                                <Link href="#">
                                    <Github className="mr-2 h-3 w-3" /> Code
                                </Link>
                            </Button>
                            <Button size="sm" className="w-full text-xs" asChild>
                                <Link href="#">
                                    <ExternalLink className="mr-2 h-3 w-3" /> Demo
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
