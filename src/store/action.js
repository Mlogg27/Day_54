const onCountIncrease = (payload = 0) => {
  return {
    type: "count/products/INCREASE",
    payload: payload,
  };
};
const onCountDecrease = (payload = 0) => {
  return {
    type: "count/products/DECREASE",
    payload: payload,
  };
};
const onAddToCart = (payload = 0) => {
  return {
    type: "cart/ADD",
    payload: payload,
  };
};
const onRemoveProduct = (payload = 0) => {
  return {
    type: "cart/remove",
    payload: payload,
  };
};

export { onCountDecrease, onCountIncrease, onAddToCart, onRemoveProduct };
