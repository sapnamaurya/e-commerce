import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./customer/components/navbar/Navbar";
import HomePage from "./customer/pages/homePage/HomePage";
import Product from "./customer/components/product/Product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <div>
          <HomePage />
        </div>
        <div>
          <Product />
        </div>
      </div>
    </>
  );
}

export default App;
