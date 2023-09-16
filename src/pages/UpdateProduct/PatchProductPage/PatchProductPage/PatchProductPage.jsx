import scss from './PatchProductPage.module.scss';
import { useState, useCallback, useEffect } from 'react';
import { userEmail } from 'redux/auth/auth-selectors';
import ForbiddenPage from "pages/ForbiddenPage/ForbiddenPage";
import { useDispatch, useSelector } from 'react-redux';
import ModalConfirmation from "./../ModalConfirmation/ModalConfirmation";
import { userToken } from 'redux/auth/auth-selectors';
import {getProductById, updateProductWithPhoto, updateProductWithoutPhoto, updateStatusProduct, updateTopProduct } from "../../../../redux/product/product-operations";
import { useNavigate, useParams } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import Notiflix from 'notiflix';
import { isLoading } from '../../../../redux/product/product-selectors';
import Loader from 'components/Loader/Loader';

const PatchProductPage = () => {
    const userEmailVerify = useSelector(userEmail);
    const dispatch = useDispatch();
    const loading = useSelector(isLoading);
    const [product, setProduct] = useState([]);
    const [modalConfirmation, setModalConfirmation] = useState(false);
    const token = useSelector(userToken);
    const navigate = useNavigate();
    const params = useParams();
    const { _id, active, top }= product;

    useEffect(() => {
        dispatch(getProductById(params.id))
            .then(response => {
                setProduct(response.payload.data[0])
            })
    }, [dispatch, params.id])

    const handleChangeDetails = useCallback(({ target }) => {
        const {name, value } = target;
        if(name === "photo"){
            setProduct(prevState => {
                return{...prevState, photo: target.files[0]}}) 
        }
        else if(name === "price"){
            setProduct(prevState => {
                return {...prevState, [name]: value.toLowerCase().split(/,/).join('.')};
            });
        }
        else {
            setProduct(prevState => {
                return {...prevState, [name]: value};
            });
        }
    },[setProduct]);

    const onClick = () => {
        setModalConfirmation(true);
    };

    const onSubmit = () => {
        if(typeof(product.photo) === "string" ){
            const title = product.title;
            const price = product.price;
            const description = product.description;
            const type = product.type;
            const color = product.color;
            const code = product.code;
            const _id = product._id;
            const data = {title, price, description, type, color, code};
            dispatch(updateProductWithoutPhoto({token, data, _id}))
                .then(response => {
                    if(Object.keys(response.payload).length !== 0){
                        Notiflix.Notify.success('Товар успішно змінено', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
                        navigate(`/updateproduct/${params.category}/${params.subcategory}`);
                    }
                    else {
                        Notiflix.Notify.failure('Помилка при зміні товару', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
                        navigate(`/updateproduct/${params.category}/${params.subcategory}`);
                    }
                });
        }
        else if (typeof(product.photo) === "object"){
            const _id = product._id;
            const formData = new FormData();
            formData.append("photo", product.photo);
            formData.append("title", product.title);
            formData.append("price", product.price);
            formData.append("code", product.code);
            formData.append("color", product.color);
            formData.append("type", product.type);
            formData.append("description", product.description);
            const data = formData;
            dispatch(updateProductWithPhoto({token, data, _id}))
                .then(response => {
                    if(Object.keys(response.payload).length !== 0){
                        Notiflix.Notify.success('Товар успішно змінено', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
                        navigate(`/updateproduct/${params.category}/${params.subcategory}`);
                    }
                    else {
                        Notiflix.Notify.failure('Помилка при зміні товару', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
                        navigate(`/updateproduct/${params.category}/${params.subcategory}`);
                    }
                });
        }
    };

    const activeChange = () => {
        const data = { active: !active }
        dispatch(updateStatusProduct({token, data, _id}))
            .then(response => {
                if(response.payload.data === "Updated"){
                    Notiflix.Notify.success('Товар успішно змінено', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
                    navigate(`/updateproduct/${params.category}/${params.subcategory}`);
                }
                else {
                    Notiflix.Notify.failure('Помилка при зміні товару', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
                    navigate(`/updateproduct/${params.category}/${params.subcategory}`);
                }
            });
    };

    const topChange = () => {
        const data = { top: !top }
        dispatch(updateTopProduct({token, data, _id}))
            .then(response => {
                if(response.payload.data === "Deleted"){
                    Notiflix.Notify.success('Товар успішно змінено', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
                    navigate(`/updateproduct/${params.category}/${params.subcategory}`);
                }
                else {
                    Notiflix.Notify.failure('Помилка при зміні товару', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
                    navigate(`/updateproduct/${params.category}/${params.subcategory}`);
                }
            });
    };

    return (
        <>
        {userEmailVerify === "colorfarb@gmail.com" ? (
            <>
            <div className={scss.container}>
                {loading ? (<Loader/>) : (
                    <>
                        {product.length !== 0 && (
                        <>
                        <h1 className={scss.title}>Змінити товар "{product.title}"</h1>
                        <form className={scss.product_form}>
                            <div className={scss.subcontainer_text}>
                                <div className={scss.subcontainer_photo}>
                                    <p className={scss.title_picture}>Фотографія товару</p>
                                    {typeof(product.photo) === "string" ? 
                                    (<img 
                                        src={product.photo} 
                                        alt="productPhoto" 
                                        className={scss.product_picture}
                                    />)
                                    :
                                    (<img 
                                        src={URL.createObjectURL(product.photo)} 
                                        alt="productPhoto"
                                        className={scss.product_picture}
                                    />)}                      
                                    <input
                                        className={scss.input_photo}
                                        type='file'
                                        id="file"
                                        name="photo"
                                        required
                                        accept="image/png, image/jpeg"
                                        onChange={handleChangeDetails}
                                    />
                                    <label htmlFor="file" className={scss.button_input_file}>Оберіть файл</label>
                                </div>
                                <div> 
                                    <label className={scss.label_input}>Назва товару
                                        <input
                                            className={scss.input_text}
                                            name='title'
                                            placeholder='Введіть назву товару'
                                            required
                                            value={product.title}
                                            onChange={handleChangeDetails}
                                            maxLength="35"
                                        />
                                    </label>
                                    <label className={scss.label_input}>Фасовка
                                        <input
                                            className={scss.input_text}
                                            name='type'
                                            placeholder='Введіть фасовку'
                                            required
                                            value={product.type}
                                            onChange={handleChangeDetails}
                                            maxLength="10"
                                        />
                                    </label>
                                    <label className={scss.label_input}>Колір
                                        <input
                                            className={scss.input_text}
                                            name='color'
                                            placeholder='Введіть колір'
                                            required
                                            value={product.color}
                                            onChange={handleChangeDetails}
                                            maxLength="35"
                                        />
                                    </label>
                                    <label className={scss.label_input}>Ціна
                                        <input
                                            className={scss.input_text}
                                            name='price'
                                            placeholder='Введіть ціну'
                                            required
                                            value={product.price}
                                            onChange={handleChangeDetails}
                                            maxLength="15"
                                        />
                                    </label>
                                    <label className={scss.label_input}>Код товару
                                        <input
                                            className={scss.input_text}
                                            name='code'
                                            placeholder='Введіть код товару'
                                            required
                                            value={product.code}
                                            onChange={handleChangeDetails}
                                            maxLength="10"
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label className={scss.label_textarea}>Опис
                                        <textarea
                                            className={scss.description_area}
                                            name='description'
                                            placeholder='Введіть опис'
                                            rows="20"
                                            cols="70"
                                            required
                                            value={product.description}
                                            onChange={handleChangeDetails}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className={scss.menu_buttons}>
                                {active === true ? (
                                    <button type='button' className={scss.button} onClick={activeChange}>Деактивувати товар</button>
                                ) : (
                                    <button type='button' className={scss.button} onClick={activeChange}>Активувати товар</button>
                                )}
                                {top === false ? (
                                    <button type='button' className={scss.button} onClick={topChange}>Включити товар на вітрину</button>
                                ) : (
                                    <button type='button' className={scss.button} onClick={topChange}>Виключити товар з вітрини</button>
                                )}
                                <button type='button' className={scss.button} onClick={onSubmit}>Зберегти зміни</button>                
                                <button type='button' className={scss.button} onClick={onClick}>Видалити товар</button>
                            </div>
                        </form>
                        </>
                        )}
                        {modalConfirmation && (
                            <ModalConfirmation
                                modalConfirmation={modalConfirmation} 
                                setModalConfirmation={setModalConfirmation}
                                _id={product._id}
                        />)}
                    </>
                )}
            </div>
            <Footer/>
            </>)
        : (<ForbiddenPage/>)}
        </>
    )
  };
  
export default PatchProductPage;