import { useState, useEffect } from 'react';
import scss from './Modal.module.scss';
import ModalOneClick from 'components/ModalOneClick/ModalOneClick';


const Modal = ({modalActive, setModalActive, product}) => {
    const {title, photo, price, type, color, code, description} = product;
    const [order, setOrder] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [activeModalOneClick, setModalOneClickActive] = useState(false);

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
            if(quantity === ""){
                setQuantity(1)
            }
            else {
                setQuantity(quantity + 1)
            }
        }
        else if(event.target.name === "decrement"){
            if(quantity > 0){
                setQuantity(quantity - 1);
            };
        }
        else if(event.target.name === "quantity"){
            if(event.target.value.length === 0){
                setQuantity("");
            }
            else {
                setQuantity(event.target.value);
            }
        };
    };

    const closeModal = () => {
        setModalActive(false);
        setOrder({});
        setQuantity(1)
    };

    const openModalOneClick = () => {
        setOrder({title, price, code, color, type, quantity});
        setModalOneClickActive(true)
    };

    return (
        <div>
            <div className={!modalActive ? (scss.modal) : (scss.modal_active)} onClick={closeModal}>
                <div className={!modalActive ? (scss.modal_content) : (scss.modal_content_active)} onClick={e => e.stopPropagation()}>
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
                <button type="button" onClick={openModalOneClick}>Заказ в 1 клик</button>
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


