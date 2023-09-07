import scss from './AddCategoryForm.module.scss';
import { useState, useCallback} from 'react';
import defaultPicture from '../../images/images.png';
import { addCategory } from 'redux/category/category-operations';
import { useDispatch, useSelector } from 'react-redux';
import { userToken } from 'redux/auth/auth-selectors';

const initialState = {
    nameCategory: "",
    photoCategory: "",
    category: "",
    descriptionCategory: "",
    active: "",
  };

const AddCategoryForm = () => {
    const dispatch = useDispatch();
    const token = useSelector(userToken);
    const [Category, setCategory] = useState({...initialState});
    const { nameCategory, category, descriptionCategory, photoCategory, active} = Category;
    
    const onSubmit = event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("photoCategory", photoCategory);
        formData.append("nameCategory", nameCategory);
        formData.append("category", category);
        formData.append("descriptionCategory", descriptionCategory);
        formData.append("active", active);
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
            if(target.files[0] === undefined){
                setCategory(prevState => {
                return {...prevState} 
            });
            }
            else {
                setCategory(prevState => {
                return {...prevState, photoCategory: target.files[0]} 
            });
            }
        }
        else if(name === "category"){
            setCategory(prevState => {
                return {...prevState, [name]: value.toLowerCase().split(/\s+/).join('-')};
            });
        }
        else if(name === "active"){
            if(target.value === "true") {
                setCategory(prevState => {
                    return {...prevState, [name]: true};
                });
            }
            else {
                setCategory(prevState => {
                    return {...prevState, [name]: false};
                });
            }
        }
        else {
            setCategory(prevState => {
                return {...prevState, [name]: value};
            });
        }
    },
    // eslint-disable-next-line 
      [setCategory, Category]
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
                            maxLength="30"
                        />
                    </label>
                    <label className={scss.label_input}>Назва категорії англійською мовою
                        <input
                            className={scss.input}
                            name='category'
                            placeholder='Введіть назву категорії англійською мовою'
                            required
                            value={category}
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
                </div>
                <button type='submit'>Додати категорію</button>
            </form>
        </div>
    );
  };
  
export default AddCategoryForm;