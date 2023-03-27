import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    // console.log(props.product);
    const {img,price,seller,name,ratings}=props.product;
  const handleCart=props.HandleButton;
    return (
        <div className='Product'>
           <img src={img} alt="" />
           <h6 className='Product-name'>{name}</h6>
           <div className="product-info">
           <p>Price: ${price}</p>
           <p>Manufacture: {seller}</p>
           <p>Rating: {ratings} Starts</p>
           </div>
            <button onClick={()=>handleCart(props.product)} className='btn-Cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;