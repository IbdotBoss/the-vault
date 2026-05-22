import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "THE VAULT — Bishop's Stortford's Premium Shoe Cleaning",
  description:
    "Premium trainer and shoe cleaning in Bishop's Stortford. Drop your kicks off and pick 'em up fresh. Local, trusted, professional.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable}`}>
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
