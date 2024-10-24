const CountReducer = (state, action) => {
  const currentProductIndex = action.payload;
  switch (action.type) {
    case "count/products/INCREASE":
      const updatedProducts = state.products.map((product, index) =>
        index === currentProductIndex
          ? { ...product, count: product.count === 0 ? 0 : product.count - 1 }
          : product
      );
      console.log("DECREASE_COUNT:", updatedProducts);
      return state.products.map((product, index) =>
        index === currentProductIndex
          ? { ...product, count: product.count + 1 }
          : product
      );

    case "count/products/DECREASE":
      return state.products.map((product, index) =>
        index === currentProductIndex
          ? { ...product, count: product.count === 0 ? 0 : product.count - 1 }
          : product
      );
    default:
      return state.products;
  }
};

export default CountReducer;
