import { useEffect, useState, useCallback } from 'react';
import scss from './Modal.module.scss';
import {AiOutlineCloseCircle} from "react-icons/ai"

const initialState = {
    nameCategory: "",
    photoCategory: "",
    category: "",
    descriptionCategory: "",
  };

const Modal = ({modalActive, setModalActive, pickedCategory}) => {
    const [category, setCategory] = useState({...initialState});
    const { nameCategory, descriptionCategory, photoCategory} = category;

    useEffect(() => {
        if(modalActive === true) {
            document.body.style.cssText = `overflow: hidden; padding-right: ${window.innerWidth - document.body.offsetWidth}px`
            setCategory({
                nameCategory: pickedCategory.nameCategory,
                descriptionCategory: pickedCategory.descriptionCategory,
                photoCategory: pickedCategory.photoCategory,
            })
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
    };

    const handleChangeDetails = useCallback(({ target }) => {
        const {name, value } = target;
        if(name === "photoCategory"){
            setCategory(prevState => {
                return {...prevState, photoCategory: URL.createObjectURL(target.files[0])} 
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
            <div className={!modalActive ? (scss.modal) : (scss.modal_active)} onClick={closeModal}>
                <div className={!modalActive ? (scss.modal_content) : (scss.modal_content_active)} onClick={e => e.stopPropagation()}>
                    <button className={scss.button_close}type="button" onClick={closeModal}><AiOutlineCloseCircle className={scss.icon_close}/></button>
                    <h1 className={scss.title}>Змінити категорію</h1>
                    <div className={scss.image_container}>
                        <p className={scss.image_title}>Фотографія категорії</p>
                            <img 
                            src={photoCategory} 
                            alt="defaultPicture"
                            className={scss.photo}
                            />
                        <input
                            className={scss.input_image}
                            type='file'
                            name="photoCategory"
                            required
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
                    <button type='submit' className={scss.button}>Зберегти зміни</button>                
                </div>
            </div>
        </div>
    )
  };
  
export default Modal;


