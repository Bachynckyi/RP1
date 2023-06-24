import scss from './AddCategoryForm.module.scss';
import { useState, useCallback} from 'react';
import defaultPicture from '../../images/images.png';
import { addCategory } from 'redux/category/category-operations';
import { useDispatch, useSelector } from 'react-redux';
import { userToken } from 'redux/auth/auth-selectors';

const initialState = {
    nameCategory: "",
    photoCategory: "",
    routeCategory: "",
    descriptionCategory: "",
  };

const AddCategoryForm = () => {
    const dispatch = useDispatch();
    const token = useSelector(userToken);
    const [category, setCategory] = useState({...initialState});
    const { nameCategory, routeCategory, descriptionCategory, photoCategory} = category;
    
    const onSubmit = event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("photoCategory", photoCategory);
        formData.append("nameCategory", nameCategory);
        formData.append("routeCategory", routeCategory);
        formData.append("descriptionCategory", descriptionCategory);
        const data = formData;
        const sendData = async ({token, data}) => {
            try {
            dispatch(addCategory({token, data}));
            } 
            catch (error) {
              console.log(error)
            }
          };
        sendData({token, data});
        setCategory(initialState);
    };

    const handleChangeDetails = useCallback(({ target }) => {
        const {name, value } = target;
        if(name === "photoCategory"){
            setCategory(prevState => {
                return {...prevState, photoCategory: target.files[0]} 
            });
        }
        else if(name === "routeCategory"){
            setCategory(prevState => {
                return {...prevState, [name]: value.toLowerCase()};
            });
        }
        else {
            setCategory(prevState => {
                return {...prevState, [name]: value};
            });
        }
    },
      [setCategory]
    );

    return (
        <div className={scss.container}>
            <form className={scss.product_form} onSubmit={onSubmit}>
                <div>
                    {photoCategory !== "" ? 
                    (<img 
                        src={URL.createObjectURL(photoCategory)} 
                        alt="CategoryPhoto" 
                        className={scss.product_picture}
                        />)
                    :
                    (<img 
                        src={defaultPicture} 
                        alt="defaultPicture"
                        className={scss.product_picture}
                        />)}                      
                    <p className={scss.title_picture}>Фотографія категорії</p>
                        <input
                            type='file'
                            name="photoCategory"
                            required
                            accept="image/png, image/jpeg"
                            onChange={handleChangeDetails}
                        />
                </div> 
                <div> 
                    <label className={scss.label_input}>Назва категорії
                        <input
                            className={scss.input}
                            name='nameCategory'
                            placeholder='Введіть назву категорії'
                            required
                            value={nameCategory}
                            onChange={handleChangeDetails}
                        />
                    </label>
                    <label className={scss.label_input}>Назва категорії англійською мовою
                        <input
                            className={scss.input}
                            name='routeCategory'
                            placeholder='Введіть назву категорії англійською мовою'
                            required
                            value={routeCategory}
                            onChange={handleChangeDetails}
                        />
                    </label>
                    <label>Опис категорії
                            <textarea
                                className={scss.label_input}
                                name='descriptionCategory'
                                placeholder='Введіть опис'
                                rows="20"
                                cols="70"
                                required
                                value={descriptionCategory}
                                onChange={handleChangeDetails}
                            />
                    </label>
                </div>
                <button type='submit'>Додати категорію</button>
            </form>
        </div>
    );
  };
  
export default AddCategoryForm;