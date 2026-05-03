import React from "react";

function CartItem({ cart, setCart }) {

  const increase = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrease = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const remove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <h3>Total: ₹{total}</h3>

      {cart.map(item => (
        <div key={item.id}>
          <img src={item.img} width="80" />
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>
          <p>Qty: {item.quantity}</p>

          <button onClick={() => increase(item.id)}>+</button>
          <button onClick={() => decrease(item.id)}>-</button>
          <button onClick={() => remove(item.id)}>Delete</button>
        </div>
      ))}

      <button>Checkout (Coming Soon)</button>
      <button>Continue Shopping</button>
    </div>
  );
}

export default CartItem;
