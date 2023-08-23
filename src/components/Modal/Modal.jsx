import { useState, useEffect } from 'react';
import scss from './Modal.module.scss';
import ModalOneClick from 'components/ModalOneClick/ModalOneClick';
import {SlBasket} from "react-icons/sl";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {AiOutlineCheck} from "react-icons/ai";
import { useNavigate, useParams } from 'react-router-dom';

const Modal = ({modalActive, setModalActive, product}) => {
    const {title, photo, price, type, color, code, description, _id} = product;
    const [order, setOrder] = useState({});
    const [quantity, setQuantity] = useState("1");
    const [activeModalOneClick, setModalOneClickActive] = useState(false);
    const [isShowDescription, setIsShowDesription] = useState(false);
    const [productInBasket, setProductInBasket] = useState(false);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if(modalActive === true) {
            document.body.style.cssText = `overflow-y: hidden; padding-right: ${window.innerWidth - document.body.offsetWidth}px`
            const currentOrder = localStorage.getItem("order") || "[]";
            const cards = JSON.parse(currentOrder);
            const basketCheck = cards.map(item => item._id);
            if(basketCheck.includes(_id)){
                setProductInBasket(true);
            }
        }
        setOrder({title, price, code, color, type, quantity, _id, photo});
        const handleDownInEscape = e => {
          if (e.code === 'Escape') {
            closeModal();
          }
        };
        window.addEventListener('keydown', handleDownInEscape);
        return () => {
            document.body.style.cssText = `overflow-y: auto; padding-right: 0px`
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
        setTimeout(() => {
            setProductInBasket(false);
            setIsShowDesription(false);
            setQuantity(1);
          }, 300);
        navigate(`/catalog/${params.category}/${params.subcategory}`);
    };

    const openModalOneClick = () => {
        setModalOneClickActive(true);
    };

    const addToBasket = () => {
        const currentOrder = localStorage.getItem("order") || "[]";
        const cards = JSON.parse(currentOrder);
        const basketCheck = cards.map(item => item._id);
        if(!basketCheck.includes(_id)){
            localStorage.setItem("order", JSON.stringify([...cards, order]));
            setProductInBasket(true);
        }
        else {
            const order = JSON.parse(localStorage.getItem("order"));
            const updatedOrder = order.filter(order => order._id !== _id);
            localStorage.setItem("order", JSON.stringify(updatedOrder))
            setProductInBasket(false);
        }
    };

    const showDescription = () => {
        setIsShowDesription(true);
    };

    return (
        <div className={scss.container}>
            <div className={!modalActive ? (scss.modal) : (scss.modal_active)} onClick={closeModal}>
                <div className={!modalActive ? (scss.modal_content) : (scss.modal_content_active)} onClick={e => e.stopPropagation()}>
                    <div className={scss.product_container}>
                        <img 
                            className={scss.photo}
                            src={photo}
                            alt={title}
                        />
                        <div className={scss.product_data}>
                            <h1 className={scss.title}>{title}</h1>
                            <p className={scss.product_items}>Ціна: <span className={scss.product_item_color}>{price} грн</span></p>
                            <p className={scss.product_items}>Фасування: <span className={scss.product_item_color}>{type}</span></p>
                            <p className={scss.product_items}>Колір: <span className={scss.product_item_color}>{color}</span></p>
                            <p className={scss.product_items}>Код товару: <span className={scss.product_item_color}>{code}</span></p>
                        </div>
                        <button className={scss.button_close}type="button" onClick={closeModal}><AiOutlineCloseCircle className={scss.icon_close}/></button>
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
                <div className={scss.buttons_container}>
                    <button className={scss.button_oneClick} type="button" onClick={openModalOneClick}>Купити в 1 клік</button>
                    {productInBasket === false ? 
                    (<button className={scss.button_basket} onClick={addToBasket} type="button">
                        <SlBasket className={scss.icon_basket}/>
                        <span className={scss.basket_word}>В кошик</span>
                    </button>) 
                    : 
                    (<button className={scss.button_basket_selected} onClick={addToBasket} type="button">
                        <AiOutlineCheck className={scss.icon_basket_selected}/>
                        <span className={scss.basket_word_selected}>В кошику</span>
                    </button>)}
                </div>
                <div className={scss.description_container}>
                    {isShowDescription === true ? (<p className={scss.description}>{description}</p>)
                    :(<button className={scss.button_description} onClick={showDescription}>Опис</button>)}
                </div>
                </div>
            </div>
        <ModalOneClick 
            activeModalOneClick={activeModalOneClick} 
            setModalOneClickActive={setModalOneClickActive} 
            order={order}
        />
        </div>
    )
  };
  
export default Modal;


