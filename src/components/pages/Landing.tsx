import LandingHeader from "@components/ui/LandingHeader";
import Carousel from "@components/ui/Carousel";
import styles from "@styles/Landing.module.css";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className={styles["landing-page"]}>
      <LandingHeader></LandingHeader>
      <main className={styles["landing-page-main"]}>
        <section className={styles["landing-page-hero"]}>
        <h1 className={styles["landing-page-hero-phrase"]}>Track, organize, and share your movie collections</h1>
        <button className={styles["landing-page-hero-button"]} onClick={() => navigate("/home")}>Start Logging</button>
        {/* 
        <Carousel/>
        */}
        </section>
        <section className={styles["landing-page-features"]}>Features</section>
        <section className={styles["landing-page-info"]}>Information about site</section>
        <footer className={styles["landing-page-footer"]}>Footer</footer>
      </main>
    </div>
  )
}


export default Landing;