import { useState, useEffect } from 'react';

const BasketItem = ({product, updateOrder, _id}) => {
  const {title, photo, price, type, color, code, quantity} = product;
  const [quantityOfItem, setQuantityOfItem] = useState({});
  const amount = price * quantityOfItem;

  useEffect(() => {
    setQuantityOfItem(quantity);
  }, [quantity]);

  
  const handleChange = (event) => {
    if(event.target.name === "increment"){
        if(quantityOfItem === ""){
          setQuantityOfItem("1")
        }
        else {
          setQuantityOfItem(String(Number(quantityOfItem) + 1))
        }
    }
    else if(event.target.name === "decrement"){
        if(quantityOfItem > 0){
          setQuantityOfItem(String(Number(quantityOfItem) - 1));
        };
    }
    else if(event.target.name === "quantity"){
      const value = event.target.value.replace(/\D+/g, '');
        if(value === 0){
          setQuantityOfItem("");
        }
        else {
          setQuantityOfItem(String(value));
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
          <p>Фасовка: {type}</p>
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
          <p>Сумма: {amount} грн</p>
        </li>
    );
  };
  
export default BasketItem;


