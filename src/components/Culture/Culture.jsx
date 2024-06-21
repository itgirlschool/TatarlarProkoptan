import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Culture.module.scss';
import culture1 from '../../assets/cultureImg/culture1.jpg';
import culture2 from '../../assets/cultureImg/culture2.jpg';
import culture4 from '../../assets/cultureImg/culture4.jpg';
import culture5 from '../../assets/cultureImg/culture5.jpg';

function Culture() {
  return (
    <div className={styles.culture}>
      <h1>Культура</h1>
      <div className={styles.blocks_container}>
        <Link to="/tatar_culture" className={styles.block5}>
          <img className={styles.culture1} src={culture1} alt="культура" />
          <h2>Культура Татар Прокопьевска</h2>
        </Link>
        <Link to="/traditions" className={styles.block2}>
          <img className={styles.culture2} src={culture2} alt="традиции" />
          <h2>Хранители традиций</h2>
        </Link>
        <Link to="/mosques" className={styles.block}>
          <img className={styles.culture1} src={culture1} alt="мечеть" />
          <h2>Мечеть</h2>
        </Link>
        <Link to="/cuisine" className={styles.block}>
          <img className={styles.culture4} src={culture4} alt="кухня" />
          <h2>Наша национальная кухня</h2>
        </Link>
        <Link to="/partners" className={styles.block}>
          <img className={styles.culture5} src={culture5} alt="партнеры" />
          <h2>Наши партнеры</h2>
        </Link>
      </div>
    </div>
  );
}

export default Culture;
