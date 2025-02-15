import Image from "next/image";

export default function Expirience({ left = false }: { left?: boolean }) {
  return (
    <div
      className={`flex ${left ? "items-start" : "items-end"} ${
        left ? "flex-col-reverse" : "flex-col"
      } hidden md:flex`}
    >
      <div className="flex items-center" style={{
        marginTop: `${left ? "calc(72 * (1px + (100vw - 1530px) / 1530))" : ""}`
      }}>
        <Image
          className={`${left ? "block" : "hidden"}`}
          width={0}
          height={0}
          alt="circle"
          src={"/icons/circle.svg"}
          style={{
            width: "calc(31 * (1px + (100vw - 1530px) / 1530))",
            height: "calc(31 * (1px + (100vw - 1530px) / 1530))",
            marginRight: "calc(15 * (1px + (100vw - 1530px) / 1530))",
          }}
        ></Image>
        <div
          className={`text-fluid opacity-50 ${left ? "" : "text-right"} font-semibold`}
          style={{
            maxWidth: "calc(233 * (1px + (100vw - 1530px) / 1530))",
          }}
        >
          Сильный бизнес начинается с правильных IT-решений
        </div>
        <Image
          className={`${left ? "hidden" : "block"}`}
          width={0}
          height={0}
          alt="circle"
          src={"/icons/circle.svg"}
          style={{
            width: "calc(31 * (1px + (100vw - 1530px) / 1530))",
            height: "calc(31 * (1px + (100vw - 1530px) / 1530))",
            marginLeft: "calc(15 * (1px + (100vw - 1530px) / 1530))",
          }}
        ></Image>
      </div>
      <div
        className="flex"
        style={{
          background: "#3C3C3C42",
          backdropFilter: "blur(100px)",
          paddingLeft: "calc(44 * (1px + (100vw - 1530px) / 1530))",
          paddingRight: "calc(44 * (1px + (100vw - 1530px) / 1530))",
          paddingBottom: "calc(35 * (1px + (100vw - 1530px) / 1530))",
          paddingTop: "calc(35 * (1px + (100vw - 1530px) / 1530))",
          borderRadius: "calc(20 * (1px + (100vw - 1530px) / 1530))",
          marginTop: "calc(22 * (1px + (100vw - 1530px) / 1530))",
        }}
      >
        <div
          className="font-semibold"
          style={{
            fontSize: "calc(96 * (1px + (100vw - 1530px) / 1530))",
            lineHeight: "calc(94 * (1px + (100vw - 1530px) / 1530))",
            paddingRight: "calc(10 * (1px + (100vw - 1530px) / 1530))",
            borderRight: "1px solid #3B3B3B",
            color: "transparent",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            backgroundImage:
              "linear-gradient(90deg, #FFFFFF 35%, rgba(25, 25, 25, 0) 100%)",
          }}
        >
          5+
        </div>
        <div
          style={{
            maxWidth: "calc(140 * (1px + (100vw - 1530px) / 1530))",
            paddingLeft: "calc(26 * (1px + (100vw - 1530px) / 1530))",
          }}
        >
          <div
            className="text-accent font-semibold"
            style={{
              fontSize: "calc(14 * (1px + (100vw - 1530px) / 1530))",
              lineHeight: "calc(19 * (1px + (100vw - 1530px) / 1530))",
              marginBottom: "calc(9 * (1px + (100vw - 1530px) / 1530))",
            }}
          >
            Опыт работы
          </div>
          <div
            className="text-fluid"
            style={{
              lineHeight: "calc(19 * (1px + (100vw - 1530px) / 1530))",
            }}
          >
            Более 5 лет опыта в сфере автоматизации
          </div>
        </div>
      </div>
    </div>
  );
}
