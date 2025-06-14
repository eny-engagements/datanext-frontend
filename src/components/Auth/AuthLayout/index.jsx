import styles from './styles.module.css';
import Logo from '../../../assets/images/logo.png';

export function AuthLayout({ title, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <img src={Logo} className={styles.logo} alt="Logo" />
        <div className={styles.form_wrapper}>
          <span className={styles.title}>{title}</span>
          {children}
        </div>
      </div>
    </div>
  );
}