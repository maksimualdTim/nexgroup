'use client';
import AOS from 'aos';
    
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
   }, []);

   return <Fragment>{children}</Fragment>;
};

 export default AOSProvider;