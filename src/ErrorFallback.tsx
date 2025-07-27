import styles from "@styles/ErrorFallback.module.css";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ErrorFallback() {
  const navigate = useNavigate();
  return (
    <div role="alert" className={styles["error-fallback"]}>
      <Search className={styles["error-fallback__search"]} size={300}/>
      <p className={styles["error-fallback__text"]}>Something went wrong</p>
      <button className={styles["error-fallback__button"]} onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
}

export default ErrorFallback;