import React from "react";
import styles from "./armada.module.css"
import Image from "next/image";
import Link from "next/link";

import hiaceCommuter from "/public/homeAsset/armada/hiaceCommuter.jpg"
import alphard from "/public/homeAsset/armada/alphard.jpg"
import pajero from "/public/homeAsset/armada/pajero.jpg"
import fortuner from "/public/homeAsset/armada/fortuner.jpg"
import hiacePremio from "/public/homeAsset/armada/hiacePremio.jpg"
import calya from "/public/homeAsset/armada/calya.jpg"
import venturer from "/public/homeAsset/armada/venturer.jpg"
import rebornFacelift from "/public/homeAsset/armada/rebornFacelift.jpg"
import reborn from "/public/homeAsset/armada/reborn.jpg"
import grand from "/public/homeAsset/armada/grand.jpg"
import xpander from "/public/homeAsset/armada/xpander.jpg"
import veloz from "/public/homeAsset/armada/veloz.jpg"
import avanzaFacelift from "/public/homeAsset/armada/avanzaFacelift.jpg"
import avanzaGreat from "/public/homeAsset/armada/avanzaGreat.jpg"

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
                    src={hiaceCommuter}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>Luxury Cars</p>
                    <p className={styles.armadaCategory}>SUVs and MPVs</p>
                  </div>
                  <p className={styles.armadaCar}>Hiace Commuter</p>
                  <p className={styles.armadaCarDesc}>A large vehicle, ideal for family trips or group transport, with plenty of passenger capacity and comfort.</p>
                  <p className={styles.armadaCar}>Rp 4.999.999/day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=+628117212566&text=Halo%20saya%20mau%20sewa%20mobil%20Alphard" target="blank">
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
                    <p className={styles.armadaCategory}>Luxury Cars</p>
                    <p className={styles.armadaCategory}>Family Cars</p>
                  </div>
                  <p className={styles.armadaCar}>Alphard</p>
                  <p className={styles.armadaCarDesc}>A luxury car with elegant design, comfortable for long trips, and equipped with premium features.</p>
                  <p className={styles.armadaCar}>Rp 4.999.999/day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=+628117212566&text=Halo%20saya%20mau%20sewa%20mobil%20Pajero%20Sport" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={pajero}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>Luxury Cars</p>
                    <p className={styles.armadaCategory}>SUVs and MPVs</p>
                  </div>
                  <p className={styles.armadaCar}>Pajero Sport</p>
                  <p className={styles.armadaCarDesc}>Finest comforts with our premium luxury cars. Perfe weddings, anniversaries, or simply treating yourself to a first-class </p>
                  <p className={styles.armadaCar}>Rp 1.449.000 /Day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=+628117212566&text=Halo%20saya%20mau%20sewa%20mobil%20Fortuner%20VRZ" target="blank">
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
                    <p className={styles.armadaCategory}>Luxury Cars</p>
                    <p className={styles.armadaCategory}>SUVs and MPVs</p>
                  </div>
                  <p className={styles.armadaCar}>Fortuner VRZ</p>
                  <p className={styles.armadaCarDesc}>A premium SUV with advanced features and tough performance, suitable for family trips and adventures.</p>
                  <p className={styles.armadaCar}>Rp 1.449.000/day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=+628117212566&text=Halo%20saya%20mau%20sewa%20mobil%20Hiace%20Premio" target="blank">
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
                    <p className={styles.armadaCategory}>Luxury Cars</p>
                    <p className={styles.armadaCategory}>SUVs and MPVs</p>
                  </div>
                  <p className={styles.armadaCar}>Hiace Premio</p>
                  <p className={styles.armadaCarDesc}>A more luxurious version of the Hiace, perfect for large family trips with extra comfort and high capacity.</p>
                  <p className={styles.armadaCar}>Rp 1.799.000/day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=+628117212566&text=Halo%20saya%20mau%20sewa%20mobil%20Calya" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={calya}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>Economical Cars</p>
                    <p className={styles.armadaCategory}>Family Cars</p>
                  </div>
                  <p className={styles.armadaCar}>Calya</p>
                  <p className={styles.armadaCarDesc}>An economical car with an affordable price, perfect for daily use, fuel-efficient and practical.</p>
                  <p className={styles.armadaCar}>Rp 249.999/day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=+628117212566&text=Halo%20saya%20mau%20sewa%20mobil%20Venturer" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={venturer}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>Luxury Cars</p>
                    <p className={styles.armadaCategory}>SUVs and MPVs</p>
                  </div>
                  <p className={styles.armadaCar}>Venturer</p>
                  <p className={styles.armadaCarDesc}>A luxury MPV with elegant design and spacious cabin, perfect for family and business trips.</p>
                  <p className={styles.armadaCar}>Rp 699.999/day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=+628117212566&text=Halo%20saya%20mau%20sewa%20mobil%20Reborn%20Facelift" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={rebornFacelift}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>Economical Cars</p>
                    <p className={styles.armadaCategory}>Family Cars</p>
                  </div>
                  <p className={styles.armadaCar}>Reborn Facelift</p>
                  <p className={styles.armadaCarDesc}>A family car with a modern design, comfortable, and efficient, perfect for daily commutes and family trips.</p>
                  <p className={styles.armadaCar}>Rp 599.999/day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=+628117212566&text=Halo%20saya%20mau%20sewa%20mobil%20Innova%20Reborn" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={reborn}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>Economical Cars</p>
                    <p className={styles.armadaCategory}>Family Cars</p>
                  </div>
                  <p className={styles.armadaCar}>Innova Reborn</p>
                  <p className={styles.armadaCarDesc}>An economical car with an affordable price, perfect for daily use, fuel-efficient and practical.</p>
                  <p className={styles.armadaCar}>Rp 499.999/day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=+628117212566&text=Halo%20saya%20mau%20sewa%20mobil%20Innova%20Grand" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={grand}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>SUVs and MPVs</p>
                    <p className={styles.armadaCategory}>Family Cars</p>
                  </div>
                  <p className={styles.armadaCar}>Innova Grand</p>
                  <p className={styles.armadaCarDesc}>A spacious family MPV with high comfort and advanced features, perfect for long trips and large families.</p>
                  <p className={styles.armadaCar}>Rp 349.999/day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=+628117212566&text=Halo%20saya%20mau%20sewa%20mobil%20Xpander" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={xpander}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>Economical Cars</p>
                    <p className={styles.armadaCategory}>Family Cars</p>
                  </div>
                  <p className={styles.armadaCar}>Xpander</p>
                  <p className={styles.armadaCarDesc}>An economical car with an affordable price, perfect for daily use, fuel-efficient and practical.</p>
                  <p className={styles.armadaCar}>Rp 249.999/day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=+628117212566&text=Halo%20saya%20mau%20sewa%20mobil%20Toyota%20Veloz" target="blank">
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
                    <p className={styles.armadaCategory}>Economical Cars</p>
                    <p className={styles.armadaCategory}>Family Cars</p>
                  </div>
                  <p className={styles.armadaCar}>Toyota Veloz</p>
                  <p className={styles.armadaCarDesc}>An MPV with a spacious cabin and modern design, ideal for family trips, daily use, and comfortable journeys.</p>
                  <p className={styles.armadaCar}>Rp 349.999/day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=+628117212566&text=Halo%20saya%20mau%20sewa%20mobil%20Avanza%20Facelift" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={avanzaFacelift}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>Economical Cars</p>
                    <p className={styles.armadaCategory}>Family Cars</p>
                  </div>
                  <p className={styles.armadaCar}>Avanza Facelift</p>
                  <p className={styles.armadaCarDesc}>A compact and practical car with a new design, perfect for small families and efficient daily use.</p>
                  <p className={styles.armadaCar}>Rp 249.999/day</p>
                </div>
              </div>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=+628117212566&text=Halo%20saya%20mau%20sewa%20mobil%20Avanza%20Great%20New" target="blank">
              <div className={styles.armada} >
                <div className={styles.armadaImgWrapper}>
                  <Image
                    className={styles.armadaImg}
                    src={avanzaGreat}
                    width={1000}
                    height={1000}
                    alt="photo"
                  />
                </div>
                <div className={styles.armadaContent}>
                  <div className={styles.armadaCategoryWrapper}>
                    <p className={styles.armadaCategory}>Economical Cars</p>
                    <p className={styles.armadaCategory}>Family Cars</p>
                  </div>
                  <p className={styles.armadaCar}>Avanza Great New</p>
                  <p className={styles.armadaCarDesc}>A practical and efficient car, ideal for small family trips with affordable price and low fuel consumption.</p>
                  <p className={styles.armadaCar}>Rp 249.999/day</p>
                </div>
              </div>
            </Link>

          </div>
        </div>
    )
}