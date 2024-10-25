const getProducts = (state) => state.products;
const getProduct = (state, index) => {
  return state[index];
};
const getCart = (state) => {
  return state.cart;
};

export { getProducts, getProduct, getCart };
