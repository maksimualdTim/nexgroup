import MainText from "../common/mainText";
import Title from "../common/title";
import Image from "next/image";
import s from "../common/css/web/Steps.module.css";

export default function Steps({setModalOpen}: {setModalOpen: (open: boolean) => void}) {
  return (
    <div className={s.wrapper}>
      <div className="px-fluid mobile-container">
        <div className="block justify-between md:flex">
          <div>
            <Title
              title="Современные, привлекательные"
              title2={"\nи продающие сайты"}
              subtitle="Поэтапная разработка"
              isService={true}
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <MainText
              order={2}
              text={[
                <p key={1} className="font-semibold">
                  Наш подход включает исследование рынка и аудитории, чтобы
                  разработать сайт, точно отражающий ценности и важные
                  особенности вашего бизнеса.
                </p>,
              ]}
            />
          </div>
        </div>
        <div className={`relative z-10 ${s.link}`}>
          <span className="text-accent cursor-pointer" onClick={() => setModalOpen(true)}>
            Рассчитать стоимость сайта
            <Image
              className={`inline-block ${s.linkIcon}`}
              src={"/icons/arrow-diag.svg"}
              alt="arrow"
              width={0}
              height={0}
            ></Image>
          </span>
        </div>
      </div>
      <div className={s.content}>
        <div className={`${s.info} px-fluid`}>
          <div data-aos="fade-up" className={s.number}>01</div>
          <div data-aos="fade-up" data-aos-delay="200" className={s.number}>02</div>
          <div data-aos="fade-up" data-aos-delay="400" className={s.number}>03</div>
          <div className={s.steps}>
            <div className={s.step}>
              <span>Проработка дизайна</span>
            </div>
            <div className={s.step}>
              <span>Разработка сайта</span>
            </div>
            <div className={s.step}>
              <span>Полноценный запуск</span>
            </div>
          </div>
        </div>
        <div className={s.sphere}>
          <div className={s.elipse}></div>
          <Image data-aos="zoom-in" src={"/icons/web-circle.svg"} alt="circle" width={40} height={40} className={s.circleWrapper}></Image>
          <Image src={"/icons/web-circle.svg"} alt="circle" width={40} height={40} className={s.circleWrapper}></Image>
          <Image data-aos="zoom-in" src={"/icons/web-circle.svg"} alt="circle" width={40} height={40} className={s.circleWrapper}></Image>
          <Image
            src={"/icons/dotted-middle.svg"}
            height={2}
            width={76}
            className={s.lineMiddle}
            alt="line"
          ></Image>
          <Image
            src={"/icons/dotted-left.svg"}
            height={82}
            width={30}
            className={s.lineLeft}
            alt="line"
          ></Image>
          <Image
            src={"/icons/dotted-right.svg"}
            height={82}
            width={30}
            className={s.lineRight}
            alt="line"
          ></Image>

          <video data-aos="fade-up" autoPlay muted loop className={s.video}>
            <source src="/hero_1_compressed.webm" type="video/webm"></source>
            <source src="/hero_1.mp4" type="video/mp4"></source>
            Ваш браузер не поддерживает видео.
          </video>
          <div className={s.overlay}></div>
        </div>
      </div>
      <div className={s.mobileContent}>
        <div className={s.info}>
          <div className={s.number}>01</div>
          <div className={s.number}>02</div>
          <div className={s.number}>03</div>
          <div className={s.steps}>
            <div className={s.step}>
              <span>Проработка дизайна</span>
            </div>
            <div className={s.step}>
              <span>Разработка сайта</span>
            </div>
            <div className={s.step}>
              <span>Полноценный запуск</span>
            </div>
          </div>
          <Image src={"/icons/web-circle.svg"} alt="circle" width={40} height={40} className={s.circleWrapper}></Image>
          <Image src={"/icons/web-circle.svg"} alt="circle" width={40} height={40} className={s.circleWrapper}></Image>
          <Image src={"/icons/web-circle.svg"} alt="circle" width={40} height={40} className={s.circleWrapper}></Image>
        </div>
        <div className={s.videoWrapper}>
          <div className={s.elipse}></div>
          <video autoPlay muted loop className={s.video}>
            <source src="/hero_1_compressed.webm" type="video/webm"></source>
            <source src="/hero_1.mp4" type="video/mp4"></source>
            Ваш браузер не поддерживает видео.
          </video>
        </div>
      </div>
    </div>
  );
}
