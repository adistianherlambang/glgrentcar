import styles from "./layananKami.module.css"
import Image from "next/image";

import jangkauanPendek from "/public/homeAsset/gif/1.gif";
import jangkauanPanjang from "/public/homeAsset/gif/2.gif";
import plusDriver from "/public/homeAsset/gif/3.gif";
import lepasKunci from "/public/homeAsset/gif/4.gif";
import service from "/public/homeAsset/gif/5.gif";

export default function LayananKami() {
    return(
        <div className={styles.layananContainer} data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200">
        <p className={styles.layananTitle}>LAYANAN KAMI</p>
        <div className={styles.layananWrapper}>

            <div className={styles.layanan} data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200">
                <div className={styles.layananIconContainer}>
                    <Image
                    className={styles.layananIcon}
                    src={jangkauanPendek}
                    width={100}
                    height={100}
                    alt="icon"
                    />
                </div>
                <div className={styles.layananContent}>
                    <p className={styles.layananContentTitle}>SEWA JANGKA PENDEK</p>
                    <p className={styles.layananContentDesc}>Masa sewa minimal 1 bulan, fleksibel sesuai kesepakatan, untuk operasional jangka panjang, proyek, atau penggunaan rutin.</p>
                </div>
                </div>
                
                <div className={styles.layanan} data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200">
                <div className={styles.layananIconContainer}>
                    <Image
                    className={styles.layananIcon}
                    src={jangkauanPanjang}
                    width={100}
                    height={100}
                    alt="icon"
                    />
                </div>
                <div className={styles.layananContent}>
                    <p className={styles.layananContentTitle}>SEWA JANGKA PANJANG</p>
                    <p className={styles.layananContentDesc}>Sewa kurang dari 1 bulan untuk kebutuhan mendesak, perjalanan singkat, acara, atau transportasi sementara.</p>
                </div>
                </div>
                
                <div className={styles.layanan} data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200">
                <div className={styles.layananIconContainer}>
                    <Image
                    className={styles.layananIcon}
                    src={plusDriver}
                    width={100}
                    height={100}
                    alt="icon"
                    />
                </div>
                <div className={styles.layananContent}>
                    <p className={styles.layananContentTitle}>PLUS DRIVER</p>
                    <p className={styles.layananContentDesc}>GLG Rent Car menyediakan kendaraan sewa dan pengemudi terlatih, beretika, serta berfokus pada kepuasan pelanggan.</p>
                </div>
                </div>

                <div className={styles.layanan} data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200">
                <div className={styles.layananIconContainer}>
                    <Image
                    className={styles.layananIcon}
                    src={lepasKunci}
                    width={100}
                    height={100}
                    alt="icon"
                    />
                </div>
                <div className={styles.layananContent}>
                    <p className={styles.layananContentTitle}>LEPAS KUNCI</p>
                    <p className={styles.layananContentDesc}>Paket rental mobil lepas kunci 12 jam pertama 24 jam berikutnya free antar 10 km syarat dan ketentuan berlaku.</p>
                </div>
                </div>
                            
                <div className={styles.layanan} data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200">
                <div className={styles.layananIconContainer}>
                    <Image
                    className={styles.layananIcon}
                    src={service}
                    width={100}
                    height={100}
                    alt="icon"
                    />
                </div>
                <div className={styles.layananContent}>
                    <p className={styles.layananContentTitle}>ALL-IN SERVICE</p>
                    <p className={styles.layananContentDesc}>Paket All In rental mobil 12 jam (hari 1) dan 24 jam (hari 2), tidak berlaku saat High Season atau saat Hari Raya.</p>
                </div>
            </div>
        </div>
    </div>
    )
}