import Content from "./content";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Внедрение IP-телефонии в Узбекистане",
  description: "Настроим IP-телефонию для бизнеса любого масштаба. Подключение к CRM, запись звонков, автоответчики, голосовые меню (IVR).",
  keywords: "IP-телефония, Телефония Ташкент, SIP-телефония, SIPUNI, Виртуальная АТС, IVR, запись звонков, бизнес-телефония, Ташкент, Узбекистан",
  openGraph: {
    title: "Внедрение IP-телефонии в Узбекистане",
    description: "Настроим IP-телефонию для бизнеса любого масштаба. Подключение к CRM, запись звонков, автоответчики, голосовые меню (IVR).",
    images: {
      url: "https://nexgroup.uz/og_image.png",
      width: 1200,
      height: 630
    },
    type: "website",
    url: "https://nexgroup.uz/sipuni",
  }
};
export default function Amo() {
  return (
    <Content />
  )
}