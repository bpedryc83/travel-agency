import { addTempOrder } from "./orderRedux";

export const saveOrderDataInLS = (unconfirmedOrder) => {
  localStorage.setItem('order', JSON.stringify(unconfirmedOrder));
};

export const loadOrderDataFromLS = () => {
  const orderData = localStorage.getItem('order');
  return orderData ? JSON.parse(orderData) : [];
};

export const saveTempOrder = (tempOrder) => {
  return (dispatch, getState) => {
    dispatch(addTempOrder(tempOrder));
    const unconfirmedOrder = getState().order;
    saveOrderDataInLS(unconfirmedOrder);
  };
};