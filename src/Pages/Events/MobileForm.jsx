import { useState } from 'react';
import style from './Events.module.scss';

const MobileForm = (options) => {
    const [value, setValue] = useState("Записаться");
    const handleClick = (e) => {
        setValue("Заявка отправлена!", value);
        e.preventDefault();
    }
    return  (
        <form className={style.mobileForm}>
            <div>{options.title}</div>
            <p className={style.mobile_events}>{options.label}</p>
            <button onClick={handleClick} className={style.button_events}>{value}</button>
        </form>
    )
}

export default MobileForm;