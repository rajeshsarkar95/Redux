// src/App.js
import Product from './componentes/Product';
import Cart from './componentes/Card';
import { useState } from 'react';

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
];

function App() {
  const [visible,setVisible] = useState(false)

  const handleshow = () =>{
    setVisible(true)
  }

  const handlehide = () =>{
    setVisible(false)
  }
  return (
    <div className="App">
      <h1>Redux Toolkit Cart Example</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <button onClick={handleshow}>show</button>
      <button onClick={handlehide}>Hide</button>
      {visible && <Cart />}

      
    </div>
  );
}

export default App;
