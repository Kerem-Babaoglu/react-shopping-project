import React from 'react'
import "./Cart.css"

const Cart = ({cartItems,handleAddProduct, handleRemoveProduct, handleCartClearance}) => {

  const mystyle = {
    objectFit: "cover",
    maxWidth: "280px",
    minHeight: "200px",
    display:"block",
    witdth:"100%",
    backgroundPosition:"center",

};
const totalPrice = cartItems.reduce(
  (totalPrice, item) => totalPrice + (item.price * item.quantity),
  0
 );

console.log('total:', totalPrice)
  return (
    <div className='cart-items'>
        <h2 className='cart-items-header'>Cart Items</h2>
        <div className='clear-cart'>
          {cartItems  && (
            <button className='clear-cart-button' onClick={handleCartClearance}>Clear Cart</button>
          ) }
        </div>

        {cartItems.length === 0 && (
          <div className='cart-items-empty'> No items are added.</div>
        )}

        <div>
          {cartItems && cartItems.map((item) => (
            
            <div key={item.id} className="cart-items-list">
              <img
              style={mystyle}
              className='cart-item-image'
              src={item.image}
              alt={item.name} 
              />
                
              
              <div className='cart-items-name'>{item.name}</div>
              <div className='cart-items-function'>
                <button className='cart-items-add' onClick={() => handleAddProduct(item)}>+</button>
                <button className='cart-items-remove' onClick={() => handleRemoveProduct(item)}>-</button>
              </div>

              <div className='cart-items-price'>
                {item.quantity} * ${item.price}

              </div>
              
            </div>
          ))}
        </div>

        <div className='cart-items-total-price-name'>
          Total price : {totalPrice}
          <div className='cart-items-total-price'>

          </div>
        </div>


       
    </div>
  );
};

export default Cart