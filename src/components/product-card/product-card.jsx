import * as React from 'react';
import * as style from '../product-card/product-card.module.css';
import {useSelector} from 'react-redux';
import Pallet from '../pallet/pallet';
import Cap from '../cap/cap';
import Flooring from '../flooring/flooring';

const ProductCard = () => {
    const currentTab = useSelector(state => state.product.currentTab);
     
    return (
        <div className={style.card}>
            {
                currentTab === 'pallet' ? 
                <Pallet /> : currentTab === 'cap' ? 
                <Cap /> : 
                <Flooring />
            }
        </div>
    )
}

export default ProductCard