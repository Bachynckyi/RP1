import { useState, useEffect } from 'react';
import scss from './Modal.module.scss';
import ModalOneClick from 'components/ModalOneClick/ModalOneClick';
import {SlBasket} from "react-icons/sl";
import {AiOutlineCloseCircle} from "react-icons/ai"

const Modal = ({modalActive, setModalActive, product}) => {
    const {title, photo, price, type, color, code, description, _id} = product;
    const [order, setOrder] = useState({});
    const [quantity, setQuantity] = useState("1");
    const [activeModalOneClick, setModalOneClickActive] = useState(false);

    useEffect(() => {
        if(modalActive === true) {
            document.body.style.cssText = `overflow: hidden; padding-right: ${window.innerWidth - document.body.offsetWidth}px`
        }
        setOrder({title, price, code, color, type, quantity, _id, photo});
        const handleDownInEscape = e => {
          if (e.code === 'Escape') {
            closeModal();
          }
        };
        window.addEventListener('keydown', handleDownInEscape);
        return () => {
            document.body.style.cssText = `overflow: auto; padding-right: 0px`
            window.removeEventListener('keydown', handleDownInEscape)
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
        setQuantity(1);
    };

    const openModalOneClick = () => {
        setModalOneClickActive(true);
    };

    const addToBasket = () => {
            const currentOrder = localStorage.getItem("order") || "[]";
            const cards = JSON.parse(currentOrder);
            const basketCheck = cards.map(item => item._id);
            if(basketCheck.includes(_id)){
                console.log("Уже есть в корзине");
            }
            else {
                localStorage.setItem("order", JSON.stringify([...cards, order]));
            }
    };

    return (
        <div className={scss.container}>
            <div className={!modalActive ? (scss.modal) : (scss.modal_active)} onClick={closeModal}>
                <div className={!modalActive ? (scss.modal_content) : (scss.modal_content_active)} onClick={e => e.stopPropagation()}>
                    <div>
                        <img 
                            className={scss.photo}
                            src={photo}
                            alt={title}
                        />
                        <h1 className={scss.title}>{title}</h1>
                        <p className={scss.product_items}>Ціна: <span className={scss.product_item_color}>{price} грн</span></p>
                        <p className={scss.product_items}>Фасування: <span className={scss.product_item_color}>{type}</span></p>
                        <p className={scss.product_items}>Колір: <span className={scss.product_item_color}>{color}</span></p>
                        <p className={scss.product_items}>Код товару: <span className={scss.product_item_color}>{code}</span></p>
                    </div>
                <div className={scss.quantity_container}>
                    <button className={scss.quantity_button_decrement} type="button" onClick={handleChange} name="decrement">-</button>
                    <input
                        className={scss.input}
                        value={quantity}
                        name="quantity"
                        onChange={handleChange}
                        type='text'
                        />
                    <button className={scss.quantity_button_increment} type="button" onClick={handleChange} name='increment'>+</button>
                </div>
                <button className={scss.button_close}type="button" onClick={closeModal}><AiOutlineCloseCircle className={scss.icon_close}/></button>
                <div className={scss.buttons_container}>
                    <button className={scss.button_oneClick} type="button" onClick={openModalOneClick}>Купити в 1 клік</button>
                    <button className={scss.button_basket} onClick={addToBasket} type="button">
                        <SlBasket className={scss.icon_basket}/>
                        <span className={scss.basket_word}>В кошик</span>
                    </button>
                </div>
                <p className={scss.description}>{description}</p>
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


