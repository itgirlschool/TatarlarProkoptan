import React from 'react';
import styles from './Culture.module.scss';

function Culture() {
  return (
    <div className={styles.culture}>
      <h1>Культура</h1>
      <div className={styles.blocks_container}>
        <div className={styles.block}>Культура татар Прокопьевска</div>
        <div className={styles.block}>Хранители традиций</div>
        <div className={styles.block}>Мечеть</div>
        <div className={styles.block}>Наша национальная кухня</div>
        <div className={styles.block}>Наши партнеры</div>
      </div>
    </div>
  );
}

export default Culture;