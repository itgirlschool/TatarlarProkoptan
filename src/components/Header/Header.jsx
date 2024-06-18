import styles from "./Header.module.scss";
import logo from "../../assets/images/newLogo.png";
import NavLink from "./NavLink";
import TelegramIcon from "../../assets/images/telegram.svg";
import MailIcon from "../../assets/images/mail.svg";
import PhoneIcon from "../../assets/images/phone.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <nav className={styles.navbar}>
        <NavLink />
      </nav>
      <button className={styles.button}>Вступить в автономию</button>
      <div className={styles.icons}>
        <a
          href="https://t.me/yourtelegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={TelegramIcon} alt="Telegram" className={styles.icon} />
        </a>
        <a href="mailto:yourmail@example.com">
          <img src={MailIcon} alt="Mail" className={styles.icon} />
        </a>
        <a href="tel:+1234567890">
          <img src={PhoneIcon} alt="Phone" className={styles.icon} />
        </a>
      </div>
    </header>
  );
}
