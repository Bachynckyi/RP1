import { useState, useEffect } from 'react';
import scss from './Modal.module.scss';


const Modal = ({active, setActive, product}) => {
    const {title, photo, price, type, color, code, description} = product;
    const initialState = {
        title: title,
        price: price,
        color: color,
        code: code,
        quantity: 1,
    };
    const [order, setOrder] = useState({...initialState});
    const {quantity} = order;


    useEffect(() => {
        const handleDownInEscape = e => {
          if (e.code === 'Escape') {
            closeModal();
          }
        };
        window.addEventListener('keydown', handleDownInEscape);
        return () => {
          return window.removeEventListener('keydown', handleDownInEscape);
        };
      },);
    
    const handleChange = (event) => {
        if(event.target.name === "increment"){
            setOrder(order => {
                return {quantity: order.quantity + 1} 
            });
        }
        else if(event.target.name === "decrement"){
            if(quantity > 1){
                setOrder(order => {
                    return {quantity: order.quantity - 1} 
                });
            };
        }
        else if(event.target.name === "quantity"){
            if(event.target.value.length === 0){
                setOrder(order => {
                    return {quantity: ""} 
                });
            }
            else {
                setOrder(order => {
                    return {quantity: Number(event.target.value)} 
                });
            }

        };
    };

    const closeModal = () => {
        setActive(false);
        setOrder({...initialState});
    };

    return (
        <div className={!active ? (scss.modal) : (scss.modal_active)} onClick={closeModal}>
            <div className={!active ? (scss.modal_content) : (scss.modal_content_active)} onClick={e => e.stopPropagation()}>
                <h1>{title}</h1>
                <img 
                    className={scss.photo}
                    src={photo}
                    alt={title}
                />
                <p>Ціна: {price} грн</p>
                <p>Фасовка: {type}</p>
                <p>Колір: {color}</p>
                <p>Код товару: {code}</p>
                <p>Опис: {description}</p>
            <div>
                <button type="button" onClick={handleChange} name="decrement">-</button>
                <input
                    value={quantity}
                    name="quantity"
                    onChange={handleChange}
                    type='number'
                    />
                <button type="button" onClick={handleChange} name='increment'>+</button>
            </div>
            <button type="button" onClick={closeModal}>закрыть</button>
            <button type="button">Заказ в 1 клик</button>
            </div>
        </div>
    )
  };
  
export default Modal;


