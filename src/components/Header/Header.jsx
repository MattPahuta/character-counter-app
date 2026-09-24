// toDo: import light/dark logos, light/dark theme icons
import logoLight from "../../assets/images/logo-light-theme.svg";
import logoDark from "../../assets/images/logo-dark-theme.svg";
import "../../styles/global.css";
import styles from "./Header.module.css";

const sunIcon = (
  <svg
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="none"
    viewBox="0 0 22 22">
    <g clipPath="url(#a)">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.98"
        d="M11 1.833v1.834m0 14.666v1.834M3.666 11H1.833m3.955-5.212L4.49 4.492m11.72 1.296 1.297-1.296M5.788 16.215 4.49 17.512m11.72-1.296 1.297 1.296M20.166 11h-1.833m-2.75 0a4.583 4.583 0 1 1-9.167 0 4.583 4.583 0 0 1 9.167 0Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h22v22H0z" />
      </clipPath>
    </defs>
  </svg>
);

const moonIcon = (
  <svg
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="none"
    viewBox="0 0 22 22">
    <g clipPath="url(#a)">
      <path
        stroke="#12131A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.98"
        d="M20.125 11.877A7.333 7.333 0 1 1 10.124 1.875a9.168 9.168 0 1 0 10 10.002Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h22v22H0z" />
      </clipPath>
    </defs>
  </svg>
);

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <img className={styles.logo} src={logoLight} alt="Character counter logo" />
        <button className={styles.themeButton}>
          <span className="sr-only">Toggle theme</span>
          {moonIcon}
        </button>
      </div>
    </header>
  );
}

export default Header;
