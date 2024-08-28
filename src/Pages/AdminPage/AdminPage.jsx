import style from "./AdminPage.module.scss";
import {useNavigate} from "react-router-dom";

const AdminPage = () => {
const navigate = useNavigate(); 
  const handleButtonClick = () => {
    navigate("/"); 
  };
    return (
        <div className={style.container}>
             <button className={style.button} onClick={handleButtonClick}>
              На главную станицу
            </button>
            <p className={style.title}> Здесь будет страница администратора</p>
        </div>
    )
}

export default AdminPage;