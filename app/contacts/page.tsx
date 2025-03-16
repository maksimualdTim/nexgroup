"use client"
import { useState } from "react";
import Header from "../ui/common/header";
import Modal from "../ui/common/modal";
import ContactForm from "../ui/main/contact-form";
import Footer from "../ui/main/footer";
import s from "@/app/ui/common/css/contacts/Contacts.module.css";

export default function Contacts() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  return (
    <div>
      <Header setModalOpen={setModalOpen}></Header>
      <div className={s.wrapper}>
        <ContactForm></ContactForm>
      </div>
      <Footer></Footer>
      <Modal isOpen={modalOpen} onClose={() => {setModalOpen(false)}}></Modal>
    </div>
  );
}
