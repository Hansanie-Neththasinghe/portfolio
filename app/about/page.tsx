import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Trophy, User } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-6 py-12 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
                <p className="text-foreground/60 text-lg">
                    Passionate, final year Software Engineering undergraduate (awaiting graduation - March 2026)
                    with hands-on experience in web development, object-oriented programming, and DevOps.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <Card className="h-full">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <div className="p-1.5 bg-indigo-100 rounded-lg">
                                <User className="h-5 w-5 text-indigo-600" />
                            </div>
                            Bio
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-foreground/60">
                        <p>
                            I possess strong time management and leadership skills. Self-motivated and eager
                            to apply knowledge to real-world challenges, committed to continuous learning,
                            and excited about making impactful contributions in the field of software engineering.
                        </p>
                        <p>
                            Currently seeking an Associate Software Engineer position to apply my skills and grow professionally.
                        </p>
                    </CardContent>
                </Card>

                <Card className="h-full">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <div className="p-1.5 bg-indigo-100 rounded-lg">
                                <GraduationCap className="h-5 w-5 text-indigo-600" />
                            </div>
                            Education
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="border-l-2 border-indigo-300 pl-4">
                            <h3 className="font-semibold text-foreground">BSc (Hons) Information Technology</h3>
                            <p className="text-sm text-indigo-600 font-medium">Specializing in Software Engineering</p>
                            <p className="text-sm text-foreground/50 mt-1">Sri Lanka Institute of Information Technology</p>
                            <p className="text-xs text-foreground/40 mt-1">Jun 2021 - Present | Weighted GPA: 3.61</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Trophy className="h-6 w-6 text-amber-500" />
                    Achievements
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { year: "2025", semester: "Final Year 2nd Sem", gpa: "3.83" },
                        { year: "2023", semester: "2nd Year 1st Sem", gpa: "3.82" },
                        { year: "2022", semester: "1st Year 2nd Sem", gpa: "3.83" },
                    ].map((item, index) => (
                        <Card key={index} className="bg-[#1a1730] border-indigo-800/50">
                            <CardContent className="pt-6">
                                <div className="mb-2">
                                    <Badge variant="outline" className="border-amber-400 bg-amber-50 text-amber-700">Dean&apos;s List Award</Badge>
                                </div>
                                <h4 className="font-semibold">{item.year}</h4>
                                <p className="text-sm text-white/40">in recognition of academic excellence in the {item.semester}</p>
                                <p className="text-sm font-semibold mt-2 text-indigo-400">GPA - {item.gpa}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
