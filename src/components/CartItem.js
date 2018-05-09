// 1. import React
import React from 'react'

// 2. Create a function
const CartItem = ({...cartItem}) => {
  console.log(cartItem);
  // 3. Return some JSX
  return (
    <div className="collection-item list-group-item">
      <div className="row">
        <div className="col-md-8">{cartItem.product.name} </div>
        <div className="col-md-2">${cartItem.product.priceInCents/100}</div>
        <div className="col-md-2">{cartItem.quantity}</div>
      </div>
    </div>
  )
}



// 4. export
export default CartItem
