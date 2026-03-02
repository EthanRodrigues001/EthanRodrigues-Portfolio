import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { StripedPattern } from "@/components/magicui/striped-pattern";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ethan Rodrigues",
  description: "Ethan Rodrigues - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen overflow-x-hidden">

            {/* LEFT PATTERN COLUMN */}
            <div className="fixed top-0 left-6 h-screen w-6 z-30 pointer-events-none hidden md:block">
              <div className="absolute inset-0 border-r border-l border-muted/40" />
              <StripedPattern
                direction="left"
                className="text-muted-foreground/40"
              />
            </div>

            {/* RIGHT PATTERN COLUMN */}
            <div className="fixed top-0 right-6 h-screen w-6 z-30 pointer-events-none hidden md:block">
              <div className="absolute inset-0 border-l border-r border-muted/40" />
              <StripedPattern
                direction="right"
                className="text-muted-foreground/40"
              />
            </div>

            {/* MOBILE PATTERNS (THINNER) */}
            <div className="fixed top-0 left-0 h-screen w-5 z-30 pointer-events-none md:hidden">
              <div className="absolute inset-0 border-r border-muted" />
              <StripedPattern
                direction="left"
                className="text-muted-foreground/30"
                width={8}
                height={8}
              />
            </div>

            <div className="fixed top-0 right-0 h-screen w-5 z-30 pointer-events-none md:hidden">
              <div className="absolute inset-0 border-l border-muted" />
              <StripedPattern
                direction="right"
                className="text-muted-foreground/30"
                width={8}
                height={8}
              />
            </div>

            {/* CONTENT */}
            <div className="px-0 lg:px-36">
              <main
                className="
              relative
              min-h-screen
              mx-auto
              max-w-[900px]
              px-5       /* mobile */
              sm:px-12   /* tablet */
              lg:px-0    /* desktop */
              lg:border-l lg:border-r lg:border-muted/40
  "
              >
                {children}
              </main>
            </div>
          </div>

        </ThemeProvider>

      </body>
    </html>
  );
}
