import Link from "next/link";
import Title from "../common/title";
import Image from "next/image";
import FooterForm from "../common/footer-form";
import s from "../common/css/ContactForm.module.css";

export default function ContactForm() {
  return (
    <div
      className={`px-fluid mobile-container-card ${s.wrapper}`}
      style={{
        marginBottom: "calc(99 * (1px + (100vw - 1530px) / 1530))",
      }}
    >
      <div
        className={`flex overflow-y-hidden justify-between relative overflow-hidden ${s.inner}`}
      >
        <div className="w-[100%] md:w-[45%] relative">
          <div
            style={{ paddingTop: "calc(63 * (1px + (100vw - 1530px) / 1530))" }}
          >
            <div className={s.formTitle}>
              <Title subtitle="Наши контакты" title="Свяжитесь с нами" />
            </div>
            <div className={`text-fluid text-[#D9D9D9] ${s.text}`}>
              Заполните заявку на сайте, либо позвоните нам для бесплатной
              консультации. Мы обсудим ваши бизнес-потребности и предложим
              оптимальные решения для вашей компании.
            </div>
          </div>
          <div className="block md:flex justify-between">
            <div className={s.mobileTop}>
              <div>
                <div className={`text-[#B4B4B480] font-medium ${s.title}`}>
                  Номер телефона
                </div>
                <div>
                  <Link
                    href={"tel:+998 (90) 333-77-39"}
                    className={`text-[#D9D9D9] ${s.info}`}
                  >
                    +998 (90) 333-77-39
                  </Link>
                </div>
              </div>
              <div className={s.infoWrapper}>
                <div className={`text-[#B4B4B480] font-medium ${s.title}`}>
                  Локация
                </div>
                <div>
                  <div className={`text-[#D9D9D9] ${s.infoMini}`}>
                    Узбекистан, Ташкент
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className={`text-[#B4B4B480] font-medium ${s.title}`}>
                  Элетронная почта
                </div>
                <div>
                  <Link
                    href={"mailto:info@nexgroup.uz"}
                    className={`text-[#D9D9D9] ${s.info}`}
                  >
                    info@nexgroup.uz
                  </Link>
                </div>
              </div>
              <div
                style={{
                  marginTop: "calc(50 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                <div className={s.socialsWrapper}>
                  <Link target="_blank" href={"https://t.me/nexgroup_support"}>
                    <Image
                      src={"/icons/telegram-accent.svg"}
                      width={32}
                      height={32}
                      alt="telegram"
                      className={`inline-block ${s.icon}`}
                    />
                  </Link>
                  <Link
                    target="_blank"
                    href={"https://www.instagram.com/nexgroup.uz"}
                  >
                    <Image
                      src={"/icons/instagram-accent.svg"}
                      width={32}
                      height={32}
                      alt="instagram"
                      className={`inline-block ${s.icon}`}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute hidden md:block"
            style={{
              bottom: "calc(-37 * (1px + (100vw - 1530px) / 1530))",
            }}
          >
            <Image
              src={"/icons/logo-grey.svg"}
              alt="logo"
              width={690}
              height={181}
              style={{
                width: "calc(690 * (1px + (100vw - 1530px) / 1530))",
                height: "calc(181 * (1px + (100vw - 1530px) / 1530))",
              }}
            ></Image>
          </div>
        </div>
        <div className="hidden md:block w-[45%]">
          <div
            className="relative z-10"
            style={{
              background: "#2B2B2B73",
              backdropFilter: "blur(150px)",
              paddingBottom: "calc(42 * (1px + (100vw - 1530px) / 1530))",
              paddingLeft: "calc(55 * (1px + (100vw - 1530px) / 1530))",
              paddingRight: "calc(55 * (1px + (100vw - 1530px) / 1530))",
              paddingTop: "calc(63 * (1px + (100vw - 1530px) / 1530))",
              border: "1px solid #FFFFFF1A",
              borderRadius: "calc(18 * (1px + (100vw - 1530px) / 1530))",
            }}
          >
            <div className="flex justify-between items-center">
              <div>
                <div
                  className="text-accent text-fluid font-semibold"
                  style={{
                    lineHeight: "calc(20 * (1px + (100vw - 1530px) / 1530))",
                    marginBottom: "calc(21 * (1px + (100vw - 1530px) / 1530))",
                  }}
                >
                  Форма для связи
                </div>
                <div
                  className="font-semibold"
                  style={{
                    fontSize: "calc(24 * (1px + (100vw - 1530px) / 1530))",
                    lineHeight: "calc(40 * (1px + (100vw - 1530px) / 1530))",
                  }}
                >
                  Обсудим ваш проект?
                </div>
              </div>
              <div
                className="rounded-full"
                style={{
                  padding: "calc(24 * (1px + (100vw - 1530px) / 1530))",
                  border: "1px solid #3D3D3D",
                }}
              >
                <Image
                  src={"/icons/envelope.svg"}
                  alt="envelope"
                  width={24}
                  height={21}
                  style={{
                    width: "calc(24 * (1px + (100vw - 1530px) / 1530))",
                    height: "calc(24 * (1px + (100vw - 1530px) / 1530))",
                  }}
                ></Image>
              </div>
            </div>
            <div
              style={{
                marginTop: "calc(65 * (1px + (100vw - 1530px) / 1530))",
              }}
            >
              <FooterForm></FooterForm>
            </div>
          </div>
        </div>
        <div
          className="absolute z-0 hidden md:block"
          style={{
            right: "calc(-56 * (1px + (100vw - 1530px) / 1530))",
            top: "calc(-107 * (1px + (100vw - 1530px) / 1530))",
          }}
        >
          <Image
            src={"/line-3d.png"}
            alt="line-3d"
            width={858}
            height={998}
            style={{
              width: "calc(858 * (1px + (100vw - 1530px) / 1530))",
              height: "calc(998 * (1px + (100vw - 1530px) / 1530))",
            }}
          ></Image>
        </div>
        <div
          className="absolute block md:hidden"
          style={{
            bottom: "0",
            width: "125%",
            left: "calc(-35 * (1px + (100vw - 430px) / 430))"
          }}
        >
          <Image
            src={"/icons/logo-grey.svg"}
            alt="logo"
            width={690}
            height={181}
            style={{
              width: "100%",
              height: "auto",
            }}
          ></Image>
        </div>
      </div>
    </div>
  );
}
