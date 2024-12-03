import Image from "next/image"
import styles from "./tentangKami.module.css"
import AOSComponent from "../components/AOS/AOS"
import Footer from "../components/footer/footer"
import LayananKami from "../components/layanan/layananKami"
import Navbar from "../components/nav/nav";

import star from "/public/tentangKami/star.svg"
import ppl from "/public/tentangKami/ppl.svg"
import money from "/public/tentangKami/money.svg"
import hand from "/public/tentangKami/hand.svg"

export default function About (){
    return(
        <div className={styles.container}>
            <AOSComponent />
            <Navbar />
            <div className={styles.header} data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200">
                <p className={styles.mainTitle}>TENTANG KAMI</p>
            </div>
            <div className={styles.identity} data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200">
                <p className={styles.identityLeft}>Latar Belakang dan Komitmen GLG Rent Car Lampung</p>
                <p className={styles.identityRight}>Didirikan pada 2011 di Bandar Lampung, GLG Rent Car Lampung berkembang pesat sebagai penyedia layanan rental mobil terpercaya. Pada 2016, perusahaan ini resmi berstatus CV. Gilang Perkasa dan terus berinovasi untuk memenuhi kebutuhan pelanggan.
                <br />
                <br />
                GLG menyediakan berbagai jenis mobil untuk kebutuhan bisnis, kedinasan, instansi, pernikahan, hingga penggunaan pribadi. Layanan yang ditawarkan termasuk opsi Lepas Kunci dengan mobil terawat dan bersih, serta layanan Plus Driver dengan pengemudi berpengalaman, aman, dan ramah.</p>
            </div>
            <div className={styles.visiMisiContainer} data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200">
                <p className={styles.title}>VISI DAN MISI</p>
                <p className={styles.visi}>Menjadi perusahaan profesional dan berintegritas tinggi di dalam bidang transportasi darat dengan megutamakan layanan terbaik demi kenyamanan dan keamanan bagi pengguna jasa/pelanggan serta menciptakan perusahaan transportasi yang kompetitif dengan mengutamakan kepuasan pelanggan artinya Kehadiran perusahaan harus dilihat dari dan untuk mereka yang memiliki kepentingan terhadap perusahaan, dalam hal ini tidak hanya dari sisi pemilik bisnis semata, akan tetapi diperluas dalam kelompok yang lebih luas.</p>
                <div className={styles.misiContainer}>
                    <div className={styles.misi}>
                        <div className={styles.imgContainer}>
                            <Image 
                                className={styles.img}
                                src={star}
                                width={200}
                                height={200}
                                alt="image"
                            />
                        </div>
                        <p className={styles.misiTitle}>Kepuasan Pelanggan</p>
                        <p className={styles.misiDesc}>Meningkatkan kepuasan pelanggan dengan memastikan kualitas layanan terbaik bagi setiap pengguna jasa atau pelanggan.</p>
                    </div>
                    <div className={styles.misi}>
                        <div className={styles.imgContainer}>
                            <Image 
                                className={styles.img}
                                src={ppl}
                                width={200}
                                height={200}
                                alt="image"
                            />
                        </div>
                        <p className={styles.misiTitle}>Pengembangan SDM</p>
                        <p className={styles.misiDesc}>Mengembangkan Sumber Daya Manusia dan memberikan penghargaan atas setiap prestasi kerja yang dicapai.</p>
                    </div>
                    <div className={styles.misi}>
                        <div className={`${styles.imgContainer} ${styles.imgContainer2}`}>
                            <Image 
                                className={styles.img}
                                src={money}
                                width={200}
                                height={200}
                                alt="image"
                            />
                        </div>
                        <p className={styles.misiTitle}>Peningkatan Laba</p>
                        <p className={styles.misiDesc}>Berusaha meningkatkan kemampuan laba perusahaan melalui strategi dan efisiensi operasional yang lebih baik.</p>
                    </div>
                    <div className={styles.misi}>
                        <div className={styles.imgContainer}>
                            <Image 
                                className={`${styles.hand} ${styles.img}`}
                                src={hand}
                                width={1}
                                height={1}
                                alt="image"
                                layout="responsive"
                            />
                        </div>
                        <p className={styles.misiTitle}>Tata Kelola</p>
                        <p className={styles.misiDesc}>Menerapkan prinsip tata kelola perusahaan yang baik untuk memastikan transparansi dan akuntabilitas yang tinggi.</p>
                    </div>
                </div>
            </div>
            <LayananKami />
            <Footer />
        </div>
    )
}