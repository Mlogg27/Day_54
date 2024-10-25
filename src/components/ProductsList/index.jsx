import { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../store/selector"
import "./style.css" 
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { onCountDecrease, onCountIncrease } from "../../store/action"
import onAdd from "../../plugin/onAdd"

const ProductsList = () => {
    const products = useSelector(getProducts);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <>
            <h2 className="mt-[75px] mb-[30px] text-center text-[60px]">Products List</h2>

            <ul className="list-none flex flex-wrap justify-center items-center gap-x-[30px] gap-y-[20px]">
                {products.map((product, index) => {
                    return (
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
                                <p>Price: {product.price*product.count} VND</p>
                                <div className="mb-[15px] flex gap-x-[30px] items-center justify-center">
                                    <button className="text-[20px]" onClick={() => dispatch(onCountDecrease(index))}>-</button>
                                    <span className="text-[20px]">{product.count}</span> 
                                    <button className="text-[20px]" onClick={() => dispatch(onCountIncrease(index))}>+</button>
                                </div>
                                <div className="flex gap-x-[5px]">
                                    <Button onClick={() => navigate(`/products/detail/${index}`)}>Details</Button>
                                    <Button onClick={()=>{onAdd({index, product})}}>Add to cart</Button>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}

export default memo(ProductsList);
