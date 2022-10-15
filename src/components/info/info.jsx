import * as React from 'react'
import * as style from './info.module.css'
import closeIcon from '../../images/icons/close.svg';
import Boop from '../boop/boop';


const Info = ({closeModal}) => {
    return (
        <>
            <div className={style.modal_overlay} onClick={closeModal}>

            </div>
            <div className={style.info}>
                    <Boop rotation={30}>
                        <img src={closeIcon} alt="close" onClick={closeModal}/>
                    </Boop>
                <h2> ООО "ВВЭС" </h2>
                <h3> Генеральный директор: Титанян Сурен Вруйрович </h3>
                <p> ИНН: <span>7811689585</span> </p>
                <p> КПП: <span>780601001</span> </p>
                <p> ОГРН: <span>1187847104917</span> </p>
                <p> ОКПО: <span>78116895</span> </p>
                <p> Расчетный счет: <span>40702810003000069619</span> </p>
                <p> Банк: <span>Ф-Л "СЕВЕРНАЯ СТОЛИЦА" АО "РАЙФФАЙЗЕНБАНК"</span> </p>
                <p> БИК: <span>044030723</span> </p>
                <p> Корр. счет: <span>30101810100000000723</span> </p>
            </div>
        </>

    )
}

export default Info