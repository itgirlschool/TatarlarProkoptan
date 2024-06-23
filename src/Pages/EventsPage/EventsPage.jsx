import EventsCalendar from "./Calendar";
import style from '../EventsPage/EventsPage.module.scss';

const EventsPage = () => {
    return(
        <div className={style.eventsPage}>
            <h1 className={style.h1}>Узнай о наших ближайших мероприятиях</h1>
            <EventsCalendar />
        </div>
    )
}

export default EventsPage;