"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "@/app/components/armadaButton/armadaButton.module.css";
import arrow from "/public/homeAsset/arrow.svg";

export default function ArmadaButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles.headerButton} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className={styles.title}>Cek Selengkapnya</p>
      <Image className={styles.arrow} src={arrow} alt="arrow" />
    </div>
  );
}
