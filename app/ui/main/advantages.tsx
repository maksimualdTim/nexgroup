"use client";
import Title from "../common/title";
import MainText from "../common/mainText";
import AdvantagesCard from "../common/advantages-card";
import Button from "../common/button";
import s from "../common/css/AdvantagesBlock.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Advantages() {
  return (
    <div
      className={`block justify-between items-start py-block md:flex mobile-container-card ${s.wrapper}`}
      id="advantages"
    >
      <div
        className={`text-fluid md:sticky ${s.sticky}`}
      >
        <div
          style={{ marginBottom: "calc(70 * (1px + (100vw - 1530px) / 1530))" }}
        >
          <Title
            title="Ваш бизнес работает лучше,"
            title2="когда мы берёмся&nbsp;за дело"
            subtitle="Почему именно мы?"
          />
        </div>
        <div
          style={{
            marginBottom: "calc(176 * (1px + (100vw - 1530px) / 1530))",
          }}
        >
          <MainText
            order={3}
            text={[
              <p
                key={1}
                style={{
                  marginBottom: "calc(32 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                Мы в NEX знаем, что эффективное управление и прозрачные
                коммуникации — это основа успешного бизнеса
              </p>,
              <p key={2}>
                Мы помогаем устранить барьеры, оптимизировать процессы и
                внедрить современные технологии, чтобы ваш бизнес развивался
                быстрее и с меньшими усилиями
              </p>,
            ]}
          />
        </div>
        <div className="hidden md:block">
          <Button
            link="/about"
            isFull={false}
            text="Подробнее о NEX"
            withArrow={false}
          />
        </div>
      </div>
      <div
        className={`advantages-cards hidden md:block border-[1px] border-[#323232] md:w-[55%] relative ${s.cards}`}
      >
        <div
          style={{ marginBottom: "calc(16 * (1px + (100vw - 1530px) / 1530))" }}
        >
          <AdvantagesCard
            iconPath="/icons/system.svg"
            title="Снижаем риски и минимизируем ошибки"
            subtitle="Только лучшие системы и сервисы"
            text="Благодаря четким процессам и современным технологиям, мы помогаем вам избежать потерь из-за человеческого фактора и управленческих просчетов."
          />
        </div>
        <div
          style={{ marginBottom: "calc(16 * (1px + (100vw - 1530px) / 1530))" }}
        >
          <AdvantagesCard
            iconPath="/icons/eye.svg"
            title="Контроль и прозрачность на каждом уровне"
            subtitle="Управление бизнес-процессами"
            text="Наши решения обеспечивают полный контроль над всеми процессами вашей компании,от взаимодействия с клиентами до внутренних операций."
          />
        </div>
        <div
          style={{ marginBottom: "calc(16 * (1px + (100vw - 1530px) / 1530))" }}
        >
          <AdvantagesCard
            iconPath="/icons/chart.svg"
            title="Максимизация доходов вашего бизнеса"
            subtitle="Цифровая трансформация"
            text="Настраиваем внутренние процессы и коммуникации таким образом, чтобы ваш бизнес мог расти и зарабатывать больше без дополнительных затрат."
          />
        </div>
        <div>
          <AdvantagesCard
            iconPath="/icons/head.svg"
            title="Гарантированная техническая поддержка"
            subtitle="Решаем любые проблемы"
            text="Мы предоставляем техническую помощь и консультации на всех этапах внедрения и эксплуатации, гарантируя стабильную работу вашего бизнеса."
          />
        </div>
      </div>
      <div
        className={`advantages-cards block md:hidden border-[1px] border-[#323232] md:w-[55%] relative ${s.cards}`}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          
          loop={true}
        >
          <SwiperSlide>
            <div>
              <AdvantagesCard
                iconPath="/icons/system.svg"
                title="Снижаем риски и минимизируем ошибки"
                subtitle="Только лучшие системы и сервисы"
                text="Благодаря четким процессам и современным технологиям, мы помогаем вам избежать потерь из-за человеческого фактора и управленческих просчетов."
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <AdvantagesCard
                iconPath="/icons/eye.svg"
                title="Контроль и прозрачность на каждом уровне"
                subtitle="Управление бизнес-процессами"
                text="Наши решения обеспечивают полный контроль над всеми процессами вашей компании,от взаимодействия с клиентами до внутренних операций."
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <AdvantagesCard
                iconPath="/icons/chart.svg"
                title="Максимизация доходов вашего бизнеса"
                subtitle="Цифровая трансформация"
                text="Настраиваем внутренние процессы и коммуникации таким образом, чтобы ваш бизнес мог расти и зарабатывать больше без дополнительных затрат."
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <AdvantagesCard
                iconPath="/icons/head.svg"
                title="Гарантированная техническая поддержка"
                subtitle="Решаем любые проблемы"
                text="Мы предоставляем техническую помощь и консультации на всех этапах внедрения и эксплуатации, гарантируя стабильную работу вашего бизнеса."
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
