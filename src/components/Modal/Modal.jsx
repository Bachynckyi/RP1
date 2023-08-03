import { useState, useEffect } from 'react';
import scss from './Modal.module.scss';
import ModalOneClick from 'components/ModalOneClick/ModalOneClick';
import { BsFillBasketFill } from "react-icons/bs";
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
            console.log(order)
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
                        <p className={scss.product_items}><b>Ціна:</b> {price} грн</p>
                        <p className={scss.product_items}><b>Фасування:</b> {type}</p>
                        <p className={scss.product_items}><b>Колір:</b> {color}</p>
                        <p className={scss.product_items}><b>Код товару:</b> {code}</p>
                    </div>
                    <p className={scss.description}>{description}</p>
                <div>
                    <button type="button" onClick={handleChange} name="decrement">-</button>
                    <input
                        className={scss.input}
                        value={quantity}
                        name="quantity"
                        onChange={handleChange}
                        type='text'
                        />
                    <button type="button" onClick={handleChange} name='increment'>+</button>
                </div>
                <button className={scss.button_close}type="button" onClick={closeModal}><AiOutlineCloseCircle className={scss.icon_close}/></button>
                <button type="button" onClick={openModalOneClick}>Купити в 1 клік</button>
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


