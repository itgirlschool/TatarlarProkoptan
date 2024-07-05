import React from 'react';
import styles from './Recipe.module.scss';

const ChakChak = () => {
  return (
    <div className={styles.recipe}>
      <h3>Ингредиенты:</h3>
      <div>Яйца – 6 штук, соль – 1/2 чайной ложки,мука – 3 стакана,сахар – 1 столовая ложка,масло растительное для жарки</div>
      <h3>Приготовление:</h3>
      <div className={styles.recipe}>В глубокой миске взбейте яйца с солью и сахаром до однородности.Постепенно добавляйте муку, тщательно перемешивая тесто. Оно должно получиться мягким, но не липким.Разделите тесто на несколько частей и раскатайте каждую часть в тонкую пластинку, толщиной примерно 1-2 мм.Нарежьте раскатанные пластинки на тонкие полоски, а затем нарежьте их на небольшие кусочки размером 1-2 см.Обжарьте кусочки теста в большом количестве растительного масла до золотистого цвета. Выложите на бумажные полотенца, чтобы убрать излишки масла.Приготовление сиропа:В кастрюле на среднем огне растопите мед и добавьте сахар. Постоянно помешивая, доведите смесь до кипения и варите примерно 5-7 минут до получения густого сиропа.Сборка чак-чака:В большой миске смешайте обжаренные кусочки теста с горячим сиропом. Тщательно перемешайте, чтобы каждый кусочек был покрыт сиропом.Выложите смесь на блюдо, придавая ей желаемую форму (чаще всего формируют горку или пирамиду).Оставьте чак-чак остывать и затвердевать.Чак-чак готов! Приятного аппетита!"</div>
    </div>
  );
};

export default ChakChak;