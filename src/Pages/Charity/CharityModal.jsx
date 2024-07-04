import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharityUsers, addCharityUser } from '../../store/slice/CharitySlice';

import style from './CharityModal.module.scss';

const CharityModal = ({ openModal, closeModal, updateCounter }) => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.charity.users);
    const status = useSelector(state => state.charity.status);
    const error = useSelector(state => state.charity.error);

    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        middleName: '',
        phone: '',
        email: '',
        agreeToTerms: false
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [duplicateError, setDuplicateError] = useState(false);

    useEffect(() => {
        if (openModal && status === 'idle') {
            dispatch(fetchCharityUsers());
        }
    }, [openModal, status, dispatch]);

    useEffect(() => {
        if (status === 'succeeded') {
            checkForDuplicates();
        }
    }, [status, users]);

    const checkForDuplicates = () => {
        const isDuplicate = users.some(user =>
            user.email === formData.email || user.phone === formData.phone
        );
        setDuplicateError(isDuplicate);
    };

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
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length === 0) {
            try {
                await dispatch(addCharityUser(formData));
                console.log('Данные отправлены');
                setSuccessMessage('Заявка успешно отправлена!');
                updateCounter();
                setShowSuccessMessage(true);
                setTimeout(() => {
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
                    setSuccessMessage('');
                    setShowSuccessMessage(false);
                }, 2000);
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

        openModal && (
            < div className={style.modal}>

                <div className={style.content}>
                    <button
                        className={style.close}
                        onClick={closeModal}>
                        &times;
                    </button>

                    {showSuccessMessage ? (
                        <div className={style.success}>
                            <h2 className={style.success__title}>{successMessage}</h2>
                        </div>
                    ) : (
                        <>
                            <h2 className={style.content__title}>Стать волонтером</h2>

                            {duplicateError && <p className={style.error}>Данные уже существуют!</p>}

                            <form className={style.form}
                                onSubmit={handleSubmit} >

                                <div className={style.form__field}>
                                    <label className={style.form__label}>Фамилия</label>
                                    {errors.lastName && <p className={style.error}>{errors.lastName}</p>}
                                    <input
                                        className={style.form__input}
                                        type="text"
                                        name="lastName"
                                        placeholder="Фамилия"
                                        value={formData.lastName}
                                        onChange={handleChange} />
                                </div>

                                <div className={style.form__field}>
                                    <label className={style.form__label}>Имя</label>
                                    {errors.firstName && <p className={style.error}>{errors.firstName}</p>}
                                    <input
                                        className={style.form__input}
                                        type="text"
                                        name="firstName"
                                        placeholder="Имя"
                                        value={formData.firstName}
                                        onChange={handleChange} />
                                </div>

                                <div className={style.form__field}>
                                    <label className={style.form__label}>Отчество</label>
                                    {errors.middleName && <p className={style.error}>{errors.middleName}</p>}
                                    <input
                                        className={style.form__input}
                                        type="text"
                                        name="middleName"
                                        placeholder="Отчество"
                                        value={formData.middleName}
                                        onChange={handleChange} />
                                </div>

                                <div className={style.form__field}>
                                    <label className={style.form__label}>Телефон</label>
                                    {errors.phone && <p className={style.error}>{errors.phone}</p>}
                                    <input
                                        className={style.form__input}
                                        type="tel"
                                        name="phone"
                                        placeholder="+..."
                                        value={formData.phone}
                                        onChange={handleChange} />
                                </div>

                                <div className={style.form__field}>
                                    <label className={style.form__label}>Электронная почта</label>
                                    {errors.email && <p className={style.error}>{errors.email}</p>}
                                    <input
                                        className={style.form__input}
                                        type="email"
                                        name="email"
                                        placeholder="e-mail"
                                        value={formData.email}
                                        onChange={handleChange} />
                                </div>

                                <div className={style.confident}>
                                    <label className={style.confident__checkbox}>
                                        <label for="checkbox"></label>
                                        <input
                                            className={style.confident__checkbox_input}
                                            id="checkbox"
                                            type="checkbox"
                                            name="agreeToTerms"
                                            checked={formData.agreeToTerms}
                                            onChange={handleChange} />
                                        <span className={style.confident__checkmark}></span>
                                    </label>

                                    <p className={`${style.confident__text} ${formData.agreeToTerms ? style.confident__text_error : ''}`}>Я соглашаюсь с политикой конфиденциальности и обработки персональных данных</p>
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
                        </>
                    )}
                </div >
            </div >
        )
    );
};
export default CharityModal;