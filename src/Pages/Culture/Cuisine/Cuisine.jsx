import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Cuisine.module.scss';
import cuisineData from '../../../Common/CultureData/cuisine.json';
import ChakChak from './Recipe/ChakChak';
import Echpochmak from './Recipe/Echpochmak';
import Kostybai from './Recipe/Kostybai';
import chakChakImg from '../../../assets/cultureImg/chak.jpg';
import echpochmakImg from '../../../assets/cultureImg/culture4.jpg';
import kostybaiImg from '../../../assets/cultureImg/costybai.jpg';

const images = {
  chakChakImg,
  echpochmakImg,
  kostybaiImg
};

function Cuisine() {
  return (
    <div className={styles.cuisine_container}>
      <Link to="/culture" className={styles.back_button_cuisine}>Назад</Link>
      <h1 className={styles.cuisine_h1}>Национальная кухня</h1>
      <p className={styles.cuisine}>
        Кухня татарского народа воплотила в себе культурные, этнические и религиозные традиции, формировавшиеся на протяжении многих веков. Сегодня она имеет репутацию одной из наиболее сытных и вкусных, одновременно простой и изысканной. Свои самобытные черты татарская кухня сохранила до наших дней. Татарский народ бережно хранит традиции приготовления национальных блюд, передавая их из поколения в поколение. Некоторые блюда татарской кухни сохранились практически такими же, как и много лет назад.
      </p>
      <div className={styles.cuisine_images}>
        {cuisineData.map((cuisine) => (
          <TemplateCuisine key={cuisine.id} image={cuisine} />
        ))}
      </div>
    </div>
  );
}

function TemplateCuisine({ image }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const renderRecipeComponent = () => {
    switch (image.recipe) {
      case 'ChakChak':
        return <ChakChak />;
      case 'Echpochmak':
        return <Echpochmak />;
      case 'Kostybai':
        return <Kostybai />;
      default:
        return null;
    }
  };

  return (
    <div className={`${styles.card_container} ${isFlipped ? styles.flipped : ''}`} onClick={handleClick}>
      <div className={styles.card}>
        <div className={styles.card_front}>
          <img src={images[image.src]} alt={image.alt} className={styles.cuisine_image} />
        </div>
        <div className={styles.card_back}>
          <h3>{image.name}</h3>
          {renderRecipeComponent()}
        </div>
      </div>
    </div>
  );
}

export default Cuisine;