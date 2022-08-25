import * as React from 'react';
import * as style from '../header/header.module.css';
import logo from '../../images/icons/logo.svg';
import basket from '../../images/icons/basket.svg';
import { toggleBasket } from '../../store/reducer';
import { useDispatch, useSelector } from 'react-redux';
import Boop from '../boop/boop';


let logoStyle ={
    height: '80px',
    marginTop: '20px'
}

const Header = () => {

    const dispatch = useDispatch();

    const order = useSelector(state => state.product.order);

    const [headerParam, setHeaderParam] = React.useState({
        isMinV: false,
        heightHeader: '50px',
        heightLogo: '80px',
        prevOffset: 0
    })

    const handleScroll = React.useCallback(
        () => {
            const currentOffset = window.pageYOffset;
            const isMin = currentOffset > 130 
            setHeaderParam({
                isMinV: isMin,
                heightLogo: isMin ? '50px' : '80px',
                prevOffset: currentOffset,
            })
            logoStyle = headerParam.isMinV ? {
                ...logoStyle,
                height: headerParam.heightLogo
            } : {
                ...logoStyle,
                height: headerParam.heightLogo
            }
        }
    ,[headerParam.heightLogo, headerParam.isMinV])

    React.useEffect(() => {
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    },[handleScroll])

    const goToBasket = () => {
        dispatch(toggleBasket(true))
    }
    return (
        <header className={`${style.header} ${headerParam.isMinV ? style.fixed : ''}`}>
            <div className={style.header_wrapper}>
                <div className={style.header_logo} >
                    <img style={logoStyle} src={logo} alt="logo" />
                </div>
                <div className={style.header_right}>
                    <div className={style.header_contacts}>
                        <a href="tel:+79219420302">+7-921-942-03-02</a>
                        <a href="tel:+79217610411">+7-921-761-04-11</a>
                        <a href="mailto:vves2018@mail.ru" style={headerParam.isMinV ? { display: 'none' } : {}}>vves2018@mail.ru</a>
                    </div>
                    <div className={style.header_basket} >
                        <Boop scale={1.1}>
                            <div className={style.header_basket_img}>
                                <img src={basket} alt="basket" onClick={() => goToBasket()} />
                                <div className={style.header_basket_count}>{order.length}</div>
                            </div>
                        </Boop>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header