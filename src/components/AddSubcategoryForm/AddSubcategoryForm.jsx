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
    routeSubcategory: "",
    descriptionSubcategory: "",
    category: "",
  };

const AddSubCategoryForm = () => {
    const dispatch = useDispatch();
    const token = useSelector(userToken);
    const loading = useSelector(isLoading);
    const [categories, setCategories] = useState(null);
    const [subCategory, setsubCategory] = useState({...initialState});
    const { nameSubcategory, photoSubcategory, routeSubcategory, descriptionSubcategory, category} = subCategory;

    useEffect(() => {
        try{
            dispatch(getAllCategories())
            .then(response => setCategories(response.payload.data))
        }
        catch(error){
            console.log(error)
        };
    }, [dispatch]);

    const fetchCategory = (pickedCategory) => {
        setsubCategory(prevState => {
            return {...prevState, category: pickedCategory};
        });
    };
    
    const onSubmit = event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("photoSubcategory", photoSubcategory);
        formData.append("nameSubcategory", nameSubcategory);
        formData.append("routeSubcategory", routeSubcategory);
        formData.append("descriptionSubcategory", descriptionSubcategory);
        formData.append("category", category);
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
        else if(name === "routeSubcategory"){
            setsubCategory(prevState => {
                return {...prevState, [name]: value.toLowerCase()};
            });
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
                            />
                        </label>
                        <label className={scss.label_input}>Назва категорії англійською мовою
                            <input
                                className={scss.input}
                                name='routeSubcategory'
                                placeholder='Введіть назву категорії англійською мовою'
                                required
                                value={routeSubcategory}
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
                    <button type='submit'>Додати категорію</button>
                </form>
            </div>)}
        </div>
    );
  };
  
export default AddSubCategoryForm;