import scss from './ModalConfirmation.module.scss';
import { useEffect } from 'react';
import {AiOutlineCloseCircle} from "react-icons/ai";

const ModalConfirmation = ({modalConfirmation, setModalConfirmation, nameCategory}) => {

    useEffect(() => {
        const handleDownInEscape = e => {
          if (e.code === 'Escape') {
            closeModal();
          }
        };
        window.addEventListener('keydown', handleDownInEscape);
        return () => {
            window.removeEventListener('keydown', handleDownInEscape)
        };
        // eslint-disable-next-line
    }, [modalConfirmation]);

    const closeModal = () => {
        setModalConfirmation(false);
    };

    const onClick = () => {
        console.log(nameCategory)
    };

    return (
        <div className={scss.container}>
            <div className={!modalConfirmation ? (scss.modal) : (scss.modal_active)} onClick={closeModal}>
                <div className={!modalConfirmation ? (scss.modal_content) : (scss.modal_content_active)} onClick={e => e.stopPropagation()}>
                    <button className={scss.button_close}type="button" onClick={closeModal}><AiOutlineCloseCircle className={scss.icon_close}/></button>
                    <h1>Увага!!!</h1>
                    <h2>При видаленні категорії відбудеться видалення всіх підкатегорій та товарів, що належать до цієї категорії!!!</h2>
                    <button type='button' onClick={onClick}>Підтвердити</button>
                </div>
            </div>
        </div>
    )
  };
  
export default ModalConfirmation;


