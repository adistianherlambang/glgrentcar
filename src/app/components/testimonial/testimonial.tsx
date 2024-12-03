import styles from "./testimonial.module.css";
import bintang from "/public/homeAsset/testi/bintang.svg";
import Image from "next/image";

export default function Testimonial() {
  return (
    <>
      <div className={styles.titleContainer}>
        <p className={styles.title}>APA KATA MEREKA?</p>
      </div>
      <div className={styles.container}>
        <div className={styles.scrollContent}>

          <div className={styles.item}>
            <div className={styles.bintangContainer}>
              <Image
                className={styles.bintang}
                src={bintang}
                width={1000}
                height={1000}
                alt="bintang"
              />
            </div>
            <div className={styles.paragraph}>
              <p>
                Harga nya bersahabat banget ramah di kantong mobilnya juga bersih
                dan wangi, MANTAPPPP👍🏻👍🏻 …
              </p>
              <p className={styles.nama}>
                Groovy Babe
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.bintangContainer}>
              <Image
                className={styles.bintang}
                src={bintang}
                width={1000}
                height={1000}
                alt="bintang"
              />
            </div>
            <div className={styles.paragraph}>
              <p>
              Rental mobil paling rekomendasi banget di lampung, mobilnya lengkap dan ramah banget pelayanannya 🤲👍 …
              </p>
              <p className={styles.nama}>
                Shantoni Wijaya
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.bintangContainer}>
              <Image
                className={styles.bintang}
                src={bintang}
                width={1000}
                height={1000}
                alt="bintang"
              />
            </div>
            <div className={styles.paragraph}>
              <p>
              rekomenasi banget rental mobil selama saya di lampung, mobilnya rapih wangi dan drivernya jg amanah
              </p>
              <p className={styles.nama}>
                Haieckal Bayu Saputra
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.bintangContainer}>
              <Image
                className={styles.bintang}
                src={bintang}
                width={1000}
                height={1000}
                alt="bintang"
              />
            </div>
            <div className={styles.paragraph}>
              <p>
              pelayanan dan mobilnya sangat rekomen, terpercaya untuk wilayah lampung👍🏼👍🏼👍🏼 …
              </p>
              <p className={styles.nama}>
                IbnuMS
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.bintangContainer}>
              <Image
                className={styles.bintang}
                src={bintang}
                width={1000}
                height={1000}
                alt="bintang"
              />
            </div>
            <div className={styles.paragraph}>
              <p>
              kemaren pengalaman ke lampung 4 hari, nyariin penyewaan mobil akhirnya dapet GLG rental mobil ini. Bagus banget pelayananya, bersih mobilnya, ontime pas jemput di bandara. worth banget kalau ke lampung sewa mobil di Glg! banyak pilihannya.sopirnya kalau nyopir juga enakk.. gak ugal2an.. sopan sama tamu.
              </p>
              <p className={styles.nama}>
                Dwiki Max
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.bintangContainer}>
              <Image
                className={styles.bintang}
                src={bintang}
                width={1000}
                height={1000}
                alt="bintang"
              />
            </div>
            <div className={styles.paragraph}>
              <p>
              Dabestttt mantapp , mobilnya nyaman parahh....supirnya enak....pelayanan enak...top banget gengs....ga akan zonk atau rugi kalo sewa di glg mobil yaaa
              </p>
              <p className={styles.nama}>
                Agiel amin
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.bintangContainer}>
              <Image
                className={styles.bintang}
                src={bintang}
                width={1000}
                height={1000}
                alt="bintang"
              />
            </div>
            <div className={styles.paragraph}>
              <p>
              pelayanan dan mobilnya sangat rekomen, terpercaya untuk wilayah lampung👍🏼👍🏼👍🏼 …
              </p>
              <p className={styles.nama}>
                IbnuMS
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
