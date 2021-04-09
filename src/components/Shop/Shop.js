import React, { useState } from "react";
import fakedata from "../../fakedata";
import "./shop.css";
import Product from "../product/product";

const Shop = () => {
  const first10 = fakedata.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  const handleAddProduct = () => {
    const newChart = [...cart];
    setCart(newChart);
  };
  return (
    <div class="shop-container">
      <div class="product-container">
        {products.map((product) => (
          <Product
            handleAddProduct={handleAddProduct}
            product={product}
          ></Product>
        ))}
      </div>
      <div class="cart-container">
        <h3>This is cart </h3>
        <h5>order summery </h5>
      </div>
    </div>
  );
};
export default Shop;
