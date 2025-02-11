import Advantages from "../ui/amo/advantages";
import CTA from "../ui/amo/cta";
import Grow from "../ui/amo/grow";
import Info from "../ui/amo/info";
import Main from "../ui/amo/main";
import Steps from "../ui/amo/steps";
import Consultation from "../ui/main/consultation";
import ContactForm from "../ui/main/contact-form";
import Faq from "../ui/main/faq";
import Footer from "../ui/main/footer";
import Numbers from "../ui/main/numbers";
import NumbersAmo from "../ui/amo/numbers";

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
        <Numbers></Numbers>
        <Faq></Faq>
        <div style={{ marginTop: "calc(135 * (1px + (100vw - 1530px) / 1530))" }}>
          <ContactForm></ContactForm>
        </div>
        <Footer></Footer>
    </>
    )
}