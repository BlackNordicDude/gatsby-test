import * as React from 'react';
import { toggleBasket, toggleInfo } from '../../store/reducer';
import Basket from '../basket/basket';
import Boop from '../boop/boop';
import InfoBlock from '../info-block/info-block';
import * as style from '../main/main.module.css'
import Product from '../product/product';
import { useDispatch, useSelector } from 'react-redux';
import Presentation from '../presentation/presentation';
import Title from '../title/title';
import Info from '../info/info';

const Main = () => {
    const dispatch = useDispatch();
    const {isBasket, isInfoOpen} = useSelector(state => ({
        isBasket: state.product.isBasket,
        isInfoOpen: state.product.isInfoOpen
    }));
    const goToBasket = () => {
        dispatch(toggleBasket(true))
    }
    const toggleInfoModal = () => {
        dispatch(toggleInfo())
    }
    
    return (
        <div className={style.main}>
            <div className={style.main_wrapper}>
                {
                    !isBasket ?
                        (
                            <>  
                                <Title/>
                                <Presentation/>
                                <InfoBlock />
                                <Product />
                                <Boop y={-10}>
                                    <button
                                        className={style.main_basket}
                                        onClick={() => goToBasket()}>
                                        Оформить заказ
                                    </button>
                                </Boop>
                                {isInfoOpen && <Info closeModal={toggleInfoModal}/>}
                            </>
                        ) : (
                            <>
                            <Basket />
                            {isInfoOpen && <Info closeModal={toggleInfoModal}/>}
                            </>
                            
                        )
                }
            </div>
        </div>
    )
}

export default Main