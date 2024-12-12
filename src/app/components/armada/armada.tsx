import React from "react";
import styles from "./armada.module.css"
import Image from "next/image";
import Link from "next/link";

import innovaReborn from "/public/homeAsset/armada/innovaReborn.jpg"
import innovaZenix from "/public/homeAsset/armada/innovaZenix.jpg"
import avanza from "/public/homeAsset/armada/avanza.jpg"
import yaris from "/public/homeAsset/armada/yaris.jpg"
import allNewAvanza from "/public/homeAsset/armada/allNewAvanza.jpg"
import veloz from "/public/homeAsset/armada/veloz.jpg"
import hiaceCommuter from "/public/homeAsset/armada/hiaceCommuter.jpg"
import hiacePremio from "/public/homeAsset/armada/hiacePremio.jpg"
import hiaceLuxury from "/public/homeAsset/armada/hiaceLuxury.jpg"
import alphard from "/public/homeAsset/armada/alphard.jpg"
import fortuner from "/public/homeAsset/armada/fortuner.jpg"
import altis from "/public/homeAsset/armada/altis.jpg"


export default function Armada() {
    return(
        <div className={styles.armadaContainer} data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200" >
          <p className={styles.armadaTitle}>CEK ARMADA YANG TERSEDIA</p>
          <p className={styles.armadaTitleMob}>ARMADA KAMI</p>
          <div className={styles.armadaWrapper}>

            <Link href="https://api.whatsapp.com/send?phone=+628117212566&text=Halo%20saya%20mau%20sewa%20mobil%20Hiace%20Commuter" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={innovaReborn}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>Family MPV</p>
                    <p className={styles.armadaCategory}>Reliable</p>
                  </div>
                  <p className={styles.armadaCar}>Innova Reborn</p>
                  <p className={styles.armadaCarDesc}>MPV luas dan andal, ideal untuk perjalanan keluarga besar dengan kapasitas penumpang yang optimal.</p>
                  <p className={styles.armadaCar}>Rp 549.789/day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=+628117212566&text=Halo%20saya%20mau%20sewa%20mobil%20Hiace%20Commuter" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={innovaZenix}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>Premium MPV</p>
                    <p className={styles.armadaCategory}>Comfortable</p>
                  </div>
                  <p className={styles.armadaCar}>Innova Zenix</p>
                  <p className={styles.armadaCarDesc}>MPV premium dengan fitur modern, cocok untuk perjalanan grup dengan kenyamanan dan kemewahan tinggi.</p>
                  <p className={styles.armadaCar}>Rp 999.789/day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=+628117212566&text=Halo%20saya%20mau%20sewa%20mobil%20Hiace%20Commuter" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={avanza}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>Compact MPV</p>
                    <p className={styles.armadaCategory}>Efficient</p>
                  </div>
                  <p className={styles.armadaCar}>Avanza</p>
                  <p className={styles.armadaCarDesc}>MPV kompak dan efisien, ideal untuk penggunaan sehari-hari dan keluarga kecil dengan praktis.</p>
                  <p className={styles.armadaCar}>Rp 299.789/day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=+628117212566&text=Halo%20saya%20mau%20sewa%20mobil%20Hiace%20Commuter" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={yaris}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>Compact Sedan</p>
                    <p className={styles.armadaCategory}>Stylish</p>
                  </div>
                  <p className={styles.armadaCar}>Toyota Yaris</p>
                  <p className={styles.armadaCarDesc}>Sedan kompak dan stylish, sempurna untuk berkendara di perkotaan dengan teknologi canggih.</p>
                  <p className={styles.armadaCar}>Rp 399.789/day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=+628117212566&text=Halo%20saya%20mau%20sewa%20mobil%20Hiace%20Commuter" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={allNewAvanza}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>Latest MPV</p>
                    <p className={styles.armadaCategory}>Reliable</p>
                  </div>
                  <p className={styles.armadaCar}>All New Avanza</p>
                  <p className={styles.armadaCarDesc}>Model Avanza terbaru dengan desain modern dan fitur ditingkatkan untuk kenyamanan dan keandalan.</p>
                  <p className={styles.armadaCar}>Rp 399.789/day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=+628117212566&text=Halo%20saya%20mau%20sewa%20mobil%20Hiace%20Commuter" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={veloz}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>Sport Hatchback</p>
                    <p className={styles.armadaCategory}>Dynamic</p>
                  </div>
                  <p className={styles.armadaCar}>Veloz Q</p>
                  <p className={styles.armadaCarDesc}>Hatchback sporty dengan performa dinamis, ideal untuk berkendara di kota dengan desain menarik.</p>
                  <p className={styles.armadaCar}>Rp 549.789/day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=+628117212566&text=Halo%20saya%20mau%20sewa%20mobil%20Hiace%20Commuter" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={hiaceCommuter}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>Business MPV</p>
                    <p className={styles.armadaCategory}>Spacious</p>
                  </div>
                  <p className={styles.armadaCar}>Hiace Commuter</p>
                  <p className={styles.armadaCarDesc}>MPV bisnis yang andal, dirancang untuk transportasi kelompok dengan ruang luas dan tahan lama.</p>
                  <p className={styles.armadaCar}>Rp 1.499.789/day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=+628117212566&text=Halo%20saya%20mau%20sewa%20mobil%20Hiace%20Commuter" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={hiacePremio}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>Premium MPV</p>
                    <p className={styles.armadaCategory}>Comfortable</p>
                  </div>
                  <p className={styles.armadaCar}>Hiace Premio</p>
                  <p className={styles.armadaCarDesc}>Versi premium Hiace dengan fitur dan kenyamanan ditingkatkan untuk kebutuhan transportasi profesional.</p>
                  <p className={styles.armadaCar}>Rp 1.549.789/day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=+628117212566&text=Halo%20saya%20mau%20sewa%20mobil%20Hiace%20Commuter" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={hiaceLuxury}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>Luxury MPV</p>
                    <p className={styles.armadaCategory}>Executive</p>
                  </div>
                  <p className={styles.armadaCar}>Hiace Luxury</p>
                  <p className={styles.armadaCarDesc}>MPV mewah Hiace, menyediakan kenyamanan superior dan fitur high-end untuk perjalanan eksekutif premium.</p>
                  <p className={styles.armadaCar}>Rp 1.649.789/day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=+628117212566&text=Halo%20saya%20mau%20sewa%20mobil%20Hiace%20Commuter" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={alphard}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>Luxury SUV</p>
                    <p className={styles.armadaCategory}>Premium</p>
                  </div>
                  <p className={styles.armadaCar}>Alphard</p>
                  <p className={styles.armadaCarDesc}>SUV mewah premium dengan fitur terbaik, menawarkan kenyamanan dan gaya luar biasa untuk pelancong elit.</p>
                  <p className={styles.armadaCar}>Rp 3.999.789/day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=+628117212566&text=Halo%20saya%20mau%20sewa%20mobil%20Hiace%20Commuter" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={fortuner}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>Tough SUV</p>
                    <p className={styles.armadaCategory}>Adventure</p>
                  </div>
                  <p className={styles.armadaCar}>Fortuner/Pajero</p>
                  <p className={styles.armadaCarDesc}>SUV tangguh, ideal untuk perjalanan petualangan dan off-road, menggabungkan tenaga dan interior nyaman.</p>
                  <p className={styles.armadaCar}>Rp 1.499.789/day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=+628117212566&text=Halo%20saya%20mau%20sewa%20mobil%20Hiace%20Commuter" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={altis}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>Luxury Sedan</p>
                    <p className={styles.armadaCategory}>Reliable</p>
                  </div>
                  <p className={styles.armadaCar}>Toyota Altis</p>
                  <p className={styles.armadaCarDesc}>Sedan mewah dengan teknologi dan fitur kenyamanan canggih, cocok untuk penggunaan bisnis atau pribadi.</p>
                  <p className={styles.armadaCar}>Rp 1.999.789/day</p>
                </div>
              </div>
            </Link>

          </div>
        </div>
    )
}