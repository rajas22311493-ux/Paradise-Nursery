import React from "react";

function CartItem({ cart, setCart }) {

  // Increase quantity
  const increase = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  // Decrease quantity
  const decrease = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  // Delete item
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Total calculation
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>

      {/* TOTAL */}
      <h3>Total Amount: ₹{totalAmount}</h3>

      {/* CART ITEMS */}
      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "15px" }}>
          
          {/* IMAGE */}
          <img src={item.img} alt={item.name} width="80" />

          <h4>{item.name}</h4>
          <p>Price: ₹{item.price}</p>
          <p>Quantity: {item.quantity}</p>

          {/* BUTTONS */}
          <button onClick={() => increase(item.id)}>+</button>
          <button onClick={() => decrease(item.id)}>-</button>
          <button onClick={() => removeItem(item.id)}>Delete</button>
        </div>
      ))}

      {/* EXTRA BUTTONS */}
      <button>Checkout (Coming Soon)</button>
      <button>Continue Shopping</button>
    </div>
  );
}

export default CartItem;
