import styles from "@styles/Landing.module.css";

function LandingHeader() {
  return (
    <div className={styles["header"]}>
      <div className={styles["header__container"]}>
        <h1 className={styles["header__title"]}>movielog</h1>
      </div>
    </div>
  )
}

export default LandingHeader;