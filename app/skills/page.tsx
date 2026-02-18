import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Layout, Terminal, Server, Smartphone } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend Development",
        icon: <Layout className="h-6 w-6" />,
        gradient: "from-indigo-500 to-blue-500",
        lightBg: "bg-indigo-500",
        glowColor: "shadow-indigo-500/20",
        skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Figma"]
    },
    {
        title: "Backend Development",
        icon: <Server className="h-6 w-6" />,
        gradient: "from-emerald-500 to-teal-500",
        lightBg: "bg-emerald-500",
        glowColor: "shadow-emerald-500/20",
        skills: ["Node.js", "Express.js", "Java (OOP, MVC)", "C#", "Python"]
    },
    {
        title: "Database",
        icon: <Database className="h-6 w-6" />,
        gradient: "from-violet-500 to-purple-500",
        lightBg: "bg-violet-500",
        glowColor: "shadow-violet-500/20",
        skills: ["MongoDB", "MySQL"]
    },
    {
        title: "Mobile Development",
        icon: <Smartphone className="h-6 w-6" />,
        gradient: "from-orange-500 to-amber-500",
        lightBg: "bg-orange-500",
        glowColor: "shadow-orange-500/20",
        skills: ["Flutter", "Android SDK"]
    },
    {
        title: "DevOps & Cloud",
        icon: <Terminal className="h-6 w-6" />,
        gradient: "from-slate-500 to-zinc-500",
        lightBg: "bg-slate-500",
        glowColor: "shadow-slate-500/20",
        skills: ["Docker", "AWS (ECS, S3, IAM)", "CI/CD (GitHub Actions)"]
    },
    {
        title: "Tools & Methodologies",
        icon: <Code2 className="h-6 w-6" />,
        gradient: "from-pink-500 to-rose-500",
        lightBg: "bg-pink-500",
        glowColor: "shadow-pink-500/20",
        skills: ["Git & GitHub", "Postman", "Agile", "Microservices Architecture"]
    }
];

export default function SkillsPage() {
    return (
        <div className="container mx-auto px-6 py-12 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-4 text-center max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight">Technical Skills</h1>
                <p className="text-foreground/60 text-lg">
                    A comprehensive overview of my technical expertise and the tools I use to build scalable solutions.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                    <div
                        key={index}
                        className={`group relative rounded-2xl border border-border bg-card overflow-hidden shadow-lg hover:shadow-xl ${category.glowColor} hover:-translate-y-1 transition-all duration-300`}
                    >
                        {/* Top gradient accent bar */}
                        <div className={`h-1 w-full bg-gradient-to-r ${category.gradient}`} />

                        {/* Subtle background glow */}
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.gradient} opacity-5 rounded-full blur-2xl -translate-y-8 translate-x-8 group-hover:opacity-10 transition-opacity duration-300`} />

                        <div className="p-6 relative">
                            {/* Icon + Title */}
                            <div className="flex items-center gap-4 mb-5">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} text-white shadow-md`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-base font-semibold text-foreground leading-tight">{category.title}</h3>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted/60 text-foreground/70 border border-border hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/50 transition-colors duration-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
