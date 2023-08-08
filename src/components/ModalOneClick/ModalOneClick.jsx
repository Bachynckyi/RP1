import scss from './ModalOneClick.module.scss';
import { useState, useEffect, useCallback } from 'react';
import {addOrderOneClick} from '../../redux/order/order-operations';
import { useDispatch, useSelector} from 'react-redux';
import {AiOutlineCloseCircle} from "react-icons/ai";
import { isLoading } from '../../redux/order/order-selectors';
import Loader  from '../../components/Loader/Loader';
import { NavLink } from 'react-router-dom';
import {AiFillCheckCircle} from "react-icons/ai";
import {VscError} from "react-icons/vsc";

const ModalOneClick = ({activeModalOneClick, setModalOneClickActive, order}) => {
    const dispatch = useDispatch();
    const {title, price, type, color, code} = order;
    const initialState = {
        customerName: "",
        customerPhone: "",
    };
    const [orderOneClick, setOrderOneClick] = useState({});
    const [customer, setCustomer] = useState({...initialState});
    const [dispatchingStatus, setDispatchingStatus] = useState(null);
    const {customerName, customerPhone} = customer;
    const loading = useSelector(isLoading);

    const today = new Date();
    const date = today.toLocaleString();

    useEffect(() => {
      const quantity = String(order.quantity)
      setOrderOneClick({title, price, type, code, color, quantity, customerName, customerPhone, date})
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
        event.preventDefault();
        dispatch(addOrderOneClick(orderOneClick))
          .then(response => setDispatchingStatus(response.payload.request.status));
    };

    const closeModalOneClick = () => {
      setOrderOneClick({})
      setModalOneClickActive(false);
      setCustomer({...initialState});
      setDispatchingStatus(null);
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
              {loading === true ? (<Loader/>) : (
                <>
                {dispatchingStatus === null ?
                (<div>
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
                </div>) : 
                (<>{dispatchingStatus === 201 ? (
                  <div className={scss.dispatch_container}>
                    <AiFillCheckCircle className={scss.success_icon}/>
                    <h3 className={scss.dispatch_title}>Замовлення відправлено успішно</h3>
                    <p className={scss.dispatch_sentence}>Очікуйте на дзвінок вашого менеджера</p>
                    <NavLink className={scss.dispatch_button} to="/">На головну</NavLink>
                    <button className={scss.button_close} type="button" onClick={closeModalOneClick}>
                      <AiOutlineCloseCircle className={scss.icon_close}/>
                    </button>
                  </div>) : 
                  (<div className={scss.dispatch_container}>
                    <VscError className={scss.error_icon}/>
                    <h3 className={scss.dispatch_title}>Щось пішло не так.</h3>
                    <p className={scss.dispatch_sentence}>Спробуйте ще раз</p>
                    <NavLink className={scss.dispatch_button} to="/">На головну</NavLink>
                    <button className={scss.button_close} type="button" onClick={closeModalOneClick}>
                      <AiOutlineCloseCircle className={scss.icon_close}/>
                    </button>
                  </div>)}
                  </>)}
                </>)}
            </div>
        </div>
    )
  };
  
export default ModalOneClick;