import { useState, useEffect } from 'react';
import scss from "./BasketItem.module.scss";
import {MdDeleteForever} from "react-icons/md";


const BasketItem = ({product, updateOrder, _id, updatedQuantity}) => {
  const {title, photo, price, type, color, code} = product;
  const [quantityOfItem, setQuantityOfItem] = useState({});
  const [amount, setAmount] = useState();
  const currentOrder = JSON.parse(localStorage.getItem("order"));

  useEffect(() => {
    const currentItemOfOrder = currentOrder.filter(order => order._id === _id);
    const currentQuantity = (Number(currentItemOfOrder[0].quantity));
    setQuantityOfItem(currentQuantity);
    setAmount(price * currentQuantity);
  }, [currentOrder, price, _id]);

  const handleChange = (event) => {
    if(event.target.name === "increment"){
        if(quantityOfItem === ""){
          const updatedOrder = currentOrder.map((item) => (
            item._id === _id ? { ...item, quantity: ""} : item
          ));
          localStorage.setItem("order", JSON.stringify(updatedOrder));
          setQuantityOfItem("");
          updatedQuantity();
        }
        else {
          const updatedOrder = currentOrder.map((item) => (
            item._id === _id
              ? { ...item, quantity: String(Number(item.quantity) + 1)} : item
          ));
          localStorage.setItem("order", JSON.stringify(updatedOrder));
          setQuantityOfItem(String(Number(quantityOfItem) + 1));
          updatedQuantity()
        }
    }
    else if(event.target.name === "decrement"){
        if(quantityOfItem > 0){
          const updatedOrder = currentOrder.map((item) => (
            item._id === _id
              ? { ...item, quantity: String(Number(item.quantity) - 1)} : item
          ));
          localStorage.setItem("order", JSON.stringify(updatedOrder))
          setQuantityOfItem(String(Number(quantityOfItem) - 1));
          updatedQuantity()
        };
    }
    else if(event.target.name === "quantity"){
      const value = event.target.value.replace(/\D+/g, '');
        if(value === 0){
          const updatedOrder = currentOrder.map((item) => (
            item._id === _id ? { ...item, quantity: ""} : item
          ));
          localStorage.setItem("order", JSON.stringify(updatedOrder))
          setQuantityOfItem("");
          updatedQuantity()
        }
        else {
          const updatedOrder = currentOrder.map((item) => (
            item._id === _id ? { ...item, quantity: String(value)} : item
          ));
          localStorage.setItem("order", JSON.stringify(updatedOrder))
          setQuantityOfItem(String(value));
          updatedQuantity()
        }
    };
  };

  const deleteItemFromBasket = () => {
    const order = JSON.parse(localStorage.getItem("order"));
    const updatedOrder = order.filter(order => order._id !== _id);
    updateOrder(updatedOrder)
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


