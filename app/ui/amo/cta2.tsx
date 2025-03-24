import Button from "../common/button";
import styles from "../common/css/Consultation.module.css";
import Title from "../common/title";
import s from "../common/css/sipuni/Cta.module.css";

export default function CTA2({ setModalOpen }: { setModalOpen: (open: boolean) => void }) {
    return (
        <div className={`px-fluid ${s.wrapper} mobile-container`}>
            <div className={`${styles.consultation} ${s.bg_amo}`}>
                <div className="flex justify-between relative hidden md:flex">
                    <div>
                        <div className={`${styles.title} ${s.sipuniTitle}`}>
                            <Title
                                title="Бесплатный доступ"
                                title2="к системе amoCRM на 14 дней"
                                subtitle="Тест-драйв amoCRM"
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
                                    text="Попробовать бесплатно"
                                />
                            </div>
                            <div className="relative z-10">
                                <Button
                                    link="https://t.me/nexgroup_support"
                                    text="Задать вопрос"
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
                            title="Бесплатный доступ"
                            title2={"\nк системе amoCRM на 14 дней"}
                            subtitle="Тест-драйв amoCRM"
                            icon="/icons/circle-blue.svg"
                        />
                    </div>
                    <div onClick={() => setModalOpen(true)}>
                        <Button
                            link=""
                            isFull={true}
                            withArrow={false}
                            text="Попробовать бесплатно"
                        />
                    </div>
                    <div style={{
                        marginTop: "calc(13 * (1px + (100vw - 430px) / 430))"
                    }}>
                        <Button
                            link="https://t.me/nexgroup_support"
                            text="Задать вопрос"
                            isFull={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}