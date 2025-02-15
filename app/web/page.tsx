import ContactForm from "../ui/main/contact-form";
import Faq from "../ui/main/faq";
import Footer from "../ui/main/footer";
import Aspects from "../ui/web/aspects";
import Services from "../ui/web/services";

export default function Web() {
  return (
    <div>
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
