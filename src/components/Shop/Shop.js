import React, { useState } from "react";
import fakedata from "../../fakedata";

const Shop = () => {
  const first10 = fakedata.slice(0, 10);
  const [products, setProducts] = useState(first10);
  return (
    <div class="shop-container">
      <div class="product-container">
        <ul>
          {products.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
      </div>
      <div class="cart-container">
        <h3>This is cart </h3>
      </div>
    </div>
  );
};
export default Shop;
