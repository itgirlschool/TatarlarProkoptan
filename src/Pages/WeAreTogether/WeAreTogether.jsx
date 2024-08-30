import style from "./WeAreTogether.module.scss";
import childrenImg from "../../assets/images/children9.webp";
import helpImg from "../../../public/imgs/Help/help.webp";
import galleryImg from "../../assets/images/gallery4.webp";
import { useState, useEffect } from "react";
import ChildrenModule from "./ChildrenModule";
import HelpModal from "./HelpModal";
import GalleryModal from "./GalleryModal";
import { useNavigate } from "react-router-dom";

const WeAreTogether = () => {
  const [activeChildren, setActiveChildren] = useState(false);
  const [activeHelp, setActiveHelp] = useState(false);
  const [activeGallery, setActiveGallery] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 720);
    };

    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  const handleChildrenClick = () => {
    if (isMobile) {
      navigate("/childrenMobile");
    } else {
      setActiveChildren(true);
    }
  };

  const handleHelpClick = () => {
    if (isMobile) {
      navigate("/helpMobile");
    } else {
      setActiveHelp(true);
    }
  };

  const handleGalleryClick = () => {
    if (isMobile) {
      navigate("/galleryMobile");
    } else {
      setActiveGallery(true);
    }
  };

  return (
    <section className={style.content}>
      <div className={style.header__content}>
        <h1 className={style.header}>БЭЗ БЕРГЭ! МЫ ВМЕСТЕ!</h1>
        <p className={style.text}>
          Единство и братство народов России всегда было и остается главной
          опорой и преимуществом России, которое помогает покорять ей новые
          вершины. Мы в России хорошо знаем, каким богатством является такое
          многообразие наций, каким мощным позитивным зарядом развития и
          духовного взаимообогащения оно обладает. Мы едины!
        </p>
      </div>
      <div className={style.article__content}>
        <article className={style.content__img}>
          <div className={style.img__block}>
            <img src={childrenImg} alt="наша молодежь" className={style.img} />
            <h2 className={style.header__img} onClick={handleChildrenClick}>
              Наша молодежь
            </h2>
          </div>
        </article>
        <ChildrenModule active={activeChildren} setActive={setActiveChildren} />
        <article className={style.content__img}>
          <div className={style.img__block}>
            <img src={helpImg} alt="мы помогаем" className={style.img} />
            <h2 className={style.header__img} onClick={handleHelpClick}>
              Помогаем в трудную минуту
            </h2>
          </div>
        </article>
        <HelpModal active={activeHelp} setActive={setActiveHelp} />
        <article className={style.content__img}>
          <div className={style.img__block}>
            <img src={galleryImg} alt="наша галерея" className={style.img} />
            <h2 className={style.header__img} onClick={handleGalleryClick}>
              Галерея
            </h2>
          </div>
        </article>
        <GalleryModal active={activeGallery} setActive={setActiveGallery} />
      </div>
    </section>
  );
};

export default WeAreTogether;
