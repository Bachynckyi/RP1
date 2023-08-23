import { useEffect, useState, useCallback } from 'react';
import scss from "./ModalCategory.module.scss";
import {AiOutlineCloseCircle} from "react-icons/ai";
import { updateCategoryWithPhoto, updateCategoryWithoutPhoto } from 'redux/category/category-operations';
import { useDispatch, useSelector } from 'react-redux';
import { userToken } from 'redux/auth/auth-selectors';
import ModalConfirmation from '../ModalConfirmation/ModalConfirmation';

const initialState = {
    nameCategory: "",
    photoCategory: "",
    descriptionCategory: "",
    _id: "",
  };

const ModalCategory = ({modalActive, setModalActive, pickedCategory}) => {
    const [category, setCategory] = useState({...initialState});
    const { nameCategory, descriptionCategory, photoCategory, _id} = category;
    const [modalConfirmation, setModalConfirmation] = useState(false);
    const dispatch = useDispatch();
    const token = useSelector(userToken);

    useEffect(() => {
        if(modalActive === true) {
            document.body.style.cssText = `overflow: hidden; padding-right: ${window.innerWidth - document.body.offsetWidth}px`
            setCategory({
                nameCategory: pickedCategory.nameCategory,
                descriptionCategory: pickedCategory.descriptionCategory,
                photoCategory: pickedCategory.photoCategory,
                _id: pickedCategory._id,
            });
        }
        const handleDownInEscape = e => {
          if (e.code === 'Escape') {
            closeModal();
          }
        };
        window.addEventListener('keydown', handleDownInEscape);
        return () => {
            document.body.style.cssText = `overflow: auto; padding-right: 0px`
            window.removeEventListener('keydown', handleDownInEscape)
        };
        // eslint-disable-next-line
    }, [modalActive]);
    
    const closeModal = () => {
        setModalActive(false);
        setCategory(initialState);
        document.getElementById("input_file").value = "";
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
            closeModal();
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
            closeModal();
        }

    };

    const onClick = () => {
        setModalConfirmation(true);
    };

    return (
        <div className={scss.container}>
            <div className={!modalActive ? (scss.modal) : (scss.modal_active)} onClick={closeModal}>
                <div className={!modalActive ? (scss.modal_content) : (scss.modal_content_active)} onClick={e => e.stopPropagation()}>
                    <button className={scss.button_close}type="button" onClick={closeModal}><AiOutlineCloseCircle className={scss.icon_close}/></button>
                    <h1 className={scss.title}>Змінити категорію</h1>
                    <div className={scss.image_container}>
                        <p className={scss.image_title}>Фотографія категорії</p>                            
                        {typeof(photoCategory) === "string" ? 
                            (<img 
                                src={photoCategory} 
                                alt="photoCategory"
                                className={scss.photo}
                            />) : 
                            (<img 
                                src={URL.createObjectURL(photoCategory)} 
                                alt="photoCategory"
                                className={scss.photo}
                            />)}
                        <input
                            id='input_file'
                            className={scss.input_image}
                            type='file'
                            name="photoCategory"
                            accept="image/png, image/jpeg"
                            onChange={handleChangeDetails}
                        />
                    </div>
                    <div>
                        <label className={scss.name_category}>Назва категорії
                        <input
                            name='nameCategory'
                            placeholder='Введіть назву категорії'
                            required
                            value={nameCategory}
                            onChange={handleChangeDetails}
                        />
                        </label>
                        <label>Опис категорії
                            <textarea
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
                    <button type='button' className={scss.button} onClick={onSubmit}>Зберегти зміни</button>                
                    <button type='button' className={scss.button} onClick={onClick}>Видалити категорію</button>
                </div>
            </div>
            {modalConfirmation && (
                <ModalConfirmation
                modalConfirmation={modalConfirmation} 
                setModalConfirmation={setModalConfirmation}
                _id={_id}
            />)}
        </div>
    )
  };
  
export default ModalCategory;


