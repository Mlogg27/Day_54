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

export { onCountDecrease, onCountIncrease };
