"use client"
import MainText from "../common/mainText";
import Title from "../common/title";
import s from "../common/css/amo/Steps.module.css";
import Button from "../common/button";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Steps({setModalOpen}: {setModalOpen: (open: boolean) => void}) {
  return (
    <div className={`px-fluid ${s.wrapper} mobile-container`}>
      <div className={`flex justify-between flex-col-reverse md:flex-row ${s.top}`}>
        <div className={s.topContainer}>
          <MainText
            text={[
              <p key={1}>
                Внедрение amoCRM — это шаг к упрощению управления бизнесом,
                увеличению доходов и созданию сильной команды
              </p>,
            ]}
            order={2}
          />
        </div>
        <div className="text-left md:text-right">
          <Title
            title="Пошаговое внедрение"
            title2="CRM в ваш бизнес"
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
          <div className={s.title}>Анализ всех потребностей</div>
          <div className={s.text}>
            Начинаем с анализа вашего бизнеса, процессов и целей, чтобы понять,
            как CRM может быть полезна и какие инструменты вам нужны.
          </div>
        </div>
        <div className={s.card}>
          <div className={s.cardTop}>
            <div className={s.order}>
              <span>02</span>
            </div>
            <div className={s.subtitle}>
              <span>Настройка</span>
            </div>
          </div>
          <div className={s.title}>Подготовка и настройка системы</div>
          <div className={s.text}>
            Настраиваем amoCRM под ваши задачи: создаем воронки продаж,
            интегрируем телефонию, настраиваем мессенджеры и автоматизируем
            рутинные процессы.
          </div>
        </div>
        <div className={s.card}>
          <div className={s.cardTop}>
            <div className={s.order}>
              <span>03</span>
            </div>
            <div className={s.subtitle}>
              <span>Интеграция</span>
            </div>
          </div>
          <div className={s.title}>Интеграция с вашими инструментами</div>
          <div className={s.text}>
            Соединяем amoCRM с вашими сайтами и соц. сетями. Это обеспечивает
            бесшовное взаимодействие между всеми платформами и упрощает
            управление бизнесом.
          </div>
        </div>
        <div className={s.card}>
          <div className={s.cardTop}>
            <div className={s.order}>
              <span>04</span>
            </div>
            <div className={s.subtitle}>
              <span>Обучение</span>
            </div>
          </div>
          <div className={s.title}>Обучение сотрудников</div>
          <div className={s.text}>
            Объясняем, как эффективно использовать amoCRM в ежедневной работе, и
            остаемся на связи для ответа на любые вопросы.
          </div>
        </div>
        <div data-aos-delay="200" className={s.card}>
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
            После настройки и обучения мы тестируем систему на реальных данных,
            устраняя возможные недочеты. Затем запускаем amoCRM в полноценную
            работу.
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
              <div className={s.title}>Анализ всех потребностей</div>
              <div className={s.text}>
                Начинаем с анализа вашего бизнеса, процессов и целей, чтобы
                понять, как CRM может быть полезна и какие инструменты вам
                нужны.
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
                  <span>Настройка</span>
                </div>
              </div>
              <div className={s.title}>Подготовка и настройка системы</div>
              <div className={s.text}>
                Настраиваем amoCRM под ваши задачи: создаем воронки продаж,
                интегрируем телефонию, настраиваем мессенджеры и автоматизируем
                рутинные процессы.
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
                  <span>Интеграция</span>
                </div>
              </div>
              <div className={s.title}>Интеграция с вашими инструментами</div>
              <div className={s.text}>
                Соединяем amoCRM с вашими сайтами и соц. сетями. Это
                обеспечивает бесшовное взаимодействие между всеми платформами и
                упрощает управление бизнесом.
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
                  <span>Обучение</span>
                </div>
              </div>
              <div className={s.title}>Обучение сотрудников</div>
              <div className={s.text}>
                Объясняем, как эффективно использовать amoCRM в ежедневной
                работе, и остаемся на связи для ответа на любые вопросы.
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
                После настройки и обучения мы тестируем систему на реальных
                данных, устраняя возможные недочеты. Затем запускаем amoCRM в
                полноценную работу.
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
        <div onClick={() => setModalOpen(true)} data-aos="fade-up">
          <Button text="Консультация" withArrow={true} link="" isFull={true} />
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
