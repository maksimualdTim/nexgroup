import Button from "../common/button";
import styles from "../common/css/Consultation.module.css";
import Title from "../common/title";
import s from "../common/css/sipuni/Cta.module.css";

export default function CTA2({ setModalOpen }: { setModalOpen: (open: boolean) => void }) {
    return (
        <div className={`px-fluid ${s.wrapper} mobile-container`}>
            <div className={`${styles.consultation} ${s.bg}`}>
                <div className="flex justify-between relative hidden md:flex">
                    <div>
                        <div className={`${styles.title} ${s.sipuniTitle}`}>
                            <Title
                                title="Бесплатный аудит"
                                title2="и консультация по проекту"
                                subtitle="Подключим и продемонстрируем"
                                icon="/icons/circle-blue.svg"
                            />
                        </div>
                        <div
                            className={`flex ${styles.btns}`}
                            style={{ marginTop: "calc(60 * (1px + (100vw - 1530px) / 1530))" }}
                        >
                            <div
                                style={{
                                    marginRight: "calc(12 * (1px + (100vw - 1530px) / 1530))",
                                }}
                                onClick={() => setModalOpen(true)}
                            >
                                <Button
                                    link=""
                                    isFull={true}
                                    withArrow={false}
                                    text="Заказать звонок"
                                />
                            </div>
                            <div className="relative z-10">
                                <Button
                                    link="https://t.me/nexgroup_support"
                                    text="Написать нам"
                                    isFull={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block md:hidden relative z-10">
                    <div
                        style={{
                            marginBottom: "calc(44 * (1px + (100vw - 430px) / 430))",
                        }}
                        className={s.sipuniTitle}
                    >
                        <Title
                            title="Бесплатный аудит"
                            title2={"\nи консультация по проекту"}
                            subtitle="Подключим и продемонстрируем"
                            icon="/icons/circle-blue.svg"
                        />
                    </div>
                    <div onClick={() => setModalOpen(true)}>
                        <Button
                            link=""
                            isFull={true}
                            withArrow={false}
                            text="Заказать звонок"
                        />
                    </div>
                    <div style={{
                        marginTop: "calc(13 * (1px + (100vw - 430px) / 430))"
                    }}>
                        <Button
                            link="https://t.me/nexgroup_support"
                            text="Написать нам"
                            isFull={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
