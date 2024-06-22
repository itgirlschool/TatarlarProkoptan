import React from 'react';
import imagesData from '../../../Services/CultureData/culture.json';
import styles from './Traditions.module.scss'
function Traditions() {
  return (
    <div className={styles.traditions}>
      <h1>Хранители традиций</h1>
      <div className={styles.traditions_images}>
        {imagesData.map((image, index) => (
          <div key={index} className={styles.traditions_image_wrapper}>
            <img src={image.src} alt={image.alt} className={styles.traditions_image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Traditions;
