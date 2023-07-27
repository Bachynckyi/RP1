// import scss from './BasketPage.module.scss';
import { useEffect, useState } from 'react';
import BasketList from './BasketList/BasketList';
import OrderConfirmation from 'components/OrderConfirmation/OrderConfirmation';

const BasketPage = () => {
    const [basket, setBasket] = useState({});
    const [confirmedOrder, setConfirmedOrder] = useState({});
    const [statusOrder, setStatusOrder] = useState(false);
    const [totalAmount, setTotalAmount] = useState();

    useEffect(() => {
        const order = JSON.parse(localStorage.getItem("order"));
        if(order !== null) {
        setBasket(order)
        }
    // eslint-disable-next-line
    }, [])

    const newOrder = (updatedOrder) => {
      setBasket(updatedOrder);
      localStorage.setItem("order", JSON.stringify(updatedOrder))
    };
    
    const handleClick = () => {
      const currentOrder = JSON.parse(localStorage.getItem("order"));
      setTotalAmount(currentOrder.reduce((prev, curr) => { return Number(prev) + Number(curr.price)*curr.quantity}, ""));
      setConfirmedOrder(confirmedOrder);
      setStatusOrder(true);
    };


    return (
        <div>
            {Object.keys(basket).length !== 0 ?
              (
              <div>
                <BasketList basket={basket} newOrder={newOrder}/>
                {!statusOrder && <button onClick={handleClick}>Оформити замовлення</button>}
              {statusOrder && 
                (<div>
                  <OrderConfirmation confirmedOrder={confirmedOrder} totalAmount={totalAmount}/>
                </div>)}
              </div>)
            : 
              (<p>Нічого немає в кошику</p>)}
        </div>
    )
  };
  
export default BasketPage;
