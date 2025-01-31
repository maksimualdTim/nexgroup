"use client";
import styles from "@/app/ui/common/css/Infinite.module.css";

import Image from "next/image";

const InfiniteHorizontalScroll = ({
  logos,
}: {
  logos: Array<{ path: string; width: number; height: number }>;
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.parent}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className={styles.child}
            style={{
              width: `calc(${logo.width} * (1px + (100vw - 430px) / 430))`,
              height: `calc(${logo.height} * (1px + (100vw - 430px) / 430))`,
            }}
          >
            <Image
              src={logo.path}
              alt="logo"
              width={100}
              height={100}
              style={{
                width: `calc(${logo.width} * (1px + (100vw - 430px) / 430))`,
                height: `calc(${logo.height} * (1px + (100vw - 430px) / 430))`,
              }}
            ></Image>
          </div>
        ))}
        {logos.map((logo, index) => (
          <div
            key={index}
            className={styles.child}
            style={{
              width: `calc(${logo.width} * (1px + (100vw - 430px) / 430))`,
              height: `calc(${logo.height} * (1px + (100vw - 430px) / 430))`,
            }}
          >
            <Image
              src={logo.path}
              alt="logo"
              width={100}
              height={100}
              style={{
                width: `calc(${logo.width} * (1px + (100vw - 430px) / 430))`,
                height: `calc(${logo.height} * (1px + (100vw - 430px) / 430))`,
              }}
            ></Image>
          </div>
        ))}
        {logos.map((logo, index) => (
          <div
            key={index}
            className={styles.child}
            style={{
              width: `calc(${logo.width} * (1px + (100vw - 430px) / 430))`,
              height: `calc(${logo.height} * (1px + (100vw - 430px) / 430))`,
            }}
          >
            <Image
              src={logo.path}
              alt="logo"
              width={100}
              height={100}
              style={{
                width: `calc(${logo.width} * (1px + (100vw - 430px) / 430))`,
                height: `calc(${logo.height} * (1px + (100vw - 430px) / 430))`,
              }}
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteHorizontalScroll;
