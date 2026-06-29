import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import FloatingParticles from "@/components/ui/floating-particles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://hansanie-neththasinghe.vercel.app"),
  title: {
    default: "Hansanie Neththasinghe | Software Engineer",
    template: "%s | Hansanie Neththasinghe",
  },
  description: "Portfolio of Hansanie Neththasinghe, a passionate Software Engineering graduate specializing in full-stack development.",
  keywords: [
    "Hansanie Neththasinghe",
    "Software Engineer",
    "Full Stack Developer",
    "Portfolio",
    "Sri Lanka",
    "SLIIT",
    "React",
    "Next.js",
    "MERN Stack",
  ],
  authors: [
    {
      name: "Hansanie Neththasinghe",
      url: "https://hansanie-neththasinghe.vercel.app",
    },
  ],
  creator: "Hansanie Neththasinghe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hansanie-neththasinghe.vercel.app",
    title: "Hansanie Neththasinghe | Software Engineer",
    description:
      "Portfolio of Hansanie Neththasinghe, a passionate Software Engineering graduate specializing in full-stack development.",
    siteName: "Hansanie Neththasinghe Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hansanie Neththasinghe | Software Engineer",
    description:
      "Portfolio of Hansanie Neththasinghe, a passionate Software Engineering graduate specializing in full-stack development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground antialiased transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          // defaultTheme="system"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingParticles />
          <Navbar />
          <main className="flex-grow pt-20 px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

