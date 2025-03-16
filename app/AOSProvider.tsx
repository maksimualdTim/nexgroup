'use client';
import AOS from 'aos';
import Lenis from 'lenis';
import 'aos/dist/aos.css';
import { Fragment, ReactNode, useEffect } from 'react';
    
interface AOSProviderProps {
    children: ReactNode;
  }

const AOSProvider: React.FC<AOSProviderProps> = ({ children }) => {
   useEffect(() => {
    AOS.init({
        disable: () => window.innerWidth < 768,
        offset: 0, // Начинает анимацию за 20px до появления
        duration: 700, // Длительность анимации в миллисекундах
    });

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

   return <Fragment>{children}</Fragment>;
};

 export default AOSProvider;