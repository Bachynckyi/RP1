import scss from './ModalOneClick.module.scss';
import { useState, useEffect, useCallback } from 'react';

const ModalOneClick = ({activeModalOneClick, setModalOneClickActive, closeModal, order}) => {
    const {title, price, type, color, code, quantity} = order;
    const initialState = {
        customerName: "",
        customerPhone: "",
    };
    const [orderOneClick, setOrderOneClick] = useState({});
    const [customer, setCustomer] = useState({...initialState});
    const {customerName, customerPhone} = customer;

    useEffect(() => {
      setOrderOneClick({title, price, type, color, code, quantity, customerName, customerPhone})
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

    const orderSubmit = () => {
        console.log(orderOneClick)
        setModalOneClickActive(false);
        setOrderOneClick({})
        setCustomer({...initialState})
        closeModal()
    };

    const closeModalOneClick = () => {
      setModalOneClickActive(false);
      orderOneClick({});
      setCustomer({...initialState})
    };

    const handleChange = useCallback(({ target }) => {
        const { name, value } = target;
        setCustomer(prevState => {
          return { ...prevState, [name]: value };
        });
      },
      [setCustomer]
    ); 
    
    return (
        <div className={!activeModalOneClick ? (scss.modal) : (scss.modal_active)} onClick={closeModalOneClick}>
            <div 
                className={!activeModalOneClick ? (scss.modal_content) : (scss.modal_content_active)} 
                onClick={e => e.stopPropagation()}
            >
                <form className={scss.form}>
                    <label>Ім'я
                        <input
                        required
                        name='customerName'
                        onChange={handleChange}
                        value={customerName}
                        />
                    </label>
                    <label>Телефон
                        <input
                        required
                        name='customerPhone'
                        onChange={handleChange}
                        value={customerPhone}
                        />
                    </label>
                    <button type='button' onClick={orderSubmit}>Відправити замовлення</button>
                </form>
            <button type="button" onClick={closeModalOneClick}>закрыть</button>
            </div>
        </div>
    )
  };
  
export default ModalOneClick;