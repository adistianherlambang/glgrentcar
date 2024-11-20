import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Footer from "@/components/Footer";
import React from "react";
import Navbar from "@/components/nav";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <Head>
        <title>GLG RentCar</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Navbar />
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <p className={styles.headerTitle}>Sewa Mobil Terbaik<br />di Lampung</p>
            <p className={styles.headerDesc}>GLG Rentcar adalah penyedia rental mobil terbesar dan terlaris di Lampung dengan armada yang prima serta sopir berpengalaman, menawarkan berbagai jenis mobil dari SUV hingga mobil mewah untuk perjalanan aman dan nyaman di wilayah Lampung serta tujuan lainnya dengan pelayanan terbaik.</p>
            <Link href="https://wa.me/6285156530873" className={styles.headerButton}>Pesan Sekarang<span><Image layout="responsive" width={16} height={9} className={styles.arrow} src="/assets/HomeAsset/arrow.svg" alt="arrow"/></span></Link>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200" className={styles.itemPilihan}>
          <p className={styles.title2}>Pilihan <span className={styles.pilihanRed}>Terpercaya</span> untuk Segala Kebutuhan Transportasi Anda.</p>
          <p className={styles.paragraph}>Persewaan mobil yang didirikan pada tahun 2011 di Bandar Lampung. Seiring dengan berjalannya waktu, karena melihat dari beberapa aspek penting yaitu pengembangan bisnis rental memiliki peluang yang besar untuk jasa sewa kendaraan serta dalam upaya meningkatkan profesionalitas perusahaan untuk tetap fokus pada bidang jasa pelayanan & persewaan mobil maka GLG Rent Car Lampung memperluas bidang usahanya pada Oktober 2016 dengan Akte Notaris No.28 (Dua Puluh Delapan) oleh Notaris Chintia Nandy Yunike, S.H., M.Kn. melegalitaskan diri menjadi CV. GILANG PERKASA. GLG Rental Mobil Lampung Mempersembahkan kepada Anda, sebagai pilihan terpercaya penyedia jasa unit rental mobil di Bandar Lampung. Secara hangat dipersembahkan layanan terbaik yang belum pernah Anda dapatkan. Dengan berbagai macam pilihan unit mobil, kami melayani untuk kebutuhan Kunjungan Kerja, Bisnis, Kedinasan, BUMN/D, Instansi, Kementerian, VIP/VVIP, Wedding Car, dan pemakaian pribadi yang menyesuaikan kebutuhan Anda. Layanan Lepas Kunci setulus hati agar Anda merasa aman dan nyaman. Dengan kondisi unit yang terawat, bersih, dan aman. Serta terdapat layanan Plus Driver dengan Driver berpengalaman, sopan, dan rapih.</p>
        </div>
        <div className={styles.layananContainer}>
          <p data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="200" data-aos-duration="1000" data-aos-offset="200" className={styles.layananTitle}>Layanan Kami</p>
          <div className={styles.layananItemsContainer}>
            <div data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200" className={styles.layananItems}>
              <Image
                className={styles.layananItemsImg}
                src="/assets/HomeAsset/layananPendek.svg"
                alt="Layanan Kami"
                width={60}
                height={60}
              />
              <p className={styles.title3}>Sewa Jangka Pendek<br /><i>(Short Term)</i></p>
              <p className={styles.paragraph}>Masa sewa yang berlangsung kurang dari 1 bulan, atau untuk memenuhi kebutuhan khusus dalam jangka waktu terbatas, seperti penyewaan harian atau mingguan, yang sering kali diperlukan untuk keperluan mendesak, perjalanan singkat, acara tertentu, atau kebutuhan transportasi sementara lainnya.</p>
            </div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200" className={styles.layananItems}>
              <Image
                className={styles.layananItemsImg}
                src="/assets/HomeAsset/layananPanjang.svg"
                alt="Layanan Kami"
                width={60}
                height={60}
              />
              <p className={styles.title3}>Sewa Jangka Panjang<br /><i>(Long Term)</i></p>
              <p className={styles.paragraph}>Masa sewa yang berlangsung minimal 1 bulan atau lebih, dengan durasi yang dapat disesuaikan berdasarkan kesepakatan bersama antara konsumen dan GLG Rentcar, sering kali diperlukan untuk kebutuhan operasional jangka panjang, proyek tertentu, atau penggunaan rutin dalam periode yang telah ditentukan.</p>
            </div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200" className={styles.layananItems}>
              <Image
                className={styles.layananItemsImg}
                src="/assets/HomeAsset/layananKunci.svg"
                alt="Layanan Kami"
                width={60}
                height={60}
              />
              <p className={styles.title3}>Lepas Kunci</p>
              <p className={styles.paragraph}>Durasi paket rental mobil harian lepas kunci (self drive) adalah 12 jam di hari pertama dan 24 jam di hari berikutnya, dengan layanan antar-jemput gratis dalam radius 10 km dari kantor GLG Rentcar, dan biaya tambahan untuk jarak lebih dari 10 km, serta semua risiko menjadi tanggung jawab pengguna; harga tidak berlaku untuk periode High Season dan Hari Raya Besar.</p>
            </div>
            <div  data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200"className={styles.layananItems}>
              <Image width={60} height={60} className={styles.layananItemsImg} src="/assets/HomeAsset/layananDriver.svg" alt="Layanan Kami" />
              <p className={styles.title3}>Plus Driver</p>
              <p className={styles.paragraph}>Layanan rental mobil dengan supir memiliki durasi 12 jam di hari pertama dan 24 jam untuk hari berikutnya, belum termasuk BBM, tol, parkir, makan, serta biaya inap supir jika keluar kota, dengan biaya tambahan per jam untuk kelebihan waktu dan pembayaran langsung ke pengemudi atau melalui transfer.</p>
            </div>
            <div  data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200"className={styles.layananItems}>
              <Image
                className={styles.layananItemsImg}
                src="/assets/HomeAsset/layananService.svg"
                alt="Layanan Kami"
                width={60}
                height={60}
              />
              <p className={styles.title3}>All in Service</p>
              <p className={styles.paragraph}>Paket Layanan All In GLG Rentcar mencakup rental mobil dengan driver selama 12 jam di hari pertama dan 24 jam untuk hari berikutnya, termasuk BBM, tol, dan parkir dalam kota Bandar Lampung, dengan biaya tambahan untuk penggunaan di luar kota dan kelebihan durasi yang dihitung per jam, serta pembayaran overtime bisa dilakukan langsung kepada pengemudi atau melalui transfer.</p>
            </div>
          </div>
          <div className={styles.blogContainer}>
            <div className={styles.blogTitle}>
              <p className={styles.blogTitleLeft}>Trending News</p>
              <button className={styles.blogTitleRight}>See All<span><Image layout="responsive" width={16} height={9} className={styles.arrow} src="/assets/HomeAsset/arrow.svg" alt="arrow" /></span></button>
            </div>
            <div className={styles.blog}>
              <div className={styles.blogLeft}>
                <div className={styles.blogLeftImg}></div>
                <div className={styles.blogLeftCopy}>
                  <div className={styles.blogLeftCategory}><p>Pariwisata</p></div>
                  <p className={styles.blogLeftTitle}>Lorem Ipsum Dolor</p>
                  <p className={styles.blogLeftParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ....</p>
                  <div className={styles.blogTime}>
                    <div className={styles.blogClock}>
                      <Image
                        src="/assets/HomeAsset/blogTime.svg"
                        alt="Layanan Kami"
                        width={20}
                        height={20}
                      />
                      <p>18.00 WIB</p>
                    </div>
                    <div className={styles.blogCalendar}>
                      <Image
                        src="/assets/HomeAsset/blogCalendar.svg"
                        alt="Layanan Kami"
                        width={20}
                        height={20}
                      />
                      <p>Desember 2024</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.blogRightContainer}>
                <div data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200" className={styles.blogRight}>
                  <div className={styles.blogRightImg}><Image width={1} height={1} layout="responsive" src="/assets/HomeAsset/carSample.png" alt="" /></div>
                  <div className={styles.blogRightCopy}>
                    <div className={styles.blogRightCategory}><p>Pariwisata</p></div>
                    <p className={styles.blogRightTitle}>Lorem Ipsum Dolor</p>
                    <p className={styles.blogRightParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ....</p>
                    <div className={styles.blogTime}>
                      <div className={styles.blogClock}>
                        <Image
                          src="/assets/HomeAsset/blogTime.svg"
                          alt="Layanan Kami"
                          width={20}
                          height={20}
                        />
                        <p>18.00 WIB</p>
                      </div>
                      <div className={styles.blogCalendar}>
                        <Image
                          src="/assets/HomeAsset/blogCalendar.svg"
                          alt="Layanan Kami"
                          width={20}
                          height={20}
                        />
                        <p>Desember 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200" className={styles.blogRight}>
                  <div className={styles.blogRightImg}><Image width={1} height={1} layout="responsive" src="/assets/HomeAsset/carSample.png" alt="" /></div>
                  <div className={styles.blogRightCopy}>
                    <div className={styles.blogRightCategory}><p>Pariwisata</p></div>
                    <p className={styles.blogRightTitle}>Lorem Ipsum Dolor</p>
                    <p className={styles.blogRightParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ....</p>
                    <div className={styles.blogTime}>
                      <div className={styles.blogClock}>
                        <Image
                          src="/assets/HomeAsset/blogTime.svg"
                          alt="Layanan Kami"
                          width={20}
                          height={20}
                        />
                        <p>18.00 WIB</p>
                      </div>
                      <div className={styles.blogCalendar}>
                        <Image
                          src="/assets/HomeAsset/blogCalendar.svg"
                          alt="Layanan Kami"
                          width={20}
                          height={20}
                        />
                        <p>Desember 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200" className={styles.blogRight}>
                  <div className={styles.blogRightImg}><Image width={1} height={1} layout="responsive" src="/assets/HomeAsset/carSample.png" alt="" /></div>
                  <div className={styles.blogRightCopy}>
                    <div className={styles.blogRightCategory}><p>Pariwisata</p></div>
                    <p className={styles.blogRightTitle}>Lorem Ipsum Dolor</p>
                    <p className={styles.blogRightParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ....</p>
                    <div className={styles.blogTime}>
                      <div className={styles.blogClock}>
                        <Image
                          src="/assets/HomeAsset/blogTime.svg"
                          alt="Layanan Kami"
                          width={20}
                          height={20}
                        />
                        <p>18.00 WIB</p>
                      </div>
                      <div className={styles.blogCalendar}>
                        <Image
                          src="/assets/HomeAsset/blogCalendar.svg"
                          alt="Layanan Kami"
                          width={20}
                          height={20}
                        />
                        <p>Desember 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </main>
    </>
  );
}

