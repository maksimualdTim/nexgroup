"use client";
import { useEffect } from "react";
import Lenis from 'lenis';
import { Manrope } from 'next/font/google';
import "./globals.css";
import AOSProvider from './AOSProvider';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  variable: '--font-manrope',
});

// export const metadata: Metadata = {
//   title: "NexGroup",
//   description: "Описание сайта",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  useEffect(() => {
    const lenis = new Lenis({
      // smooth: true, // Включает плавный скролл
      lerp: 0.1, // Чем меньше, тем мягче (0.1–0.2 — оптимально)
      wheelMultiplier: 1, // Чувствительность колесика мыши
      infinite: false, // Если true — можно листать бесконечно
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  
  return (
    <html lang="en">
      <body
        className={manrope.className}
      >
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
