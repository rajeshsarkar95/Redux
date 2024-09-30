/* eslint-disable react/prop-types */
// src/components/Product.js
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/Card/CounterSlice';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch the addToCart action
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
