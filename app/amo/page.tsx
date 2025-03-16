import Content from "./content";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Внедрение и настройка amoCRM в Узбекистане — Автоматизация продаж",
  description: "Внедрим amoCRM для вашего бизнеса: автоматизация продаж, интеграция с IP-телефонией, чат-боты, воронки продаж.",
  keywords: "amoCRM, amocrm ташкент, CRM-система, автоматизация продаж, IP-телефония + CRM, чат-боты, воронка продаж, управление клиентами, CRM в Ташкенте, CRM для бизнеса",
  openGraph: {
    title: "Внедрение и настройка amoCRM в Узбекистане — Автоматизация продаж",
    description: "Внедрим amoCRM для вашего бизнеса: автоматизация продаж, интеграция с IP-телефонией, чат-боты, воронки продаж.",
    images: {
      url: "/og_image.png",
      width: 1200,
      height: 630
    },
    type: "website",
    url: "https://nexgroup.uz/amo",
  }
};

export default function Amo() {

  return (
    <Content />
  )
}