import Header from "../ui/common/header";
import ContactForm from "../ui/main/contact-form";
import Footer from "../ui/main/footer";
import s from "@/app/ui/common/css/contacts/Contacts.module.css";

export default function Contacts() {
  return (
    <div>
      <Header></Header>
      <div className={s.wrapper}>
        <ContactForm></ContactForm>
      </div>
      <Footer></Footer>
    </div>
  );
}
