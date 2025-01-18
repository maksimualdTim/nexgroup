import { JSX } from "react";
import styles from "./css/Text.module.css";

export default function MainText({
  order,
  text,
}: {
  order: number;
  text: JSX.Element[];
}) {
  const spans = [];
  for (let i = 0; i < order; i++) {
    spans.push(
      <span
        key={i}
        className={`bg-accent rounded-full inline-block relative ${styles.egs}`}
        style={{top: "calc(-2 * (1px + (100vw - 1530px) / 1530))"}}
      ></span>
    );
  }
  return (
    <div
      className={`advantages-text ${styles["advantages-text"]}`}
    >
      <div className="text-accent mb-fluid">
        <span className="text-fluid">/ </span>
        {spans}
        <span className="text-fluid"> /</span>
      </div>
      <div
        className="opacity-70 text-fluid"
        style={{ lineHeight: "calc(24 * (1px + (100vw - 1530px) / 1530))" }}
      >
        {text}
      </div>
    </div>
  );
}
