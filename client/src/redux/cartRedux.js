import { loadCartFromLS } from "./cartThunks";

//selectors
export const getCartItems = state => state.cart;

// actions
export const initializeCart = () => {
  return (dispatch) => {
    const cart = loadCartFromLS();
    dispatch({ type: 'INITIALIZE_CART', payload: cart });
  };
};

export const addToCartRedux = (tripId, peopleAmount) => {
  return {
    type: 'ADD_TO_CART_REDUX',
    payload: { tripId, peopleAmount },
  };
};

export const updateCartItem = (tripId, newPeopleAmount) => {
  return {
    type: 'UPDATE_CART_ITEM',
    payload: { tripId, newPeopleAmount },
  };
};

export const removeFromCart = (tripId) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: tripId,
  };
};

const initialCartState = [];

export default function reducer (state = initialCartState, action = {}) {
  switch (action.type) {
    case 'INITIALIZE_CART':
      return action.payload;
    case 'ADD_TO_CART_REDUX':
      return [...state, action.payload]
    case 'UPDATE_CART_ITEM':
      return state.map(item =>
        item.tripId === action.payload.tripId
          ? { tripId: item.tripId, peopleAmount: action.payload.newPeopleAmount }
          : item
      );
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.tripId !== action.payload);

    default:
      return state;
  }
};
