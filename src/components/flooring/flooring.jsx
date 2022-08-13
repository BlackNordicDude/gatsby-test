import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { data } from '../../store/data';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as style from '../flooring/flooring.module.css';
import { addToOrder } from '../../store/reducer';
import Boop from '../boop/boop';
import { v4 as uuidv4 } from 'uuid';    


const Flooring = () => {
    const currentTab = useSelector(state => state.product.currentTab)
    const dispatch = useDispatch();
    const currentCard = data.filter(card => card.tab === currentTab)[0]
    const [toOrder, setToOrder] = React.useState({
        title: currentCard.title,
        count: 0,
        type: 'new',
        size: 'Под заказ',
        grade: 'first',
        id: null
    })
    const {title, humidity, material} = currentCard;

    const increase = () => setToOrder({...toOrder, count: toOrder.count + 1})
    const decrease = () => {
        if (toOrder.count > 0) setToOrder({...toOrder, count: toOrder.count - 1})
    }

    const images = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "flooring"}}) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, height: 430, width: 550)
            }
            name
          }
        }
      }
    }
  `)
    const imgData = images.allFile.edges[0].node
    const img = getImage(imgData);

    const addProductToOrder = () => {
        console.log(toOrder);
        setToOrder({...toOrder, id: uuidv4()})
        console.log(toOrder);
        dispatch(addToOrder(toOrder))
    }
    return (
        <>
            <div className={style.card_left}>
                <div className={style.card_descr}>
                    <h3 className={style.card_title}>{title}</h3>
                    <p>Материал: {material}</p>
                    <p>Влажность: {humidity}</p>
                    <p>Размеры под заказ</p>
                </div>
                <div className={style.modif}>
                    <div className={style.modif_grade}>
                        <button
                            className={toOrder.grade === 'first' ? style.modif_btn_active : style.modif_btn}
                            onClick={() => setToOrder({ ...toOrder, grade: 'first' })}
                        >
                            1 сорт
                        </button>
                    </div>
                    <div className={style.modif_type}>
                        <button
                            className={toOrder.type === 'new' ? style.modif_btn_active : style.modif_btn}
                            onClick={() => setToOrder({ ...toOrder, type: 'new' })}
                        >
                            Новый
                        </button>
                    </div>
                </div>
                <div className={style.value}>
                    <button className={style.value_btn} onClick={decrease}>-</button>
                    <p>{toOrder.count}</p>
                    <button className={style.value_btn} onClick={increase}>+</button>
                </div>
                {
                    toOrder.count === 0 ? (
                        <button
                            className={style.add_btn_inactive}
                        >
                            В корзину
                        </button>
                    ) : (
                        <Boop scale={1.05}>
                            <button
                                className={style.add_btn}
                                onClick={addProductToOrder}
                            >
                                В корзину
                            </button>
                        </Boop>
                    )
                }
            </div>
            <div className={style.card_right}>
                <div className={style.card_img_wrapper}>
                    <GatsbyImage 
                    image={img} 
                    alt={imgData.name} 
                    placeholder='blurred'/>
                </div>
            </div>
        </>
    )
}

export default Flooring