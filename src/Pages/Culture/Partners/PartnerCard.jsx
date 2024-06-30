import React from 'react';
import styles from './PartnerCard.module.scss';
import { YMaps, Map,Placemark } from '@pbe/react-yandex-maps';


function PartnerCard  ({ title, description, link,phone,location, coordinates }) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h1 className={styles.title_h1}>{title}</h1>
        <p>{description}</p>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">Подробнее</a>
        ) : (
          <a href={`tel:${phone}`} target="_blank" rel="noopener noreferrer">Подробнее</a>
        )}
        {location && <p>{location}</p>}
        {coordinates && (
          <YMaps>
            <div className={styles.map}>
              <Map defaultState={{ center: coordinates, zoom: 15 }}>
                <Placemark geometry={coordinates} />
              </Map>
            </div>
          </YMaps>
        )}
      </div>
    </div>
  );
};

export default PartnerCard;
