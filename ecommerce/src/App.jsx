import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./customer/components/navbar/Navbar";
import HomePage from "./customer/pages/homePage/HomePage";
import Product from "./customer/components/product/Product";
import ProductDetail from "./customer/components/productDetail/ProductDetail";
import Footer from "./customer/components/footer/Footer";
import Cart from "./customer/components/cart/Cart";
import CheckOut from "./customer/components/checkOut/CheckOut";
import Order from "./customer/components/order/Order";
import OrderDetails from "./customer/components/order/OrderDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        {/* <div>
          <HomePage />
        </div>
        <div>
          <Product />
        </div> */}
        {/* <div>
          <ProductDetail />
        </div> */}
        <div>
          {/* <Cart /> */}
          {/* <CheckOut /> */}
          {/* <Order /> */}
          <OrderDetails />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
