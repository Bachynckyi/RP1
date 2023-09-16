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
import { getSubcategoryByCategory } from '../../redux/subcategory/subcategory-operations';
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
    active: "",
    top: "",
};

const AddProductForm = () => {
    const dispatch = useDispatch();
    const token = useSelector(userToken);
    const [product, setProduct] = useState({...initialState});
    const { title, description, price, color, type, photo, category, code, subcategory, active } = product;
    const [categories, setCategories] = useState(null);
    const [subCategories, setSubcategories] = useState(null);
    const loading = useSelector(isLoading);

    useEffect(() => {
        try{
            dispatch(getAllCategories())
            .then(response => setCategories(response.payload.data))
        }
        catch(error){
            console.log(error)
        };
    }, [dispatch])

    useEffect(() => {
        const categorySearch = category;
        if(categorySearch !== ""){
            dispatch(getSubcategoryByCategory(categorySearch))
            .then(response => {setSubcategories(response.payload.data)
        })
        }
    }, [category, dispatch])

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
        formData.append("active", active);
        formData.append("top", false);
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
        else if(name === "price"){
            setProduct(prevState => {
                return {...prevState, [name]: value.toLowerCase().split(/,/).join('.')};
            });
        }
        else if(name === "active"){
            if(target.value === "true") {
                setProduct(prevState => {
                    return {...prevState, [name]: true};
                });
            }
            else {
                setProduct(prevState => {
                    return {...prevState, [name]: false};
                });
            }
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
                    <div className={scss.subcontainer_text}>
                        <div className={scss.subcontainer_photo}>
                            <p className={scss.title_picture}>Фотографія товару</p>
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
                                    value={title}
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
                                    value={type}
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
                                    value={color}
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
                                    value={price}
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
                                    value={code}
                                    onChange={handleChangeDetails}
                                    maxLength="10"
                                />
                            </label>
                        </div>
                        <div>
                            <label className={scss.label_textarea}>Додати опис
                                <textarea
                                    className={scss.description_area}
                                    name='description'
                                    placeholder='Введіть опис'
                                    rows="20"
                                    cols="70"
                                    required
                                    value={description}
                                    onChange={handleChangeDetails}
                                />
                            </label>
                        </div>
                    </div>
                    <div className={scss.subcontainer_buttons}>
                        <div className={scss.menu_types}>
                        {categories !== null && (<CategoriesList categories={categories} fetchCategory={fetchCategory}/>)}
                        </div>
                        <div className={scss.menu_types}>
                        <p className={scss.title}>Оберіть підкатегорію товару</p>
                        {subCategories !== null && (<SubcategoriesList subCategories={subCategories} fetchSubcategory={fetchSubcategory}/>)}
                        </div>
                        <div className={scss.menu_types}>
                            <p className={scss.type_active}>Оберіть тип активності</p>
                            <div className={scss.input_container}>
                                <label htmlFor="active" className={scss.label}>
                                <input 
                                    className={scss.radio_button}
                                    type="radio" 
                                    id="active" 
                                    name="active" 
                                    value="true"
                                    required
                                    onChange={handleChangeDetails}
                                />
                                <span className={scss.custom_button}></span>
                                <span className={scss.button_name}>Активний</span>
                                </label>
                            </div>
                            <div className={scss.input_container}>
                                <label htmlFor="notActive" className={scss.label}>
                                <input 
                                    className={scss.radio_button}
                                    type="radio" 
                                    id="notActive"
                                    name="active" 
                                    value="false"
                                    required
                                    onChange={handleChangeDetails}
                                />
                                <span className={scss.custom_button}></span>
                                <span className={scss.button_name}>Не активний</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <button type='submit' className={scss.button_submit}>Додати товар</button>
                </form>

            </div>
            )}
        </>
    );
  };
  
export default AddProductForm;