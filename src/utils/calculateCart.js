export const calculateCart = (state) => {

  const count = state.cart.reduce((total, item) => total + item.quantity, 0);

  const totalAmount = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const cartLength = state.cart.length;
  state.cartCount = count;
  state.cartItemsCount = cartLength;
  state.totalPrice = totalAmount;
  state.cartTotalAmount = totalAmount;
  state.cartTotalSum = totalAmount;
};
