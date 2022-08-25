import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToOrder, changeType } from '../../store/reducer';
import { data } from '../../store/data'
import * as style from '../pallet/pallet.module.css';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Boop from '../boop/boop';
import { v4 as uuidv4 } from 'uuid';    
import { useState } from 'react';

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
            count: '',
            type: 'new',
            sizeR: cardsOfCurrentType[0].size[0],
            size: '',
            height: 0,
            width: 0,
            grade: 'first',
            id: null
        })
    const [checkbox, setCheckbox] = useState(false);
    const handlerCheckBox = () => {
        setCheckbox(!checkbox);
    }
    const currentCard = toOrder.grade === 'first' ? cardsOfCurrentType[0] : cardsOfCurrentType[1];

    const {title, humidity, size, material, type} = currentCard;

    const handleChange = (e) => {
        const {value} = e.target;
        setToOrder({...toOrder, count: value});
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
    
    const handleChangeHeight = (e) => {
        const {value} = e.target;
            setToOrder({...toOrder, height: value})
    }
    const handleChangeWidth = (e) => {
        const {value} = e.target;
            setToOrder({...toOrder, width: value})
    }

    const addProductToOrder = () => {
        let newItem = {...toOrder, id: uuidv4()}
        newItem = checkbox ? {...newItem, size: `${toOrder.height}x${toOrder.width}`} : {...newItem, size: toOrder.sizeR}
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
                        {checkbox ? (
                                <div className={style.size_inputs}>
                                    <div className={style.size_inputs_item}>
                                        <input
                                            className={style.size_input}
                                            type="text"
                                            placeholder='Высота, мм'
                                            value={toOrder.size[0]}
                                            name='height'
                                            onChange={handleChangeHeight}
                                            pattern="^[ 0-9]+$"
                                            required
                                        />
                                    </div>
                                    x
                                    <div className={style.size_inputs_item}>
                                        <input
                                            className={style.size_input}
                                            type="text"
                                            placeholder='Ширина, мм'
                                            value={toOrder.size[1]}
                                            name='width'
                                            onChange={handleChangeWidth}
                                            pattern="^[ 0-9]+$"
                                            required
                                        />
                                    </div>
                                </div>
                                ) : (
                                    <div className={style.size_btns}>
                                        {
                                           size.map((el, i) => <button
                                           className={toOrder.sizeR === el ? style.size_btn_active : style.size_btn}
                                           onClick={() => setToOrder({ ...toOrder, sizeR: size[i] })}
                                           key={i}
                                       >
                                           {size[i]}
                                       </button>)  
                                        }
                                    </div>
                                )  
                        }   
                        <div className={checkbox ? style.size_btn_active : style.size_btn}>
                            Свой размер <input 
                            type="checkbox" 
                            name="ownSize" 
                            id="0" 
                            value={checkbox} 
                            onChange={handlerCheckBox}
                            />
                        </div>
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

