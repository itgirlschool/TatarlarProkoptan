import React, { useState } from 'react';
import styles from './TatarCulture.module.scss';
import tatarData from '../../../Services/CultureData/culture.json';

function TatarCulture() {
  const [expandedImage, setExpandedImage] = useState(null);

  const openExpandedView = (imageSrc) => {
    setExpandedImage(imageSrc);
  };

  const closeExpandedView = () => {
    setExpandedImage(null);
  };

  return (
    <div className={styles.tatar_container}>
      <h1 className={styles.tatar_h1}>Культура Татар Прокопьевска</h1>
      <p className={styles.tatar_culture}>
        Одна из самых многочисленных диаспор в Кузбассе — татарская. Татары проживают в нашем регионе как компактными
        поселениями, например, в Юргинском и в Прокопьевском районах, так и рассеяны среди кузбассовцев в значительном
        количестве. Поэтому вполне уместно говорить не столько о влиянии татарской культуры на общероссийскую, сколько
        о взаимопроникновении, которое современниками порой не осознается вовсе.
      </p>
      <div className={styles.tatar_images}>
        {tatarData.map((item) => (
          <div key={item.id} className={styles.tatar_image_wrapper} onClick={() => openExpandedView(item.src)}>
            <img src={item.src} alt={item.alt} className={styles.tatar_image} />
          </div>
        ))}
      </div>
      {expandedImage && (
        <div className={styles.expanded_view} onClick={closeExpandedView}>
          <img src={expandedImage} alt="Expanded" className={styles.expanded_image} />
        </div>
      )}
      <p className={styles.read_more}>
        <a href="https://sibdepo.ru/reading/duslyk-eto-druzhba.html" target="_blank" rel="noopener noreferrer">
          Подробнее
        </a>
      </p>
    </div>
  );
}

export default TatarCulture;
