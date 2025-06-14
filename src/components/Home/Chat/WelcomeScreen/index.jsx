import styles from "./styles.module.css";
import Logo from "../../assets/logo.svg";

export function WelcomeScreen() {
  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.welcomeContent}>
        <div className={styles.logo}>
          <img src={Logo} alt="Product Logo" />
        </div>
        <div className={styles.welcomeText}>
          <p className={styles.greeting}>Hi, Harshal Patil</p>
          <h1 className={styles.title}>
            Welcome to <span className={styles.highlight}>EY Data NeXt</span>
          </h1>
          <p className={styles.subtitle}>How Can I Help You?</p>
        </div>
      </div>
    </div>
  );
}
