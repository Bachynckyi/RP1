import scss from './AddSubcategoryForm.module.scss';
import { useState, useCallback, useEffect} from 'react';
import defaultPicture from '../../images/images.png';
import { getAllCategories } from '../../redux/category/category-operations';
import { addSubcategory } from 'redux/subcategory/subcategory-operations';
import { useDispatch, useSelector } from 'react-redux';
import { userToken } from 'redux/auth/auth-selectors';
import CategoriesList from '../CategoryList/CategoryList';
import { isLoading } from '../../redux/category/category-selectors';
import Loader  from '../../components/Loader/Loader';
import Notiflix from 'notiflix';


const initialState = {
    nameSubcategory: "",
    photoSubcategory: "",
    subcategory: "",
    descriptionSubcategory: "",
    category: "",
    nameCategory: "",
  };

const AddSubCategoryForm = () => {
    const dispatch = useDispatch();
    const token = useSelector(userToken);
    const loading = useSelector(isLoading);
    const [categories, setCategories] = useState(null);
    const [SubCategory, setsubCategory] = useState({...initialState});
    const { nameSubcategory, photoSubcategory, subcategory, descriptionSubcategory, category, nameCategory, active} = SubCategory;

    useEffect(() => {
        try{
            dispatch(getAllCategories())
            .then(response => setCategories(response.payload.data))
        }
        catch(error){
            console.log(error)
        };
    }, [dispatch]);

    const fetchCategory = (nameCategory, category) => {
        setsubCategory(prevState => {
            return {...prevState, nameCategory: nameCategory, category: category};
        });
    };
    
    const onSubmit = event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("photoSubcategory", photoSubcategory);
        formData.append("nameSubcategory", nameSubcategory);
        formData.append("subcategory", subcategory);
        formData.append("descriptionSubcategory", descriptionSubcategory);
        formData.append("nameCategory", nameCategory);
        formData.append("category", category);
        formData.append("active", active);
        const data = formData;
        dispatch(addSubcategory({token, data}))
            .then(response => {
                if(Object.keys(response.payload).length !== 0){
                    Notiflix.Notify.success('Нова підкатегорія успішно створена', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
                    setsubCategory(initialState);
                }
                else {
                    Notiflix.Notify.failure('Помилка при додаванні', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
                    setsubCategory(initialState);
                }
            });
    };

    const handleChangeDetails = useCallback(({ target }) => {
        const {name, value } = target;
        if(name === "photoSubcategory"){
            setsubCategory(prevState => {
                return {...prevState, photoSubcategory: target.files[0]} 
            });
        }
        else if(name === "subcategory"){
            setsubCategory(prevState => {
                return {...prevState, [name]: value.toLowerCase().split(/\s+/).join('-')};
            });
        }
        else if(name === "active"){
            if(target.value === "true") {
                setsubCategory(prevState => {
                    return {...prevState, [name]: true};
                });
            }
            else {
                setsubCategory(prevState => {
                    return {...prevState, [name]: false};
                });
            }
        }
        else {
            setsubCategory(prevState => {
                return {...prevState, [name]: value};
            });
        }
    },
      [setsubCategory]
    );

    return (
        <div>
            {loading ? (<Loader/>) : (
            <div className={scss.container}>
                <form className={scss.form_container} onSubmit={onSubmit}>
                    <div className={scss.product_form}>
                        <div className={scss.subcontainer}>
                        <div className={scss.subcontainer_photo}>
                            <p className={scss.title_picture}>Фотографія підкатегорії</p>
                            {photoSubcategory !== "" ? 
                            (<img 
                                src={URL.createObjectURL(photoSubcategory)} 
                                alt="SubcategoryPhoto" 
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
                                    name="photoSubcategory"
                                    required
                                    id='file'
                                    accept="image/png, image/jpeg"
                                    onChange={handleChangeDetails}
                                />
                                <label htmlFor="file" className={scss.button_input_file}>Оберіть файл</label>
                        </div> 
                        <div> 
                            <label className={scss.label_input}>Назва підкатегорії
                                <input
                                    className={scss.input_text}
                                    name='nameSubcategory'
                                    placeholder='Введіть назву категорії'
                                    required
                                    value={nameSubcategory}
                                    onChange={handleChangeDetails}
                                    maxLength="30"
                                />
                            </label>
                            <label className={scss.label_input}>Назва категорії англійською мовою
                                <input
                                    className={scss.input_text}
                                    name='subcategory'
                                    placeholder='Введіть назву категорії англійською мовою'
                                    required
                                    value={subcategory}
                                    onChange={handleChangeDetails}
                                    maxLength="30"
                                />
                            </label>
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
                        <label className={scss.label_textarea}>Додати опис підкатегорії
                                    <textarea
                                        className={scss.description_area}
                                        name='descriptionSubcategory'
                                        placeholder='Введіть опис'
                                        rows="20"
                                        cols="70"
                                        required
                                        value={descriptionSubcategory}
                                        onChange={handleChangeDetails}
                                        maxLength="300"
                                    />
                        </label>
                        </div>
                        {categories !== null && (<CategoriesList categories={categories} fetchCategory={fetchCategory}/>)}
                    </div>
                    <button type='submit' className={scss.button_submit}>Додати підкатегорію</button>
                </form>
            </div>)}
        </div>
    );
  };
  
export default AddSubCategoryForm;