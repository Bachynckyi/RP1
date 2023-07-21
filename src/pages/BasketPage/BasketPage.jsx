// import scss from './BasketPage.module.scss';
import { isLogin } from 'redux/auth/auth-selectors';
import { useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import BasketList from './BasketList/BasketList';

const BasketPage = () => {
    const isUserLogin = useSelector(isLogin);
    const [basket, setBasket] = useState({});

    useEffect(() => {
      if(isUserLogin === false){
        const order = JSON.parse(localStorage.getItem("order"));
        if(order !== null) {
        setBasket(order)
        }
      }
    // eslint-disable-next-line
    }, [])

    const newOrder = (updatedOrder) => {
      setBasket(updatedOrder);
      localStorage.setItem("order", JSON.stringify(updatedOrder))
    };

    return (
        <div>
            {Object.keys(basket).length !== 0 ?
              (<BasketList basket={basket} newOrder={newOrder}/>)
            : 
              (<p>Нічого немає в кошику</p>)}
        </div>
    )
  };
  
export default BasketPage;
