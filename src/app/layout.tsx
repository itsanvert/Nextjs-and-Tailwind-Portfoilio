import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),

  title: {
    template: "%s | Daily Vote",
    default: "sanvert",
  },
  authors: {
    name: "sanvert",
  },

  description:
    "Cast your vote now and see live updates on the poll results, powered by the real-time capabilities of Supabase database integration in our web app",
  openGraph: {
    title: "sanvert",
    description:
      "Cast your vote now and see live updates on the poll results, powered by the real-time capabilities of Supabase database integration in our web app.",
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
