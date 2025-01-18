import Link from "next/link";
import Title from "../common/title";
import Image from "next/image";
import FooterForm from "../common/footer-form";


export default function ContactForm() {
  return (
    <div
      className="px-fluid"
      style={{
        marginBottom: "calc(99 * (1px + (100vw - 1530px) / 1530))",
      }}
    >
      <div
        className="flex overflow-y-hidden justify-between relative overflow-hidden"
        style={{
          background: "linear-gradient(90deg, #171717 0%, #1E1E1E 100%)",
          paddingLeft: "calc(70 * (1px + (100vw - 1530px) / 1530))",
          paddingRight: "calc(24 * (1px + (100vw - 1530px) / 1530))",
          paddingBottom: "calc(29 * (1px + (100vw - 1530px) / 1530))",
          paddingTop: "calc(27 * (1px + (100vw - 1530px) / 1530))",
          borderRadius: "calc(20 * (1px + (100vw - 1530px) / 1530))",
        }}
      >
        <div className="w-[45%] relative">
          <div style={{paddingTop: "calc(63 * (1px + (100vw - 1530px) / 1530))"}}>
            <div>
              <Title subtitle="Наши контакты" title="Свяжитесь с нами" />
            </div>
            <div
              className="text-fluid text-[#D9D9D9]"
              style={{
                marginTop: "calc(60 * (1px + (100vw - 1530px) / 1530))",
                maxWidth: "calc(581 * (1px + (100vw - 1530px) / 1530))",
                marginBottom: "calc(75 * (1px + (100vw - 1530px) / 1530))",
              }}
            >
              Заполните заявку на сайте, либо позвоните нам для бесплатной
              консультации. Мы обсудим ваши бизнес-потребности и предложим
              оптимальные решения для вашей компании.
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <div>
                <div
                  className="text-[#B4B4B480] opacity-50 font-medium"
                  style={{
                    fontSize: "calc(14 * (1px + (100vw - 1530px) / 1530))",
                    lineHeight: "calc(14 * (1px + (100vw - 1530px) / 1530))",
                    marginBottom: "calc(10 * (1px + (100vw - 1530px) / 1530))",
                  }}
                >
                  Номер телефона
                </div>
                <div>
                  <Link
                    href={"tel:+998 (90) 333-77-39"}
                    className="text-[#D9D9D9]"
                    style={{
                      fontSize: "calc(25 * (1px + (100vw - 1530px) / 1530))",
                      lineHeight: "calc(30 * (1px + (100vw - 1530px) / 1530))",
                    }}
                  >
                    +998 (90) 333-77-39
                  </Link>
                </div>
              </div>
              <div
                style={{
                  marginTop: "calc(40 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                <div
                  className="text-[#B4B4B480] opacity-50 font-medium"
                  style={{
                    fontSize: "calc(14 * (1px + (100vw - 1530px) / 1530))",
                    lineHeight: "calc(14 * (1px + (100vw - 1530px) / 1530))",
                    marginBottom: "calc(10 * (1px + (100vw - 1530px) / 1530))",
                  }}
                >
                  Локация
                </div>
                <div>
                  <div
                    className="text-[#D9D9D9]"
                    style={{
                      fontSize: "calc(20 * (1px + (100vw - 1530px) / 1530))",
                      lineHeight: "calc(24 * (1px + (100vw - 1530px) / 1530))",
                    }}
                  >
                    Узбекистан, Ташкент
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div
                  className="text-[#B4B4B480] opacity-50 font-medium"
                  style={{
                    fontSize: "calc(14 * (1px + (100vw - 1530px) / 1530))",
                    lineHeight: "calc(14 * (1px + (100vw - 1530px) / 1530))",
                    marginBottom: "calc(10 * (1px + (100vw - 1530px) / 1530))",
                  }}
                >
                  Элетронная почта
                </div>
                <div>
                  <Link
                    href={"mailto:info@nexgroup.uz"}
                    className="text-[#D9D9D9]"
                    style={{
                      fontSize: "calc(25 * (1px + (100vw - 1530px) / 1530))",
                      lineHeight: "calc(30 * (1px + (100vw - 1530px) / 1530))",
                    }}
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
                <div>
                  <Link target="_blank" href={"https://t.me/nexgroup_support"}>
                    <Image
                      src={"/icons/telegram-accent.svg"}
                      width={32}
                      height={32}
                      alt="telegram"
                      className="inline-block"
                      style={{
                        width: "calc(32 * (1px + (100vw - 1530px) / 1530))",
                        height: "calc(32 * (1px + (100vw - 1530px) / 1530))",
                        marginRight:
                          "calc(10 * (1px + (100vw - 1530px) / 1530))",
                      }}
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
                      className="inline-block"
                      style={{
                        width: "calc(32 * (1px + (100vw - 1530px) / 1530))",
                        height: "calc(32 * (1px + (100vw - 1530px) / 1530))",
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute"
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
        <div className="w-[45%]">
          <div className="relative z-10"
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
              <div className="rounded-full" style={{
                                    padding: "calc(24 * (1px + (100vw - 1530px) / 1530))",
                    border: "1px solid #3D3D3D"
              }}>
                <Image
                src={"/icons/envelope.svg"}
                alt="envelope"
                width={24}
                height={21}
                style={{
                    width: "calc(24 * (1px + (100vw - 1530px) / 1530))",
                    height: "calc(24 * (1px + (100vw - 1530px) / 1530))"
                }}
                ></Image>
              </div>
            </div>
            <div style={{marginTop: "calc(65 * (1px + (100vw - 1530px) / 1530))"}}>
                <FooterForm></FooterForm>
            </div>
          </div>
        </div>
        <div className="absolute z-0" style={{
          right: "calc(-56 * (1px + (100vw - 1530px) / 1530))",
          top: "calc(-107 * (1px + (100vw - 1530px) / 1530))"
        }}>
            <Image src={"/line-3d.png"} alt="line-3d" width={858} height={998} style={{width: "calc(858 * (1px + (100vw - 1530px) / 1530))", height: "calc(998 * (1px + (100vw - 1530px) / 1530))"}}></Image>
          </div>
      </div>
    </div>
  );
}
