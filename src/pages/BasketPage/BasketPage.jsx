import scss from './BasketPage.module.scss';
import { useEffect, useState } from 'react';
import BasketList from './BasketList/BasketList';
import OrderConfirmation from 'components/OrderConfirmation/OrderConfirmation';
import Footer from 'components/Footer/Footer';
import { addOrderBasket } from "../../redux/order/order-operations";
import { useDispatch, useSelector } from 'react-redux';
import { isLoading } from '../../redux/order/order-selectors';
import Loader from 'components/Loader/Loader';
import { NavLink } from 'react-router-dom';
import {AiFillCheckCircle} from "react-icons/ai";
import {VscError} from "react-icons/vsc";
import { isLogin, userToken } from '../../redux/auth/auth-selectors';
import { getCurrent, clearBasket } from 'redux/auth/auth-operations';

const BasketPage = () => {
    const [basket, setBasket] = useState({});
    const [confirmedOrder, setConfirmedOrder] = useState({});
    const [statusOrder, setStatusOrder] = useState(false);
    const [totalAmount, setTotalAmount] = useState();
    const dispatch = useDispatch();
    const [dispatchingStatus, setDispatchingStatus] = useState(null);
    const loading = useSelector(isLoading);
    const isLoggedIn = useSelector(isLogin);
    const token = useSelector(userToken);

    useEffect(() => {
      if(isLoggedIn === true) {
        dispatch(getCurrent(token))
          .then(response => setBasket(response.payload.user.basket));
      }
      else {
        const order = JSON.parse(localStorage.getItem("order"));
        if(order !== null) {
          setBasket(order)
        }
      }
      // eslint-disable-next-line 
    }, [])

    const newOrder = (updatedOrder) => {
      if(isLoggedIn === true) {
        setBasket(updatedOrder);
      }
      else {
        setBasket(updatedOrder);
        localStorage.setItem("order", JSON.stringify(updatedOrder));
      }
    };
    
    const handleClick = () => {
      if(isLoggedIn === true){
        dispatch(getCurrent(token))
        .then(response => {
          setTotalAmount(response.payload.user.basket.reduce((prev, curr) => { 
            return (Number(prev) + Number(curr.price)*curr.quantity).toFixed(2)}, ""));
          setConfirmedOrder(response.payload.user.basket)})
        setStatusOrder(true);
      }
      else {
        const currentOrder = JSON.parse(localStorage.getItem("order"));
        setTotalAmount(currentOrder.reduce((prev, curr) => { return (Number(prev) + Number(curr.price)*curr.quantity).toFixed(2)}, ""));
        setConfirmedOrder(currentOrder);
        setStatusOrder(true);
      }

    };

    const dispatchOrder = (order) => {
          try{
            dispatch(addOrderBasket(order))
            .then(response => {
              if(response.payload.request.status === 201) {
                if(isLoggedIn === true){
                  dispatch(clearBasket(token))
                }
                else {
                  localStorage.removeItem("order");
                }
                setBasket({});
              };
              setDispatchingStatus(response.payload.request.status);
            });
          }
          catch(error){
            console.log(error)
          }
    };

    return (
        <>
        <div className={scss.container}> 
          {loading === true ? (<Loader/>) : (
            <>
            {dispatchingStatus === null ?
          (<>
              {Object.keys(basket).length !== 0 ?
              (<>
                <BasketList basket={basket} newOrder={newOrder}/>
                {!statusOrder && <button onClick={handleClick} className={scss.button_confirm}>Оформити замовлення</button>}
                {statusOrder && 
                (<OrderConfirmation confirmedOrder={confirmedOrder} totalAmount={totalAmount} dispatchOrder={dispatchOrder}/>)}
              </>) : (<p className={scss.info}>Нічого немає в кошику</p>)}              
            </>
            ) : 
            (<>
            {dispatchingStatus === 201 ? 
            (<div className={scss.dispatch_container}>
                <AiFillCheckCircle className={scss.success_icon}/>
                <h3 className={scss.dispatch_title}>Замовлення відправлено успішно</h3>
                <p className={scss.dispatch_sentence}>Очікуйте на дзвінок вашого менеджера</p>
                <NavLink className={scss.dispatch_button} to="/">На головну</NavLink>
            </div>) : 
              (<div className={scss.dispatch_container}>
                <VscError className={scss.error_icon}/>
                <h3 className={scss.dispatch_title}>Щось пішло не так.</h3>
                <p className={scss.dispatch_sentence}>Спробуйте ще раз</p>
                <NavLink className={scss.dispatch_button} to="/">На головну</NavLink>
              </div>)}
              </>)}
          </>)}
        </div>
        <Footer/>
        </>
    )
  };
  
export default BasketPage;


