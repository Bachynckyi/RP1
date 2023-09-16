import { useEffect, useState, useCallback } from 'react';
import scss from './UpdateCategory.module.scss';
import { updateCategoryWithPhoto, updateCategoryWithoutPhoto, updateStatusCategory } from 'redux/category/category-operations';
import { useDispatch, useSelector } from 'react-redux';
import { userToken } from 'redux/auth/auth-selectors';
import ModalConfirmation from '../ModalConfirmation/ModalConfirmation';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllCategories } from 'redux/category/category-operations';
import { userEmail } from 'redux/auth/auth-selectors';
import ForbiddenPage from "pages/ForbiddenPage/ForbiddenPage";

const initialState = {
    nameCategory: "",
    photoCategory: "",
    descriptionCategory: "",
    _id: "",
    active: "",
  };

const UpdateCategory = () => {
    const [category, setCategory] = useState({...initialState});
    const { nameCategory, descriptionCategory, photoCategory, _id, active} = category;
    const [modalConfirmation, setModalConfirmation] = useState(false);
    const dispatch = useDispatch();
    const token = useSelector(userToken);
    const params = useParams();
    const navigate = useNavigate();
    const userEmailVerify = useSelector(userEmail);

    useEffect(() => {
        dispatch(getAllCategories())
        .then(response => {
            setCategory(response.payload.data.filter(item => item.category === params.category)[0])
        })

    }, [params.category, dispatch]);
    

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
        else {
            setCategory(prevState => {
                return {...prevState, [name]: value};
            });
        }
    },
      [setCategory]
    );

    const onSubmit = () => {
        if(typeof(photoCategory) === "string" ){
            const data = {nameCategory, descriptionCategory};
            const sendData = async ({token, data, _id}) => {
                try {
                dispatch(updateCategoryWithoutPhoto({token, data, _id}));
                } 
                catch (error) {
                  console.log(error)
                }
              };
            sendData({token, data, _id});
        }
        else if (typeof(photoCategory) === "object"){
            const formData = new FormData();
            formData.append("photoCategory", photoCategory);
            formData.append("nameCategory", nameCategory);
            formData.append("descriptionCategory", descriptionCategory);
            const data = formData;
            const sendData = async ({token, data, _id}) => {
                try {
                dispatch(updateCategoryWithPhoto({token, data, _id}));
                } 
                catch (error) {
                  console.log(error)
                }
              };
            sendData({token, data, _id});
            navigate(`/profile`);
        }
    };

    const onClick = () => {
        setModalConfirmation(true);
    };

    const activeChange = () => {
        const data = { active: !active }
        dispatch(updateStatusCategory({token, data, _id}));
        setCategory(initialState);
        navigate(`/profile`);
    };

    return (
        <>
        {userEmailVerify === "colorfarb@gmail.com" ? (
            <>
                <div className={scss.page_container}>
                <div className={scss.container}>
                        <h1 className={scss.title}>Змінити категорію "{nameCategory}"</h1>
                        <form className={scss.form_container} onSubmit={onSubmit}>
                        <div className={scss.product_form}>
                            <div className={scss.subcontainer_photo}>
                                <p className={scss.title_picture}>Фотографія категорії</p>                            
                                {typeof(photoCategory) === "string" ? 
                                    (<img 
                                        src={photoCategory} 
                                        alt="photoCategory"
                                        className={scss.product_picture}
                                    />) : 
                                    (<img 
                                        src={URL.createObjectURL(photoCategory)} 
                                        alt="photoCategory"
                                        className={scss.product_picture}
                                    />)}
                                    <input
                                    className={scss.input_photo}
                                    type='file'
                                    name="photoCategory"
                                    id='file'
                                    required
                                    accept="image/png, image/jpeg"
                                    onChange={handleChangeDetails}
                                />
                                <label htmlFor="file" className={scss.button_input_file}>Оберіть файл</label>
                            </div>
                            <div className={scss.menu_container}>
                                <label className={scss.label_input}>Назва категорії
                                <input
                                    className={scss.input_text}
                                    name='nameCategory'
                                    placeholder='Введіть назву категорії'
                                    required
                                    value={nameCategory}
                                    onChange={handleChangeDetails}
                                    maxLength="30"
                                />
                                </label>
                                <div className={scss.menu_buttons}>
                                    {active === true ? (
                                        <button type='button' className={scss.button} onClick={activeChange}>Деактивувати категорію</button>
                                    ) : (
                                        <button type='button' className={scss.button} onClick={activeChange}>Активувати категорію</button>
                                    )}
                                    <button type='button' className={scss.button} onClick={onSubmit}>Зберегти зміни</button>                
                                    <button type='button' className={scss.button} onClick={onClick}>Видалити категорію</button>
                                </div>
                            </div>
                            <label className={scss.label_textarea}>Опис категорії
                                <textarea
                                    className={scss.description_area}
                                    name='descriptionCategory'
                                    placeholder='Введіть опис'
                                    rows="20"
                                    cols="70"
                                    required
                                    value={descriptionCategory}
                                    onChange={handleChangeDetails}
                                    maxLength="300"
                                />
                            </label>
                        </div>
                        </form>
                    {modalConfirmation && (
                        <ModalConfirmation
                        modalConfirmation={modalConfirmation} 
                        setModalConfirmation={setModalConfirmation}
                        _id={_id}
                    />)}
                </div>
                </div>
            </>) : (<ForbiddenPage/>)}
        </>
    )
  };
  
export default UpdateCategory;


