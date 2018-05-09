// 1. import React
import React from 'react'
import CartItem from './CartItem.js'

// 2. Create a function
const CartItems = ({cartItemData}) => {
  console.log(cartItemData)
  const cartItemList = cartItemData.map(cartItem => {
    return <CartItem key={cartItem.id} {...cartItem} />
  })

  return (
    <div className="container">
      <h1>Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        {cartItemList}
      </div>
    </div>
  )
}



// 4. export
export default CartItems
