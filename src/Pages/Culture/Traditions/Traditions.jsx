import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Traditions.module.scss';
import traditionData from '../../../Common/CultureData/traditions.json';

import tr1Img from '../../../assets/cultureImg/tr1.jpg';
import tr2Img from '../../../assets/cultureImg/tr4.jpg';
import tr3Img from '../../../assets/cultureImg/tr6.jpg';
import tr4Img from '../../../assets/cultureImg/tr7.jpg';
import tr5Img from '../../../assets/cultureImg/tr10.jpg';
import tr6Img from '../../../assets/cultureImg/tr11.jpg';
import tr7Img from '../../../assets/cultureImg/tr14.jpg';
import tr8Img from '../../../assets/cultureImg/tr17.jpg';
import tr9Img from '../../../assets/cultureImg/tr18.jpg';

const images = {
  tr1Img,
  tr2Img,
  tr3Img,
  tr4Img,
  tr5Img,
  tr6Img,
  tr7Img,
  tr8Img,
  tr9Img,
};

function Traditions() {
  const [expandedImage, setExpandedImage] = useState(null);

  const openExpandedView = (imageSrc) => {
    setExpandedImage(imageSrc);
  };

  const closeExpandedView = () => {
    setExpandedImage(null);
  };

  return (
    <div className={styles.traditions}>
      <Link to="/culture" className={styles.back_button_traditions}>Назад</Link>
      <h1 className={styles.traditions_h1}>Хранители традиций</h1>
      <p>
        Татары Прокопьевска — хранители уникальных традиций, которые объединяют прошлое и настоящее, связывая поколения и создавая богатую культурную историю нашего города. Мы гордимся нашими корнями и стремимся сохранить это богатство для будущих поколений.
      </p>
      <div className={styles.traditions_images}>
        {traditionData.map((tradition) => (
          <div
            key={tradition.id}
            className={styles.traditions_image_wrapper}
            onClick={() => openExpandedView(images[tradition.src])}
          >
            <img src={images[tradition.src]} alt={tradition.alt} className={styles.traditions_image} />
          </div>
        ))}
      </div>
      {expandedImage && (
        <div className={styles.expanded_view} onClick={closeExpandedView}>
          <img src={expandedImage} alt="Expanded" className={styles.expanded_image} />
        </div>
      )}
    </div>
  );
}

export default Traditions;
