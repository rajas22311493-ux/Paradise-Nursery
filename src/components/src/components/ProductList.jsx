import React, { useState } from "react";

const plantData = {
  Indoor: [
    { id: 1, name: "Snake Plant", price: 200, img: "/images/p1.jpg" },
    { id: 2, name: "Peace Lily", price: 250, img: "/images/p2.jpg" }
  ],
  Medicinal: [
    { id: 3, name: "Aloe Vera", price: 150, img: "/images/p3.jpg" },
    { id: 4, name: "Tulsi", price: 180, img: "/images/p4.jpg" }
  ],
  Decorative: [
    { id: 5, name: "Money Plant", price: 220, img: "/images/p5.jpg" },
    { id: 6, name: "Bonsai", price: 500, img: "/images/p6.jpg" }
  ]
};

function ProductList() {
  const [cart, setCart] = useState([]);
  const [addedItems, setAddedItems] = useState([]);

  const addToCart = (plant) => {
    setCart([...cart, plant]);
    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <div style={{ padding: "20px" }}>

      {/* ✅ NAVBAR */}
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>🌿 Paradise Nursery</h2>
        <h3>Cart: {cart.length}</h3>
      </nav>

      {/* ✅ CATEGORY DISPLAY */}
      {Object.keys(plantData).map((category) => (
        <div key={category}>
          <h2>{category} Plants</h2>

          {plantData[category].map((plant) => (
            <div key={plant.id} style={{ marginBottom: "15px" }}>
              <img src={plant.img} alt="" width="100" />
              <h4>{plant.name}</h4>
              <p>₹{plant.price}</p>

              {/* ✅ BUTTON LOGIC */}
              <button
                disabled={addedItems.includes(plant.id)}
                onClick={() => addToCart(plant)}
              >
                {addedItems.includes(plant.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
