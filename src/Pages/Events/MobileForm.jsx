import { useState } from 'react';
import style from './Events.module.scss';
import ModalFormSingUp from "../../Components/ModalSingUp/ModalFormSingUp.jsx";

const MobileForm = (options) => {
    // const [value, setValue] = useState("Записаться");
    const handleClick = (props) => {
        // setValue("Заявка отправлена!", value);
        console.log("hey");
        return ModalFormSingUp(props);
        // e.preventDefault();
    }
    return  (
        <form className={style.mobileForm}>
            <div>{options.title}</div>
            <p className={style.mobile_events}>{options.label}</p>
            <button onClick={handleClick} className={style.button_events}>Записаться</button>
        </form>
    )
}

export default MobileForm;