import * as React from 'react'
import * as style from '../title/title.module.css'

const Title = () => {
    return (
        <div className={style.title}>
            <h1>Где купить деревянные поддоны и настилы в СПб?</h1>
            <div className={style.title_text}>
                <p>
                    Компания ВВЭС занимается производством, продажей и доставкой поддонов, настилов и паллетных крышек в Санкт-Петербурге. 
                </p>
                <p>
                    У нас вы можете заказать изделия разных типов и из разных сортов древесины, новые и бывшие в употреблении. С доставкой по городу и области.
                </p>
            </div>
        </div>
    )
}

export default Title