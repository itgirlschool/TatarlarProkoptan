import React from 'react';
import PartnerCard from './PartnerCard';
import styles from './Partners.module.scss';
import partnerData from '../../../Services/CultureData/partners.json';


function Partners  ()  {
  return (
    <div className={styles.partners}>
      <h1>Наши партнеры</h1>
      <div className={styles.cards_container}>
        {partnerData.map((partner, index) => (
          <PartnerCard
            key={index}
            title={partner.title}
            description={partner.description}
            link={partner.link}
            location={partner.location}
            coordinates={partner.coordinates}
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
