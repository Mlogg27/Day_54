import { useSelector, useDispatch } from "react-redux";
import Header from "../../Header";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { onCountDecrease, onCountIncrease, onRemoveProduct } from "../../../store/action"; 

const CartPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    if (cart.length === 0) {
        return (
            <>
                <Header />
                <div className="flex flex-col items-center justify-center mt-[80px]">
                    <p className="text-[24px] mb-[20px]">Hiện không có Sản phẩm nào trong giỏ hàng ~~</p>
                    <Button onClick={() => navigate(`/`)}>Back</Button>
                </div>
            </>
        );
    }
    return (
        <>
            <Header />
            <ul className="list-none flex flex-wrap justify-center items-center mt-[80px] gap-x-[30px] gap-y-[20px]">
                {cart.map((product, index) => (
                    <li className="flex w-[600px] h-[200px] gap-x-[25px]" key={index}>
                        <span className="border-[1px] flex justify-center items-center">
                            <img
                                className="w-[80%] rounded-[12px] product-image"
                                src={product.image}
                                alt={product.name}
                            />
                        </span>
                        <div className="flex flex-col justify-center items-center gap-y-[5px]">
                            <h3 className="font-semibold text-[20px]">Name: {product.name}</h3>
                            <p>Brand: {product.brand}</p>
                            <p>Price: {product.price * product.count} VND</p>
                            <div className="mb-[15px] flex gap-x-[30px] items-center justify-center">
                                <span className="text-[20px]">Quantity: {product.count}</span>
                            </div>
                            <div className="flex gap-x-[5px]">
                                <Button onClick={() => dispatch(onRemoveProduct(product._id))}>Remove</Button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="mt-[80px] flex justify-center items-center"><Button onClick={() => navigate(`/`)}>Back</Button></div>
        </>
    );
};

export default CartPage;
