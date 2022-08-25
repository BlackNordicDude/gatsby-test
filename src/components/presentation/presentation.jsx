import * as React from 'react'
import * as style from '../presentation/presentation.module.css'
import icon1 from '../../images/icons/nice.svg'
import icon2 from '../../images/icons/star.svg'
import icon3 from '../../images/icons/appr.svg'

const Presentation = () => {
    return (
        <div className={style.presentation}>
            <div className={style.presentation_text}>
            Качественные материалы в сочетании с точной работой создают продукт высокого уровня, который 
            подходит практически под любую задачу. 
                
                <img src={icon1} alt="icon" /> 
            </div>
            <div className={style.presentation_text}>
            Уже более 6 лет наша компания занимается производством и продажей деревянных настилов и поддонов!  
            <img src={icon2} alt="icon" /> 

            </div>
            <div className={style.presentation_text}>
                Мы всегда заботимся о наших клиентах и стараемся 
            подстраиваться под их запросы, укрепляя дальнейшее сотрудничество!
            <img src={icon3} alt="icon" /> 
            </div>
        </div>
    )
}

export default Presentation