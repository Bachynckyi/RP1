import scss from './BasketPage.module.scss';
import { useEffect, useState } from 'react';
import BasketList from './BasketList/BasketList';
import OrderConfirmation from 'components/OrderConfirmation/OrderConfirmation';
import Footer from 'components/Footer/Footer';

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
    }, [])

    const newOrder = (updatedOrder) => {
      setBasket(updatedOrder);
      localStorage.setItem("order", JSON.stringify(updatedOrder))
    };
    
    const handleClick = () => {
      const currentOrder = JSON.parse(localStorage.getItem("order"));
      setTotalAmount(currentOrder.reduce((prev, curr) => { return Number(prev) + Number(curr.price)*curr.quantity}, ""));
      setConfirmedOrder(currentOrder);
      setStatusOrder(true);
    };

    const dispatchOrder = (data) => {
      if(data === true){
        setBasket({})
      }
    };

    return (
        <div>
            {Object.keys(basket).length !== 0 ?
              (
              <div className={scss.container}>
                <BasketList basket={basket} newOrder={newOrder}/>
                {!statusOrder && <button onClick={handleClick}>Оформити замовлення</button>}
              {statusOrder && 
                (<div>
                  <OrderConfirmation confirmedOrder={confirmedOrder} totalAmount={totalAmount} dispatchOrder={dispatchOrder}/>
                </div>)}
              </div>)
            : 
              (
              <div className={scss.container}>
                <p>Нічого немає в кошику</p>
              </div>)}
              <Footer/>
        </div>
    )
  };
  
export default BasketPage;
