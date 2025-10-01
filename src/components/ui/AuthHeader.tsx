import styles from "@styles/Header.module.css";
import { useNavigate } from "react-router-dom";

function AuthHeader() {
  const navigate = useNavigate();

  return (
    <div className={styles["auth-header"]}>
      <div className={styles["auth-header__container"]}>
        <h1 className={styles["auth-header__title"]} onClick={() => navigate('/')}>movielog</h1>
      </div>
    </div>
  )
  
}

export default AuthHeader;