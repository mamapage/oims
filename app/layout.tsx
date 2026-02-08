import "./globals.css";
import { Playfair_Display, Montserrat } from "next/font/google";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
});

const sans = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata = {
  title: "The Oxford Institute of Management & Studies",
  description: "Corporate Ivy League education with career-ready outcomes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-navy text-ivory font-sans">{children}</body>
    </html>
  );
}
