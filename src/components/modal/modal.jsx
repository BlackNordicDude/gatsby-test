import * as React from 'react';
import * as style from '../modal/modal.module.css';
import closeIcon from '../../images/icons/close.svg';
import Boop from '../boop/boop';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../store/reducer';
import Form from '../modal-form/modal-form';

const Modal = () => {
    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(toggleModal(false))
    }
    return (
        <>
            <div className={style.modal_overlay} onClick={closeModal}>

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
                <Form/>
            </div>
        </>
    )
}

export default Modal