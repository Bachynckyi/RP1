import scss from './AddProductForm.module.scss';
import { useState, useCallback, useEffect } from 'react';
import defaultPicture from '../../images/images.png';
import { getAllCategories } from '../../redux/category/category-operations';
import { useDispatch, useSelector } from 'react-redux';
import { userToken } from 'redux/auth/auth-selectors';
import { addProduct } from '../../redux/product/product-operations';


const initialState = {
    title: "",
    description: "",
    category: "",
    price: "",
    type: "",
    color: "",
    photo: "",
  };

const AddProductForm = () => {
    const dispatch = useDispatch();
    const token = useSelector(userToken);
    const [product, setProduct] = useState({...initialState});
    const { title, description, price, color, type, photo, category} = product;

    useEffect(() => {
        dispatch(getAllCategories(token))
    })

    const onSubmit = event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("photo", photo);
        formData.append("title", title);
        formData.append("type", type);
        formData.append("color", color);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("category", category);
        const data = formData;
        const sendData = async ({token, data}) => {
            try {
            dispatch(addProduct({token, data}));
            } 
            catch (error) {
              console.log(error)
            }
          };
        sendData({token, data});
        setProduct(initialState);
    };

    const handleChangeDetails = useCallback(({ target }) => {
        const {name, value } = target;
        if(name === "photo"){
            setProduct(prevState => {
                return{...prevState, photo: target.files[0]}}) 
        }
        else {
            setProduct(prevState => {
                return {...prevState, [name]: value};
            });
        }
    },
      [setProduct]
    );

    return (
        <div className={scss.container}>
            <form className={scss.product_form} onSubmit={onSubmit}>
                <div>
                    {photo ? 
                    (<img 
                        src={URL.createObjectURL(photo)} 
                        alt="productPhoto" 
                        className={scss.product_picture}
                        />)
                    :
                    (<img 
                        src={defaultPicture} 
                        alt="defaultPicture"
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
                            value={title}
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
                            value={description}
                            onChange={handleChangeDetails}
                        />
                    </label>
                    <label className={scss.label_input}>Фасовка
                        <input
                            className={scss.input}
                            name='type'
                            placeholder='Введіть фасовку'
                            required
                            value={type}
                            onChange={handleChangeDetails}
                        />
                    </label>
                    <label className={scss.label_input}>Колір
                        <input
                            className={scss.input}
                            name='color'
                            placeholder='Введіть колір'
                            required
                            value={color}
                            onChange={handleChangeDetails}
                        />
                    </label>
                    <label className={scss.label_input}>Ціна
                        <input
                            className={scss.input}
                            name='price'
                            placeholder='Введіть ціну'
                            required
                            value={price}
                            onChange={handleChangeDetails}
                        />
                    </label>
                </div>
                <div>
                </div>
                <button type='submit'>Добавить товар</button>
            </form>
        </div>
    );
  };
  
export default AddProductForm;