import { NavLink } from 'react-router-dom';
import scss from './Basket.module.scss';
import { BsFillBasketFill } from "react-icons/bs";
import { useEffect, useState } from 'react';


const Basket = (order) => {
    console.log(order)

    return (
        <div className={scss.container}>
            <NavLink>
                <BsFillBasketFill/>
            </NavLink>
            
        </div>
    )
  };
  
export default Basket;


