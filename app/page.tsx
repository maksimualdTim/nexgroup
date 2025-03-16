import Content from "./content";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IT-решения для бизнеса в Узбекистане: CRM-системы, IP-телефония, Веб-сайты.",
  description: "Профессиональное внедрение и разработка передовых IT-решений для бизнеса любого масштаба.",
  keywords: "crm система, автоматизация бизнеса, sipuni, автоматизация бизнес процессов, amocrm узбекистан, внедрение crm, crm узбекистан, автоматизация бизнеса решения, комплексная автоматизация бизнеса",
  openGraph: {
    title: "IT-решения для бизнеса в Узбекистане: CRM-системы, IP-телефония, Веб-сайты.",
    description: "Профессиональное внедрение и разработка передовых IT-решений для бизнеса любого масштаба.",
    images: {
      url: "/og_image.png",
      width: 1200,
      height: 630
    },
    type: "website",
    url: "https://nexgroup.uz"
  }
};
export default function Home() {
  return (
      <Content />
  );
}
