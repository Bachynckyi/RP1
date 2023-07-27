import { useState, useCallback, useEffect } from 'react';
import { addOrderBasket } from "../../redux/order/order-operations";
import { useDispatch } from 'react-redux';

const OrderConfirmation= ({confirmedOrder, totalAmount}) => {
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

    const submitOrder = () => {
        dispatch(addOrderBasket(order))
        .then(localStorage.removeItem("order"))
    };

    return (
        <div>
            <form>
                <div>
                    <h2>Контактні дані</h2>
                    <label>Прізвище
                            <input
                            required
                            name='customerSurname'
                            onChange={handleChange}
                            value={orderDetailes.customerSurname}
                            type='text'
                            />
                    </label>
                    <label>Ім'я
                        <input
                        required
                        name='customerName'
                        onChange={handleChange}
                        value={orderDetailes.customerName}
                        type='text'
                        />
                    </label>
                    <label>Телефон
                        <input
                        type='text'
                        required
                        name='phone'
                        onChange={handleChange}
                        value={orderDetailes.phone}
                        />
                    </label>
                </div>
                <div>
                    <h2>Доставка</h2>
                    <div>
                        <div>
                            <input
                                type="radio"
                                id="Sklad"
                                name='typeOfDelivery' 
                                value="Sklad"
                                onChange={handleChange}
                            />
                            <label htmlFor="Sklad">Самовивіз</label>
                            <input 
                                type="radio"
                                id="Nova Poshta"
                                name='typeOfDelivery'  
                                value="Nova Poshta"
                                onChange={handleChange} 
                            />
                            <label htmlFor='Nova Poshta'>Нова Пошта</label>
                            <input 
                                type="radio"
                                id='Delivery'
                                name='typeOfDelivery' 
                                value="Delivery"
                                onChange={handleChange}
                            />
                            <label htmlFor='Delivery'>Delivery</label>
                        </div>
                        <div>
                            {orderDetailes.typeOfDelivery === "Sklad" && (
                                <div>
                                    <address>Адреса: Україна, м. Київ , вул. Драгоманова 23, офіс 555</address>
                                    <p>Режим роботи: Пн-Пт 9:00 – 17:00</p>
                                    <p>Телефон:
                                    <a href="tel:+380991111111"> +38 099 111 11 11</a>
                                    </p>
                                </div>)}
                            {orderDetailes.typeOfDelivery === "Nova Poshta" && (
                            <div>
                                <label>Населений пункт
                                    <input
                                    required
                                    name='locality'
                                    type='text'
                                    onChange={handleChange}
                                    value={orderDetailes.locality}
                                    />
                                </label>
                                <label>Номер відділення
                                    <input
                                    required
                                    name='branchNumber'
                                    type='text'
                                    onChange={handleChange}
                                    value={orderDetailes.branchNumber}
                                    />
                                </label>
                            </div>)}
                            {orderDetailes.typeOfDelivery === "Delivery" && (
                            <div>
                                <label>Населений пункт
                                    <input
                                    required
                                    name='locality'
                                    type='text'
                                    onChange={handleChange}
                                    value={orderDetailes.locality}
                                    />
                                </label>
                                <label>Номер відділення
                                    <input
                                    required
                                    name='branchNumber'
                                    type='text'
                                    onChange={handleChange}
                                    value={orderDetailes.branchNumber}
                                    />
                                </label>
                            </div>)}
                        </div>
                    </div>
                </div>
                <div>
                    <label>Коментар до замовлення
                    <textarea
                        rows="20"
                        cols="70"
                        required
                        name='comments'
                        value={orderDetailes.comments}
                        onChange={handleChange} 
                        >
                    </textarea>
                    </label>
                </div>
            </form>
            <button type='click' onClick={submitOrder}>Відправити замовлення</button>
        </div>
    )
  };
  
export default OrderConfirmation;
