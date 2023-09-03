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
        const sendData = async ({token, data}) => {
            try {
            dispatch(addSubcategory({token, data}));
            } 
            catch (error) {
              console.log(error)
            }
          };
        sendData({token, data});
        setsubCategory(initialState);
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
                <form className={scss.product_form} onSubmit={onSubmit}>
                    <div>
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
                        <p className={scss.title_picture}>Фотографія підкатегорії</p>
                            <input
                                type='file'
                                name="photoSubcategory"
                                required
                                accept="image/png, image/jpeg"
                                onChange={handleChangeDetails}
                            />
                    </div> 
                    <div> 
                        <label className={scss.label_input}>Назва підкатегорії
                            <input
                                className={scss.input}
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
                                className={scss.input}
                                name='subcategory'
                                placeholder='Введіть назву категорії англійською мовою'
                                required
                                value={subcategory}
                                onChange={handleChangeDetails}
                            />
                        </label>
                        <label>Опис категорії
                                <textarea
                                    className={scss.label_input}
                                    name='descriptionSubcategory'
                                    placeholder='Введіть опис'
                                    rows="20"
                                    cols="70"
                                    required
                                    value={descriptionSubcategory}
                                    onChange={handleChangeDetails}
                                />
                        </label>
                    </div>
                    {categories !== null && (<CategoriesList categories={categories} fetchCategory={fetchCategory}/>)}
                        <div>
                            <h2>Оберіть тип активності</h2>
                            <div className={scss.input_container}>
                                <input 
                                    className={scss.input_radiobutton}
                                    type="radio" 
                                    id="active" 
                                    name="active" 
                                    value="true"
                                    required
                                    onChange={handleChangeDetails}
                                />
                                <label htmlFor="active" className={scss.label_radiobutton}>Активний</label>
                            </div>
                            <div className={scss.input_container}>
                                <input 
                                    className={scss.input_radiobutton}
                                    type="radio" 
                                    id="notActive"
                                    name="active" 
                                    value="false"
                                    required
                                    onChange={handleChangeDetails}
                                />
                                <label htmlFor="notActive" className={scss.label_radiobutton}>Не активний</label>
                            </div>
                        </div>
                    <button type='submit'>Додати категорію</button>
                </form>
            </div>)}
        </div>
    );
  };
  
export default AddSubCategoryForm;