export const calculateTotalPrice = (cartItemsTripData) => {
  return cartItemsTripData.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.peopleAmount;
  }, 0);
};