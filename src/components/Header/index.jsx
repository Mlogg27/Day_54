import { SvgIcon } from '@mui/material';
import reactLogo from '../../assets/react.svg';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { memo } from 'react';

const Header = ()=>{
    return (
        <>
            <nav className='flex justify-between bg-[#3CBBB1] fixed top-0 w-[100vw] h-[50px] items-center z-[999999999]'>
                <a><img src={reactLogo} className='mx-[20px]'/></a>
                <ShoppingBasketIcon fontSize="large" className='mx-[20px] '/>
                <span className='absolute right-[10px] top-[25px]'>0</span>
            </nav> 
        </>
    )
}
export default memo(Header)