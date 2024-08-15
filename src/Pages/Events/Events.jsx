import {React, useState} from 'react';
import { options } from './dataEvents';
import EventsForm from './EventsForm.jsx';
import ModalFormSingUp from "../../Components/ModalSingUp/ModalFormSingUp.jsx";
import style from './Events.module.scss';

  const Events = () => {
    if (window.innerWidth > 768) {
      return <div className={style.eventsPage}>
      <h1 className={style.h1_events}>Узнай о наших ближайших мероприятиях</h1>
      <> {modalActive?
            <ModalFormSingUp  />:
        <div className={style.eventsPageMobile}>
            {options.map((option)=> (
            <EventsForm key={options.id} {...option} handleClick={handleClick} />
            ))}
        </div>}
        </>
      </div>
    }

export default Events;
