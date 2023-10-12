import { useStateValue } from "../StateProvider";
import CartDetailsComponent from "./CartDetailsComponent";

const CartComponent = () => {
  const [{ cart }, dispatch] = useStateValue();
  // console.log("cartttttt", cart);
  // const removeFromCart = (id) => {
  //   dispatch({
  //     type: "REMOVE_FROM_CART",
  //     id: id,
  //   });
  // console.log("ID", id);
  // console.log("after remove cart", cart);
  // };

  return (
    <div>
      {cart.map((product) => (
        // <div key={product._id}>
        //   <img className="pro-img" alt="Loading.." src={product.imageUrl}></img>
        //   <h3>{product.name}</h3>
        //   <h5>{product.description}</h5>
        //   <h5>Price : {product.price}</h5>
        //   <h5>Special Price: {product.discountAmount}</h5>
        //   <h5>Avg Rating: {product.rating}</h5>
        //   <button
        //     onClick={() => {
        //       removeFromCart(product._id);
        //     }}
        //   >
        //     Remove
        //   </button>
        // </div>
        <CartDetailsComponent key={product._id} products={product} />
      ))}
    </div>
  );
};

export default CartComponent;
