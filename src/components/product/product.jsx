import * as React from 'react';
import ProductCard from '../product-card/product-card';
import ProductTabs from '../product-tabs/product-tabs';
import * as style from './product.module.css';

const Product = () => {
    return (
        <div className={style.product}>
            <ProductTabs/>
            <ProductCard/>
        </div>
    )
}

export default Product