import Content from "./content";


import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NEX GROUP — Ускоряем эволюцию вашего бизнеса",
  description: "Создаем решения, которые реально работают и приносят пользу, помогая вам достичь новых уровней эффективности и роста.",
  keywords: "интегратор ташкент, crm, автоматизация, разработка, внедрение программ, систематизация, IT-решения",
  openGraph: {
    title: "NEX GROUP — Ускоряем эволюцию вашего бизнеса",
    description: "Создаем решения, которые реально работают и приносят пользу, помогая вам достичь новых уровней эффективности и роста.",
    images: {
      url: "/og_image.png",
      width: 1200,
      height: 630
    },
    type: "website",
    url: "https://nexgroup.uz/about",
  }
};

export default function About() {
  
    return (
      <Content />
    )
}