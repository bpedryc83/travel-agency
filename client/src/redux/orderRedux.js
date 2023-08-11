import { loadOrderDataFromLS } from "./orderThunks";

//selectors
export const getTempOrderItems = state => state.order;

// actions
export const initializeOrder = () => {
  return (dispatch) => {
    const tempOrder = loadOrderDataFromLS();
    dispatch({ type: 'INITIALIZE_TEMP_ORDER', payload: tempOrder });
  };
};

export const addTempOrder = (tempOrder) => {
  return {
    type: 'ADD_TEMP_ORDER_REDUX',
    payload: tempOrder ,
  };
};


const initialOrderState = [];

export default function reducer (state = initialOrderState, action = {}) {
  switch (action.type) {
    case 'INITIALIZE_TEMP_ORDER':
      return action.payload;
    case 'ADD_TEMP_ORDER_REDUX': 
      return action.payload;
    default:
      return state;
  }
};
