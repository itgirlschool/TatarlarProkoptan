import style from './ModalSingUp.module.scss'
import ModalFormSingUp from './ModalFormSingUp'

import React, { useState } from 'react';

const ModalSingUp = (props) =>{
	const { eventName, cancelModal } = props
	const [isModalOpened, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleCancel = () => {
		console.log('Clicked cancel button');
		setIsModalOpen(false);
	};
	return (
		<>
			{isModalOpened? 
			<ModalFormSingUp closeModal={()=> {handleCancel()}} sentForm={()=>{handleSent}} />:
			<div className={style.container}>
			<h2 className={style.title}> название мероприятия{eventName}</h2>
			<button className={style.button} onClick={showModal}>Записаться</button>
			<button className={style.button} onClick={handleCancel}>Отмена</button>
			</div>}
		</>
	);
	
}

export default ModalSingUp
