import React from 'react';
import { Badge, Calendar } from 'antd';
import style from "../EventsPage/EventsPage.module.scss";

const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 1:
      listData = [
        {
          type: 'Event',
          content: 'Участие и проведение праздника День защиты детей',
        },
      ];
      break;
    case 12:
      listData = [
        {
          type: 'Event',
          content: 'Участие в городских мероприятиях, посвященных Дню России',
        },
      ];
      break;
    case 17:
      listData = [
        {
          type: 'Event',
          content: 'Курбан Байрам',
        },
      ];
      break;
    case 21:
        listData = [
          {
            type: 'Event',
            content: 'Татар-Пати (татарская дискотека), посвященная Дню Молодёжи',
          },
        ];
        break;
      case 23:
        listData = [
          {
            type: 'Event',
            content: 'Участие в городском празднике День Молодёжи',
          },
        ];
        break;
      case 30:
        listData = [
          {
            type: 'Event',
            content: 'Международный федеральный Шахтерский Сабантуй',
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
            <p key={item.content} className={style.events}>
              <Badge status={item.type} text={item.content} />
              <button className={style.button}>Записаться</button>
            </p>
          ))}
        </div>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };
  return <Calendar cellRender={cellRender}  className={style.calendar}/>;
};
export default EventsCalendar;