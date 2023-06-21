import scss from './AddCategoryForm.module.scss';
import { useState, useCallback} from 'react';
import defaultPicture from '../../images/images.png';
import { addCategory } from 'redux/category/category-operations';
import { useDispatch, useSelector } from 'react-redux';
import { userToken } from 'redux/auth/auth-selectors';

const initialState = {
    title: "",
    photo: "",
  };

const AddCategoryForm = () => {
    const dispatch = useDispatch();
    const token = useSelector(userToken);
    const [product, setProduct] = useState({...initialState});
    const { title, photo} = product;
    
    const onSubmit = event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("photo", photo);
        formData.append("title", title);
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
        setProduct(initialState);
    };

    const handleChangeDetails = useCallback(({ target }) => {
        const {name, value } = target;
        if(name === "photo"){
            setProduct(prevState => {
                return {...prevState, photo: target.files[0]} 
            });
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
                    <label className={scss.label_input}>Назва категорії
                        <input
                            className={scss.input}
                            name='title'
                            placeholder='Введіть назву категорії'
                            required
                            value={title}
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