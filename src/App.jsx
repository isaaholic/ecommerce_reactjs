import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./register/Register";
import Login from "./login/Login";
import Home from "./home/Home";
import Product from "./product/Product";
import Cart from "./cart/Cart";
import RequireAuth from "./auth/RequireAuth";

function App() {
  return (
    <div className="font-body">
      <Router>
        <Routes>
          <Route path="/" element={<RequireAuth />}>
            <Route path="" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
