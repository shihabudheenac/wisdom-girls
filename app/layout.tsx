import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "വിദ്യാർത്ഥിനി സമ്മേളനം | Wisdom Girls",
  description: "Wisdom Girls കണ്ണൂർ ജില്ലാ വിദ്യാർത്ഥിനി സമ്മേളനം — 2026 ആഗസ്റ്റ് 27, മുണ്ടയാട് ഇൻഡോർ സ്റ്റേഡിയം, കണ്ണൂർ.",
  icons: {
    icon: "/girls-logo.png"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07131a"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ml">
      <body>{children}</body>
    </html>
  );
}