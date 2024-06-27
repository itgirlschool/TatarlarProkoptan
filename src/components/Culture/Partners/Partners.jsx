import React from 'react';
import PartnerCard from './PartnerCard';
import styles from './Partners.module.scss';

const partners = [
  {
    title: 'Кафе "Лагуна"',
    description: 'Проводит татарские банкеты, никахи, татарские праздники и поминальные трапезы для Татар.',
    link: 'https://api.whatsapp.com/send?phone=73846621161',
    location: 'Геолокация партнера 1'
  },
  {
    title: '"Пасека"',
    description: 'Описание партнера 2.',
    link: 'https://api.whatsapp.com/send?phone=79609072718',
    location: 'Геолокация партнера 2'
  },
  {
    title: '"Семейные фотосессии"',
    description: 'Сеничева Наталья фотограф, видеограф., семейные фотосессии, клипы, фото и видео сьемка торжеств.',
    link: ' https://vk.com/id14043086',
    location: 'Геолокация партнера 3'
  },
  {
    title: '"Организация праздников"',
    description: 'Организация праздников, вокал, ведущие, живая музыка  .',
    link: 'https://vk.com/banda_nedeti',
    location: 'Геолокация партнера 4'
  },
  {
    title: ' Магазин Лавка кондитера ',
    description: 'Магазин для кондитеров и любителей, в нашем магазине вы можете приобрести все для создания ваших тортиков, от ингредиентов до оформления.',
    link: 'https://vk.com/choco_love_ka',
    location: 'Геолокация партнера 4'
  }
];

const Partners = () => {
  return (
    <div className={styles.partners}>
      <h1>Наши партнеры</h1>
      <div className={styles.cards_container}>
        {partners.map((partner, index) => (
          <PartnerCard
            key={index}
            title={partner.title}
            description={partner.description}
            link={partner.link}
            location={partner.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
