import style from './ModalFormSingUp.module.scss'
import mask from "../../Common/inputPhone";
import { useForm } from "react-hook-form";

const ModalFormSingUp = (props) =>{
	const { closeModal, sentForm } = props
	const {
		register,
		formState: {
			errors,
			isValid
		},
		handleSubmit,
		reset
	} = useForm({
		mode: "onBlur"
	});
	const onSubmit = (data) => {
		alert(JSON.stringify(data))
		reset();
	}
	return(
		<aside className={style.modal}>
			<div className={style.modal_container}>
				<h2 className={style.title}>Записаться на мероприятие</h2>
				<form className={style.form_container}
				onSubmit={handleSubmit(onSubmit)}> 
					<div className={style.label_container}>
						<label className={style.input_name}>Фамилия</label>
						<input 
							className={style.input}
							id='lastName'
							type="text"
							{...register('lastName', {
								required: 'Введите, пожалуйста, фамилию',
								minLength: {
									value: 2,
									message: 'Минимум 2 символа'
								}
							})}
						/>
					</div>
					<div>
						{errors?.lastName && <p className={style.errors}>{errors?.lastName.message}</p>}
					</div>
					<div className={style.label_container}>
						<label className={style.input_name}>Имя</label>
						<input 
							className={style.input}
							id='firstName'
							type="text"
							{...register('firstName', {
								required: 'Введите, пожалуйста, имя',
								minLength: {
									value: 2,
									message: 'Минимум 2 символа'
								}
							})}
						/>
					</div>	
					<div>
						{errors?.firstName && <p className={style.errors}>{errors?.firstName.message}</p>}
					</div>
					<div className={style.label_container}>
						<label className={style.input_name}>Телефон</label>
						<input 
							className={style.input}
							id='phoneNumber'
							type="text"
							onClick={mask}
							{...register('phoneNumber', {
								required: 'Введите, пожалуйста, номер телефона',
								pattern: {
									value: /^\+7 [\d]{10}$/,
									message:"Пожалуйста, введите номер телефона в формате +7 9999999999"
								}
							})}
						/>
					</div>	
					<div>
						{errors?.phoneNumber && <p className={style.errors}>{errors?.phoneNumber.message}</p>}
					</div>
					<div className={style.label_container}>
						<label className={style.input_name}>Email</label>
						<input 
							className={style.input}
							id='email'
							type="email"
							{...register('email', {
								required: 'Введите, пожалуйста, почту',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
									message: "Адрес должен содержать @",
								}
							})}
						/>
					</div>
					<div>
						{errors?.email && <p className={style.errors}>{errors?.email.message}</p>}
					</div>
					<div className={style.buttons}>
						<button className={style.cancel} onClick={closeModal}>Отмена</button>
						<input className={style.submit} onClick={sentForm} type="submit" disabled={!isValid}/>
					</div>
				</form>
			</div>	
		</aside>
	)
}
export default ModalFormSingUp