import React, { useState } from "react";

const plants = [
  { id: 1, name: "Snake Plant", price: 200, category: "Indoor", img: "/images/p1.jpg" },
  { id: 2, name: "Peace Lily", price: 250, category: "Indoor", img: "/images/p2.jpg" },
  { id: 3, name: "Aloe Vera", price: 150, category: "Medicinal", img: "/images/p3.jpg" },
  { id: 4, name: "Cactus", price: 180, category: "Succulent", img: "/images/p4.jpg" },
  { id: 5, name: "Money Plant", price: 220, category: "Indoor", img: "/images/p5.jpg" },
  { id: 6, name: "Bonsai", price: 500, category: "Decorative", img: "/images/p6.jpg" }
];

function ProductList() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart([...cart, plant.id]);
  };

  return (
    <div style={{ padding: "20px" }}>

      {/* Navbar */}
      <nav>
        <h3>🌿 Paradise Nursery</h3>
        <p>Cart: {cart.length}</p>
      </nav>

      <h2>Plant Collection</h2>

      {plants.map((p) => (
        <div key={p.id} style={{ marginBottom: "20px" }}>
          <img src={p.img} alt="" width="100" />
          <h4>{p.name}</h4>
          <p>Category: {p.category}</p>
          <p>₹{p.price}</p>

          <button
            disabled={cart.includes(p.id)}
            onClick={() => addToCart(p)}
          >
            {cart.includes(p.id) ? "Added" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
