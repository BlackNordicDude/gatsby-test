import * as React from 'react';
import * as style from '../info-card/info-card.module.css';

const InfoCard = ({img, children}) => {
    return (
        <article className={style.card}>
            <div className={style.card_img_wrapper}>
                <img src={img} alt="pallety" />
            </div>
            <div className={style.card_descr}>
                {children}
            </div>
        </article>
    )
}

export default InfoCard