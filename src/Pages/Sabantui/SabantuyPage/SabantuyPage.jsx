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
    </div>
  );
}
