import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore the portfolio projects of Hansanie Neththasinghe, featuring full-stack applications, ML-powered tools, and cloud deployments.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
