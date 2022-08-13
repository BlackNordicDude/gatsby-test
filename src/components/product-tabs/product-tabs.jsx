import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTab } from '../../store/reducer';
import * as style from '../product-tabs/product-tabs.module.css';

const ProductTabs = () => {
    const currentTab = useSelector(state => state.product.currentTab)
    const dispatch = useDispatch();
    return (
        <div className={style.tabs}>
            <div 
            className={currentTab === 'pallet' ? style.tab_active : style.tab}
            onClick={() => dispatch(changeTab('pallet'))}
            >Поддоны
            </div>
            <div 
            className={currentTab === 'flooring' ? style.tab_active : style.tab}
            onClick={() => dispatch(changeTab('flooring'))}
            >Настилы
            </div>
            <div 
            className={currentTab === 'cap' ? style.tab_active : style.tab}
            onClick={() => dispatch(changeTab('cap'))}
            >Крышки
            </div>
        </div>
    )
}

export default ProductTabs