import { useState, useEffect } from 'react';

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
        <li>
          <h1>{title}</h1>
          <img 
              src={photo}
              alt={title}
          />
          <p>Ціна: {price} грн</p>
          <p>Фасування: {type}</p>
          <p>Колір: {color}</p>
          <p>Код товару: {code}</p>
          <div>
              <button type="button" onClick={handleChange} name="decrement">-</button>
              <input
                  value={quantityOfItem}
                  name="quantity"
                  onChange={handleChange}
                  type='text'
                  />
              <button type="button" onClick={handleChange} name='increment'>+</button>
          </div>
          <button onClick={deleteItemFromBasket}>Видалити з кошика</button>
          <p>Сума: {amount} грн</p>
        </li>
    );
  };
  
export default BasketItem;


