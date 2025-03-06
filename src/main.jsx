import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // Import CartProvider

// REMOVE HomePage import
// import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import OrderPage from "./pages/OrderPage";

// NEW: Import or create a LoginPage
import LoginPage from "./pages/LoginPage"; // We'll create a placeholder

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <CartProvider> {/* Wrap the entire app with CartProvider */}
            <BrowserRouter>
                <Routes>
                    {/* Default route now points to MenuPage */}
                    <Route path="/" element={<MenuPage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/order" element={<OrderPage />} />
                    {/* NEW: Login route */}
                    <Route path="/login" element={<LoginPage />} />

                </Routes>
            </BrowserRouter>
        </CartProvider>
    </React.StrictMode>
);
