import { useState, useEffect, useRef} from 'react';
import scss from './Modal.module.scss';
import ModalOneClick from 'components/ModalOneClick/ModalOneClick';
import {SlBasket} from "react-icons/sl";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {AiOutlineCheck} from "react-icons/ai";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import {user, isLogin, userToken } from '../../redux/auth/auth-selectors';
import { addToBasket, removeFromBasket, getCurrent } from 'redux/auth/auth-operations';

const Modal = ({modalActive, setModalActive, product}) => {
    const {title, photo, price, type, color, code, description, _id} = product;
    const [order, setOrder] = useState({});
    const [quantity, setQuantity] = useState("1");
    const [activeModalOneClick, setModalOneClickActive] = useState(false);
    const [isShowDescription, setIsShowDesription] = useState(false);
    const [productInBasket, setProductInBasket] = useState(false);
    const navigate = useNavigate();
    const params = useParams();
    const currentUser = useSelector(user);
    const isLoggedIn = useSelector(isLogin);
    const dispatch = useDispatch();
    const token = useSelector(userToken);
    const ref = useRef(null);

    useEffect(() => {
        if(modalActive === true) {
            document.body.style.cssText = `overflow-y: hidden`
            if(isLoggedIn === true) {
                dispatch(getCurrent(token))
                    .then(response => {
                        const basketCheck = response.payload.user.basket.map(item => item._id);
                        if(basketCheck.includes(_id)){
                            setProductInBasket(true);
                        }
                    })
            }
            else {
                const currentOrder = localStorage.getItem("order") || "[]";
                const cards = JSON.parse(currentOrder);
                const basketCheck = cards.map(item => item._id);
                if(basketCheck.includes(_id)){
                    setProductInBasket(true);
                }
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
            document.body.style.cssText = `overflow-y: auto`
            window.removeEventListener('keydown', handleDownInEscape)
        };
        // eslint-disable-next-line
    }, [modalActive, quantity]);
    
    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }, [isShowDescription])

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
        if(Object.keys(params).length === 1) {
            navigate(`/`);
        }
        else {
            if(Object.keys(params).length === 0) {
                return
            }
            else if(params.subcategory === params.category) {
                navigate(`/catalog/${params.category}`);
            }

            else {
                navigate(`/catalog/${params.category}/${params.subcategory}`);
            }
        }
    };

    const openModalOneClick = () => {
        setModalOneClickActive(true);
    };

    const addProductToBasket = () => {
        if(isLoggedIn === true) {
            const userBasket = currentUser.basket;
            const basketCheck = userBasket.map(item => item._id);
            if(!basketCheck.includes(_id)){
                const data = order;
                dispatch(addToBasket({token, data}))
                    .then(setProductInBasket(true))
            }
            else {
                const id = _id;
                dispatch(removeFromBasket({token, id}))
                    .then(setProductInBasket(false))
            }

        }
        else {
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
        }
    };

    const showDescription = () => {
        setIsShowDesription(!isShowDescription)
    };

    const navigateToBasket = () => {
        navigate(`/order`); 
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
                        maxLength="3"
                        />
                    <button className={scss.quantity_button_increment} type="button" onClick={handleChange} name='increment'>+</button>
                </div>
                <div className={scss.buttons_container}>
                    <button className={scss.button_oneClick} type="button" onClick={openModalOneClick}>Купити в 1 клік</button>
                    {productInBasket === false ? 
                    (<button className={scss.button_basket} onClick={addProductToBasket} type="button">
                        <SlBasket className={scss.icon_basket}/>
                        <span className={scss.basket_word}>В кошик</span>
                    </button>) 
                    : 
                    (<button className={scss.button_basket_selected} onClick={addProductToBasket} type="button">
                        <AiOutlineCheck className={scss.icon_basket_selected}/>
                        <span className={scss.basket_word_selected}>В кошику</span>
                    </button>)}
                </div>
                <div className={scss.description_container}>
                    <button type='button' className={scss.button_to_basket} onClick={navigateToBasket}>Оформити замовлення</button>
                    {isShowDescription === true ? 
                        (<button className={scss.button_description} onClick={showDescription}>Приховати опис</button>)
                        :
                        (<button className={scss.button_description} onClick={showDescription}>Показати опис</button>)}
                </div>
                {isShowDescription && (<p className={scss.description} ref={ref}>{description}</p>)}
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


