import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

import fb from "/public/footer/fb.svg";
import ig from "/public/footer/ig.svg";
import tt from "/public/footer/tt.svg";

export default function Footer() {
  return (
    <>
        <footer className={styles.footer}>
            <div className={styles.sectionLeft}>
                <p className={styles.title}>GLG Rent Car - Rental mobil Lampung terpercaya yang mengutamakan kenyamanan sejak 2011.</p>
                <div className={styles.socialIcon}>
                    <Link href="#"><Image width={30} height={10} layout="intrinsic" src={fb}alt="Facebook" /></Link>
                    <Link href="#"><Image width={30} height={10} layout="intrinsic" src={ig}alt="Instagram" /></Link>
                    <Link href="#"><Image width={30} height={10} layout="intrinsic" src={tt}alt="TikTok" /></Link>
                </div>
            </div>
            <div className={styles.section2}>
                <div className={styles.section}>
                    <p className={styles.title}>Link</p>
                    <div className={styles.link}>
                        <Link href="/"><p className={styles.p}>Beranda</p></Link>
                        <Link href="/tentang-kami"><p className={styles.p}>Tentang Kami</p></Link>
                        <Link href="/armada"><p className={styles.p}>Armada</p></Link>
                        <Link href="/blog"><p className={styles.p}>Blog</p></Link>
                    </div>
                </div>
                <div className={styles.sectionRight}>
                    <div className={styles.alamat}>
                        <p className={styles.title}>Alamat</p>
                        <p className={styles.p}>Jalan Tirtayasa, Gg Permata No 08, Sukabumi, Bandar Lampung</p>
                    </div>
                    <div className={styles.alamat}>
                        <p className={styles.title}>Kontak</p>
                        <p className={styles.p}>+62 811-721-2566</p>
                    </div>
                </div>
            </div>
        </footer>
        <div className={styles.bottom}><p className={styles.pb}>Copyright © 2024 GLG Rentcar</p></div>
    </>
  );
}
