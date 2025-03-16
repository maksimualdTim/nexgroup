import Header from "../common/header";
import s from "../common/css/amo/Main.module.css";
import sipuniStyles from "../common/css/sipuni/Main.module.css";

import Title from "../common/title";
import Button from "../common/button";

export default function Main({setModalOpen}: {setModalOpen: (open: boolean) => void}) {
  return (
    <div className={`${sipuniStyles.wrapper}`}>
      <Header setModalOpen={() => setModalOpen(true)}></Header>
      <div className={`px-fluid relative ${s.inner} mobile-container`}>
        <div className={sipuniStyles.title}>
          <Title
            title="Внедрение IP-телефонии"
            title2=""
            subtitle="Решение для колл-центров"
            isMain={true}
            icon="/icons/light.svg"
          ></Title>
        </div>
        <div className={s.text}>
          Легкое и удобное решение для автоматизации колл-центра без
          необходимости приобретать специальное оборудование.
        </div>
        <div className="flex justify-between items-end">
          <div className={`block md:flex ${s.btns}`}>
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
                text="Подробнее"
                isFull={false}
                withArrow={false}
                link="#grow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
