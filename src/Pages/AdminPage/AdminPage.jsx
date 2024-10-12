import style from "./AdminPage.module.scss";
import { Routes, useNavigate } from "react-router-dom";
import App from "../../App/App";
import Charity from "../Charity/Charity";
import News from "../News/News";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import logo from "../../assets/images/logo.webp";
import adminPageIcon from '../../assets/images/adminPageIcon.svg';
// src/assets/images/adminPageIcon.svg';

const AdminPages = () => {
  

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };
  
  return (
    
    <div className={style.container}>
      <div className={style.headerAdmin}>
      <div className={style.logo__container}>
          <img src={logo} alt="Logo" className={style.logo} />
        </div>

        <div >
          <p className={style.p}>Админ станица</p>

        </div>
      <div>
         <button className={style.button} 
        onClick={handleButtonClick}>
        На главную станицу
      </button>
      </div>
      </div>

   <div className={style.adminBlock_container}>
    
      <div className={style.charity}>
            <Link to="auth/charity"  className={style.castomLink}>Благотворительность</Link>
          </div>

     <div className={style.autonomy}>
            <Link to ="auth/autonomy" className={style.castomLink}>Автономия</Link>
          </div>
          
     <div className={style.events}>
            <Link to="auth/events" className={style.castomLink}>Мероприятия</Link>
          </div>

     <div className={style.news_editor }>
            <Link to="auth/" className={style.castomLink}>Редакор Новостей</Link>
          </div>
    

    <div className={style.event_editor}>
            <Link to="auth/" className={style.castomLink}>Редакор Мероприятий </Link>
   </div>

   {/* <div>
   <img src={adminPageIcon.svg} alt="adminPageIcon" className={style.adminPageIcon}/>
   </div>
        */}
         
       
         </div>
     <Footer/> 
   </div>
   

  );
};

export default AdminPages;

