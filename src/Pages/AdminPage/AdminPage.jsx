import style from "./AdminPage.module.scss";
import { Routes, useNavigate } from "react-router-dom";
import App from "../../App/App";
import Charity from "../Charity/Charity";
import News from "../News/News";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";



const AdminPages = () => {
  

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };
  
  return (
    
    <div className={style.container}>
       <Header/>
      
   <div className="adminBlock_container">
    
      <div className={style.charity}>
            <Link to="auth/charity">Благотворительность</Link>
          </div>

     <div className={style.autonomy}>
            <Link to ="auth/autonomy">Автономия</Link>
          </div>
          
     <div className={style.events}>
            <Link to="auth/events">Мероприятия</Link>
          </div>

     <div className={style.news_editor}>
            <Link to="auth/">Редакор Новостей</Link>
          </div>
    

    <div className={style.event_editor}>
            <Link to="auth/">Редакор Мероприятий </Link>
          </div>
       
          <button className={style.button} 
        onClick={handleButtonClick}>
        На главную станицу
      </button>
       
         </div>
     <Footer/> 
   </div>
   

  );
};

export default AdminPages;

