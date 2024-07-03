import React, { useState } from 'react';
import traditionData from '../../../Services/CultureData/traditions.json';
import styles from './Traditions.module.scss';

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
      <h1 className={styles.traditions_h1}>Хранители традиций</h1>
      <p>
        Татары Прокопьевска — хранители уникальных традиций, которые объединяют прошлое и настоящее, связывая поколения и создавая богатую культурную историю нашего города. Мы гордимся нашими корнями и стремимся сохранить это богатство для будущих поколений.
      </p>
      <div className={styles.traditions_images}>
        {traditionData.map((tradition) => (
          <div key={tradition.id} className={styles.traditions_image_wrapper} onClick={() => openExpandedView(tradition.src)}>
            <img src={tradition.src} alt={tradition.alt} className={styles.traditions_image} />
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
