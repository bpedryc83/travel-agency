import { addToCartRedux } from "./cartRedux";
import { updateCartItem } from "./cartRedux";
import { removeFromCart } from "./cartRedux";

const saveCartInLS = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

// const loadCartFromLS = () => {
//   const cartData = localStorage.getItem('cart');
//   return cartData ? JSON.parse(cartData) : [];
// };

// export const initializeCart = () => {
//   return (dispatch) => {
//     const cart = loadCartFromLS();
//     dispatch({ type: 'INITIALIZE_CART', payload: cart });
//   };
// };

// export const saveTripInCart = (tripId, peopleAmount) => {
//   return (dispatch, getState) => {
//     dispatch(addToCartRedux(tripId, peopleAmount));
//     const updatedCart = getState().cart;
//     saveTripInLS(updatedCart);
//   };
// };

export const saveTripInCart = (tripId, peopleAmount) => {
  return (dispatch, getState) => {
    const cartItem = getState().cart.find(item => item.tripId === tripId);

    if (cartItem) {
      const newPeopleAmount = peopleAmount;
      dispatch(updateCartItem(tripId, newPeopleAmount));
    } else {
      dispatch(addToCartRedux(tripId, peopleAmount));
    }

    const updatedCart = getState().cart;
    saveCartInLS(updatedCart);
  };
};

export const deleteTripFromCart = (tripId) => {
  return (dispatch, getState) => {
    dispatch(removeFromCart(tripId));
    const updatedCart = getState().cart;
    saveCartInLS(updatedCart);
  };
};
