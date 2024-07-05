import React from 'react';
import { Link } from 'react-router-dom';
import PartnerCard from './PartnerCard';
import styles from './Partners.module.scss';
import partnerData from '../../../Services/CultureData/partners.json';

function Partners() {
  return (
    <div className={styles.partners}>
      <Link to="/culture" className={styles.back_button_partners}>Назад</Link>
      <h1 className={styles.partners_h1}>Наши партнеры</h1>
      <div className={styles.cards_container}>
        {partnerData.map((partner) => (
          <PartnerCard
            key={partner.id}
            title={partner.title}
            description={partner.description}
            link={partner.link}
            phone={partner.phone}
            location={partner.location}
            coordinates={partner.coordinates}
          />
        ))}
      </div>
    </div>
  );
}

export default Partners;
