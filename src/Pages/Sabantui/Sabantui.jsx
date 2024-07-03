import style from "./Sabantui.module.scss";
import sabantuy from "../../../src/assets/images/Sabantuy/main.jpg";
import SabantuyBlocks from "../Sabantui/SabantuyBlocks/SabantuyBlocks";

export default function Sabantui() {
  return (
    <div className={style.sabantuy__container}>
      <h1 className={style.sabantuy_title}>Сабантуй</h1>
      <img src={sabantuy} alt="Sabantuy" className={style.sabantuy__photo} />
      <h2 className={style.sabantuy__text}>
        <span className={style.sabantuy__name}> Сабантуй </span> - любимый
        праздник татарского народа. На гулянии проводятся разные игры, в которых
        участвуют и взрослые, и дети.
      </h2>
      <div>
        <SabantuyBlocks />
      </div>
      <h2 className={style.sabantuy__text}>
        На Сабантуе гостей принято угощать национальной выпечкой, а если
        праздник отмечают в пригороде, то и жареным на открытом огне мясом или
        пловом из казана. Одновременно проводятся состязания певцов, чтецов,
        танцоров. Характерной чертой всех состязаний является то, что любой
        присутствующий в любой момент может включиться в них.
        <br /> Единство выступающих и зрителей делает Сабантуй настоящим
        праздником.
      </h2>
    </div>
  );
}
