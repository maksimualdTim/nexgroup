"use client";

import styles from "../common/css/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "../common/button";
import Lavr from "./lavr";
import ServiceHeaderCard from "./ServiceHeaderCard";
import { useEffect, useState } from "react";
import TelegramButton from "./telegramButton";

export default function Header() {
  const [active, setActive] = useState(false);
  const [activeMobileBtn, setActiveMobileBtn] = useState(false);
  const [activeSubitem, setActiveSubitem] = useState(false);

  useEffect(() => {
    if(!activeMobileBtn && !active) {
      document.body.style.overflow = "";
    }
  })
  
  return (
    <div className="relative">
      <header className={`relative ${active ? styles.active : ""} ${activeMobileBtn ? styles.mobileActive : ""}`}>
        <div className="mobile-container relative">
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
                href={"/dev"}
                style={{
                  marginRight: "calc(48 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                Лицензии
              </Link>
              <Link
                className="hidden md:inline-block"
                href={"/about"}
                style={{
                  marginRight: "calc(48 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                О компании
              </Link>
              <Link href={"/contacts"} className="hidden md:inline-block">
                Контакты
              </Link>
            </div>
            <div className={`flex items-center ${styles.mobileBtnContainer}`}>
              <Link href={"/"} className={`${styles.lang} ${styles.active}`}>
                RU
              </Link>
              <Link href={"/dev"} className={styles.lang}>
                UZ
              </Link>
              <div
                className={`${styles.menuBtn} ${
                  activeMobileBtn ? styles.activeMobileBtn : ""
                }`}
                onClick={() => {
                  const isActive = !activeMobileBtn;
                  setActiveMobileBtn(isActive);
                  if (isActive) {
                    document.body.style.overflow = "hidden";
                  } else {
                    document.body.style.overflow = "auto";
                  }
                }}
              >
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
                  link="https://t.me/nexgroup_support"
                  text="Оставить заявку"
                  isFull={true}
                  withArrow={false}
                />
              </div>
            </div>
          </div>
          <div
            className={`mobile md:hidden absolute w-full h-screen mobile-container ${styles.mobileMenu} ${activeMobileBtn ? styles.mobileMenuActive : ""}`}
          >
            <div className={`absolute ${styles.mobileCubeContainer}`}>
              <Image src={"/mobile-cube.png"} alt="cube" width={213} height={651} className={styles.cube}></Image>
            </div>
            <div
              className={`font-semibold text-fluid ${styles.mobileMenuSubtitle}`}
            >
              Навигация
            </div>
            <ul>
              <li className={styles.mobileMenuItem}>
                <Link className={styles.mobileMenuLink} href={"/"}>
                  Главная
                </Link>
              </li>
              <li className={`${styles.mobileMenuItem} ${styles.mobileMenuItemSubitems} ${activeSubitem ? styles.activeSubitem : ""}`}>
                <button className={`${styles.mobileMenuLink} ${styles.accordion}`} onClick={() => {setActiveSubitem(!activeSubitem)}}>
                  Все услуги
                </button>
                <div className={styles.panel}>
                  <Link href={"/amo"} className={styles.panelLink}>
                      <div className="flex justify-between">
                        <Image src={"/logos/amo-main.svg"} alt="amo" className="opacity-50" width={91} height={18}></Image>
                        <Image src={"/icons/arrow-diag.svg"} alt="arrow" width={10} height={10} style={{
                          rotate: "270deg"
                        }}></Image>
                      </div>
                      <div className={styles.panelInfo}>
                        <div className={styles.panelTitle}>Внедрение amoCRM</div>
                        <div className={styles.panelText}>Система для увеличения продаж</div>
                      </div>
                  </Link>
                  <Link href={"/dev"} className={styles.panelLink}>
                      <div className="flex justify-between">
                        <Image src={"/logos/sklad-menu.svg"} alt="amo" width={129} height={19}></Image>
                        <Image src={"/icons/arrow-diag.svg"} alt="arrow" width={10} height={10} style={{
                          rotate: "270deg"
                        }}></Image>
                      </div>
                      <div className={styles.panelInfo}>
                        <div className={styles.panelTitle}>Внедрение системы МойСклад</div>
                        <div className={styles.panelText}>Все возможности управления торговлей</div>
                      </div>
                  </Link>
                  <Link href={"/sipuni"} className={styles.panelLink}>
                      <div className="flex justify-between">
                        <Image src={"/logos/utel-main.svg"} alt="amo" className="opacity-50" width={71} height={21}></Image>
                        <Image src={"/icons/arrow-diag.svg"} alt="arrow" width={10} height={10} style={{
                          rotate: "270deg"
                        }}></Image>
                      </div>
                      <div className={styles.panelInfo}>
                        <div className={styles.panelTitle}>Внедрение IP-телефонии</div>
                        <div className={styles.panelText}>Корпоративная телефония для бизнеса</div>
                      </div>
                  </Link>
                  <Link href={"/web"} className={styles.panelLink}>
                      <div className="flex justify-between">
                        <Image src={"/logos/web-main.svg"} className="opacity-50" alt="amo" width={63} height={20}></Image>
                        <Image src={"/icons/arrow-diag.svg"} alt="arrow" width={10} height={10} style={{
                          rotate: "270deg"
                        }}></Image>
                      </div>
                      <div className={styles.panelInfo}>
                        <div className={styles.panelTitle}>Разработка веб-сайтов</div>
                        <div className={styles.panelText}>Полный цикл разработки и запуска сайта</div>
                      </div>
                  </Link>
                </div>
              </li>
              <li className={styles.mobileMenuItem}>
                <Link className={styles.mobileMenuLink} href={"/dev"}>
                  Лицензии
                </Link>
              </li>
              <li className={styles.mobileMenuItem}>
                <Link className={styles.mobileMenuLink} href={"/about"}>
                  О компании
                </Link>
              </li>
              <li className={styles.mobileMenuItem}>
                <Link className={styles.mobileMenuLink} href={"/contacts"}>
                  Контакты
                </Link>
              </li>
            </ul>
            <div className={styles.menuMobileBtnsWrapper}>
              <div>
                <Button
                  link="https://t.me/nexgroup_support"
                  isFull={true}
                  withArrow={true}
                  text="Консультация"
                />
              </div>
              <div className="relative z-10">
                <TelegramButton
                  link="https://t.me/nexgroup_support"
                  text="Написать в телеграм"
                />
              </div>
            </div>
            <div className={styles.mobileMenuContacts}>
              <div>
                <div className={styles.mobileMenuContactsSubtitle}>
                  Номер телефона
                </div>
                <div className={styles.mobileMenuContactsInfo}>
                  <Link href={"tel:+998 (90) 333-77-39"}>
                    +998 (90) 333-77-39
                  </Link>
                </div>
              </div>
              <div>
                <div className={styles.mobileMenuContactsSubtitle}>
                  Электронная почта
                </div>
                <div className={styles.mobileMenuContactsInfo}>
                  <Link href={"mailto:info@nexgroup.uz"}>info@nexgroup.uz</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`desktop absolute w-full services ${styles.servicesBlock}`}
        >
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
                right: "calc(30 * (1px + (100vw - 1530px) / 1530))"
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
              link="/amo"
              text="Система для увеличения продаж"
              title="Внедрение amoCRM"
              iconHeight={18}
              iconWidth={91}
              logo="/logos/amo-main.svg"
            ></ServiceHeaderCard>
            <ServiceHeaderCard
              link="/dev"
              text="Все возможности управления торговлей"
              title="Внедрение системы МойСклад"
              iconHeight={19}
              iconWidth={129}
              isSklad={true}
              logo="/logos/sklad-menu.svg"
            ></ServiceHeaderCard>
            <ServiceHeaderCard
              link="/sipuni"
              text="Корпоративная телефония для бизнеса"
              title="Внедрение IP-телефонии"
              iconHeight={18}
              iconWidth={91}
              logo="/logos/utel-main.svg"
            ></ServiceHeaderCard>
            <ServiceHeaderCard
              link="/web"
              text="Полный цикл разработки и запуска сайта"
              title="Разработка веб-сайтов"
              iconHeight={18}
              iconWidth={91}
              logo="/logos/web.svg"
            ></ServiceHeaderCard>
          </div>
        </div>
      </header>
    </div>
  );
}
