import React, { useState, useEffect } from "react";
import "./OrderPage.css";

const OrderPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load the cart from sessionStorage when the page loads
    const storedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Clear Order Button Handler
  const handleClearCart = () => {
    sessionStorage.removeItem("cart");
    setCart([]);
  };

  // Checkout Button Handler
  const handleCheckout = () => {
    alert("Proceeding to checkout!");
    // In a real app, you'd navigate to a payment page or handle payment logic
  };

  // Function to remove or decrement an item in the cart
  const handleRemoveOne = (itemId) => {
    let storedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const index = storedCart.findIndex((cartItem) => cartItem.id === itemId);

    if (index !== -1) {
      if (storedCart[index].quantity > 1) {
        storedCart[index].quantity -= 1;
      } else {
        storedCart.splice(index, 1);
      }
      sessionStorage.setItem("cart", JSON.stringify(storedCart));
      setCart(storedCart);
    }
  };

  return (
    <div className="order-container">
      <h1>Your Order</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="order-list">
            {cart.map((item, index) => (
              <div key={index} className="order-item">
                <span className="food-name">
                  {item.name} (x{item.quantity || 1})
                </span>
                <span className="food-price">
                  ${(item.price * (item.quantity || 1)).toFixed(2)}
                </span>
                {/* Minus Button */}
                <button className="minus-btn" onClick={() => handleRemoveOne(item.id)}>
                  -
                </button>
              </div>
            ))}
          </div>
          <div className="button-group">
            <button className="clear-order-btn" onClick={handleClearCart}>
              Clear Order
            </button>
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderPage;
