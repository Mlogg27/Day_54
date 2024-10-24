import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../../store/selector";
import { Button } from "@mui/material";
import { onCountDecrease, onCountIncrease } from "../../store/action";
import Header from '../Header';

const Detail = () => {
    const products = useSelector(getProducts);
    const { index } = useParams();
    const product = products[index];
    const navigate = useNavigate();


    if (!product) {
        return (
            <span className="text-center my-[50px] mx-auto text-[60px]">Không tìm thấy sản phẩm số {index}</span>
        );
    }

    return (
        <>
            <Header />
            <div className="mt-[80px] flex mx-[20px] justify-center items-center gap-x-[15px]">
                <span>
                    <img className="w-[50vw]" src={product.image} alt={product.name} />
                </span>
                <div className="flex flex-col gap-y-[10px]">
                    <h2 className="text-[18px] font-semibold">Name: {product.name}</h2>
                    <p>Brand: {product.brand}</p>
                    <p>Description: {product.description}</p>
                    <p>Price: {product.price} VND</p>
                    <div className="mb-[15px] flex gap-x-[30px] items-center justify-center">
                                    <button className="text-[20px]" onClick={() => dispatch(onCountDecrease(index))}>-</button>
                                    <span className="text-[20px]">{product.count}</span> 
                                    <button className="text-[20px]" onClick={() => dispatch(onCountIncrease(index))}>+</button>
                                </div>
                    <div className="flex gap-x-[5px]">
                        <Button onClick={() => navigate("/")}>Back</Button>
                        <Button>Add to cart</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;
