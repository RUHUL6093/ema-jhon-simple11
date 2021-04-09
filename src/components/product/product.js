import React from "react";
import "./product.css";

const Product = (props) => {
  return (
    <div className="product">
      <div>
        <img src={props.product.img} alt="" />
      </div>
      <div>
        <h5 className="product-name">{props.product.name}</h5>.
        <p>
          <small>by:{props.product.seller}</small>
        </p>
        <p>${props.product.price}</p>
        <br />
        <p>{props.product.stock}</p>
      </div>
    </div>
  );
};
export default Product;
