import Advantages from "./ui/main/advantages";
import Services from "./ui/main/services";
import Main from "./ui/main/main";
import Problems from "./ui/main/problems";
import Footer from "./ui/main/footer";
import ContactForm from "./ui/main/contact-form";
import Numbers from "./ui/main/numbers";
import Consultation from "./ui/main/consultation";
import Faq from "./ui/main/faq";

export default function Home() {
  return (
    <div>
      <Main></Main>
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
      className="px-fluid"
        style={{ marginBottom: "calc(160 * (1px + (100vw - 1530px) / 1530))" }}
      >
        <Consultation></Consultation>
      </div>
        <Faq></Faq>
      <div
        style={{ marginTop: "calc(135 * (1px + (100vw - 1530px) / 1530))" }}
      >
        <ContactForm></ContactForm>
      </div>
      <Footer></Footer>
    </div>
  );
}
