import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { data } from '../../store/data';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as style from '../cap/cap.module.css';
import { addToOrder } from '../../store/reducer';
import Boop from '../boop/boop';
import { v4 as uuidv4 } from 'uuid';    


const Cap = () => {
    const currentTab = useSelector(state => state.product.currentTab)
    const dispatch = useDispatch();
    const currentCard = data.filter(card => card.tab === currentTab)[0]
    const [toOrder, setToOrder] = React.useState({
        title: currentCard.title,
        count: '',
        type: 'new',
        size: currentCard.size[0],
        grade: 'first',
        id: null
    })
    const {title, humidity, size, material} = currentCard;

    const handleChange = (e) => {
        const {value} = e.target;
        setToOrder({...toOrder, count: value})
    }

    const images = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "cap"}}) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, height: 430)
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
        const newItem = {...toOrder, id: uuidv4()}
        dispatch(addToOrder(newItem))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        addProductToOrder()
    }
    return (
        <>
            <form className={style.card_left} onSubmit={onSubmit}>
                <div className={style.card_descr}>
                    <h3 className={style.card_title}>{title}</h3>
                    <p>Материал: {material}</p>
                    <p>Влажность: {humidity}</p>
                    <div className={style.size}>
                        {size.map((el, i) =>
                            <button
                                className={toOrder.size === el ? style.size_btn_active : style.size_btn}
                                onClick={() => setToOrder({ ...toOrder, size: size[i] })}
                                key={i}
                            >
                                {size[i]}
                            </button>)}
                    </div>
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
                            className={toOrder.type === 'used' ? style.modif_btn_active : style.modif_btn}
                            onClick={() => setToOrder({ ...toOrder, type: 'used' })}
                        >
                            Б/У
                        </button>
                        <button
                            className={toOrder.type === 'new' ? style.modif_btn_active : style.modif_btn}
                            onClick={() => setToOrder({ ...toOrder, type: 'new' })}
                        >
                            Новая
                        </button>
                    </div>
                </div>
                <div className={style.value}>
                    <p>Количество:</p>
                    <input 
                    type="text" 
                    className={style.value_input} 
                    value={toOrder.count} 
                    onChange={handleChange}
                    name='count'
                    placeholder='0'
                    pattern="^[ 0-9]+$"
                    required
                    />
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
                                type='submit'
                            >
                                В корзину
                            </button>
                        </Boop>
                    )
                }
            </form>
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

export default Cap