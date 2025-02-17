import Header from "../ui/common/header";
import s from "../ui/common/css/dev/Main.module.css";
import Footer from "../ui/main/footer";
import Link from "next/link";

export default function Dev() {
  return (
    <>
      <div className={s.wrapper}>
        <Header></Header>
        <div className={s.content}>
          <div className={s.subtitle}>Скоро здесь будет новая страница</div>
          <div className={s.title}>Страница в разработке</div>
          <Link href={"/"} className={s.link}>Вернуться на главную</Link>
        </div>
      </div>
      <div className={s.footer}>
        <Footer></Footer>
      </div>
    </>
  );
}
