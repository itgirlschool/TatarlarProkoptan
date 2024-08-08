import { useState, useEffect } from 'react';
import style from './OurActivists.module.scss';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

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

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (!isMobile) return null;

    return (
        <button
            className={`${style.scrollToTop} ${isVisible ? style.visible : ''}`}
            onClick={scrollToTop}>
            <span className={style.arrowUp}>&#8593;</span>
        </button>
    );
};

export default ScrollToTopButton;