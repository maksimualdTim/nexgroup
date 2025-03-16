"use client"
import Header from "../ui/common/header";
import s from "../ui/common/css/dev/Main.module.css";
import Footer from "../ui/main/footer";
import Link from "next/link";
import { useState } from "react";
import Modal from "../ui/common/modal";

export default function Dev() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  return (
    <>
      <div className={s.wrapper}>
        <Header setModalOpen={setModalOpen}></Header>
        <div className={s.content}>
          <div className={s.subtitle}>Скоро здесь будет новая страница</div>
          <div className={s.title}>Страница в разработке</div>
          <Link href={"/"} className={s.link}>Вернуться на главную</Link>
        </div>
      </div>
      <div className={s.footer}>
        <Footer></Footer>
        <Modal isOpen={modalOpen} onClose={() => {setModalOpen(false)}}></Modal>
      </div>
    </>
  );
}
