import React from 'react';
import { Link } from 'react-router-dom';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import styles from './Mosques.module.scss';
import mosquesData from '../../../Common/CultureData/mosques.json';

import mosques1Img from '../../../assets/cultureImg/mosques1.jpg';
import mosques2Img from '../../../assets/cultureImg/mosques2.jpg';
import mosques3Img from '../../../assets/cultureImg/mosques3.jpg';
import mosques4Img from '../../../assets/cultureImg/mosques4.jpg';
import mosques5Img from '../../../assets/cultureImg/mosques5.jpg';
import mosques6Img from '../../../assets/cultureImg/mosques6.jpg';

const images = {
  mosques1Img,
  mosques2Img,
  mosques3Img,
  mosques4Img,
  mosques5Img,
  mosques6Img
};

function Mosques() {
  return (
    <div className={styles.mosques_сontainer}>
      <Link to="/culture" className={styles.back_button_mosques}>Назад</Link>
      <h1 className={styles.mosque_h1}>Мечеть</h1>
      <div className={styles.video_container}>
        <iframe
          className={styles.video_frame}
          src="https://vk.com/video_ext.php?oid=-60746608&id=456239041&hd=2"
          width="500"
          height="280"
          allow="encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          allowFullScreen
        ></iframe>

      </div>
      <div className={styles.mosques_images}>
        {mosquesData.map((mosque) => (
          <div
            key={mosque.id}
            className={styles.mosques_image_wrapper}>
            <img src={images[mosque.src]} alt={mosque.alt} className={styles.mosques_image} />
          </div>
        ))}
      </div>
      <p>г. Прокопьевск, ул. Серова 17</p>
      <div className={styles.map_container}>
        <YMaps>
          <Map defaultState={{ center: [53.8757, 86.7402], zoom: 13 }} width="100%" height="100%">
            <Placemark geometry={[53.8757, 86.7402]} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
}

export default Mosques;
