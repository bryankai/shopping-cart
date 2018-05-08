// 1. import React
import React from 'react'

// 2. Create a function
const CartFooter = ({copyright}) => {
  // 3. Return some JSX
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">&copy; {copyright}</a>
    </nav>
  )
}



// 4. export
export default CartFooter
