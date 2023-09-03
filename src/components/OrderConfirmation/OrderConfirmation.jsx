import { useState, useCallback, useEffect } from 'react';
import scss from './OrderConfirmation.module.scss';
import { useDispatch } from 'react-redux';
import { getAddress, getBranchNumber } from 'redux/courier/novaPoshta/np-operations';
import CourierList from './Location/CourierList/CourierList';
import BranchNumberList from './BranchNumber/BranchNumberList';
import { getCities, getWarehouses } from 'redux/courier/delivery/delivery-operations';
import DeliveryLocationList from './DeliveryLocation/DeliveryLocationList/DeliveryLocationList';
import DeliveryBranchNumberList from './DeliveryBranchNumber/DeliveryBranchNumberList/DeliveryBranchNumberList';
import PopularCitiesList from './PopularCities/PopularCitiesListNP/PopularCities';
import PopularCitiesListDEL from './PopularCities/PopularCitiesListDEL/PopularCitiesDEL';

const OrderConfirmation= ({confirmedOrder, totalAmount, dispatchOrder}) => {
    const today = new Date();
    const dispatch = useDispatch();
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
    const branchNumber = orderDetailes.branchNumber;
    const [courierLocality, setCourierLocality] = useState(null);
    const [courierBranchNumber, setCourierBranchNumber] = useState(null);
    const [statusLocality, setStatusLocality] = useState(false);
    const [statusBranchNumber, setStatusBranchNumber] = useState(false);
    const [refLocality, setRefLocality] = useState(null);
    const [state, setState] = useState(false);
    const [errorStateLocality, setErrorStateLocality] = useState(false);
    const [errorStateBranchNumber, setErrorStateStateBranchNumber] = useState(false);
    const [searchDelivery, setSearchDelivery] = useState("");
    const [refLocalityDelivery, setRefLocalityDelivery] = useState(null);
    const [showPopularCities, setShowPopularCities] = useState(false); 

    useEffect(() => {
        if(orderDetailes.typeOfDelivery === "Nova Poshta" && orderDetailes.locality !== "" && refLocality === null) {
            dispatch(getAddress(orderDetailes.locality))
                .then(response => {
                    if(response.payload.data.data.length !== 0){
                        setCourierLocality(response.payload.data.data);
                        setErrorStateLocality(false);
                        setStatusLocality(false);
                    }
                    else {
                        setErrorStateLocality(true);
                        setStatusLocality(true);
                    }
                })
        };
        if(refLocality !== null && state === false) {
            dispatch(getBranchNumber({refLocality, branchNumber}))
            .then(response => {
                if(response.payload.data.data.length !== 0){
                    setCourierBranchNumber(response.payload.data.data);
                }
                else {
                    setErrorStateStateBranchNumber(false);
                    setStatusBranchNumber(false);
                    setCourierBranchNumber(null);      
                }
            })
        }

        if(orderDetailes.typeOfDelivery === "Delivery" && state === false) {
            dispatch(getCities())
                .then(response => setCourierLocality(response.payload.data.data));
                setStatusLocality(true);
        };

        if(refLocalityDelivery !== null && state === true) {
            dispatch(getWarehouses(refLocalityDelivery))
            .then(response => {
                if(response.payload.data.data.length !== 0){
                    setCourierBranchNumber(response.payload.data.data);
                }
                else {
                    setErrorStateStateBranchNumber(false);
                    setStatusBranchNumber(false);
                    setCourierBranchNumber(null);      
                }
            })
        };
        setOrder({...orderDetailes, confirmedOrder: confirmedOrder, totalAmount: String(totalAmount)});
    // eslint-disable-next-line   
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
            setRefLocalityDelivery(null);
            setCourierLocality(null);
            setErrorStateLocality(false);
            setErrorStateStateBranchNumber(false);
            setCourierBranchNumber(null);
            setRefLocality(null);
            setState(false);
            setShowPopularCities(false);
        }
        else if (name === "locality"){
            setShowPopularCities(false);
            if(orderDetailes.typeOfDelivery === "Delivery")  {
                setSearchDelivery(value);
                setStatusLocality(false);
            }
            else {
                setSearchDelivery("");
            }
            setRefLocalityDelivery(null);
            setState(true);
            setRefLocality(null);
            setStatusBranchNumber(false);
            setErrorStateStateBranchNumber(false);
            setOrderDetails(prevState => {
                return { ...prevState, "branchNumber": "" };
            });          
            if(value === "") {
                setStatusLocality(true);
                setErrorStateLocality(true);
            }
            setOrderDetails(prevState => {
                return { ...prevState, [name]: value };
            });        
        }
        else if (name === "branchNumber"){
            if(orderDetailes.typeOfDelivery === "Delivery")  {
                setState(null);
            }
            else {
                setState(true);
            }
            setErrorStateStateBranchNumber(false);
            setOrderDetails(prevState => {
                return { ...prevState, [name]: value };
            });
            setStatusBranchNumber(true);
            if(value === "") {
                setStatusBranchNumber(false);
                setErrorStateStateBranchNumber(true);
            }
        }
        else {
            setOrderDetails(prevState => {
                return { ...prevState, [name]: value };
            });
        }
      },

      [setOrderDetails, orderDetailes]
    );

    const submitOrder = (event) => {
        event.preventDefault();
        if(errorStateBranchNumber === true || errorStateLocality === true ) {
            return
        }
        else {
            dispatchOrder(order);
        }
    };

    const pickLocality = ({locality, Ref}) => {
        setOrderDetails(prevState => {
            return { ...prevState, "locality": locality };
        });
        setErrorStateLocality(false);
        setStatusLocality(true);

        if(orderDetailes.typeOfDelivery  === "Delivery")  {
            setState(true);
            setRefLocalityDelivery(Ref)
        }
        else {
            setState(false);
            setRefLocality(Ref);
        }
    };

    const pickBranchNumber = (branchNumber) => {
        setOrderDetails(prevState => {
            return { ...prevState, "branchNumber": branchNumber };
        });
        setErrorStateStateBranchNumber(false);
        setStatusBranchNumber(false);
    };

    const notFoundBranch = () => {
        setErrorStateStateBranchNumber(true);
        setStatusBranchNumber(false);
    };

    const notFoundCity = () => {
            setStatusLocality(true);
            setErrorStateLocality(true);
    };

    const popularCities = () => {
        setShowPopularCities(true);
        setStatusBranchNumber(false);
    };

    const pickedPopularCity = (locality, Ref) => {
        setOrderDetails(prevState => {
            return { ...prevState, "branchNumber": "" };
        });   
        setOrderDetails(prevState => {
            return { ...prevState, "locality": locality };
        });
        setShowPopularCities(false);
        setState(false);
        setRefLocality(Ref);
        setErrorStateLocality(false);
        setCourierBranchNumber(null);

        if(orderDetailes.typeOfDelivery === "Delivery")  {  
            setState(true);
            setRefLocalityDelivery(Ref);
        }
    };

    const onFocusNumberBranch = () => {
        setStatusBranchNumber(true);
        setShowPopularCities(false);
    };
 
    return (
        <div className={scss.container}>
            <form className={scss.form} onSubmit={submitOrder}>
                <div className={scss.form_container}>
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
                                minLength="7"
                                onChange={handleChange}
                                value={orderDetailes.phone}
                                placeholder="Введіть номер телефону"
                            />
                        </label>
                    </div>
                    <div className={scss.delivery_details_container}>
                        <h2 className={scss.delivery_details_title}>Доставка</h2>
                        <div>
                            <div className={scss.delivery_options}>
                                <label className={scss.delivery_details_option} htmlFor="Sklad"> 
                                    <input
                                        className={scss.radio_button}
                                        type="radio"
                                        id="Sklad"
                                        name='typeOfDelivery' 
                                        value="Sklad"
                                        onChange={handleChange}
                                        required
                                    />
                                    <span className={scss.custom_button}></span>
                                    <span className={scss.delivery_details_subtitle}>Самовивіз</span>
                                </label>
                                <label className={scss.delivery_details_option} htmlFor='Nova Poshta'>
                                    <input 
                                        className={scss.radio_button}
                                        type="radio"
                                        id="Nova Poshta"
                                        name='typeOfDelivery'  
                                        value="Nova Poshta"
                                        onChange={handleChange} 
                                    />
                                    <span className={scss.custom_button}></span>
                                    <span className={scss.delivery_details_subtitle}>Нова пошта</span>
                                </label>
                                <label className={scss.delivery_details_option} htmlFor='Delivery'>
                                    <input
                                        className={scss.radio_button}
                                        type="radio"
                                        id='Delivery'
                                        name='typeOfDelivery' 
                                        value="Delivery"
                                        onChange={handleChange}
                                    />
                                    <span className={scss.custom_button}></span>
                                    <span className={scss.delivery_details_subtitle}>Delivery</span>
                                </label>
                            </div>
                            <div>
                                {orderDetailes.typeOfDelivery === "Sklad" && (
                                    <div className={scss.delivery_details_warehouse}>
                                        <span className={scss.delivery_details_label}>Контактна інформація</span>
                                        <address className={scss.delivery_details_address}>Адреса: Україна, м.Київ, вул. Біломорська, буд.2</address>
                                        <p className={scss.delivery_details_schedule}>Режим роботи: Пн-Пт 9:00 – 17:00</p>
                                        <p className={scss.delivery_details_item}>Телефон:
                                        <a className={scss.delivery_details_link} href="tel:+380991585152"> +38 (099) 158 51 52</a>
                                        </p>
                                    </div>)}
                                {orderDetailes.typeOfDelivery === "Nova Poshta" && (
                                <div className={scss.delivery_details_courier}>
                                    <div className={scss.subcontainer}>
                                    <label className={scss.delivery_details_courier_label}>
                                        <span className={scss.delivery_details_courier_subtitle}>Населений пункт</span>
                                        <input
                                            className={errorStateLocality === true ? (scss.delivery_details_courier_input_error) : (scss.delivery_details_courier_input)}
                                            required
                                            name='locality'
                                            type='text'
                                            onChange={handleChange}
                                            value={orderDetailes.locality}
                                            placeholder='Введіть назву населеного пункта'
                                            onFocus={popularCities}
                                        />
                                    </label>
                                    <p className={errorStateLocality === true ? (scss.error_message_active) : (scss.error_message)}>Оберіть населений пункт зі списку !</p>
                                    {!statusLocality && (
                                        <>
                                        {courierLocality !== null && (<CourierList courierLocality={courierLocality} pickLocality={pickLocality}/>)}
                                        </>
                                    )}
                                    {showPopularCities && (<PopularCitiesList pickedPopularCity={pickedPopularCity}/>)}
                                    </div> 
                                    <div className={scss.subcontainer}>   
                                        <label className={refLocality !== null ? (scss.delivery_details_courier_label_branchNumber_active) : (scss.delivery_details_courier_label_branchNumber)}>
                                            <span className={scss.delivery_details_courier_subtitle}>Номер відділення</span>
                                            <textarea
                                            className={errorStateBranchNumber === true ? (scss.courier_input_error) : (scss.courier_input)}
                                            required
                                            name='branchNumber'
                                            type='text'
                                            onChange={handleChange}
                                            value={orderDetailes.branchNumber}
                                            placeholder='Введіть номер відділення'
                                            onFocus={onFocusNumberBranch}
                                            />
                                        </label>                             
                                        <p className={errorStateBranchNumber === true ? (scss.error_message_active) : (scss.error_message)}>Оберіть номер відділення зі списку !</p>
                                    {statusBranchNumber && (
                                        <>
                                            {courierBranchNumber !== null && (<BranchNumberList courierBranchNumber={courierBranchNumber} pickBranchNumber={pickBranchNumber} search={orderDetailes.branchNumber} notFoundBranch={notFoundBranch}/>)}   
                                        </>
                                    )}
                                    </div>
                                    <p className={scss.textNP}>Накладений платіж: 20 ₴ + 2% комісії </p>
                                </div>)}
                                {orderDetailes.typeOfDelivery === "Delivery" && (
                                <div className={scss.delivery_details_courier}>
                                    <div className={scss.subcontainer}>
                                        <label className={scss.delivery_details_courier_label}>
                                            <span className={scss.delivery_details_courier_subtitle}>Населений пункт</span>
                                            <input
                                                className={errorStateLocality === true ? (scss.delivery_details_courier_input_error) : (scss.delivery_details_courier_input)}
                                                required
                                                name='locality'
                                                type='text'
                                                onChange={handleChange}
                                                value={orderDetailes.locality}
                                                placeholder='Введіть назву населеного пункта'
                                                onFocus={popularCities}
                                            />
                                        </label>
                                        <p className={errorStateLocality === true ? (scss.error_message_active) : (scss.error_message)}>Оберіть населений пункт зі списку !</p>
                                        {!statusLocality && (
                                            <>
                                            {courierLocality !== null && (<DeliveryLocationList courierLocality={courierLocality} pickLocality={pickLocality} searchDelivery={searchDelivery} notFoundCity={notFoundCity}/>)}
                                            </>
                                        )}
                                        {showPopularCities && (<PopularCitiesListDEL pickedPopularCity={pickedPopularCity}/>)}
                                    </div>
                                    <div className={scss.subcontainer}>
                                        <label className={refLocalityDelivery !== null ? (scss.delivery_details_courier_label_branchNumber_active) : (scss.delivery_details_courier_label_branchNumber)}>
                                            <span className={scss.delivery_details_courier_subtitle}>Номер відділення</span>
                                            <input
                                                className={scss.delivery_details_courier_input}
                                                required
                                                name='branchNumber'
                                                type='text'
                                                onChange={handleChange}
                                                value={orderDetailes.branchNumber}
                                                placeholder='Введіть номер відділення'
                                                onFocus={onFocusNumberBranch}
                                            />
                                        </label>
                                        <p className={errorStateBranchNumber === true ? (scss.error_message_active) : (scss.error_message)}>Оберіть номер відділення зі списку !</p>
                                        {statusBranchNumber && (
                                            <>
                                                {courierBranchNumber !== null && (<DeliveryBranchNumberList courierBranchNumber={courierBranchNumber} pickBranchNumber={pickBranchNumber} search={orderDetailes.branchNumber} notFoundBranch={notFoundBranch}/>)}   
                                            </>
                                        )}
                                    </div>
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
                            >
                        </textarea>
                    </div>
                </div>
                <button className={scss.button_submit} type='submit'>Відправити замовлення</button>
            </form>
        </div>
    )
  };
  
export default OrderConfirmation;
