"use client";

import Title from "../common/title";
import MainText from "../common/mainText";
import s from "../common/css/amo/Advantages.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Advantages() {
  return (
    <div className={`px-fluid ${s.wrapper}`}>
      <div className={`block md:flex justify-between items-end ${s.title}`}>
        <div className="mobile-container">
          <Title
            title="Заслуженнное доверие"
            title2="наших клиентов"
            subtitle="Почему именно NEX"
            isService={true}
          ></Title>
        </div>
        <div className="hidden md:block" data-aos="fade-up" data-aos-delay="200">
          <MainText
            order={4}
            text={[
              <p key={1}>
                Мы ценим доверие наших клиентов, обеспечивая высокий уровень
                сервиса, надежность и качественные решения для вашего бизнеса.
              </p>,
            ]}
          ></MainText>
        </div>
      </div>
      <div className="relative hidden md:block">
        <div className={`absolute ${s.cross}`}></div>
        <div className={`absolute ${s.cross}`}></div>
        <div className={`${s.cards} flex flex-wrap`}>
          <div data-aos="fade-up" className={s.card}>
            <div className={`${s.cardTop} flex justify-between items-center`}>
              <div className={s.cardTitle}>Экспертность</div>
              <div className={s.order}>
                <span style={{ opacity: ".6" }}>01</span>
              </div>
            </div>
            <div className={s.cardText}>
              Мы не просто настраиваем систему, а адаптируем ее под ваши задачи,
              учитывая специфику бизнеса и предлагая эффективные решения.
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className={s.card}>
            <div className={`${s.cardTop} flex justify-between items-center`}>
              <div className={s.cardTitle}>Прозрачность</div>
              <div className={s.order}>
                <span style={{ opacity: ".6" }}>02</span>
              </div>
            </div>
            <div className={s.cardText}>
              Никаких скрытых условий или дополнительных платежей. Вы всегда
              знаете, за что платите, и видите результаты нашей работы.
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="400" className={s.card}>
            <div className={`${s.cardTop} flex justify-between items-center`}>
              <div className={s.cardTitle}>Огромный опыт</div>
              <div className={s.order}>
                <span style={{ opacity: ".6" }}>03</span>
              </div>
            </div>
            <div className={s.cardText}>
              Мы внедрили CRM для десятков компаний и знаем, что важно для вас.
              Наш опыт — это реальные кейсы, которыми мы гордимся.
            </div>
          </div>
          <div data-aos="fade-up" className={s.card}>
            <div className={`${s.cardTop} flex justify-between items-center`}>
              <div className={s.cardTitle}>Гарантия результата</div>
              <div className={s.order}>
                <span style={{ opacity: ".6" }}>04</span>
              </div>
            </div>
            <div className={s.cardText}>
              Гарантируем эффективность каждого решения, обеспечивая
              прозрачность, контроль и достижение целей.
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className={s.card}>
            <div className={`${s.cardTop} flex justify-between items-center`}>
              <div className={s.cardTitle}>Опережение рынка</div>
              <div className={s.order}>
                <span style={{ opacity: ".6" }}>05</span>
              </div>
            </div>
            <div className={s.cardText}>
              Внедряем самые лучшие решения, помогая вашему бизнесу не просто
              адаптироваться, а задавать стандарты в отрасли.
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="400" className={s.card}>
            <div className={`${s.cardTop} flex justify-between items-center`}>
              <div className={s.cardTitle}>Тех. поддержка</div>
              <div className={s.order}>
                <span style={{ opacity: ".6" }}>06</span>
              </div>
            </div>
            <div className={s.cardText}>
              После реализации проекта мы продолжаем поддерживать вас,
              оптимизируя решения для долгосрочной эффективности.
            </div>
          </div>
        </div>
      </div>
      <div className={`block md:hidden mobile-container ${s.sliderWrapper} ${s.cards}`}>
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
              <div className={`${s.cardTop} flex justify-between items-center`}>
                <div className={s.cardTitle}>Экспертность</div>
                <div className={s.order}>
                  <span style={{ opacity: ".6" }}>01</span>
                </div>
              </div>
              <div className={s.cardText}>
                Мы не просто настраиваем систему, а адаптируем ее под ваши
                задачи, учитывая специфику бизнеса и предлагая эффективные
                решения.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.card}>
              <div className={`${s.cardTop} flex justify-between items-center`}>
                <div className={s.cardTitle}>Прозрачность</div>
                <div className={s.order}>
                  <span style={{ opacity: ".6" }}>02</span>
                </div>
              </div>
              <div className={s.cardText}>
                Никаких скрытых условий или дополнительных платежей. Вы всегда
                знаете, за что платите, и видите результаты нашей работы.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.card}>
              <div className={`${s.cardTop} flex justify-between items-center`}>
                <div className={s.cardTitle}>Огромный опыт</div>
                <div className={s.order}>
                  <span style={{ opacity: ".6" }}>03</span>
                </div>
              </div>
              <div className={s.cardText}>
                Мы внедрили CRM для десятков компаний и знаем, что важно для
                вас. Наш опыт — это реальные кейсы, которыми мы гордимся.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.card}>
              <div className={`${s.cardTop} flex justify-between items-center`}>
                <div className={s.cardTitle}>Гарантия результата</div>
                <div className={s.order}>
                  <span style={{ opacity: ".6" }}>04</span>
                </div>
              </div>
              <div className={s.cardText}>
                Гарантируем эффективность каждого решения, обеспечивая
                прозрачность, контроль и достижение целей.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.card}>
              <div className={`${s.cardTop} flex justify-between items-center`}>
                <div className={s.cardTitle}>Опережение рынка</div>
                <div className={s.order}>
                  <span style={{ opacity: ".6" }}>05</span>
                </div>
              </div>
              <div className={s.cardText}>
                Внедряем самые лучшие решения, помогая вашему бизнесу не просто
                адаптироваться, а задавать стандарты в отрасли.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.card}>
              <div className={`${s.cardTop} flex justify-between items-center`}>
                <div className={s.cardTitle}>Тех. поддержка</div>
                <div className={s.order}>
                  <span style={{ opacity: ".6" }}>06</span>
                </div>
              </div>
              <div className={s.cardText}>
                После реализации проекта мы продолжаем поддерживать вас,
                оптимизируя решения для долгосрочной эффективности.
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
