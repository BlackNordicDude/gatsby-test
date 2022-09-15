import * as React from 'react';
import * as style from '../modal-form/modal-form.module.css';
import { useForm } from '@formspree/react';
import { useDispatch, useSelector } from 'react-redux';
import Boop from '../boop/boop';
import { resetBasket, toggleBasket } from '../../store/reducer';

function Form() {

    const dispatch = useDispatch();
    const order = useSelector(state => state.product.order)
    let stringOrder = '';
    order.map(item => stringOrder += `${item.title} - размер: ${item.size}, кол-во: ${item.count}, сорт: ${item.grade}, тип: ${item.type}; `)
    const [state, handleSubmit] = useForm("mnqrppgr", {
        data: {
            order: stringOrder
        }
    });
    if (state.succeeded) {
        setTimeout(() => {
            dispatch(resetBasket());
            dispatch(toggleBasket(false));
        },3000)
        return <div>Заявка принята</div>;
    }
    return (
        <form className={style.modal_form} onSubmit={handleSubmit}>
            <label htmlFor="name">Имя</label>
            <input required id='name' type="text" name='name' placeholder='Ivan' className={style.modal_input} />

            <label htmlFor="secondName">Фамилия</label>
            <input required id='secondName' type="text" name='secondName' placeholder='Ivanov' className={style.modal_input} />

            <label htmlFor="phone">Телефон</label>
            <input required id='phone' type="text" name='phone' placeholder='+79991234567' className={style.modal_input} />

            <label htmlFor="email">Email</label>
            <input required id="email" type="email" name="email" placeholder='example@mail.ru' className={style.modal_input} />
            <Boop y={-5}>
                <button className={style.modal_btn} type="submit" disabled={state.submitting}>Оставить заявку</button>
            </Boop>
        </form>
    )
}

export default Form

