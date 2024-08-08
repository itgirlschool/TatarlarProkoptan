import React from 'react';
import { Badge, Calendar, Divider } from 'antd';
import style from "./Events.module.scss";
import ModalSingUp from "../../Components/ModalSingUp/ModalFormSingUp.jsx";

// const ModalEvent = ({props}) => {
//   return ModalSingUp(props);
// }

const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: 'Event',
          content: 'Мини-Сабантуй',
        },
      ];
      break;
    case 14:
      listData = [
        {
          type: 'Event',
          content: 'День памяти ушедших',
        },
      ];
      break;
      case 27:
        listData = [
          {
            type: 'Event',
            content: 'Татарская рыбалка и уха',
          },
        ];
        break;
    default:
  }
  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};
const EventsCalendar = () => {
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className={style.notes-month}>
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
        <div>
          {listData.map((item) => (
            <div key={item.content} className={style.events} >
              <Badge status={item.type} text={item.content} className={style.events}  />
            {/* <button className={style.button_test} onClick={ModalEvent}>Test</button> */}
            </div>
          ))}
        </div>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    // if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };
  return <Calendar cellRender={cellRender}  className={style.calendar}/>;
};
export default EventsCalendar;