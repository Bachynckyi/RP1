import { useState, useEffect } from 'react';
import scss from "./BasketItem.module.scss";
import {MdDeleteForever} from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { isLogin, userToken } from '../../../redux/auth/auth-selectors';
import { removeFromBasket, updateQuantityInBasket } from 'redux/auth/auth-operations';


const BasketItem = ({product, updateOrder, _id, basket}) => {
  const {title, photo, price, type, color, code} = product;
  const [quantityOfItem, setQuantityOfItem] = useState({});
  const [amount, setAmount] = useState();
  const currentOrder = JSON.parse(localStorage.getItem("order"));
  const isLoggedIn = useSelector(isLogin);
  const token = useSelector(userToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if(isLoggedIn === true) {
          setQuantityOfItem(product.quantity);
          const totalAmount = price * Number(product.quantity);
          setAmount(totalAmount.toFixed(2));
    }
    else {
      const currentItemOfOrder = currentOrder.filter(order => order._id === _id);
      const currentQuantity = (Number(currentItemOfOrder[0].quantity));
      setQuantityOfItem(currentQuantity);
      const totalAmount = price * currentQuantity;
      setAmount(totalAmount.toFixed(2));
    }
    // eslint-disable-next-line 
  }, [currentOrder, price, _id, basket]);

  const handleChange = (event) => {
    if(event.target.name === "increment"){
        if(quantityOfItem === ""){
          if(isLoggedIn === true) {
            const quantity = "";
            dispatch(updateQuantityInBasket({token, _id, quantity}))
            .then(response => {
              updateOrder(response.payload.data.basket);
              setQuantityOfItem("");
            });
          }
          else {
            const updatedOrder = currentOrder.map((item) => (
              item._id === _id ? { ...item, quantity: ""} : item
            ));
            localStorage.setItem("order", JSON.stringify(updatedOrder));
            setQuantityOfItem("");
            updateOrder(updatedOrder);
          }
        }
        else {
          if(isLoggedIn === true) {
            const quantity = String(Number(quantityOfItem) + 1);
            dispatch(updateQuantityInBasket({token, _id, quantity}))
            .then(response => {
              updateOrder(response.payload.data.basket);
              setQuantityOfItem(String(Number(quantityOfItem) + 1));
            })

          }
          else {
            const updatedOrder = currentOrder.map((item) => (
              item._id === _id
                ? { ...item, quantity: String(Number(item.quantity) + 1)} : item
            ));
            localStorage.setItem("order", JSON.stringify(updatedOrder));
            setQuantityOfItem(String(Number(quantityOfItem) + 1));
            updateOrder(updatedOrder);
          }
        }
    }
    else if(event.target.name === "decrement"){
        if(quantityOfItem > 0){
          if(isLoggedIn === true) {
            const quantity = String(Number(quantityOfItem) - 1);
            dispatch(updateQuantityInBasket({token, _id, quantity}))
            .then(response => {
              updateOrder(response.payload.data.basket);
              setQuantityOfItem(String(Number(quantityOfItem) - 1));
            });
          }
          else {
            const updatedOrder = currentOrder.map((item) => (
              item._id === _id
                ? { ...item, quantity: String(Number(item.quantity) - 1)} : item
            ));
            localStorage.setItem("order", JSON.stringify(updatedOrder))
            setQuantityOfItem(String(Number(quantityOfItem) - 1));
            updateOrder(updatedOrder);
          }
        };
    }
    else if(event.target.name === "quantity"){
      const value = event.target.value.replace(/\D+/g, '');
        if(value === 0){
          if(isLoggedIn === true) {
            const quantity = "";
            dispatch(updateQuantityInBasket({token, _id, quantity}))
            .then(response => {
              updateOrder(response.payload.data.basket);
              setQuantityOfItem("");
            })
          }
          else {
            const updatedOrder = currentOrder.map((item) => (
              item._id === _id ? { ...item, quantity: ""} : item
            ));
            localStorage.setItem("order", JSON.stringify(updatedOrder))
            setQuantityOfItem("");
            updateOrder(updatedOrder);
          }

        }
        else {
          if(isLoggedIn === true) {
            const quantity = String(value);
            dispatch(updateQuantityInBasket({token, _id, quantity}))
            .then(response => {
              updateOrder(response.payload.data.basket);
              setQuantityOfItem(String(value));
            })
          }
          else {
            const updatedOrder = currentOrder.map((item) => (
              item._id === _id ? { ...item, quantity: String(value)} : item
            ));
            localStorage.setItem("order", JSON.stringify(updatedOrder))
            setQuantityOfItem(String(value));
            updateOrder(updatedOrder);
          }
        }
    };
  };

  const deleteItemFromBasket = () => {
    if(isLoggedIn === true) {
      const id = _id;
      dispatch(removeFromBasket({token, id}))
        .then(response => updateOrder(response.payload.data.basket))
    }
    else {
      const order = JSON.parse(localStorage.getItem("order"));
      const updatedOrder = order.filter(order => order._id !== _id);
      updateOrder(updatedOrder);
    }

  };

  return (
      <li className={scss.item}>
        <h1 className={scss.title}>{title}</h1>
        <div className={scss.product_container}>
          <div className={scss.container}>
            <img 
                className={scss.image}
                src={photo}
                alt={title}
            />
            <div className={scss.products_items_container}>
              <p className={scss.product_items}>Ціна: <span className={scss.product_item_color}>{price} грн</span></p>
              <p className={scss.product_items}>Фасування: <span className={scss.product_item_color}>{type}</span></p>
              <p className={scss.product_items}>Колір: <span className={scss.product_item_color}>{color}</span></p>
              <p className={scss.product_items}>Код товару: <span className={scss.product_item_color}>{code}</span></p>
              <p className={scss.product_items}>Сума: <span className={scss.product_item_color}>{amount} грн</span></p>
            </div>
          </div>
          <div className={scss.buttons_container}>
          <div className={scss.quantity_container}>
              <button type="button" onClick={handleChange} name="decrement" className={scss.quantity_button_decrement}>-</button>
              <input
                  className={scss.input}
                  value={quantityOfItem}
                  name="quantity"
                  onChange={handleChange}
                  type='text'
                  maxLength="3"
                  />
              <button type="button" onClick={handleChange} name='increment' className={scss.quantity_button_increment}>+</button>
          </div>
          <button onClick={deleteItemFromBasket} className={scss.button_delete}><MdDeleteForever className={scss.delete_icon}/></button>
          </div>
        </div>
      </li>
  );
  };
  
export default BasketItem;


