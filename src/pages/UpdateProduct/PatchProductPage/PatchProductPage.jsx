import scss from './PatchProductPage.module.scss';
import { useState, useCallback } from 'react';
import {GoSearch} from "react-icons/go";
import { userEmail } from 'redux/auth/auth-selectors';
import ForbiddenPage from "pages/ForbiddenPage/ForbiddenPage";
import { useDispatch, useSelector } from 'react-redux';
import ModalConfirmation from './ModalConfirmation/ModalConfirmation';
import { userToken } from 'redux/auth/auth-selectors';
import {updateProductWithPhoto, updateProductWithoutPhoto, updateStatusProduct } from "../../../redux/product/product-operations";
import { getProductBySearch } from '../../../redux/product/product-operations';
import { useNavigate } from 'react-router-dom';

const PatchProductPage = () => {
    const [search, setSearch] = useState("");
    const userEmailVerify = useSelector(userEmail);
    const dispatch = useDispatch();
    const [product, setProduct] = useState([]);
    const [modalConfirmation, setModalConfirmation] = useState(false);
    const token = useSelector(userToken);
    const navigate = useNavigate();
    const { _id, active }= product;
  
    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const handleSubmit = () => {
        if(search === ""){
            return
        }
        else {
            dispatch(getProductBySearch(search))
            .then(response => {
                const item = response.payload.data.filter(item => item.code === search);
                if(item.length === 0){
                    setProduct([]);
                }
                else {
                    setProduct(...item);
                }
            })
        }
    };

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
            const sendData = async ({token, data, _id}) => {
                try {
                dispatch(updateProductWithoutPhoto({token, data, _id}));
                } 
                catch (error) {
                  console.log(error)
                }
              };
            sendData({token, data, _id});
            navigate(`/profile`);
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
            const sendData = async ({token, data, _id}) => {
                try {
                dispatch(updateProductWithPhoto({token, data, _id}));
                } 
                catch (error) {
                  console.log(error)
                }
              };
            sendData({token, data, _id});
            navigate(`/profile`);
        }
    };

    const activeChange = () => {
        const data = { active: !active }
        dispatch(updateStatusProduct({token, data, _id}));
        navigate(`/profile`);
    };

    return (
        <>
        {userEmailVerify === "colorfarb@gmail.com" ? (
            <div className={scss.container}>
                <h1 className={scss.title}>Введіть код товару</h1>
                <div className={scss.container_search}>
                    <input
                    className={scss.input_search}
                    value={search}
                    onChange={handleSearch}
                    placeholder='Введіть пошуковий запит'
                    />
                    <button type='button' onClick={handleSubmit} className={scss.button_search}>
                        <GoSearch className={scss.icon_search}/>
                    </button>
                </div>
                {product.length !== 0 && (
                    <form>
                        <div>                          
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
                        <p className={scss.title_picture}>Фотографія товару</p>
                            <input
                                type='file'
                                name="photo"
                                required
                                accept="image/png, image/jpeg"
                                onChange={handleChangeDetails}
                            />
                        </div> 
                        <div> 
                            <label className={scss.label_input}>Назва товару
                                <input
                                    className={scss.input}
                                    name='title'
                                    placeholder='Введіть назву товару'
                                    required
                                    value={product.title}
                                    onChange={handleChangeDetails}
                                />
                            </label>
                            <label>Опис
                                <textarea
                                    className={scss.label_input}
                                    name='description'
                                    placeholder='Введіть опис'
                                    rows="20"
                                    cols="70"
                                    required
                                    value={product.description}
                                    onChange={handleChangeDetails}
                                />
                            </label>
                            <label className={scss.label_input}>Фасовка
                                <input
                                    className={scss.input}
                                    name='type'
                                    placeholder='Введіть фасовку'
                                    required
                                    value={product.type}
                                    onChange={handleChangeDetails}
                                />
                            </label>
                            <label className={scss.label_input}>Колір
                                <input
                                    className={scss.input}
                                    name='color'
                                    placeholder='Введіть колір'
                                    required
                                    value={product.color}
                                    onChange={handleChangeDetails}
                                />
                            </label>
                            <label className={scss.label_input}>Ціна
                                <input
                                    className={scss.input}
                                    name='price'
                                    placeholder='Введіть ціну'
                                    required
                                    value={product.price}
                                    onChange={handleChangeDetails}
                                />
                            </label>
                            <label className={scss.label_input}>Код товару
                                <input
                                    className={scss.input}
                                    name='code'
                                    placeholder='Введіть код товару'
                                    required
                                    value={product.code}
                                    onChange={handleChangeDetails}
                                />
                            </label>
                        </div>
                        <div>
                        {active === true ? (
                            <button type='button' onClick={activeChange}>Деактивувати товар</button>
                        ) : (
                            <button type='button' onClick={activeChange}>Активувати товар</button>
                        )}
                        </div>
                        <button type='button' className={scss.button} onClick={onSubmit}>Зберегти зміни</button>                
                        <button type='button' className={scss.button} onClick={onClick}>Видалити товар</button>
                    </form>
                )}
                    {modalConfirmation && (
                    <ModalConfirmation
                    modalConfirmation={modalConfirmation} 
                    setModalConfirmation={setModalConfirmation}
                    _id={product._id}
                />)}
            </div>)
        : (<ForbiddenPage/>)}
        </>
    )
  };
  
export default PatchProductPage;


