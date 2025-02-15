import Advantages from "../ui/sipuni/advantages";
import CTA from "../ui/sipuni/cta";
import Grow from "../ui/sipuni/grow";
import Info from "../ui/sipuni/info";
import Main from "../ui/sipuni/main";
import Steps from "../ui/sipuni/steps";
import Consultation from "../ui/main/consultation";
import ContactForm from "../ui/main/contact-form";
import Faq from "../ui/main/faq";
import Footer from "../ui/main/footer";
import NumbersAmo from "../ui/sipuni/numbers";

export default function Amo() {
    return (
        <>
       <Main></Main> 
       <Grow></Grow>
       <NumbersAmo></NumbersAmo>
       <Steps></Steps>
       <Info></Info>
       <CTA></CTA>
       <Advantages></Advantages>
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
    )
}