import scss from './AddProductForm.module.scss';
import { useState, useCallback, useEffect } from 'react';
import defaultPicture from '../../images/images.png';
import { getAllCategories } from '../../redux/category/category-operations';
import { useDispatch, useSelector } from 'react-redux';
import { userToken } from 'redux/auth/auth-selectors';
import { addProduct } from '../../redux/product/product-operations';
import CategoriesList from '../CategoryList/CategoryList';
import { isLoading } from '../../redux/category/category-selectors';
import Loader  from '../../components/Loader/Loader';
import { getAllSubcategories } from '../../redux/subcategory/subcategory-operations';
import SubcategoriesList from 'components/SubcategoryList/SubcategoryList';

const initialState = {
    title: "",
    description: "",
    category: "",
    price: "",
    type: "",
    color: "",
    photo: "",
    code: "",
    subcategory: "",
  };

const AddProductForm = () => {
    const dispatch = useDispatch();
    const token = useSelector(userToken);
    const [product, setProduct] = useState({...initialState});
    const { title, description, price, color, type, photo, category, code, subcategory} = product;
    const [categories, setCategories] = useState(null);
    const [subCategories, setSubcategories] = useState(null);
    const loading = useSelector(isLoading);

    useEffect(() => {
        try{
            dispatch(getAllCategories())
            .then(response => setCategories(response.payload.data))
            dispatch(getAllSubcategories())
            .then(response => setSubcategories(response.payload.data))
        }
        catch(error){
            console.log(error)
        };
    }, [dispatch])

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
        formData.append("code", code);
        if(subcategory !== null){
            formData.append("subcategory", subcategory);
        };
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
    },[setProduct]);

    const fetchCategory = (pickedCategory) => {
        setProduct(prevState => {
            return {...prevState, category: pickedCategory};
        });
    };

    const fetchSubcategory = (pickedSubcategory) => {
        setProduct(prevState => {
            return {...prevState, subcategory: pickedSubcategory};
        });
    };

    return (
        <>
            {loading ? (<Loader/>) : (
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
                        <label className={scss.label_input}>Код товару
                            <input
                                className={scss.input}
                                name='code'
                                placeholder='Введіть код товару'
                                required
                                value={code}
                                onChange={handleChangeDetails}
                            />
                        </label>
                    </div>
                    {categories !== null && (<CategoriesList categories={categories} fetchCategory={fetchCategory}/>)}
                    {subCategories !== null && (<SubcategoriesList subCategories={subCategories} fetchSubcategory={fetchSubcategory}/>)}
                    <button type='submit'>Додати товар</button>
                </form>
            </div>
            )}
        </>
    );
  };
  
export default AddProductForm;