import React from 'react';
import styles from './PartnerCard.module.scss';

const PartnerCard = ({ title, description, link, location }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">Подробнее</a>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default PartnerCard;
