import React, { useState } from 'react';
import styles from './PartnerCard.module.scss';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function PartnerCard({ title, description, link, phone, location, coordinates }) {
  const [showMap, setShowMap] = useState(false);

  const handleShowMap = () => {
    setShowMap(true);
  };

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h1 className={styles.title_h1}>{title}</h1>
        <p>{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">Подробнее</a>
        )}
        {!link && phone && (
          <a href={`tel:${phone}`} target="_blank" rel="noopener noreferrer">Подробнее</a>
        )}
        {location && <p>{location}</p>}
        {coordinates && (
          <div className={styles.map_container}>
            {!showMap ? (
              <button onClick={handleShowMap} className={styles.map_button}>
                Посмотреть на карте
              </button>
            ) : (
              <YMaps>
                <div className={styles.map}>
                  <Map defaultState={{ center: coordinates, zoom: 15 }} width="100%" height="100%">
                    <Placemark geometry={coordinates} />
                  </Map>
                </div>
              </YMaps>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default PartnerCard;
