import Header from "../common/header";
import s from "../common/css/amo/Main.module.css";
import sipuniStyles from "../common/css/sipuni/Main.module.css";

import Title from "../common/title";
import Button from "../common/button";

export default function Main() {
  return (
    <div className={`${sipuniStyles.wrapper}`}>
      <Header></Header>
      <div className={`px-fluid relative ${s.inner} mobile-container`}>
        <div className={sipuniStyles.title}>
          <Title
            title="Внедрение IP-телефонии"
            title2=""
            subtitle="Лучшее решение для колл-центров"
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
            >
              <Button
                text="Обсудить проект"
                isFull={true}
                withArrow={true}
                link="https://t.me/nexgroup_support"
              />
            </div>
            <div>
              <Button
                text="Подробнее"
                isFull={false}
                withArrow={false}
                link="/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
