import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shops.css'
const Shop = () => {
    const [Products,setProducts]=useState([]);
    const [Card,setCart]=useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handleButton =(props)=>{
        // console.log(props);
        const newCart=[...Card,props];
        setCart(newCart)
     }
    return (
        <div className='Shops-Container'>
            <div className="product-Containar">
                  {
                    Products.map(product=><Product
                    key={Product.id} product={product} HandleButton={handleButton}
                    ></Product>)
                  }
            </div>
            <div className="Cart-Containar">
                <h1>Order Summary</h1>
                <p>Select Item:{Card.length}</p>
            </div>
        </div>
    );
};

export default Shop;