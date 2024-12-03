import React from "react";
import styles from "./blog.module.css"
import Image from "next/image";
import Link from "next/link";

import blogTop from "/public/homeAsset/blog/blogTop.jpg"
import post1 from "/public/homeAsset/blog/post/post1.jpg"


export default function Blog() {
    return(

        <div data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200">
          <div className={styles.titleContainer}>
            <p className={styles.mainTitle}>TRENDING NEWS</p>
            <p className={styles.mainDesc}>Berita, konten, dan sumber daya terbaru seputar otomotif, pariwisata, layanan rental mobil, dan lainnya.</p>
          </div>
          <div className={styles.containerTop}>
              <div className={styles.contentTop}>
                  <div className={styles.copyTop}>
                      <p>Blog</p>
                      <p className={styles.title}>Sewa Mobil Murah dan Terbaik di Lampung, Pilihan Pas untuk Perjalanan Anda</p>
                      <p>GLG Rent Car Lampung menawarkan layanan sewa mobil dengan harga terjangkau tanpa mengurangi kualitas.</p>
                  </div>
                  <p>December 27, 2024</p>
              </div>
              <div className={styles.imgContainer}>
                  <Image
                      className={styles.blogTop}
                      src={blogTop}
                      width={1000}
                      height={1000}
                      alt="img"
                  />
              </div>
          </div>

          <div className={styles.postWrapper}>

              <Link href="https://api.whatsapp.com/send/?phone=62895636126916&text&type=phone_number&app_absent=0" target="blank">
                <div className={styles.post}>
                  <div className={styles.postImgWrapper}>
                    <Image
                      className={styles.postImg}
                      src={post1}
                      width={1000}
                      height={1000}
                      alt="photo"
                    />
                  </div>
                  <div className={styles.postContent}>
                    <div className={styles.postCategoryWrapper}>
                      <p className={styles.desc}>Blog • December 27, 2024</p>
                    </div>
                    <p className={styles.title}>Destinasi Wisata Lampung yang Wajib Dikunjungi Tahun Ini</p>
                    <p className={styles.descMob}>Lampung menyimpan banyak destinasi wisata yang tak kalah menarik dibanding daerah lain di Indonesia. </p>
                  </div>
                </div>
              </Link>

              <Link href="https://api.whatsapp.com/send/?phone=62895636126916&text&type=phone_number&app_absent=0" target="blank">
                <div className={styles.post}>
                  <div className={styles.postImgWrapper}>
                    <Image
                      className={styles.postImg}
                      src={post1}
                      width={1000}
                      height={1000}
                      alt="photo"
                    />
                  </div>
                  <div className={styles.postContent}>
                    <div className={styles.postCategoryWrapper}>
                      <p className={styles.desc}>Blog • December 27, 2024</p>
                    </div>
                    <p className={styles.title}>Destinasi Wisata Lampung yang Wajib Dikunjungi Tahun Ini</p>
                    <p className={styles.descMob}>Lampung menyimpan banyak destinasi wisata yang tak kalah menarik dibanding daerah lain di Indonesia. </p>
                  </div>
                </div>
              </Link>

              <Link href="https://api.whatsapp.com/send/?phone=62895636126916&text&type=phone_number&app_absent=0" target="blank">
                <div className={styles.post}>
                  <div className={styles.postImgWrapper}>
                    <Image
                      className={styles.postImg}
                      src={post1}
                      width={1000}
                      height={1000}
                      alt="photo"
                    />
                  </div>
                  <div className={styles.postContent}>
                    <div className={styles.postCategoryWrapper}>
                      <p className={styles.desc}>Blog • December 27, 2024</p>
                    </div>
                    <p className={styles.title}>Destinasi Wisata Lampung yang Wajib Dikunjungi Tahun Ini</p>
                    <p className={styles.descMob}>Lampung menyimpan banyak destinasi wisata yang tak kalah menarik dibanding daerah lain di Indonesia. </p>
                  </div>
                </div>
              </Link>

          </div>
        </div>

    )
}