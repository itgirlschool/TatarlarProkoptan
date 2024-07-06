import {React, useState} from 'react';
import { options } from './dataEvents';
import style from './Events.module.scss';
import { Form } from './Form';

function handleTitle () {
const [isSelected, setIsSelected] = useState(false);
setIsSelected(isSelected);
}

const MobileCalendar = () => {
    return (
        <div className={style.eventsPageMobile}>
            {options.map((option)=> (
            <Form key={options.key} {...option} handleTitle={handleTitle}/>
            ))}
        </div>
    )
}


// const listItems = options.map((option) =>
//     <li>{options.text}</li>
//   );



// const items = options;
// const MobileCalendar = () => {
//   const onChange = (key) => {
//     console.log(key);
//   };
//   return <div>
//   <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
//   </div>
// };

export default MobileCalendar;