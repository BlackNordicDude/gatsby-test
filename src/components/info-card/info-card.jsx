import * as React from 'react';
import cardImg from '../../images/carusel/pallety_derevyannye.jpg';
import * as style from '../info-card/info-card.module.css';

const InfoCard = () => {
    return (
        <article className={style.card}>
            <div className={style.card_img_wrapper}>
                <img src={cardImg} alt="pallety" />
            </div>
            <div className={style.card_descr}>
                <p>Широкий выбор высококачественных паллетов. Новые и б/у. 
                Доставка по Санкт-Петербургу и ЛО.</p>
            </div>
        </article>
    )
}

export default InfoCard