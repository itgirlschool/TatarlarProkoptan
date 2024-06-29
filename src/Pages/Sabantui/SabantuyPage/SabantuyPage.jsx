import style from "./SabantuyPage.module.scss";
import sabantuy from "../../../../public/imgs/Sabantuy/1.jpg";
import SabantuyBlocks from "../SabantuyBlocks/SabantuyBlocks.jsx";

export default function SabantuyPage() {
  return (
    <div className={style.sabantuy__container}>
      <h1>Сабантуй</h1>
      <img src={sabantuy} alt="Sabantuy" className={style.sabantuy__photo} />
      <h2>
        Сабантуй - любимый праздник татарского народа.
        <br /> На гулянии проводятся разные игры, в которых участвуют и
        взрослые, и дети.
      </h2>
      <div>
        <SabantuyBlocks />
      </div>
      <h2>
        На Сабантуе гостей принято угощать национальной выпечкой, а если
        праздник отмечают в пригороде,
        <br /> то и жареным на открытом огне мясом или пловом из казана.
        <br /> Одновременно проводятся состязания певцов, чтецов, танцоров.
        <br /> Характерной чертой всех состязаний является то, что любой
        присутствующий в любой момент может включиться в них.
        <br /> Единство выступающих и зрителей делает Сабантуй настоящим
        праздником.
      </h2>
    </div>
  );
}
