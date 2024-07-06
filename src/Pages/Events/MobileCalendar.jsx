import {React, useState} from 'react';
import { options } from './dataEvents';
import Form from './Form';
import style from './Events.module.scss';

const handleTitle = () => {
    const [isSelected, setIsSelected] = useState(false);
    setIsSelected(isSelected);
    }

const MobileCalendar = () => {
    return (
        <div className={style.eventsPageMobile}>
            {options.map((option)=> (
            <Form key={options.key} {...option} handleTitle={handleTitle}/>
            ))}
        </div>
    )
}
export default MobileCalendar;