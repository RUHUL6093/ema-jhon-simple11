import React from "react";

const Product = (props) => {
  return (
    <div>
      <h3> this is product </h3>
      <h5>{props.product.name}</h5>.
    </div>
  );
};
export default Product;
