import {React} from 'react';
import { options } from './dataEvents';
import MobileForm from './MobileForm';
import style from './Events.module.scss';

const MobileCalendar = () => {
    return (
        <div className={style.eventsPageMobile}>
            {options.map((option)=> (
            <MobileForm key={options.id} {...option} />
            ))}
        </div>
    )
}
export default MobileCalendar;