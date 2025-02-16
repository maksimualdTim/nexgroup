import ContactForm from "../ui/main/contact-form";
import Faq from "../ui/main/faq";
import Footer from "../ui/main/footer";
import Aspects from "../ui/web/aspects";
import Main from "../ui/web/main";
import Services from "../ui/web/services";
import styles from "@/app/ui/common/css/MainBlock.module.css";

export default function Web() {
  return (
    <div>
      <div className="relative">
        <video autoPlay muted loop id="bg-video" className={styles.video}>
          <source src="/web.webm" type="video/webm"></source>
          <source src="/web.mp4" type="video/mp4"></source>
          Ваш браузер не поддерживает видео.
        </video>
        <Main></Main>
      </div>
      <Services></Services>
      <Aspects></Aspects>
      <Faq></Faq>
      <div style={{ marginTop: "calc(135 * (1px + (100vw - 1530px) / 1530))" }}>
        <ContactForm></ContactForm>
      </div>
      <Footer></Footer>
    </div>
  );
}
