"use client";

import Image from "next/image";
import Title from "../common/title";
import s from "../common/css/web/Aspects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Aspects() {
  return (
    <div className={`px-fluid ${s.wrapper}`}>
      <div
        className={`flex justify-between items-end mobile-container ${s.title}`}
      >
        <div>
          <Title
            title="Уникальный комплексный"
            title2="подход к разработке сайтов"
            subtitle="Знаем все аспекты"
            isService={true}
          ></Title>
        </div>
        <div  data-aos="fade-up" data-aos-delay="200" className="flex items-center hidden md:flex">
          <div className={s.text}>
            Создаем функциональные, удобные и стильные проекты под ваши задачи
          </div>
          <div className={s.iconWrapper}>
            <Image
              src={"/icons/web.svg"}
              width={24}
              height={22}
              className={s.cloud}
              alt="cloud"
            ></Image>
          </div>
        </div>
      </div>
      <div className={`${s.cards} hidden md:flex`}>
        <div  data-aos="fade-up" className={s.card}>
          <div className={s.img}>
            <Image
              src={"/functionality.png"}
              alt="functionality"
              width={337}
              unoptimized={true}
              height={255}
            ></Image>
          </div>
          <div className={s.cardContent}>
            <div className={s.cardTitle}>Функциональность</div>
            <div className={s.cardText}>
              Разрабатываем сайты с продуманной структурой, быстрой загрузкой и
              удобной навигацией, обеспечивая комфортный пользовательский опыт.
            </div>
          </div>
        </div>
        <div  data-aos="fade-up" data-aos-delay="200" className={s.card}>
          <div className={s.img}>
            <Image
              src={"/accent.png"}
              alt="accent"
              width={337}
              height={170}
              unoptimized={true}
            ></Image>
          </div>
          <div className={s.cardContent}>
            <div className={s.cardTitle}>Акцент на мобильной версии</div>
            <div className={s.cardText}>
              Проработка с акцентом на мобильную адаптацию: интуитивный
              интерфейс и корректное отображение на небольших экранах.
            </div>
          </div>
        </div>
        <div  data-aos="fade-up" data-aos-delay="400" className={s.card}>
          <div className={s.cardLeft}>
            <div className={s.img}>
              <Image
                src={"/vr.png"}
                alt="vr"
                width={353}
                height={389}
                unoptimized={true}
              ></Image>
            </div>
          </div>
          <div className={s.cardRight}>
            <div className={s.img}>
              <Image
                src={"/uniq.png"}
                alt="uniq"
                width={337}
                height={170}
                unoptimized={true}
              ></Image>
            </div>
            <div className={s.cardContent}>
              <div className={s.cardTitle}>Уникальное видение</div>
              <div className={s.cardText}>
                <p>
                  Создаем сайты, которые не просто выглядят стильно, но и
                  формируют уникальный облик вашего бренда и выделяют его среди
                  конкурентов.
                </p>
                <p>
                  Передовые технологии, удобство для пользователей и продуманный
                  дизайн —&nbsp;имеем подход к каждому решению.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${s.cards} block md:hidden`}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
        >
          <SwiperSlide>
            <div className={s.card}>
              <div className={s.img}>
                <Image
                  src={"/functionality.png"}
                  alt="functionality"
                  width={337}
                  unoptimized={true}
                  height={255}
                ></Image>
              </div>
              <div className={s.cardContent}>
                <div className={s.cardTitle}>Функциональность</div>
                <div className={s.cardText}>
                  Разрабатываем сайты с продуманной структурой, быстрой
                  загрузкой и удобной навигацией, обеспечивая комфортный
                  пользовательский опыт.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.card}>
              <div className={s.img}>
                <Image
                  src={"/accent.png"}
                  alt="accent"
                  width={337}
                  height={170}
                  unoptimized={true}
                ></Image>
              </div>
              <div className={s.cardContent}>
                <div className={s.cardTitle}>Акцент на мобильной версии</div>
                <div className={s.cardText}>
                  Проработка с акцентом на мобильную адаптацию: интуитивный
                  интерфейс и корректное отображение на небольших экранах.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.card}>
              <div className={s.img}>
                <Image
                  src={"/uniq.png"}
                  alt="uniq"
                  width={337}
                  height={170}
                  unoptimized={true}
                ></Image>
              </div>
              <div className={s.cardContent}>
                <div className={s.cardTitle}>Уникальное видение</div>
                <div className={s.cardText}>
                  <p>
                    Создаем сайты, которые не просто выглядят стильно, но и
                    формируют уникальный облик вашего бренда и выделяют его
                    среди конкурентов.
                  </p>
                  <p>
                    Передовые технологии, удобство для пользователей и
                    продуманный дизайн —&nbsp;имеем подход к каждому решению.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
