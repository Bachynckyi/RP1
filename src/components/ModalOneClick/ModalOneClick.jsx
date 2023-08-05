import scss from './ModalOneClick.module.scss';
import { useState, useEffect, useCallback } from 'react';
import {addOrderOneClick} from '../../redux/order/order-operations';
import { useDispatch } from 'react-redux';
import {AiOutlineCloseCircle} from "react-icons/ai"

const ModalOneClick = ({activeModalOneClick, setModalOneClickActive, closeModal, order}) => {
    const dispatch = useDispatch();
    const {title, price, type, color, code} = order;
    const initialState = {
        customerName: "",
        customerPhone: "",
    };
    const [orderOneClick, setOrderOneClick] = useState({});
    const [customer, setCustomer] = useState({...initialState});
    const {customerName, customerPhone} = customer;

    const today = new Date();
    const date = today.toLocaleString();

    useEffect(() => {
      const quantity = String(order.quantity)
      setOrderOneClick({title, price, type, color, code, quantity, customerName, customerPhone, date})
        const handleDownInEscape = e => {
          if (e.code === 'Escape') {
            closeModalOneClick();
          }
        };
        window.addEventListener('keydown', handleDownInEscape);
        return () => {
          return window.removeEventListener('keydown', handleDownInEscape);
        };
    // eslint-disable-next-line     
    }, [activeModalOneClick, customerName, customerPhone]);

    const orderSubmit = (event) => {
        event.preventDefault()
        dispatch(addOrderOneClick(orderOneClick));
        setModalOneClickActive(false);
        setOrderOneClick({})
        setCustomer({...initialState})
        closeModal()
    };

    const closeModalOneClick = () => {
      setModalOneClickActive(false);
      setCustomer({...initialState})
    };

    const handleChange = useCallback(({ target }) => {
      if (target.name === "customerPhone"){
        const value = target.value.replace(/\D+/g, '');
        if(value === 0){
          setCustomer(prevState => {
            return { ...prevState, customerPhone: value };
          });
        }
        else {
          setCustomer(prevState => {
            return { ...prevState, customerPhone: value };
          });
        }

      }
      else {
        const { name, value } = target;
        setCustomer(prevState => {
          return { ...prevState, [name]: value };
        });
      }
      },
      [setCustomer]
    ); 
    
    return (
        <div className={!activeModalOneClick ? (scss.modal) : (scss.modal_active)} onClick={closeModalOneClick}>
            <div 
                className={!activeModalOneClick ? (scss.modal_content) : (scss.modal_content_active)} 
                onClick={e => e.stopPropagation()}>
                <form className={scss.form} onSubmit={orderSubmit}>
                    <label className={scss.input_label}>Ім'я
                        <input
                        required
                        className={scss.input}
                        name='customerName'
                        onChange={handleChange}
                        value={customerName}
                        placeholder='Введіть ім`я'
                        />
                    </label>
                    <label className={scss.input_label}>Телефон
                        <input
                        required
                        className={scss.input}
                        name='customerPhone'
                        onChange={handleChange}
                        value={customerPhone}
                        placeholder='Введіть телефон'
                        />
                    </label>
                    <button className={scss.button_submit} type='submit'>Відправити замовлення</button>
                </form>
            <button className={scss.button_close} type="button" onClick={closeModalOneClick}>
              <AiOutlineCloseCircle className={scss.icon_close}/>
            </button>
            </div>
        </div>
    )
  };
  
export default ModalOneClick;