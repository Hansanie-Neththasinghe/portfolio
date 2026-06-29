import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description: "Discover the technical skills of Hansanie Neththasinghe, covering React, Next.js, Node.js, MongoDB, DevOps, and more.",
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
