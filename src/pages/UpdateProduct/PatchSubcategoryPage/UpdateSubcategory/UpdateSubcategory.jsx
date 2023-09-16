import { useEffect, useState, useCallback } from 'react';
import scss from './UpdateSubcategory.module.scss';
import { updateSubcategoryWithPhoto, updateSubcategoryWithoutPhoto, updateStatusSubcategory, getAllSubcategories } from '../../../../redux/subcategory/subcategory-operations';
import { useDispatch, useSelector } from 'react-redux';
import { userToken } from 'redux/auth/auth-selectors';
import { useNavigate, useParams } from 'react-router-dom';
import ModalConfirmation from '../ModalConfirmation/ModalConfirmation';
import { userEmail } from 'redux/auth/auth-selectors';
import ForbiddenPage from "pages/ForbiddenPage/ForbiddenPage";

const initialState = {
    nameSubcategory: "",
    photoSubcategory: "",
    descriptionSubcategory: "",
    _id: "",
    active: "",
  };

const UpdateSubcategory = ({pickedSubcategory}) => {
    const [subcategory, setSubcategory] = useState({...initialState});
    const {nameSubcategory, descriptionSubcategory, photoSubcategory, _id, active} = subcategory;
    const [modalConfirmation, setModalConfirmation] = useState(false);
    const dispatch = useDispatch();
    const token = useSelector(userToken);
    const params = useParams();
    const navigate = useNavigate();
    const userEmailVerify = useSelector(userEmail);

    useEffect(() => {
        dispatch(getAllSubcategories())
        .then(response => {
            setSubcategory(response.payload.data.filter(item => item.subcategory === params.subcategory)[0])
        })

    }, [params.subcategory, dispatch]);

    const handleChangeDetails = useCallback(({ target }) => {
        const {name, value } = target;
        if(name === "photoSubcategory"){
            if(target.files[0] === undefined){
                setSubcategory(prevState => {
                return {...prevState} 
            });
            }
            else {
                setSubcategory(prevState => {
                return {...prevState, photoSubcategory: target.files[0]} 
            });
            }
        }
        else {
            setSubcategory(prevState => {
                return {...prevState, [name]: value};
            });
        }
    },
      [setSubcategory]
    );

    const onSubmit = () => {
        if(typeof(photoSubcategory) === "string" ){
            const data = {nameSubcategory, descriptionSubcategory};
            const sendData = async ({token, data, _id}) => {
                try {
                dispatch(updateSubcategoryWithoutPhoto({token, data, _id}));
                } 
                catch (error) {
                  console.log(error)
                }
              };
            sendData({token, data, _id});
            navigate(`/profile`);
        }
        else if (typeof(photoSubcategory) === "object"){
            const formData = new FormData();
            formData.append("photoSubcategory", photoSubcategory);
            formData.append("nameSubcategory", nameSubcategory);
            formData.append("descriptionSubcategory", descriptionSubcategory);
            const data = formData;
            const sendData = async ({token, data, _id}) => {
                try {
                dispatch(updateSubcategoryWithPhoto({token, data, _id}));
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
        dispatch(updateStatusSubcategory({token, data, _id}));
        setSubcategory(initialState);
        navigate(`/profile`);
    };

    return (
        <>
        {userEmailVerify === "colorfarb@gmail.com" ? (
            <>
                <div className={scss.page_container}>
                <div className={scss.container}>
                        <h1 className={scss.title}>Змінити підкатегорію "{nameSubcategory}"</h1>
                        <form className={scss.form_container} onSubmit={onSubmit}>
                        <div className={scss.product_form}>
                            <div className={scss.subcontainer_photo}>
                                <p className={scss.title_picture}>Фотографія підкатегорії</p>                            
                                {typeof(photoSubcategory) === "string" ? 
                                    (<img 
                                        src={photoSubcategory} 
                                        alt="photoSubcategory"
                                        className={scss.product_picture}
                                    />) : 
                                    (<img 
                                        src={URL.createObjectURL(photoSubcategory)} 
                                        alt="photoCategory"
                                        className={scss.product_picture}
                                    />)}
                                    <input
                                    className={scss.input_photo}
                                    type='file'
                                    name="photoSubcategory"
                                    id='file'
                                    required
                                    accept="image/png, image/jpeg"
                                    onChange={handleChangeDetails}
                                />
                                <label htmlFor="file" className={scss.button_input_file}>Оберіть файл</label>
                            </div>
                            <div className={scss.menu_container}>
                                <label className={scss.label_input}>Назва підкатегорії
                                <input
                                    className={scss.input_text}
                                    name='nameSubcategory'
                                    placeholder='Введіть назву підкатегорії'
                                    required
                                    value={nameSubcategory}
                                    onChange={handleChangeDetails}
                                    maxLength="30"
                                />
                                </label>
                                <div className={scss.menu_buttons}>
                                    {active === true ? (
                                        <button type='button' className={scss.button} onClick={activeChange}>Деактивувати підкатегорію</button>
                                    ) : (
                                        <button type='button' className={scss.button} onClick={activeChange}>Активувати підкатегорію</button>
                                    )}
                                    <button type='button' className={scss.button} onClick={onSubmit}>Зберегти зміни</button>                
                                    <button type='button' className={scss.button} onClick={onClick}>Видалити підкатегорію</button>
                                </div>
                            </div>
                            <label className={scss.label_textarea}>Опис підкатегорії
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
  
export default UpdateSubcategory;


