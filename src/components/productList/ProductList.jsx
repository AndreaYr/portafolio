import React from 'react';
import './productList.css';
import Product from '../product/Product';
import { products } from '../../data';

const ProductList = () => {
  return (
    <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'>Mis Proyectos</h1>
            <p className='pl-desc'>Estos son algunos de mis proyectos realizados
            </p>
        </div>
        <div className='pl-list'>

            {products.map((item) => (
                <Product 
                key={item.id}
                title={item.id}
                img={item.img}
                link={item.link}
                />

            ))}
           
        </div>
    </div>
  )
}

export default ProductList