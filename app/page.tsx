import Hero from "@/components/sections/hero";
import Link from "next/link";
import { ArrowRight, Briefcase, Code2, Database, Layout, Server, Smartphone, Terminal, User, GraduationCap, ExternalLink, Github } from "lucide-react";

// ── Mini data (mirrors the full pages) ──────────────────────────────────────

const featuredProjects = [
  {
    title: "Punchi-Pasala",
    description: "Interactive educational web app for Deaf & Mute students using ML-powered sign language recognition.",
    tags: ["React.js", "Node.js", "Python", "TensorFlow", "AWS"],
    highlight: "Research Project",
  },
  {
    title: "EV Charging Station Booking",
    description: "Centralized web & mobile booking platform with Google Maps integration.",
    tags: ["C#", "React", "Android", "Google Maps"],
  },
  {
    title: "E-Commerce Backend",
    description: "Microservices architecture with automated CI/CD pipelines and cloud deployment.",
    tags: ["Node.js", "Docker", "AWS ECS", "CI/CD"],
  },
];

const skillHighlights = [
  { label: "Frontend", icon: <Layout className="h-5 w-5" />, gradient: "from-indigo-500 to-blue-500", skills: ["React.js", "Next.js", "Tailwind CSS"] },
  { label: "Backend", icon: <Server className="h-5 w-5" />, gradient: "from-emerald-500 to-teal-500", skills: ["Node.js", "Express.js", "Java"] },
  { label: "Database", icon: <Database className="h-5 w-5" />, gradient: "from-violet-500 to-purple-500", skills: ["MongoDB", "MySQL"] },
  { label: "Mobile", icon: <Smartphone className="h-5 w-5" />, gradient: "from-orange-500 to-amber-500", skills: ["Flutter", "Android SDK"] },
  { label: "DevOps", icon: <Terminal className="h-5 w-5" />, gradient: "from-slate-500 to-zinc-500", skills: ["Docker", "AWS", "CI/CD"] },
  { label: "Tools", icon: <Code2 className="h-5 w-5" />, gradient: "from-pink-500 to-rose-500", skills: ["Git", "Postman", "Agile"] },
];

// ── Section Header ────────────────────────────────────────────────────────────

function SectionHeader({ title, subtitle, href, linkLabel }: { title: string; subtitle: string; href: string; linkLabel: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <p className="text-foreground/50 mt-1">{subtitle}</p>
      </div>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-500 hover:text-indigo-400 transition-colors shrink-0 group"
      >
        {linkLabel}
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}

// ── Home Page ─────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="container mx-auto">
      {/* ── Hero ── */}
      <Hero />

      {/* ── About Snapshot ── */}
      <section className="px-6 py-20 border-t border-border">
        <SectionHeader
          title="About Me"
          subtitle="Who I am and what drives me"
          href="/about"
          linkLabel="Full bio"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {/* Bio card */}
          <div className="md:col-span-2 rounded-2xl border border-border bg-card p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-md">
                <User className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">Hansanie Neththasinghe</h3>
            </div>
            <p className="text-foreground/60 leading-relaxed">
              Final-year Software Engineering undergraduate (graduating March 2026) with hands-on
              experience in full-stack web development, DevOps, and cloud technologies. Self-motivated,
              eager to tackle real-world challenges, and currently seeking an Associate Software Engineer role.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {["MERN Stack", "DevOps", "Cloud", "Agile", "Full Stack"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-50/60 text-indigo-700 border border-indigo-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Education card */}
          <div className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-3">
            <div className="flex items-center gap-3 mb-1">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 text-white shadow-md">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">Education</h3>
            </div>
            <div className="border-l-2 border-indigo-300 pl-4 space-y-1">
              <p className="font-semibold text-sm text-foreground">BSc (Hons) Information Technology</p>
              <p className="text-xs text-indigo-500 font-medium">Specializing in Software Engineering</p>
              <p className="text-xs text-foreground/50">SLIIT · Jun 2021 – Present</p>
              <p className="text-xs text-foreground/40">Weighted GPA: 3.61</p>
            </div>
            <div className="mt-auto pt-3 border-t border-border">
              <p className="text-xs text-foreground/50 font-medium uppercase tracking-wider mb-2">Dean&apos;s List</p>
              <div className="flex flex-wrap gap-1.5">
                {["2022", "2023", "2025"].map((y) => (
                  <span key={y} className="px-2.5 py-0.5 rounded-full text-xs font-semibold border border-amber-400 bg-amber-50 text-amber-700">{y}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience Snapshot ── */}
      <section className="px-6 py-20 border-t border-border">
        <SectionHeader
          title="Experience"
          subtitle="My professional journey"
          href="/experience"
          linkLabel="Full experience"
        />
        <div className="relative rounded-2xl border border-indigo-200 bg-card overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-violet-500" />
          <div className="p-6 pl-8 flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-md">
                  <Briefcase className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Full Stack Developer Internship</h3>
                  <p className="text-sm text-foreground/60">Coltex Biz Solutions Pvt. Ltd.</p>
                </div>
              </div>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Built full-stack applications (Restaurant, Service Station & Pawning Management Systems) using the MERN stack. Designed RESTful APIs, responsive UIs, and collaborated in Agile teams.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {["React.js", "Node.js", "MongoDB", "Express", "Figma", "Agile"].map((tech) => (
                  <span key={tech} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <span className="shrink-0 self-start px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
              July 2024 – June 2025
            </span>
          </div>
        </div>
      </section>

      {/* ── Skills Snapshot ── */}
      <section className="px-6 py-20 border-t border-border">
        <SectionHeader
          title="Technical Skills"
          subtitle="Technologies I work with"
          href="/skills"
          linkLabel="All skills"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skillHighlights.map((cat, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-border bg-card p-4 flex flex-col items-center text-center gap-3 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className={`p-3 rounded-xl bg-gradient-to-br ${cat.gradient} text-white shadow-md`}>
                {cat.icon}
              </div>
              <p className="text-sm font-semibold text-foreground">{cat.label}</p>
              <div className="flex flex-col gap-1 w-full">
                {cat.skills.map((s) => (
                  <span key={s} className="text-xs text-foreground/50">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects Snapshot ── */}
      <section className="px-6 py-20 border-t border-border">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of my recent work"
          href="/projects"
          linkLabel="All projects"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-border bg-card p-6 flex flex-col gap-4 hover:border-indigo-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-100/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-foreground leading-tight">{project.title}</h3>
                {project.highlight && (
                  <span className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-gradient-to-r from-indigo-500 to-violet-500 text-white">
                    {project.highlight}
                  </span>
                )}
              </div>
              <p className="text-sm text-foreground/60 leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 pt-1">
                <Link href="/projects" className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg border border-border text-xs font-medium text-foreground/60 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
                  <Github className="h-3.5 w-3.5" /> Code
                </Link>
                <Link href="/projects" className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-xs font-medium text-white hover:from-indigo-600 hover:to-violet-600 transition-colors">
                  <ExternalLink className="h-3.5 w-3.5" /> Demo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 py-20 border-t border-border">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 p-12 text-center text-white">
          {/* Decorative blobs */}
          <div className="absolute top-[-30%] left-[-10%] w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-30%] right-[-10%] w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="relative space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Let&apos;s Work Together</h2>
            <p className="text-white/70 max-w-xl mx-auto text-lg">
              I&apos;m currently open to new opportunities. If you have a project in mind or just want to connect, feel free to reach out!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white text-indigo-700 font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
