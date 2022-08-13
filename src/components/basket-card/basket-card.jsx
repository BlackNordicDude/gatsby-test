import * as React from 'react';
import * as style from '../basket-card/basket-card.module.css';
import deleteIcon from '../../images/icons/delete.svg';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../store/reducer';

const BasketCard = ({item}) => {
    const dispatch = useDispatch();
    const {title, type, grade, size, count, id} = item;
    const deleteItem = () => {
        dispatch(removeItem(id));
    }
    return (
        <div className={style.card}>
            <div className={style.card_left}>
                <div className={style.card_title}>
                    {title}
                </div>
                <div className={style.card_descr}>
                    <div>Тип: <span>{type === 'new' ? 'Новая' : 'Б/У'}</span></div>
                    <div>Сорт: <span>{grade === 'first' ? 'Первый' : 'Второй'}</span></div>
                    <div>Количество: <span>{count}</span></div>
                    <div>Размер: <span>{size}</span></div>
                </div>
            </div>
            <div className={style.card_img_wrapper}>
                <img src={deleteIcon} alt="delete" onClick={() => deleteItem()}/>
            </div>
        </div>
    )
}

export default BasketCard