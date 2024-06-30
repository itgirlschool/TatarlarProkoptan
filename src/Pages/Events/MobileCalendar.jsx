import React from 'react';
import { Cascader } from 'antd';

const options = [
  {
    value: '21.06.2024',
    label: '21.06.2024',
    children: [
      {
        value: 'День России',
        label: 'День России',
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const onChange = (value) => {
  console.log(value);
};
const MobileCalendar = () => <Cascader options={options} onChange={onChange} placeholder="Выберете мероприятие" />;
export default MobileCalendar;