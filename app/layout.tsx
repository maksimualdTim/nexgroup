import type { Metadata } from "next";
import { Manrope } from 'next/font/google';
import "./globals.css";

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: "NexGroup",
  description: "Описание сайта",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={manrope.className}
      >
        {children}
      </body>
    </html>
  );
}
