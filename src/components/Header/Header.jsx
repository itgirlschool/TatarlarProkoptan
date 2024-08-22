import style from "./Header.module.scss";
import { useEffect } from "react";
import logo from "../../assets/images/logo.png";
import BurgerMenu from "./BurgerMenu";
import TelegramIcon from "../../assets/images/telegram.svg";
import OkIcon from "../../assets/images/odnoklassniki.svg";
import MailIcon from "../../assets/images/mail.svg";
import PhoneIcon from "../../assets/images/phone.svg";
import FamilyIconImage from "../../assets/images/family.svg";
import { useState } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { NavLink } from "react-router-dom";
import ModalFormAutonomy from "../ModalForm/ModalFormAutonomy";
import ModalFormAuth from "../ModalForm/ModalFormAuth";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isModalOpened, setIsModalOpen] = useState(false);
  const [isLoginModalOpened, setIsLoginModalOpened] = useState(false);
  const [opacityExit, setOpacityExit] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const screenWidth = window.screen.width;
  const [isMobile, setIsMobile] = useState(screenWidth);
  const auth = getAuth();

  useEffect(() => {
    window.onresize = () => {
      setIsMobile(window.screen.width);
    };
    
    onAuthStateChanged(auth, (user) => {
      if (user) setOpacityExit(true);
    });

    return () => {
      setOpacityExit(false);
    };
  }, [auth]);

  const openModal = () => {
    setIsLoginModalOpened(false);
    if (isMobile <= 530 && location.pathname !== "/autonomy") {
      navigate("/autonomy");
    } else if (isMobile > 530) {
      setIsModalOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const openLoginModal = () => {
    setIsModalOpen(false);
    if (isMobile <= 530 && location.pathname !== "/authorizationpage") {
      navigate("/authorizationpage");
    } else if (isMobile > 530) {   
    setIsLoginModalOpened(true);
    document.body.style.overflow = "hidden";
    }
  };
 
  const exitAccount = () => {
    signOut(auth)
    .then(() => {
      setOpacityExit(false);
      navigate("/");
    })
    .catch((error) => {
      console.error("Ошибка при выходе из аккаунта:", error);
    });
};

  const closeModal = (value) => {
    if (screenWidth > 530) {
    setIsModalOpen(value);
    document.body.style.overflow = "auto";
    }
  };

  const closeLoginModal = (value) => {
    if (screenWidth > 530) {
    setIsLoginModalOpened(value);
    document.body.style.overflow = "auto";
    }
  };

  const getStyle = ({ isActive }) => {
    return {
      borderBottom: isActive ? "1px solid #f5e9e1" : "",
    };
  };

  return (
    <>
      <header className={style.header}>
        <div className={style.logo__container}>
          <img src={logo} alt="Logo" className={style.logo} />
        </div>
        <nav className={style.navbar}>
          <ul className={style.nav}>
            <li className={style.nav__link}>
              <NavLink style={getStyle} to="/">
                О нас
              </NavLink>
            </li>
            <li className={style.nav__link}>
              <NavLink style={getStyle} to="/news">
                Новости
              </NavLink>
            </li>
            <li className={style.nav__link}>
              <NavLink style={getStyle} to="/events">
                Мероприятия
              </NavLink>
            </li>
            <li className={style.nav__link}>
              <NavLink style={getStyle} to="/culture">
                Культура
              </NavLink>
            </li>
            <li className={style.nav__link}>
              <NavLink style={getStyle} to="/sabantui">
                Сабантуй
              </NavLink>
            </li>
            <li className={style.nav__link}>
              <NavLink style={getStyle} to="/charity">
                Благотворительность
              </NavLink>
            </li>
            <li className={style.nav__link}>
              <NavLink style={getStyle} to="/we-are-together">
                Мы вместе
              </NavLink>
            </li>
            <li className={style.nav__link}>
              <NavLink style={getStyle} to="/our-activists">
                Наши активисты
              </NavLink>
            </li>
            <li className={style.nav__link}>
              <NavLink style={getStyle} to="/contacts">
                Контакты
              </NavLink>
            </li>
            <li className={style.nav__link}>
              <NavLink style={getStyle} onClick={openLoginModal}>
                Авторизация
              </NavLink>
            </li>
            <li className={style.nav__link}>
              {opacityExit && (
                  <NavLink
                      style={getStyle}
                      to="#"
                      onClick={exitAccount}
                      className={style.yellowText}
                  >
                    Выйти из аккаунта
                  </NavLink>
              )}
            </li>
          </ul>
          <BurgerMenu/>
        </nav>
        <div className={style.action__container}>
          <div className={style.icons}>
            <a
                href="https://t.me/yourtelegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TelegramIcon} alt="Telegram" className={style.icon} />
            </a>
            <a href="mailto:rahma_li@mail.ru">
              <img src={MailIcon} alt="Mail" className={style.icon} />
            </a>
            <a href="tel:+79050698829">
              <img src={PhoneIcon} alt="Phone" className={style.icon} />
            </a>
            <a
              href="https://ok.ru/group/70000007558287"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={OkIcon} alt="Odnoklassniki" className={style.icon} />
            </a>
          </div>
          <div className={style.family__and__button}>
            <img
              src={FamilyIconImage}
              alt="Family"
              className={style.family__icon}
            />
            <button className={style.button} onClick={openModal}>
              Вступить в автономию
            </button>
          </div>
        </div>
      </header>
      {isModalOpened && <ModalFormAutonomy onClose={closeModal} />}
      {isLoginModalOpened && <ModalFormAuth onClose={closeLoginModal} />}
    </>
  );
};

export default Header;
