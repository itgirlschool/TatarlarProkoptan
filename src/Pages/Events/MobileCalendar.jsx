import React from 'react';
import { Cascader } from 'antd';
import { options } from './dataEvents';
import style from './Events.module.scss';

options;

const onChange = (value) => {
    console.log(value);
};

const MobileCalendar = () => 
<div className={style.eventsPageMobile}>
<Cascader options={options} onChange={onChange} placeholder="Выберете мероприятие" className={style.mobileCalendar}/>
</div>

export default MobileCalendar;