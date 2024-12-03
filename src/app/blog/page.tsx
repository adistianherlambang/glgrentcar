import Blog from "../components/blog/blog";
import styles from "@/app/tentang-kami/tentangKami.module.css"
import AOSComponent from "../components/AOS/AOS"
import Footer from "../components/footer/footer"
import Navbar from "../components/nav/nav";

export default function ArmadaPage() {
    return(
        <div className={styles.container}>
            <AOSComponent />
            <Navbar />
            <div className={styles.header} data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200">
                <p className={styles.mainTitle}>BLOG</p>
            </div>
            <Blog />
            <Footer />
        </div>
    )
}