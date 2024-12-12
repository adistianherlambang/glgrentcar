'use client';

import { useState } from "react";
import Image from "next/image";
import styles from "./nav.module.css";
import logo from "/public/logo.png";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image
            src={logo}
            width={200}
            height={200}
            alt="logo"
        />
      </div>
      <ul className={styles.link}>
        <li><Link href="/" className={styles.isi}><p className={styles.text}>Home</p></Link></li>
        <li><Link href="/tentang-kami" className={styles.isi}><p className={styles.text}>Tentang Kami</p></Link></li>
        <li><Link href="/armada" className={styles.isi}><p className={styles.text}>Armada</p></Link></li>
        <li><Link href="/blog" className={styles.isi}><p className={styles.text}>Blog</p></Link></li>
      </ul>

      <div className={styles.hamburgerWrapper} onClick={toggleMenu}>
        <div    
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        <li><Link href="/" className={styles.navLink}><p className={styles.text}>Beranda</p></Link></li>
        <li><Link href="/" className={styles.navLink}><p className={styles.text}>Tentang Kami</p></Link></li>
        <li><Link href="/" className={styles.navLink}><p className={styles.text}>Armada</p></Link></li>
        <li><Link href="/" className={styles.navLink}><p className={styles.text}>Blog</p></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
