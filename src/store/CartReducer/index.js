const CartReducer = (state, action) => {
  switch (action.type) {
    case "cart/ADD":
      const newProduct = action.payload.product;

      const existingProductIndex = state.cart.findIndex(
        (product) => product._id === newProduct._id
      );

      if (existingProductIndex !== -1) {
        const updatedCart = state.cart.map((product, index) => {
          if (index === existingProductIndex) {
            return {
              ...product,
              count: product.count + newProduct.count,
            };
          }
          return product;
        });
        return updatedCart;
      } else {
        return [...state.cart, newProduct];
      }

    case "cart/remove":
      const newCart = state.cart.filter((item) => item._id !== action.payload);
      return newCart;

    default:
      return state.cart;
  }
};

export default CartReducer;
