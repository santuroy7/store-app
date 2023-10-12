export const initialState = {
  cart: [],
  user: null,
};

// Selector
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(
        (item) => item._id === action.id //this func returns -1 if condition didn't matched
      );
      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1); // this func removes 1 element which is present on index
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        cart: newCart,
      };

    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
