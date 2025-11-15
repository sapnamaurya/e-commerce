import React from "react";
import HomePage from "../../pages/homePage/HomePage";
import Cart from "../cart/Cart";
import Navigation from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Product from "../product/Product";
import { Route, Routes } from "react-router";
import ProductDetail from "../productDetail/ProductDetail";
import CheckOut from "../checkOut/CheckOut";
import Order from "../order/Order";
import OrderDetails from "../order/OrderDetails";
// import CheckOut from "../checkOut/CheckOut";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />

   
    
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;
