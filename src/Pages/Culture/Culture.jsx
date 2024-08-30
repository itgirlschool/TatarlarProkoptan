import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Culture.module.scss';
import culture1 from '../../assets/cultureImg/culture1.webp';
import culture2 from '../../assets/cultureImg/culture2.webp';
import culture3 from '../../assets/cultureImg/culture3.webp';
import culture4 from '../../assets/cultureImg/culture4.webp';
import culture5 from '../../assets/cultureImg/culture5.webp';

function Culture() {
  return (
    <div className={styles.culture}>
      <h1 className={styles.culture_h1}>Культура</h1>
      <div className={styles.blocks_container}>
        <Link to="/culture/tatar_culture" className={styles.block5}>
          <img className={styles.culture1} src={culture1} alt="культура" />
          <h2 className={styles.culture_h2}>Культура Татар Прокопьевска</h2>
        </Link>
        <Link to="/culture/traditions" className={styles.block2}>
          <img className={styles.culture2} src={culture2} alt="традиции" />
          <h2 className={styles.culture_h2}>Хранители традиций</h2>
        </Link>
        <Link to="/culture/mosques" className={styles.block}>
          <img className={styles.culture1} src={culture3} alt="мечеть" />
          <h2 className={styles.culture_h2}>Мечеть</h2>
        </Link>
        <Link to="/culture/cuisine" className={styles.block}>
          <img className={styles.culture4} src={culture4} alt="кухня" />
          <h2 className={styles.culture_h2}>Наша национальная кухня</h2>
        </Link>
        <Link to="/culture/partners" className={styles.block}>
          <img className={styles.culture5} src={culture5} alt="партнеры" />
          <h2 className={styles.culture_h2}>Наши партнеры</h2>
        </Link>
      </div>
    </div>
  );
}

export default Culture;
