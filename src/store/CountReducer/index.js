const CountReducer = (state, action) => {
  const currentProductIndex = action.payload;
  switch (action.type) {
    case "count/products/INCREASE":
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
    case "cart/ADD":
      const idx = action.payload.index;
      return state.products.map((product, index) =>
        index === idx ? { ...product, count: 0 } : product
      );
    default:
      return state.products;
  }
};

export default CountReducer;
