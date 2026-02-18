import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Layout, Terminal, Server, Smartphone } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend Development",
        icon: <Layout className="h-6 w-6 text-blue-500" />,
        skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Figma"]
    },
    {
        title: "Backend Development",
        icon: <Server className="h-6 w-6 text-green-500" />,
        skills: ["Node.js", "Express.js", "Java (OOP, MVC)", "C#", "Python"]
    },
    {
        title: "Database",
        icon: <Database className="h-6 w-6 text-purple-500" />,
        skills: ["MongoDB", "MySQL"]
    },
    {
        title: "Mobile Development",
        icon: <Smartphone className="h-6 w-6 text-orange-500" />,
        skills: ["Flutter", "Android SDK"]
    },
    {
        title: "DevOps & Cloud",
        icon: <Terminal className="h-6 w-6 text-slate-500" />,
        skills: ["Docker", "AWS (ECS, S3, IAM)", "CI/CD (GitHub Actions)"]
    },
    {
        title: "Tools & Methodologies",
        icon: <Code2 className="h-6 w-6 text-pink-500" />,
        skills: ["Git & GitHub", "Postman", "Agile", "Microservices Architecture"]
    }
];

export default function SkillsPage() {
    return (
        <div className="container mx-auto px-6 py-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-4 text-center max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight">Technical Skills</h1>
                <p className="text-muted-foreground text-lg">
                    A comprehensive overview of my technical expertise and the tools I use to build scalable solutions.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            <div className="p-2 bg-muted rounded-lg">
                                {category.icon}
                            </div>
                            <CardTitle className="text-lg">{category.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="text-sm font-normal">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
