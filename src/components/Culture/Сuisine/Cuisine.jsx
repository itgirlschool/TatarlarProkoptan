import React from 'react';
import styles from './Cuisine.module.scss'
import imagesData from '../../../Services/CultureData/cuisine.json'

function Cuisine() {
  return (
    <div className={styles.cuisine_container}>
      <h1>Национальная кухня</h1>
      <p className= {styles.cuisine}>Кухня татарского народа воплотила в себе культурные, этнические и религиозные традиции, формировавшиеся на протяжении многих веков. Сегодня она имеет репутацию одной из наиболее сытных и вкусных, одновременно простой и изысканной. Свои самобытные черты татарская кухня сохранила до наших дней.
      Татарский народ бережно хранит традиции приготовления национальных блюд, передавая их из поколения в поколение. Некоторые блюда татарской кухни сохранились практически такими же, как и много лет назад.</p>
      <div className={styles.cuisine_images}>
        {imagesData.map((image, index) => (
          <div key={index} className={styles.cuisine_image_wrapper}>
            <img src={image.src} alt={image.alt} className={styles.cuisine_image} />
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default Cuisine;
