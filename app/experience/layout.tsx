import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "View the professional experience and internships of Hansanie Neththasinghe, highlighting expertise in software engineering and web development.",
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
