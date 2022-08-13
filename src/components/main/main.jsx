import * as React from 'react';
import { toggleBasket } from '../../store/reducer';
import Basket from '../basket/basket';
import Boop from '../boop/boop';
import InfoBlock from '../info-block/info-block';
import * as style from '../main/main.module.css'
import Product from '../product/product';
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {
    const dispatch = useDispatch();
    const isBasket = useSelector(state => state.product.isBasket);
    const goToBasket = () => {
        dispatch(toggleBasket(true))
    }
    
    return (
        <div className={style.main}>
            <div className={style.main_wrapper}>
                {
                    !isBasket ?
                        (
                            <>
                                <InfoBlock />
                                <Product />
                                <Boop y={-10}>
                                    <button
                                        className={style.main_basket}
                                        onClick={() => goToBasket()}>
                                        Оформить заказ
                                    </button>
                                </Boop>
                            </>
                        ) : (
                            <Basket />
                        )
                }
            </div>
        </div>
    )
}

export default Main