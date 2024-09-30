// src/components/Cart.js
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../features/Card/CounterSlice';

export default function Cart(){
  const { cartItems, totalQuantity, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <h4>{item.name}</h4>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${item.totalPrice}</p>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div>
            <h4>Total Items: {totalQuantity}</h4>
            <h4>Total Amount: ${totalAmount.toFixed(2)}</h4>
            <button onClick={handleClearCart}>Clear Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};


