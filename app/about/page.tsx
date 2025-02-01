import Footer from "@/app/ui/main/footer";
import ContactForm from "@/app/ui/main/contact-form";
import Numbers from "@/app/ui/main/numbers";
import Consultation from "@/app/ui/main/consultation";
import Faq from "@/app/ui/main/faq";
import Main from "../ui/about/about";


export default function About() {
    return (
        <>
        <Main></Main>
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