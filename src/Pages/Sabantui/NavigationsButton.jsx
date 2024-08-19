import style from './NavigationButtons.module.scss';

const NavigationButtons = ({ onPrev, onNext }) => {
    return (
        <div className={style.navigation__buttons}>
            <button onClick={onPrev} className={style.nav__button}>
                &lt;
            </button>
            <button onClick={onNext} className={style.nav__button}>
                &gt;
            </button>
        </div>
    );
};

export default NavigationButtons;