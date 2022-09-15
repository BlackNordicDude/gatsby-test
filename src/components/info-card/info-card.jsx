import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import * as style from '../info-card/info-card.module.css';

const InfoCard = ({img, children}) => {
    const image = getImage(img)
    return (
        <article className={style.card}>
            <div className={style.card_img_wrapper}>
                <GatsbyImage 
                    image={image} 
                    alt={'slideImg'} 
                    placeholder='blurred'/>
            </div>
            <div className={style.card_descr}>
                {children}
            </div>
        </article>
    )
}

export default InfoCard