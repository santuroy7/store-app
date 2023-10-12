import React from "react";
import { useStateValue } from "../StateProvider";

const ProductCard = ({ proData }) => {
  const { name, price, rating, description, discountAmount, imageUrl } =
    proData;
  const [{ user }, dispatch] = useStateValue();
  function myFun(product) {
    dispatch({
      type: "ADD_TO_CART",
      item: product,
    });
  }
  return (
    <div className="pro-card">
      <img className="pro-img" alt="Loading.." src={imageUrl}></img>
      <h3>{name}</h3>
      <h5>{description}</h5>
      <h5>Price : {price}</h5>
      <h5>Special Price: {discountAmount}</h5>
      <h5>Avg Rating: {rating}</h5>
      <button onClick={() => myFun(proData)} className="add-to-cart-btn">
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
