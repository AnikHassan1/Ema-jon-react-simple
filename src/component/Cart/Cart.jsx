import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
//    const cart=props.cart;
// console.log(cart);

let total=0;
let Shipping=0;
let quantity=0;
for(const product of cart){
    product.quantity=product.quantity || 1;
    total=total + product.price*product.quantity;
    Shipping=Shipping+product.shipping*product.quantity;
    quantity=quantity+ product.quantity;
}
const tax=total*7/100;
const GrandTotal=total+Shipping+tax;
// console.log(cart);
    return (
        <div className='Cart'>
            <h1>Order Summary</h1>
            <p>Select Item : {cart.length}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping :{Shipping} </p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${GrandTotal}</h4>
        </div>
    );
};

export default Cart;