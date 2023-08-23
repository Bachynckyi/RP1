import scss from './ModalConfirmation.module.scss';
import { useEffect } from 'react';
import {AiOutlineCloseCircle} from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { deleteSubcategory } from "../../../../redux/subcategory/subcategory-operations";
import Loader from 'components/Loader/Loader';
import { isLoading } from '../../../../redux/subcategory/subcategory-selectors';
import { userToken } from 'redux/auth/auth-selectors';

const ModalConfirmation = ({modalConfirmation, setModalConfirmation, _id}) => {
    const dispatch = useDispatch();
    const loading = useSelector(isLoading);
    const token = useSelector(userToken);

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
    }

    const onClick = () => {
        try{
            dispatch(deleteSubcategory({token, _id}))
            .then(closeModal())
          }
          catch(error){
            console.log(error)
          }
    };

    return (
        <div className={scss.container}>
            <div className={!modalConfirmation ? (scss.modal) : (scss.modal_active)} onClick={closeModal}>
                <div className={!modalConfirmation ? (scss.modal_content) : (scss.modal_content_active)} onClick={e => e.stopPropagation()}>
                    {loading === true ? (<Loader/>) : 
                    (
                    <>
                        <button className={scss.button_close}type="button" onClick={closeModal}><AiOutlineCloseCircle className={scss.icon_close}/></button>
                        <h1>Увага!!!</h1>
                        <h2>При видаленні категорії відбудеться видалення всіх підкатегорій та товарів, що належать до цієї категорії!!!</h2>
                        <button type='button' onClick={onClick}>Підтвердити</button>
                    </>
                    )}
                </div>
            </div>
        </div>
    )
  };
  
export default ModalConfirmation;


