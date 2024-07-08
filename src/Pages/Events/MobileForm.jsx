import style from './Events.module.scss';

const MobileForm = (options) => {

    return  (
        <form className={style.mobileForm}>
            <div>{options.title}</div>
            <p className={style.mobile_events}>{options.label}</p>
            <button className={style.button_events}>Записаться</button>
        </form>
    )
}

export default MobileForm;