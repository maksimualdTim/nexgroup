import Image from "next/image";

import Button from "../common/button";
import Title from "../common/title";
import Header from "../common/header";

import styles from "../common/css/MainBlock.module.css";
import Expirience from "../common/expirience";

export default function Main({setModalOpen} : {setModalOpen: (open: boolean) => void}) {
  return (
    <div className={`bg-cover bg-center bg-no-repeat ${styles.mainContainer}`}>
      <Header setModalOpen={setModalOpen}></Header>
      <div className="px-fluid mobile-container">
        <div className={styles.mainBlock}>
          <div className="main-title">
            <Title
              title="Помогаем бизнесу стать сильнее"
              title2="с&nbsp;помощью цифровых решений"
              subtitle="Умная автоматизация бизнеса"
              isMain={true}
              icon="/icons/nombus.svg"
            />
            <div className={styles.buttonsContainer}>
              <div
                style={{
                  marginRight: "calc(11 * (1px + (100vw - 1530px) / 1530))",
                }}
                onClick={() => setModalOpen(true)}
              >
                <Button
                  text="Обсудить проект"
                  isFull={true}
                  withArrow={true}
                  link=""
                />
              </div>
              <div>
                <Button
                  text="Подробнее о нас"
                  isFull={false}
                  withArrow={false}
                  link="/about"
                />
              </div>
            </div>
          </div>
          <Expirience></Expirience>
        </div>
      </div>
      <div
        className="hidden justify-between opacity-50 px-fluid md:flex"
        style={{
          marginTop: "calc(116 * (1px + (100vw - 1530px) / 1530))",
        }}
      >
        <div>
          <Image
            src={"/logos/amo-main.svg"}
            width={0}
            alt="amoCRM"
            height={0}
            style={{
              width: "calc(148 * (1px + (100vw - 1530px) / 1530))",
              height: "calc(29 * (1px + (100vw - 1530px) / 1530))",
            }}
          ></Image>
        </div>
        <div>
          <Image
            src={"/logos/sklad-main.svg"}
            width={0}
            alt="amoCRM"
            height={0}
            style={{
              width: "calc(194 * (1px + (100vw - 1530px) / 1530))",
              height: "calc(29 * (1px + (100vw - 1530px) / 1530))",
            }}
          ></Image>
        </div>
        <div>
          <Image
            src={"/logos/web-main.svg"}
            width={0}
            alt="amoCRM"
            height={0}
            style={{
              width: "calc(78 * (1px + (100vw - 1530px) / 1530))",
              height: "calc(22 * (1px + (100vw - 1530px) / 1530))",
            }}
          ></Image>
        </div>
        <div>
          <Image
            src={"/logos/sipuni-main.svg"}
            width={0}
            alt="amoCRM"
            height={0}
            style={{
              width: "calc(101 * (1px + (100vw - 1530px) / 1530))",
              height: "calc(23 * (1px + (100vw - 1530px) / 1530))",
            }}
          ></Image>
        </div>
        <div>
          <Image
            src={"/logos/utel-main.svg"}
            width={0}
            alt="amoCRM"
            height={0}
            style={{
              width: "calc(85 * (1px + (100vw - 1530px) / 1530))",
              height: "calc(25 * (1px + (100vw - 1530px) / 1530))",
            }}
          ></Image>
        </div>
      </div>
    </div>
  );
}
