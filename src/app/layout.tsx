import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),

  title: "sanvert",

  authors: {
    name: "sanvert",
  },

  description:
    "Based in Cambodia, I'm a Fullstack developer passionate about buildin",
  openGraph: {
    title: "sanvert",
    description:
      "Based in Cambodia, I'm a Fullstack developer passionate about buildin",
    url: "http://localhost:3000",
    siteName: "sanvert",
    images: "/og.png",
    type: "website",
  },
  keywords: ["sanvert", "sanvert", "sanvert"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
