import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Hansanie Neththasinghe, a Software Engineering graduate with experience in full-stack development and DevOps.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
