import Script from "next/script";
import styles from "@/app//style/home.module.css"
import Image from "next/image";

import headerImg from "/public/homeAsset/header.png";
import HeaderButton from "./components/homeButton/headerButton";
import Footer from "./components/footer/footer";
import Armada from "./components/armada/armada";
import Blog from "./components/blog/blog";
import GoogleMapComponent from "./components/map/map";
import AOSComponent from "./components/AOS/AOS";
import LayananKami from "./components/layanan/layananKami";
import Navbar from "./components/nav/nav";

import smoke from "/public/homeAsset/bg.png"

import Testimonial from "./components/testimonial/testimonial";

export default function Home() {

  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date("2023-01-01T00:00:00Z"));
            gtag('config', 'GA_TRACKING_ID');
          `,
        }}
      />


      <Script
        id="json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "GLG Rent Car Transport",
            url: "https://www.glgrentcartransport.com/",
            logo: "https://www.glgrentcartransport.com/logo.png",
            telephone: "+62-812-3456-7890",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Main Street",
              addressLocality: "Jakarta",
              addressRegion: "DKI Jakarta",
              postalCode: "12345",
              addressCountry: "ID",
            },
            openingHours: "Mo-Su 08:00-18:00",
            sameAs: [
              "https://www.facebook.com/glgrentcar",
              "https://www.instagram.com/glgrentcar",
            ],
          }),
        }}
      />

      <main className={styles.main}>

        <AOSComponent />
        <Navbar />
        <div data-aos="fade-up" data-aos-once="false" className={styles.headerContainer}>
          <div className={styles.smokeContainer}>
            <Image
              className={styles.smoke}
              src={smoke}
              width={1000}
              height={1000}
              alt="smoke"
            />
          </div>
          <p className={styles.headerTitle}>SEW MOBIL TERBAIK <br/> DI LAMPUNG</p>
          <div className={styles.headerImgContainer} >
            <Image
              className={styles.headerImg}
              src={headerImg}
              width={1000}
              height={1000}
              alt="car"
            />
          </div>
          <div className={styles.headerContent}>
            <p className={styles.headerText}>
              GLG Rentcar adalah penyedia rental mobil terbesar dan terlaris di Lampung dengan armada yang prima serta sopir berpengalaman, menawarkan berbagai jenis mobil dari SUV hingga mobil mewah untuk perjalanan aman dan nyaman di wilayah Lampung serta tujuan lainnya dengan pelayanan terbaik.
            </p>
            <p className={styles.headerTextMob}>GLG Rentcar adalah penyedia rental mobil terbesar di Lampung, dengan armada prima, sopir berpengalaman, dan berbagai pilihan mobil untuk perjalanan aman dan nyaman.</p>
          </div>
          <HeaderButton />
        </div>

        <div data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200" className={styles.vidContainer}>
          <p className={styles.vidTitle}>Pilihan Terpercaya untuk Segala Kebutuhan Transportasi Anda.</p>
          <video autoPlay muted loop preload="metadata" className={styles.vid}>
            <source src="/videos/bgvid.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>

        </div>
        
        <Armada />

        <div className={styles.glgContainer}>
          <div className={styles.glgContent}>
            <p className={styles.glgLeft}>GLG RENTCAR</p>
            <p className={styles.glgRight}>GLG Rent Car Lampung, berdiri sejak 2011 dan resmi menjadi CV. Gilang Perkasa pada 2016, menawarkan jasa rental mobil terpercaya dengan unit terawat serta layanan lepas kunci atau driver profesional.</p>
          </div>
        </div>
        <LayananKami />
        <Testimonial />
        <Blog />
        <GoogleMapComponent />
        <Footer />

      </main>
    </>
  );
}
