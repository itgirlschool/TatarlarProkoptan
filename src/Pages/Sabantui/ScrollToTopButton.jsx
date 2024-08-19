import { useState, useEffect } from 'react';
import style from './Sabantui.module.scss';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            className={`${style.scrollToTop} ${isVisible ? style.visible : ''}`}
            onClick={scrollToTop}>
            <span className={style.arrowUp}>&#8593;</span>
        </button>
    );
};

export default ScrollToTopButton;