import { useStateValue } from "../StateProvider";

const CartDetailsComponent = ({ products }) => {
  const { name, imageUrl, description, price, discountAmount, rating, _id } =
    products;
  //   console.log("fghjkl", products);
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
    // console.log("ID", id);
    // console.log("after remove cart", cart);
  };
  //   if (products === null) {
  //     return <h1>Cart is Empty</h1>;
  //   }
  return (
    <div className="cart-item-container">
      <div className="cart-item-containe-img">
        <img className="cart-item-img" alt="Loading.." src={imageUrl}></img>
      </div>
      <div className="cart-item-container-details">
        <h2>{name}</h2>
        <h5>{description}</h5>
        <h5>Price : {price}</h5>
        <h5>Special Price: {discountAmount}</h5>
        <h5>Avg Rating: {rating}</h5>
        <button
          className="remove-item-btn"
          onClick={() => {
            removeFromCart(_id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default CartDetailsComponent;
