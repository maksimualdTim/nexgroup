import Advantages from "./ui/main/advantages";
import Services from "./ui/main/services";
import Main from "./ui/main/main";
import Problems from "./ui/main/problems";
import Footer from "./ui/main/footer";
import ContactForm from "./ui/main/contact-form";
import Numbers from "./ui/main/numbers";
import Consultation from "./ui/main/consultation";
import Faq from "./ui/main/faq";
import InfiniteHorizontalScroll from "./ui/common/infinite";
import styles from "@/app/ui/common/css/MainBlock.module.css";


export default function Home() {
  const logos = [
    {
      path: "/logos/amo-main.svg",
      width: 120,
      height: 23,
    },
    {
      path: "/logos/sklad-main.svg",
      width: 158,
      height: 24,
    },
    {
      path: "/logos/web-main.svg",
      width: 68,
      height: 20,
    },
    {
      path: "/logos/sipuni-main.svg",
      width: 82,
      height: 19,
    },
    {
      path: "/logos/utel-main.svg",
      width: 69,
      height: 20,
    },
  ];
  return (
    <>
      <div className="relative"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 53.66%, #000000 100%)",
        }}
      >
        <video autoPlay muted loop id="bg-video" className={styles.video}>
        <source src="/pc_1.webm" type="video/webm"></source>
        <source src="/pc_1.mp4" type="video/mp4"></source>
        Ваш браузер не поддерживает видео.
      </video>
        <Main></Main>
        <InfiniteHorizontalScroll logos={logos}></InfiniteHorizontalScroll>
      </div>

      <Problems></Problems>
      <Services></Services>
      <div className="relative">
        <div className="relative z-10">
          <Advantages></Advantages>
        </div>
        <div
          className="absolute w-full"
          style={{
            background: "linear-gradient(0deg, #030303 0%, #0E0E0E 100%)",
            height: "calc(203 * (1px + (100vw - 1530px) / 1530))",
            zIndex: 0,
            bottom: 0,
          }}
        ></div>
      </div>
      <Numbers></Numbers>
      <div
        className="px-fluid mobile-container-card"
        style={{ marginBottom: "calc(160 * (1px + (100vw - 1530px) / 1530))" }}
      >
        <Consultation></Consultation>
      </div>
      <Faq></Faq>
      <div style={{ marginTop: "calc(135 * (1px + (100vw - 1530px) / 1530))" }}>
        <ContactForm></ContactForm>
      </div>
      <Footer></Footer>
    </>
  );
}
