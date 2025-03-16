"use client";
import MainText from "../common/mainText";
import Title from "../common/title";
import s from "../common/css/amo/Steps.module.css";
import styles from "../common/css/sipuni/Steps.module.css";
import Button from "../common/button";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Steps({setModalOpen}: {setModalOpen: (open: boolean) => void}) {
  return (
    <div className={`px-fluid ${s.wrapper} mobile-container`}>
      <div
        className={`flex justify-between flex-col-reverse md:flex-row ${s.top}`}
      >
        <div className={`${s.topContainer} ${styles.topContainer}`}>
          <MainText
            text={[
              <p key={1}>
                Внедрение IP-телефонии — это путь к оптимизации коммуникаций,
                снижению затрат и повышению эффективности работы команды.
              </p>,
            ]}
            order={2}
          />
        </div>
        <div className="text-left md:text-right">
          <Title
            title="Разделяем внедрение"
            title2="IP-телефонии&nbsp;на&nbsp;этапы"
            subtitle="Этапность и процесс"
          />
        </div>
      </div>
      <div className={`${s.cards} hidden md:flex`}>
        <div className={s.card}>
          <div className={s.cardTop}>
            <div className={s.order}>
              <span>01</span>
            </div>
            <div className={s.subtitle}>
              <span>Анализ</span>
            </div>
          </div>
          <div className={s.title}>Изучение потребностей</div>
          <div className={s.text}>
            Мы изучаем ваш бизнес, коммуникационные процессы и цели, чтобы
            определить, как IP-телефония поможет повысить эффективность работы.
          </div>
        </div>
        <div className={s.card}>
          <div className={s.cardTop}>
            <div className={s.order}>
              <span>02</span>
            </div>
            <div className={s.subtitle}>
              <span>Планирование</span>
            </div>
          </div>
          <div className={s.title}>Определение технического задания</div>
          <div className={s.text}>
            Определяем ключевые требования, формируем техническое задание и
            согласовываем его с вами для точного соответствия вашим задачам.
          </div>
        </div>
        <div className={s.card}>
          <div className={s.cardTop}>
            <div className={s.order}>
              <span>03</span>
            </div>
            <div className={s.subtitle}>
              <span>Подготовка</span>
            </div>
          </div>
          <div className={s.title}>Выбор и настройка оборудования</div>
          <div className={s.text}>
            Помогаем подобрать оптимальное оборудование и программное
            обеспечение, совместимое с вашей IT-инфраструктурой.
          </div>
        </div>
        <div className={s.card}>
          <div className={s.cardTop}>
            <div className={s.order}>
              <span>04</span>
            </div>
            <div className={s.subtitle}>
              <span>Внедрение</span>
            </div>
          </div>
          <div className={s.title}>Установка и настройка</div>
          <div className={s.text}>
            Интегрируем IP-телефонию, настраиваем маршрутизацию звонков и другие
            функции для бесперебойной работы.
          </div>
        </div>
        <div className={s.card}>
          <div className={s.cardTop}>
            <div className={s.order}>
              <span>05</span>
            </div>
            <div className={s.subtitle}>
              <span>Запуск</span>
            </div>
          </div>
          <div className={s.title}>Тестирование и запуск</div>
          <div className={s.text}>
            Проводим тестирование связи, устраняем возможные неполадки и
            оптимизируем работу системы перед запуском.
          </div>
        </div>
        <div className={s.card}>
          <div className={s.cardTop}>
            <div className={s.order}>
              <span>06</span>
            </div>
            <div className={s.subtitle}>
              <span>Тех. поддержка</span>
            </div>
          </div>
          <div className={s.title}>Поддержка и сопровождение</div>
          <div className={s.text}>
            Мы не оставляем вас наедине с системой. Наши специалисты всегда
            готовы помочь, внести изменения или доработать функционал по мере
            необходимости.
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
              <div className={s.cardTop}>
                <div className={s.order}>
                  <span>01</span>
                </div>
                <div className={s.subtitle}>
                  <span>Анализ</span>
                </div>
              </div>
              <div className={s.title}>Изучение потребностей</div>
              <div className={s.text}>
                Мы изучаем ваш бизнес, коммуникационные процессы и цели, чтобы
                определить, как IP-телефония поможет повысить эффективность
                работы.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.card}>
              <div className={s.cardTop}>
                <div className={s.order}>
                  <span>02</span>
                </div>
                <div className={s.subtitle}>
                  <span>Планирование</span>
                </div>
              </div>
              <div className={s.title}>Определение технического задания</div>
              <div className={s.text}>
                Определяем ключевые требования, формируем техническое задание и
                согласовываем его с вами для точного соответствия вашим задачам.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.card}>
              <div className={s.cardTop}>
                <div className={s.order}>
                  <span>03</span>
                </div>
                <div className={s.subtitle}>
                  <span>Подготовка</span>
                </div>
              </div>
              <div className={s.title}>Выбор и настройка оборудования</div>
              <div className={s.text}>
                Помогаем подобрать оптимальное оборудование и программное
                обеспечение, совместимое с вашей IT-инфраструктурой.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.card}>
              <div className={s.cardTop}>
                <div className={s.order}>
                  <span>04</span>
                </div>
                <div className={s.subtitle}>
                  <span>Внедрение</span>
                </div>
              </div>
              <div className={s.title}>Установка и настройка</div>
              <div className={s.text}>
                Интегрируем IP-телефонию, настраиваем маршрутизацию звонков и
                другие функции для бесперебойной работы.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.card}>
              <div className={s.cardTop}>
                <div className={s.order}>
                  <span>05</span>
                </div>
                <div className={s.subtitle}>
                  <span>Запуск</span>
                </div>
              </div>
              <div className={s.title}>Тестирование и запуск</div>
              <div className={s.text}>
              Проводим тестирование связи, устраняем возможные неполадки и
              оптимизируем работу системы перед запуском.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.card}>
              <div className={s.cardTop}>
                <div className={s.order}>
                  <span>06</span>
                </div>
                <div className={s.subtitle}>
                  <span>Тех. поддержка</span>
                </div>
              </div>
              <div className={s.title}>Поддержка и сопровождение</div>
              <div className={s.text}>
                Мы не оставляем вас наедине с системой. Наши специалисты всегда
                готовы помочь, внести изменения или доработать функционал по
                мере необходимости.
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        className="hidden md:flex justify-between items-center"
        style={{ marginTop: "calc(64 * (1px + (100vw - 1530px) / 1530))" }}
      >
        <div onClick={() => setModalOpen(true)}>
          <Button
            text="Консультация"
            withArrow={true}
            link=""
            isFull={true}
          />
        </div>
        <div className={s.logoWrapper}>
          <Image
            src={"/logos/nex.svg"}
            alt="logo"
            width={0}
            height={0}
            className={s.logo}
          />
        </div>
      </div>
    </div>
  );
}
