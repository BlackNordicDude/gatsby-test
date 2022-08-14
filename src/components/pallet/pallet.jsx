import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToOrder, changeType } from '../../store/reducer';
import { data } from '../../store/data'
import * as style from '../pallet/pallet.module.css';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Boop from '../boop/boop';
import { v4 as uuidv4 } from 'uuid';    

const Pallet = () => {
    const dispatch = useDispatch();
    const {currentType, currentTab} = useSelector(state => {
       return ({ 
            currentType: state.product.currentType,
            currentTab: state.product.currentTab,
        })
    });
    const cardsOfCurrentType = data.filter(card => (card.tab === currentTab) && (card.type === currentType)) 
    const [toOrder, setToOrder] = React.useState({
            title: cardsOfCurrentType[0].title,
            count: 0,
            type: 'new',
            size: cardsOfCurrentType[0].size[0],
            grade: 'first',
            id: null
        })

    const currentCard = toOrder.grade === 'first' ? cardsOfCurrentType[0] : cardsOfCurrentType[1];

    const {title, humidity, size, material, type} = currentCard;

    const handleChange = (e) => {
        const {value} = e.target;
        setToOrder({...toOrder, count: value})
        console.log(toOrder);
    }

    const images = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "pallets"}}) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, height: 345, width: 550)
            }
            name
          }
        }
      }
    }
  `)
    const imgData = images.allFile.edges.filter(edge => edge.node.name === `${type}_${toOrder.grade}`)[0].node
    const img = getImage(imgData);
   
    const addProductToOrder = () => {
        const newItem = {...toOrder, id: uuidv4()}
        dispatch(addToOrder(newItem))
    }
    return (
        <>
            <div className={style.card_left}>
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
                        {
                            cardsOfCurrentType.length > 1 &&
                            <button
                                className={toOrder.grade === 'second' ? style.modif_btn_active : style.modif_btn}
                                onClick={() => setToOrder({ ...toOrder, grade: 'second' })}
                            >
                                2 сорт
                            </button>}
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
                                onClick={() => addProductToOrder()}
                            >
                                В корзину
                            </button>
                        </Boop>
                    )
                }
            </div>
            <div className={style.card_right}>
                <div className={style.card_types}>
                    <Boop scale={1.05}>
                        <div
                            className={currentType === 'typical' ? style.tab_active : style.tab}
                            onClick={() => dispatch(changeType('typical'))}
                        >Типовой</div>
                    </Boop>
                    <Boop scale={1.05}>
                        <div
                            className={currentType === 'euro' ? style.tab_active : style.tab}
                            onClick={() => dispatch(changeType('euro'))}
                        >Евро</div>
                    </Boop>
                    <Boop scale={1.05}>
                        <div
                            className={currentType === 'light' ? style.tab_active : style.tab}
                            onClick={() => dispatch(changeType('light'))}
                        >Облегченный</div>
                    </Boop>
                    <Boop scale={1.05}>
                        <div
                            className={currentType === 'finn' ? style.tab_active : style.tab}
                            onClick={() => dispatch(changeType('finn'))}
                        >Финский</div>
                    </Boop>
                </div>
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

export default Pallet

