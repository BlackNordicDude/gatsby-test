import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBasket, toggleModal } from '../../store/reducer';
import Boop from '../boop/boop';
import BasketCard from '../basket-card/basket-card';
import * as style from '../basket/basket.module.css'
import Modal from '../modal/modal';

const Basket = () => {
    const dispatch = useDispatch();
    const {order, isModalOpen} = useSelector(state => {
        return ({
            order: state.product.order,
            isModalOpen: state.product.isModalOpen,
        })
    })
    const goToMain = () => {
        dispatch(toggleBasket(false))
    } 
    const orderLength = order.length;
    return (
        <div className={style.basket}>
            <div className={style.basket_wrapper}>
                <div className={style.basket_top}>
                    <h2>
                        Товары в заказе:
                    </h2>
                    <div className={style.basket_back} onClick={() => goToMain()}>
                        Назад к товарам
                    </div>
                </div>
                <div className={style.basket_main}>
                    {
                        orderLength > 0 ? (
                            <div className={style.basket_main_cards}>
                                {order.map((item,i) => <BasketCard item={item} key={i}/>)}
                            </div>
                        ) : (
                            <div className={style.basket_main_empty}>
                                Тут пока пусто :с
                            </div>
                        )
                    }
                </div>
                {
                    orderLength > 0 ? (
                        <Boop y={-5}>
                            <div className={style.basket_btn} onClick={() => dispatch(toggleModal(true))}>
                                Оформить заказ
                            </div>
                        </Boop>
                    ) : (
                        <div className={style.basket_btn_inactive}>
                            Оформить заказ
                        </div>
                    )
                }
                {
                    isModalOpen && <Modal/>
                }
            </div>
        </div>
    )
}

export default Basket