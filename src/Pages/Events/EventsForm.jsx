import style from './Events.module.scss';

const EventsForm = (options, handleClick) => {
    return  (
<form className={style.mobileForm}>
            <div>{options.title}</div>
            <p className={style.mobile_events}>{options.label}</p>
            <button onClick={() => handleClick()} className={style.button_events}>Записаться</button>
        </form>
    )
}

export default EventsForm;