import { useState, useCallback, useEffect } from 'react';
import { addOrderBasket } from "../../redux/order/order-operations";
import { useDispatch } from 'react-redux';
import scss from './OrderConfirmation.module.scss';

const OrderConfirmation= ({confirmedOrder, totalAmount, dispatchOrder}) => {
    const dispatch = useDispatch();
    const today = new Date();
    const date = today.toLocaleString();
    const [orderDetailes, setOrderDetails] = useState({
        customerSurname: "",
        customerName: "",
        phone: "",
        comments: "",
        typeOfDelivery: "",
        locality: "",
        branchNumber: "",
        date: date,
    });
    const [order, setOrder] = useState({});

    useEffect(() => {
        setOrder({...orderDetailes, confirmedOrder: confirmedOrder, totalAmount: String(totalAmount)})
    }, [confirmedOrder, orderDetailes, totalAmount])

    const handleChange = useCallback(({ target }) => {
        const { name, value } = target;
        if(name === "phone"){
            const value = target.value.replace(/\D+/g, '');
            setOrderDetails(prevState => {
                return { ...prevState, [name]: value };
              });
        }
        else if (name === "typeOfDelivery"){
            setOrderDetails(prevState => {
                return { ...prevState, [name]: value, locality: "", branchNumber: "" };
              });
        }
        else {
            setOrderDetails(prevState => {
                return { ...prevState, [name]: value };
              });
        }
      },
      [setOrderDetails]
    );

    const submitOrder = (event) => {
        event.preventDefault()
        try{
            dispatch(addOrderBasket(order))
                .then(localStorage.removeItem("order"))
        }
        catch(error){
            console.log(error)
        }
        dispatchOrder(true)
    };

    return (
        <div className={scss.container}>
            <form className={scss.form} onSubmit={submitOrder}>
                <div className={scss.contact_details_container}>
                    <h2 className={scss.contact_details_title}>Контактні дані</h2>
                    <label className={scss.contact_details_label}>
                            <span className={scss.contact_details_subtitle}>Прізвище</span>
                            <input
                                className={scss.contact_details_input}
                                required
                                name='customerSurname'
                                onChange={handleChange}
                                value={orderDetailes.customerSurname}
                                type='text'
                                placeholder='Введіть прізвище'
                            />
                    </label>
                    <label className={scss.contact_details_label}>
                        <span className={scss.contact_details_subtitle}>Ім'я</span>
                        <input
                            className={scss.contact_details_input}
                            required
                            name='customerName'
                            onChange={handleChange}
                            value={orderDetailes.customerName}
                            type='text'
                            placeholder="Введіть ім'я"
                        />
                    </label>
                    <label className={scss.contact_details_label}>
                        <span className={scss.contact_details_subtitle}>Телефон</span>
                        <input
                            className={scss.contact_details_input}
                            type='text'
                            required
                            name='phone'
                            onChange={handleChange}
                            value={orderDetailes.phone}
                            placeholder="Введіть номер телефону"
                        />
                    </label>
                </div>
                <div className={scss.delivery_details_container}>
                    <h2 className={scss.delivery_details_title}>Доставка</h2>
                    <div>
                        <div>
                            <label className={scss.delivery_details_option} htmlFor="Sklad"> 
                                <input
                                    type="radio"
                                    id="Sklad"
                                    name='typeOfDelivery' 
                                    value="Sklad"
                                    onChange={handleChange}
                                    required
                                />
                                <span className={scss.delivery_details_subtitle}>Самовивіз</span>
                            </label>
                            <label className={scss.delivery_details_option} htmlFor='Nova Poshta'>
                                <input 
                                    type="radio"
                                    id="Nova Poshta"
                                    name='typeOfDelivery'  
                                    value="Nova Poshta"
                                    onChange={handleChange} 
                                />
                                <span className={scss.delivery_details_subtitle}>Нова пошта</span>
                            </label>
                            <label className={scss.delivery_details_option} htmlFor='Delivery'>
                                <input 
                                    type="radio"
                                    id='Delivery'
                                    name='typeOfDelivery' 
                                    value="Delivery"
                                    onChange={handleChange}
                                />
                                <span className={scss.delivery_details_subtitle}>Delivery</span>
                            </label>
                        </div>
                        <div>
                            {orderDetailes.typeOfDelivery === "Sklad" && (
                                <div className={scss.delivery_details_warehouse}>
                                    <span className={scss.delivery_details_label}>Контактна інформація</span>
                                    <address className={scss.delivery_details_address}>Адреса: Адреса: Україна, м.Київ, вул. Магнітогорська буд.5</address>
                                    <p className={scss.delivery_details_schedule}>Режим роботи: Пн-Пт 9:00 – 17:00</p>
                                    <p className={scss.delivery_details_item}>Телефон:
                                    <a className={scss.delivery_details_link} href="tel:+380991585152"> +38 (099) 158 51 52</a>
                                    </p>
                                </div>)}
                            {orderDetailes.typeOfDelivery === "Nova Poshta" && (
                            <div className={scss.delivery_details_courier}>
                                <label className={scss.delivery_details_courier_label}>
                                    <span className={scss.delivery_details_courier_subtitle}>Населений пункт</span>
                                    <input
                                    className={scss.delivery_details_courier_input}
                                    required
                                    name='locality'
                                    type='text'
                                    onChange={handleChange}
                                    value={orderDetailes.locality}
                                    placeholder='Введіть назву'
                                    />
                                </label>
                                <label className={scss.delivery_details_courier_label}>
                                    <span className={scss.delivery_details_courier_subtitle}>Номер відділення</span>
                                    <input
                                    className={scss.delivery_details_courier_input}
                                    required
                                    name='branchNumber'
                                    type='text'
                                    onChange={handleChange}
                                    value={orderDetailes.branchNumber}
                                    placeholder='Введіть номер відділення'
                                    />
                                </label>
                            </div>)}
                            {orderDetailes.typeOfDelivery === "Delivery" && (
                            <div className={scss.delivery_details_courier}>
                                <label className={scss.delivery_details_courier_label}>
                                    <span className={scss.delivery_details_courier_subtitle}>Населений пункт</span>
                                    <input
                                        className={scss.delivery_details_courier_input}
                                        required
                                        name='locality'
                                        type='text'
                                        onChange={handleChange}
                                        value={orderDetailes.locality}
                                        placeholder='Введіть назву' 
                                    />
                                </label>
                                <label className={scss.delivery_details_courier_label}>
                                    <span className={scss.delivery_details_courier_subtitle}>Номер відділення</span>
                                    <input
                                        className={scss.delivery_details_courier_input}
                                        required
                                        name='branchNumber'
                                        type='text'
                                        onChange={handleChange}
                                        value={orderDetailes.branchNumber}
                                        placeholder='Введіть номер відділення'
                                    />
                                </label>
                            </div>)}
                        </div>
                    </div>
                </div>
                <div className={scss.description_details_container}>
                    <h3 className={scss.description_details_subtitle}>Коментар до замовлення</h3>
                    <textarea
                        className={scss.description_details_field}
                        name='comments'
                        value={orderDetailes.comments}
                        onChange={handleChange}
                        required
                        >
                    </textarea>
                </div>
                <button className={scss.button_submit} type='submit'>Відправити замовлення</button>
            </form>
        </div>
    )
  };
  
export default OrderConfirmation;
