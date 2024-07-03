import React from 'react';
import PartnerCard from './PartnerCard';
import styles from './Partners.module.scss';
import partnerData from '../../../Services/CultureData/partners.json';

function Partners() {
  return (
    <div className={styles.partners}>
      <p className={styles.partners_p}>Наши партнеры</p>
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
