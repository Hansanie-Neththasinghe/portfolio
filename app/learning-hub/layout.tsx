import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Hub",
  description: "Explore educational resources, notes, and tutorials compiled by Hansanie Neththasinghe.",
};

export default function LearningHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
