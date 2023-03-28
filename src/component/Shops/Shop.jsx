import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shops.css'
const Shop = () => {
    const [Products, setProducts] = useState([]);
    const [Card, setCart] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const StrodCart = getShoppingCart();
        const saveCart=[];
        for (const id in StrodCart) {
            const addProduct = Products.find(product => product.id === id)
            if (addProduct) {
                const quantity = StrodCart[id];
                addProduct.quantity = quantity
                saveCart.push(addProduct);
            }

            console.log(addProduct);
        }
        setCart(saveCart);
    }, [Products])
    const handleButton = (props) => {
        // console.log(props);
        const newCart = [...Card, props];
        setCart(newCart);
        addToDb(props.id);
    }
    return (
        <div className='Shops-Container'>
            <div className="product-Containar">
                {
                    Products.map(product => <Product
                        key={Product.id} product={product} HandleButton={handleButton}
                    ></Product>)
                }
            </div>
            <div className="Cart-Containar">
                <Cart cart={Card}></Cart>
            </div>
        </div>
    );
};

export default Shop;