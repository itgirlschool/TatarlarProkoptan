import style from './Events.module.scss';

const EventsForm = ({options,handleClick }) => {
    console.log(options);
    return  (
<form className={style.mobileForm}>
            <div>{options.title}</div>
            <p className={style.mobile_events}>{options.label}</p>
            <button onClick={(event)=>{
                event.preventDefault();
                handleClick()
            }} className={style.button_events}>Записаться</button>
        </form>
    )
}

export default EventsForm;
