import * as React from 'react';
import * as style from '../modal/modal.module.css';
import { useForm } from '../../hooks/useForm';
import closeIcon from '../../images/icons/close.svg';
import Boop from '../boop/boop';
import { useDispatch } from 'react-redux';
import { resetBasket, toggleBasket, toggleModal } from '../../store/reducer';

const Modal = () => {
    const dispatch = useDispatch();
    const {values, handleChange} = useForm({name: '', secondName: '', number: '', email: ''});
    const onSubmit = (e) => {
        e.preventDefault();
        //send data
        dispatch(toggleBasket(false))
        dispatch(toggleModal(false))
        dispatch(resetBasket())
    }
    const closeModal = () => {
        dispatch(toggleModal(false))
    }
    return (
        <>
            <div className={style.modal_overlay}>

            </div>
            <div className={style.modal}>
                <div className={style.modal_top}>
                    <Boop rotation={30}>
                        <img src={closeIcon} alt="close" onClick={closeModal}/>
                    </Boop>
                </div>
                <h3 className={style.modal_title}>
                    Укажите свои данные и мы свяжемся с вами в близжайшее время для оформления заказа!
                </h3>
                <form className={style.modal_form} onSubmit={onSubmit}>
                        <span>Имя</span>
                        <input 
                            className={style.modal_input}
                            type="text" 
                            name='name' 
                            value={values.name} 
                            onChange={handleChange}
                            placeholder='Ivan'
                            required
                        />
                        <span>Фамилия</span>
                        <input 
                            className={style.modal_input}
                            type="text" 
                            name='secondName' 
                            value={values.secondName} 
                            onChange={handleChange}
                            placeholder='Ivanov'
                            required
                        />
                        <span>Телефон</span>
                        <input 
                            className={style.modal_input}
                            type="text" 
                            name='number'
                            value={values.number}
                            onChange={handleChange}
                            placeholder='+79991234567'
                            required
                            pattern='^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$'
                        />
                        <span>E-mail</span>
                        <input 
                            className={style.modal_input}
                            type="email" 
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                            placeholder='example@mail.ru'
                            required
                        />
                    <div className={style.modal_btn_wrapper}>
                        <Boop y={-5}>                        
                            <button className={style.modal_btn} type='submit'>
                                Оформить заказ
                            </button>
                        </Boop>
                    </div>                                              
                </form>
            </div>
        </>
    )
}

export default Modal