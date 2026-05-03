import React from "react";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <h1>Paradise Nursery 🌿</h1>
      <div style={{ textAlign: "center" }}>
        <button>Get Started</button>
      </div>
      <ProductList />
    </div>
  );
}

export default App;
