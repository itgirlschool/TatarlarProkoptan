import React from "react";
import EventsCalendar from "../../Pages/Events/Calendar";
import style from './Events.module.scss';

const Events = () => {
  return <div className={style.eventsPage}>
  <h1 className={style.h1}>Узнай о наших ближайших мероприятиях</h1>
  <EventsCalendar />
</div>;
};

export default Events;
