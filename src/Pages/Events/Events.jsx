import { useEffect, useState }  from "react";
import EventsCalendar from "../../Pages/Events/Calendar";
import style from './Events.module.scss';
import MobileCalendar from "./MobileCalendar";
import {getAuth, onAuthStateChanged,} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import ModalSingUp from "../../Components/ModalSingUp/ModalSingUp";

// const useResize = () => {
//     const [size, setSize] = useState([0, 0]);
//     useEffect(() => {
//       const getSize = () =>
//         setSize([window.innerWidth, window.innerHeight]);
//       getSize();
//       window.addEventListener("resize", getSize);
//       return () => window.removeEventListener("resize", getSize);
//     }, []);
//       return size;
//   };

  const Events = () => {
  //   const auth = getAuth();
  // const  navigate = useNavigate();
  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (user) => {
  //       if (!user) navigate('/authorizationpage');
  //     });
  //     return () => unsubscribe();
  //   }, []);

    // if (window.innerWidth > 768) {
    //   return <div className={style.eventsPage}>
    //   <h1 className={style.h1_events}>Узнай о наших ближайших мероприятиях</h1>
    //   <EventsCalendar />
    //   </div>
    // } else {
      return <div className={style.eventsPage}>
      <h1 className={style.h1_events}>Узнай о наших ближайших мероприятиях</h1>
      < MobileCalendar />
      {/* <ModalSingUp /> */}
      </div>
    }
  // }

export default Events;
