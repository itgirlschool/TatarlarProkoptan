import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import style from "./Autonomia.module.scss";
import { useState } from "react";
import { sortUserAutonomy } from "../../../store/slice/AutonomySlice";
export default function autonomia() {
    const users = useSelector((state) => state.autonomy.users);
    const dispatch = useDispatch();
    const [showInfo, setShowInfo] = useState("Данные загружаются");
    const handleChange = (e) => {
        let value = e.target.value;
        dispatch(sortUserAutonomy(value));
    };

    return (
        <div className={style.autonomia}>
            <h1>Список участников</h1>
            <div className={style.autonomia_flex}>
                <select
                    name="select"
                    className={style.autonomia_btn}
                    onChange={handleChange}
                >
                    <option defaultValue="Default">Сортировки по дате</option>
                    <option value="Ранее">Добавлены ранее</option>
                    <option value="Недавно">Добавлены недавно</option>
                </select>
            </div>
            {users.length == 0 && <h1>{showInfo}</h1>}
            {users.map((item) => (
                <div key={item.key} className={style.user}>
                    <div className={style.info}>
                        <p className={style.info_names}>
                            {item.фамилия} {item.имя} {item.отчество}
                        </p>
                        <p>E-mail: {item.email}</p>
                        <p>Телефон: {item.телефон}</p>
                    </div>
                    <div>
                        <p>Дата авторизации: {item.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
