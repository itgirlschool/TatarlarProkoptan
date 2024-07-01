import React from 'react';
import { Cascader } from 'antd';
import { options } from './dataEvents';

options;

const onChange = (value) => {
    console.log(value);
};

const MobileCalendar = () => <Cascader options={options} onChange={onChange} placeholder="Выберете мероприятие" />;
export default MobileCalendar;