"use client";

import styles from "../common/css/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "../common/button";
import Lavr from "./lavr";
import ServiceHeaderCard from "./ServiceHeaderCard";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);

  return (
    <header
      className={`relative ${active ? styles.active : ""} mobile-container`}
    >
      <div className="flex items-center justify-between px-fluid z-50 relative">
        <div className="inline-block">
          <Link href={"/"} className="flex items-center">
            <div>
              <Image
                src={"/logos/nex-full.svg"}
                alt="logo"
                width={0}
                height={0}
                style={{
                  width: "calc(179 * (1px + (100vw - 1530px) / 1530))",
                  height: "calc(47 * (1px + (100vw - 1530px) / 1530))",
                }}
                className="hidden md:block"
              />
              <Image
                className="block md:hidden"
                src={"/logos/logo-mobile.svg"}
                alt="logo"
                width={96}
                height={55}
                style={{
                  width: "calc(96 * (1px + (100vw - 430px) / 430))",
                  height: "calc(55 * (1px + (100vw - 430px) / 430))",
                }}
              />
            </div>
          </Link>
        </div>
        <div
          className="text-fluid font-semibold"
          style={{
            paddingLeft: "calc(80 * (1px + (100vw - 1530px) / 1530))",
            lineHeight: "calc(32 * (1px + (100vw - 1530px) / 1530))",
          }}
        >
          <Link
            className={`${styles.allServicesLink} hidden md:inline-block`}
            href={"#"}
            onClick={(e) => {
              e.preventDefault();
              const isActive = !active;
              setActive(isActive);
              if (isActive) {
                const scrollBarWidth =
                  window.innerWidth - document.documentElement.clientWidth;
                document.body.style.overflow = "hidden";
                document.body.style.paddingRight = `${scrollBarWidth}px`;
              } else {
                document.body.style.overflow = "";
                document.body.style.paddingRight = "";
              }
            }}
            style={{
              marginRight: "calc(48 * (1px + (100vw - 1530px) / 1530))",
            }}
          >
            Все услуги
          </Link>
          <Link
            className="hidden md:inline-block"
            href={"/"}
            style={{
              marginRight: "calc(48 * (1px + (100vw - 1530px) / 1530))",
            }}
          >
            Лицензии
          </Link>
          <Link
          className="hidden md:inline-block"
            href={"/"}
            style={{
              marginRight: "calc(48 * (1px + (100vw - 1530px) / 1530))",
            }}
          >
            О компании
          </Link>
          <Link href={"/"} className="hidden md:inline-block">Контакты</Link>
        </div>
        <div
          className={`flex items-center ${styles.mobileBtnContainer}`}
        >
          <Link href={"/"} className={`${styles.lang} ${styles.active}`}>
            RU
          </Link>
          <Link href={"/"} className={styles.lang}>
            UZ
          </Link>
          <div className={styles.menuBtn}>
            <div className={styles.menuBtnLines}></div>
          </div>
        </div>
        <div className="flex items-center hidden md:flex">
          <div
            className="text-right flex flex-col"
            style={{
              marginRight: "calc(32 * (1px + (100vw - 1530px) / 1530))",
            }}
          >
            <Link
              href={"tel:+998 90 333-77-39"}
              className="text-fluid font-semibold"
              style={{
                lineHeight: "calc(16 * (1px + (100vw - 1530px) / 1530))",
              }}
            >
              +998 90 333-77-39
            </Link>
            <Link
              href={"tel:+998 90 333-77-39"}
              className="opacity-50 underline"
              style={{
                lineHeight: "calc(16 * (1px + (100vw - 1530px) / 1530))",
                fontSize: "calc(13 * (1px + (100vw - 1530px) / 1530))",
              }}
            >
              Заказать звонок
            </Link>
          </div>
          <div className={`header-btn ${styles.headerBtn}`}>
            <Button
              link="/"
              text="Оставить заявку"
              isFull={true}
              withArrow={false}
            />
          </div>
        </div>
      </div>
      <div className={`absolute w-full services ${styles.servicesBlock}`}>
        <div className="flex justify-between items-center px-fluid">
          <div
            className="border-l"
            style={{
              paddingLeft: "calc(18 * (1px + (100vw - 1530px) / 1530))",
            }}
          >
            <div
              className="font-semibold"
              style={{
                fontSize: "calc(20 * (1px + (100vw - 1530px) / 1530))",
                lineHeight: "calc(20 * (1px + (100vw - 1530px) / 1530))",
                marginBottom: "calc(10 * (1px + (100vw - 1530px) / 1530))",
              }}
            >
              Предлагаемые услуги
            </div>
            <div className="opacity-30">Внедрение и разработка</div>
          </div>
          <div
            className="relative"
            style={{
              top: "calc(-15 * (1px + (100vw - 1530px) / 1530))",
            }}
          >
            <Lavr transparent={true}></Lavr>
          </div>
        </div>
        <div
          className="px-fluid flex justify-between"
          style={{
            marginTop: "calc(48 * (1px + (100vw - 1530px) / 1530))",
          }}
        >
          <ServiceHeaderCard
            link="/"
            text="Система для увеличения продаж"
            title="Внедрение amoCRM"
            iconHeight={18}
            iconWidth={91}
            logo="/logos/amo-main.svg"
          ></ServiceHeaderCard>
          <ServiceHeaderCard
            link="/"
            text="Все возможности управления торговлей"
            title="Внедрение системы МойСклад"
            iconHeight={19}
            iconWidth={129}
            isSklad={true}
            logo="/logos/sklad-menu.svg"
          ></ServiceHeaderCard>
          <ServiceHeaderCard
            link="/"
            text="Корпоративная телефония для бизнеса"
            title="Внедрение IP-телефонии"
            iconHeight={18}
            iconWidth={91}
            logo="/logos/utel-main.svg"
          ></ServiceHeaderCard>
          <ServiceHeaderCard
            link="/"
            text="Полный цикл разработки и запуска сайта"
            title="Разработка веб-сайтов"
            iconHeight={18}
            iconWidth={91}
            logo="/logos/web.svg"
          ></ServiceHeaderCard>
        </div>
      </div>
    </header>
  );
}
