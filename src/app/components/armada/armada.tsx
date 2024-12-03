import React from "react";
import styles from "./armada.module.css"
import Image from "next/image";
import Link from "next/link";

import honda from "/public/homeAsset/honda.jpg"

export default function Armada() {
    return(
        <div className={styles.armadaContainer} data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200" >
          <p className={styles.armadaTitle}>CEK ARMADA YANG TERSEDIA</p>
          <p className={styles.armadaTitleMob}>ARMADA KAMI</p>
          <div className={styles.armadaWrapper}>

            <Link href="https://api.whatsapp.com/send/?phone=62895636126916&text&type=phone_number&app_absent=0" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={honda}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>SUVs and Crossovers</p>
                    <p className={styles.armadaCategory}>Hybrid Cars</p>
                  </div>
                  <p className={styles.armadaCar}>HONDA CIVIC</p>
                  <p className={styles.armadaCarDesc}>Finest comforts with our premium luxury cars. Perfe weddings, anniversaries, or simply treating yourself to a first-class </p>
                  <p className={styles.armadaCar}>Rp 1.449.000 /Day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send/?phone=62895636126916&text&type=phone_number&app_absent=0" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={honda}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>SUVs and Crossovers</p>
                    <p className={styles.armadaCategory}>Hybrid Cars</p>
                  </div>
                  <p className={styles.armadaCar}>HONDA CIVIC</p>
                  <p className={styles.armadaCarDesc}>Finest comforts with our premium luxury cars. Perfe weddings, anniversaries, or simply treating yourself to a first-class </p>
                  <p className={styles.armadaCar}>Rp 1.449.000 /Day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send/?phone=62895636126916&text&type=phone_number&app_absent=0" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={honda}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>SUVs and Crossovers</p>
                    <p className={styles.armadaCategory}>Hybrid Cars</p>
                  </div>
                  <p className={styles.armadaCar}>HONDA CIVIC</p>
                  <p className={styles.armadaCarDesc}>Finest comforts with our premium luxury cars. Perfe weddings, anniversaries, or simply treating yourself to a first-class </p>
                  <p className={styles.armadaCar}>Rp 1.449.000 /Day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send/?phone=62895636126916&text&type=phone_number&app_absent=0" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={honda}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>SUVs and Crossovers</p>
                    <p className={styles.armadaCategory}>Hybrid Cars</p>
                  </div>
                  <p className={styles.armadaCar}>HONDA CIVIC</p>
                  <p className={styles.armadaCarDesc}>Finest comforts with our premium luxury cars. Perfe weddings, anniversaries, or simply treating yourself to a first-class </p>
                  <p className={styles.armadaCar}>Rp 1.449.000 /Day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send/?phone=62895636126916&text&type=phone_number&app_absent=0" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={honda}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>SUVs and Crossovers</p>
                    <p className={styles.armadaCategory}>Hybrid Cars</p>
                  </div>
                  <p className={styles.armadaCar}>HONDA CIVIC</p>
                  <p className={styles.armadaCarDesc}>Finest comforts with our premium luxury cars. Perfe weddings, anniversaries, or simply treating yourself to a first-class </p>
                  <p className={styles.armadaCar}>Rp 1.449.000 /Day</p>
                </div>
              </div>
            </Link>

          </div>
        </div>
    )
}