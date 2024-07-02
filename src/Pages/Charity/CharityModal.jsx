import React, { useState } from 'react';

import style from './CharityModal.module.scss';

const CharityModal = ({ openModal, closeModal, updateCounter }) => {

    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        middleName: '',
        phone: '',
        email: '',
        agreeToTerms: false
    });
    const [successMessage, setSuccessMessage] = useState('');

    if (!openModal) return null;

    const validate = () => {
        const newErrors = {};
        const nameRegex = /^[a-zA-Zа-яА-Я]+$/;
        const phoneRegex = /^\+?\d{1,15}$/
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!nameRegex.test(formData.lastName)) newErrors.lastName = 'Фамилия должна содержать только буквы';
        if (!nameRegex.test(formData.firstName)) newErrors.firstName = 'Имя должно содержать только буквы';
        if (!nameRegex.test(formData.middleName)) newErrors.middleName = 'Отчество должно содержать только буквы';
        if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Неверный формат номера телефона';
        if (!emailRegex.test(formData.email)) newErrors.email = 'Неверный формат email';
        if (!formData.agreeToTerms) newErrors.agreeToTerms = 'Необходимо согласиться с политикой конфиденциальности';

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });

        if (name === 'agreeToTerms') {
            setErrors({
                ...errors,
                agreeToTerms: !checked ? 'Необходимо согласиться с политикой конфиденциальности' : ''
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length === 0) {
            try {
                setSuccessMessage('Заявка успешно отправлена!');
                updateCounter();
                closeModal();
                setFormData({
                    lastName: '',
                    firstName: '',
                    middleName: '',
                    phone: '',
                    email: '',
                    agreeToTerms: false
                });
                setErrors({});
            } catch (error) {
                console.error('Ошибка при отправке email:', error);
            }
        } else {
            setErrors(newErrors);
        }
    };

    const handleCancel = () => {
        closeModal();
        setFormData({
            lastName: '',
            firstName: '',
            middleName: '',
            phone: '',
            email: '',
            agreeToTerms: false
        });
        setErrors({});
    };

    return (
        <>
            <div className={style.modal}>
                <div className={style.content}>
                    <button
                        className={style.close}
                        onClick={closeModal}>
                        &times;
                    </button>
                    <h2 className={style.content__title}>Стать волонтером</h2>

                    {/* {successMessage && <p className={style.success}>{successMessage}</p>} */}

                    <form className={style.form}
                        onSubmit={handleSubmit} >

                        <div className={style.form__field}>
                            <label>Фамилия</label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Фамилия"
                                value={formData.lastName}
                                onChange={handleChange} />
                            {errors.lastName && <p className={style.error}>{errors.lastName}</p>}
                        </div>

                        <div className={style.form__field}>
                            <label>Имя</label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Имя"
                                value={formData.firstName}
                                onChange={handleChange} />
                            {errors.firstName && <p className={style.error}>{errors.firstName}</p>}
                        </div>

                        <div className={style.form__field}>
                            <label>Отчество</label>
                            <input
                                type="text"
                                name="middleName"
                                placeholder="Отчество"
                                value={formData.middleName}
                                onChange={handleChange} />
                            {errors.middleName && <p className={style.error}>{errors.middleName}</p>}
                        </div>

                        <div className={style.form__field}>
                            <label>Телефон</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="+..."
                                value={formData.phone}
                                onChange={handleChange} />
                            {errors.phone && <p className={style.error}>{errors.phone}</p>}
                        </div>

                        <div className={style.form__field}>
                            <label>Электронная почта</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="e-mail"
                                value={formData.email}
                                onChange={handleChange} />
                            {errors.email && <p className={style.error}>{errors.email}</p>}
                        </div>

                        <div className={style.confident}>
                            <label className={style.confident__checkbox}>
                                <label for="checkbox"></label>
                                <input
                                    id="checkbox"
                                    type="checkbox"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleChange} />
                                <span className={style.confident__checkmark}></span>
                            </label>

                            <p className={style.confident__text}>Я соглашаюсь с политикой конфиденциальности и обработки персональных данных</p>
                            {errors.agreeToTerms && <p className={style.error}>{errors.agreeToTerms}</p>}
                        </div>

                        <div className={style.button__wrap}>
                            <button
                                className={style.button__wrap_btn}
                                type="submit">
                                Принять участие
                            </button>
                            <button
                                className={style.button__wrap_btn}
                                type="button"
                                onClick={handleCancel}>
                                Отмена
                            </button>
                        </div>
                    </form>
                </div >
            </div >
        </>



    );

};
export default CharityModal;