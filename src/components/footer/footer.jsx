import * as React from 'react';
import * as style from '../footer/footer.module.css';
import logo from '../../images/icons/logo.svg';

const Footer = () => {
    return (
        <footer className={style.footer}> 
            <div className={style.footer_wrapper}>
                <div className={style.footer_info}>
                    <div className={style.footer_info_call}>
                        <a href="tel:+79219420302">+7-921-942-03-02</a>
                        <a href="tel:+79217610411">+7-921-761-04-11</a>
                    </div>
                    <div className={style.footer_info_call}>
                        <a href="mailto:vves2018@mail.ru">vves2018@mail.ru</a>
                    </div>
                </div>
                <div className={style.footer_logo}>
                    <img src={logo} alt="logo" />
                </div>
            </div>
        </footer>
    )
}

export default Footer