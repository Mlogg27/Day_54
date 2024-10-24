const getProducts = (state) => state.products;
const getProduct = (state, index) => {
  return state[index];
};

export { getProducts, getProduct };
