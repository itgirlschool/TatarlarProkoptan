import React from 'react';
import { YMaps, Map,Placemark } from '@pbe/react-yandex-maps';
import styles from './Mosques.module.scss';
import mosquesData from '../../../Services/CultureData/mosques.json';

function Mosques() {
  return (
    <div className={styles.mosques_сontainer}>
      <h1>Мечеть</h1>
      <div className={styles.mosques_images}>
        {mosquesData.map((image, index) => (
          <div key={index} className={styles.mosques_image_wrapper}>
            <img src={image.src} alt={image.alt} className={styles.mosques_image} />
          </div>
        ))}
      </div>
      <p>г. Прокопьевск, ул. Серова 17</p>
      <div className={styles.map_container}>
        <YMaps>
          <Map defaultState={{center: [53.8757, 86.7402], zoom: 9}}>
            <Placemark geometry={[53.8757, 86.7402]} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
}

export default Mosques;
