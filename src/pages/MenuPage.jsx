import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MenuPage.css";

const MenuPage = () => {
  const navigate = useNavigate();

  // Sample food items (7 items for better layout)
  const [menuItems] = useState([
    { id: 1, name: "Pizza Margherita", description: "Classic pizza with tomato sauce, mozzarella, and basil", price: 10.0 },
    { id: 2, name: "Cheeseburger", description: "Juicy burger with cheese, lettuce, tomato, and pickles", price: 8.0 },
    { id: 3, name: "Caesar Salad", description: "Romaine lettuce with Caesar dressing, croutons, and parmesan cheese", price: 6.0 },
    { id: 4, name: "Spaghetti Bolognese", description: "Pasta with rich beef sauce and parmesan cheese", price: 12.5 },
    { id: 5, name: "Grilled Chicken Sandwich", description: "Grilled chicken, lettuce, tomato, and garlic mayo on ciabatta", price: 9.5 },
    { id: 6, name: "Mushroom Risotto", description: "Creamy risotto with wild mushrooms and truffle oil", price: 13.0 },
    { id: 7, name: "Veggie Wrap", description: "Spinach wrap with hummus, grilled veggies, and feta cheese", price: 7.99 }
  ]);

  // Load cart items from sessionStorage
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Function to add an item to the cart (increase quantity if duplicate)
  const handleAddToCart = (item) => {
    let storedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const existingItemIndex = storedCart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      storedCart[existingItemIndex].quantity += 1;
    } else {
      storedCart.push({ ...item, quantity: 1 });
    }
    sessionStorage.setItem("cart", JSON.stringify(storedCart));
    setCart(storedCart);
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

  // Navigate to Order Page
  const goToOrderPage = () => {
    navigate("/order");
  };

  return (
      <div className="menu-page">
        {/* Menu Section */}
        <div className="menu-container">
          <h1>Our Menu</h1>
          {/* Grid layout for menu items */}
          <div className="menu-list">
            {menuItems.map((item) => (
                <div key={item.id} className="menu-item">
                  <div className="menu-info">
                    <span className="food-name">{item.name}</span>
                    <span className="food-description">{item.description}</span>
                    <span className="food-price">${item.price.toFixed(2)}</span>
                  </div>
                  <button onClick={() => handleAddToCart(item)} className="add-btn">
                    Add to Order
                  </button>
                </div>
            ))}
          </div>
        </div>

        {/* Cart Section (Fixed to the Right) */}
        <div className="cart-sidebar">
          <h2>🛒 Your Cart</h2>
          {cart.length === 0 ? (
              <p>Your cart is empty.</p>
          ) : (
              <div className="cart-items">
                {cart.map((item, index) => (
                    <div key={index} className="cart-item">
                <span className="cart-item-name">
                  {item.name} (x{item.quantity})
                </span>
                      <span className="cart-item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                      {/* Minus Button */}
                      <button className="minus-btn" onClick={() => handleRemoveOne(item.id)}>
                        -
                      </button>
                    </div>
                ))}
              </div>
          )}
          <button onClick={goToOrderPage} className="go-to-order-btn">
            Go to Cart ({cart.length} items)
          </button>
        </div>
      </div>
  );
};

export default MenuPage;
