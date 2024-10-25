import { SvgIcon } from '@mui/material';
import reactLogo from '../../assets/react.svg';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getCart } from '../../store/selector';
import { useNavigate } from 'react-router-dom';

const Header = ()=>{
    const cart = useSelector(getCart);
    const navigate = useNavigate()
    return (
        <>
            <nav className='flex justify-between bg-[#3CBBB1] fixed top-0 w-[100vw] h-[50px] items-center z-[999999999]'>
                <a onClick={()=>{navigate("/")}}><img src={reactLogo} className='mx-[30px]'/></a>
                <button onClick={()=> navigate("/cart")}>
                    <ShoppingBasketIcon fontSize="large" className='mx-[30px] '/>
                    <span className='absolute right-[25px] top-[25px]'>{cart.length}</span>
                </button>
            </nav> 
        </>
    )
}
export default memo(Header)