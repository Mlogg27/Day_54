import { onAddToCart } from "../store/action";
import store from "../store";

const onAdd = ({ index, product }) => {
  const { dispatch } = store;
  if (product.count === 0) {
    alert(`Vui lòng chọn số lượng sản phẩm ${product.name}`);
    return;
  }
  if (confirm(`Chắc chắn thêm vào giỏ hàng ${product.count} ${product.name}`)) {
    dispatch(onAddToCart({ product, index }));
  }
};

export default onAdd;
