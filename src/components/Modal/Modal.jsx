import { useState, useEffect } from 'react';
import scss from './Modal.module.scss';
import ModalOneClick from 'components/ModalOneClick/ModalOneClick';
import { BsFillBasketFill } from "react-icons/bs";
import { isLogin } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const Modal = ({modalActive, setModalActive, product}) => {
    const {title, photo, price, type, color, code, description, _id} = product;
    const [order, setOrder] = useState({});
    const [quantity, setQuantity] = useState("1");
    const [activeModalOneClick, setModalOneClickActive] = useState(false);
    const isUserLogin = useSelector(isLogin);

    useEffect(() => {
        setOrder({title, price, code, color, type, quantity, _id, photo});
        const handleDownInEscape = e => {
          if (e.code === 'Escape') {
            closeModal();
          }
        };
        window.addEventListener('keydown', handleDownInEscape);
        return () => {
          return window.removeEventListener('keydown', handleDownInEscape);
        };
        // eslint-disable-next-line
    }, [modalActive, quantity]);
    
    const handleChange = (event) => {
        if(event.target.name === "increment"){
            if(quantity === ""){
                setQuantity("1")
            }
            else {
                setQuantity(String(Number(quantity) + 1))
            }
        }
        else if(event.target.name === "decrement"){
            if(quantity > 0){
                setQuantity(String(Number(quantity) - 1));
            };
        }
        else if(event.target.name === "quantity"){
            const value = event.target.value.replace(/\D+/g, '');
              if(value === 0){
                setQuantity("");
              }
              else {
                setQuantity(String(value));
              }
          };
    };

    const closeModal = () => {
        setModalActive(false);
        setOrder({});
        setQuantity(1)
    };

    const openModalOneClick = () => {
        setModalOneClickActive(true)
    };

    const addToBasket = () => {
        if(isUserLogin === true)
        {
            console.log("Запись в базу")
        }
        else {
            const currentOrder = localStorage.getItem("order") || "[]";
            const cards = JSON.parse(currentOrder);
            localStorage.setItem("order", JSON.stringify([...cards, order]))
        }
    };

    return (
        <div>
            <div className={!modalActive ? (scss.modal) : (scss.modal_active)} onClick={closeModal}>
                <div className={!modalActive ? (scss.modal_content) : (scss.modal_content_active)} onClick={e => e.stopPropagation()}>
                    <h1 className={scss.title}>{title}</h1>
                    <div>
                        <img 
                            className={scss.photo}
                            src={photo}
                            alt={title}
                        />
                        <p>Ціна: {price} грн</p>
                        <p>Фасовка: {type}</p>
                        <p>Колір: {color}</p>
                        <p>Код товару: {code}</p>
                    </div>
                    <p className={scss.description}>Опис: {description}</p>
                <div>
                    <button type="button" onClick={handleChange} name="decrement">-</button>
                    <input
                        value={quantity}
                        name="quantity"
                        onChange={handleChange}
                        type='text'
                        />
                    <button type="button" onClick={handleChange} name='increment'>+</button>
                </div>
                <button type="button" onClick={closeModal}>закрыть</button>
                <button type="button" onClick={openModalOneClick}>Заказ в 1 клик</button>
                <button onClick={addToBasket} type="button">
                    <BsFillBasketFill/>
                </button>
                </div>
            </div>
        <ModalOneClick 
            activeModalOneClick={activeModalOneClick} 
            setModalOneClickActive={setModalOneClickActive} 
            order={order}
            closeModal={closeModal}
        />
        </div>
    )
  };
  
export default Modal;


