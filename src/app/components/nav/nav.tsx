'use client';

import { useState } from "react";
import Image from "next/image";
import styles from "./nav.module.css";
import logo from "/public/logo.png";

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
        <li><a href="/" className={styles.isi}><p className={styles.text}>Home</p></a></li>
        <li><a href="/" className={styles.isi}><p className={styles.text}>Tentang Kami</p></a></li>
        <li><a href="/" className={styles.isi}><p className={styles.text}>Armada</p></a></li>
        <li><a href="/" className={styles.isi}><p className={styles.text}>Blog</p></a></li>
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
        <li><a href="/" className={styles.navLink}><p className={styles.text}>Beranda</p></a></li>
        <li><a href="/" className={styles.navLink}><p className={styles.text}>Tentang Kami</p></a></li>
        <li><a href="/" className={styles.navLink}><p className={styles.text}>Armada</p></a></li>
        <li><a href="/" className={styles.navLink}><p className={styles.text}>Blog</p></a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
