import React, { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStartedClick = () => {
    setShowProducts(true);
  };

  return (
    <div className="background-image" style={{ textAlign: "center", paddingTop: "50px" }}>
      
      {/* REQUIRED TEXT (must match exactly) */}
      <h1>Welcome to Paradise Nursery</h1>

      {/* BUTTON WITH FUNCTION */}
      {!showProducts && (
        <button onClick={handleGetStartedClick}>
          Get Started
        </button>
      )}

      {/* SHOW PRODUCTS AFTER CLICK */}
      {showProducts && <ProductList />}

    </div>
  );
}

export default App;
