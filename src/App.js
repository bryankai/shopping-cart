import React, { Component } from 'react';
import CartHeader from './components/CartHeader.js'
import CartItems from './components/CartItems.js'
import CartFooter from './components/CartFooter.js'

class App extends Component {
  render() {
    const cartItemData = [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]

    return (
      <div className="App">
        <CartHeader />
        <CartItems cartItemData={cartItemData} />
        <CartFooter copyright="2019"/>
      </div>
    );
  }
}

export default App;
