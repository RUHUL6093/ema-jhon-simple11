import React, { useState } from "react";
import fakedata from "../../fakedata";
import "./shop.css";
import Product from "../product/product";

const Shop = () => {
  const first10 = fakedata.slice(0, 10);
  const [products, setProducts] = useState(first10);
  return (
    <div class="shop-container">
      <div class="product-container">
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
      <div class="cart-container">
        <h3>This is cart </h3>
      </div>
    </div>
  );
};
export default Shop;
