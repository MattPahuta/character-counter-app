import logoLight from "../../assets/images/logo-light-theme.svg";
import logoDark from "../../assets/images/logo-dark-theme.svg";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "../../styles/global.css";
import styles from "./Header.module.css";

function Header({ theme, onToggle }) {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <img
          className={styles.logo}
          src={theme === "light" ? logoLight : logoDark}
          alt="Character counter logo"
        />
        <ThemeToggle theme={theme} onToggle={onToggle} />
      </div>
    </header>
  );
}

export default Header;
