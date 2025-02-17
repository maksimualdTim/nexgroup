import Link from "next/link";
import MainText from "../common/mainText";
import Title from "../common/title";
import Image from "next/image";
import s from "../common/css/web/Steps.module.css";

export default function Steps() {
  return (
    <div className={s.wrapper}>
      <div className="px-fluid">
        <div className="block justify-between md:flex">
          <div>
            <Title
              title="Современные, привлекательные"
              title2="и продающие сайты"
              subtitle="Поэтапная разработка"
            />
          </div>
          <div>
            <MainText
              order={1}
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
          <Link className="text-accent" href={"/"}>
            Рассчитать стоимость сайта
            <Image
              className={`inline-block ${s.linkIcon}`}
              src={"/icons/arrow-diag.svg"}
              alt="arrow"
              width={0}
              height={0}
            ></Image>
          </Link>
        </div>
      </div>
      <div className={s.content}>
        <div className={`${s.info} px-fluid`}>
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
        </div>
        <div className={s.sphere}>
          <div className={s.elipse}></div>
          <div className={s.circleWrapper}>
            <div className={s.circle}></div>
          </div>
          <div className={s.circleWrapper}>
            <div className={s.circle}></div>
          </div>
          <div className={s.circleWrapper}>
            <div className={s.circle}></div>
          </div>
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

          <video autoPlay muted loop className={s.video}>
            <source src="/hero_1.webm" type="video/webm"></source>
            <source src="/hero_1.mp4" type="video/mp4"></source>
            Ваш браузер не поддерживает видео.
          </video>
          <div className={s.overlay}></div>
        </div>
      </div>
    </div>
  );
}
