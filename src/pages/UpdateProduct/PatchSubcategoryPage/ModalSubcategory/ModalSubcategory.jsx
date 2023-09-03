import { useEffect, useState, useCallback } from 'react';
import scss from './ModalSubcategory.module.scss';
import {AiOutlineCloseCircle} from "react-icons/ai";
import { updateSubcategoryWithPhoto, updateSubcategoryWithoutPhoto, updateStatusSubcategory } from '../../../../redux/subcategory/subcategory-operations';
import { useDispatch, useSelector } from 'react-redux';
import { userToken } from 'redux/auth/auth-selectors';
import ModalConfirmation from '../ModalConfirmation/ModalConfirmation';

const initialState = {
    nameSubcategory: "",
    photoSubcategory: "",
    descriptionSubcategory: "",
    _id: "",
    active: "",
  };

const ModalSubcategory = ({modalActive, setModalActive, pickedSubcategory}) => {
    const [subcategory, setSubcategory] = useState({...initialState});
    const { nameSubcategory, descriptionSubcategory, photoSubcategory, _id, active} = subcategory;
    const [modalConfirmation, setModalConfirmation] = useState(false);
    const dispatch = useDispatch();
    const token = useSelector(userToken);

    useEffect(() => {
        if(modalActive === true) {
            document.body.style.cssText = `overflow: hidden; padding-right: ${window.innerWidth - document.body.offsetWidth}px`
            setSubcategory({
                nameSubcategory: pickedSubcategory.nameSubcategory,
                descriptionSubcategory: pickedSubcategory.descriptionSubcategory,
                photoSubcategory: pickedSubcategory.photoSubcategory,
                _id: pickedSubcategory._id,
                active: pickedSubcategory.active,
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
        setSubcategory(initialState);
        document.getElementById("input_file").value = "";
    };

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
            closeModal();
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
            closeModal();
        }
    };

    const onClick = () => {
        setModalConfirmation(true);
    };

    const activeChange = () => {
        const data = { active: !active }
        dispatch(updateStatusSubcategory({token, data, _id}));
        setModalActive(false);
        setSubcategory(initialState);
    };

    return (
        <div className={scss.container}>
            <div className={!modalActive ? (scss.modal) : (scss.modal_active)} onClick={closeModal}>
                <div className={!modalActive ? (scss.modal_content) : (scss.modal_content_active)} onClick={e => e.stopPropagation()}>
                    <button className={scss.button_close}type="button" onClick={closeModal}><AiOutlineCloseCircle className={scss.icon_close}/></button>
                    <h1 className={scss.title}>Змінити категорію</h1>
                    <div className={scss.image_container}>
                        <p className={scss.image_title}>Фотографія категорії</p>                            
                        {typeof(photoSubcategory) === "string" ? 
                            (<img 
                                src={photoSubcategory} 
                                alt="photoSubcategory"
                                className={scss.photo}
                            />) : 
                            (<img 
                                src={URL.createObjectURL(photoSubcategory)} 
                                alt="photoSubcategory"
                                className={scss.photo}
                            />)}
                        <input
                            id='input_file'
                            className={scss.input_image}
                            type='file'
                            name="photoSubcategory"
                            accept="image/png, image/jpeg"
                            onChange={handleChangeDetails}
                        />
                    </div>
                    <div>
                        <label className={scss.name_category}>Назва категорії
                        <input
                            name='nameSubcategory'
                            placeholder='Введіть назву категорії'
                            required
                            value={nameSubcategory}
                            onChange={handleChangeDetails}
                        />
                        </label>
                        <label>Опис категорії
                            <textarea
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
                    <div>
                        {active === true ? (
                            <button type='button' onClick={activeChange}>Деактивувати підкатегорію та товари</button>
                        ) : (
                            <button type='button' onClick={activeChange}>Активувати підкатегорію та товари</button>
                        )}
                    </div>
                    <button type='button' className={scss.button} onClick={onSubmit}>Зберегти зміни</button>                
                    <button type='button' className={scss.button} onClick={onClick}>Видалити підкатегорію</button>
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
  
export default ModalSubcategory;


