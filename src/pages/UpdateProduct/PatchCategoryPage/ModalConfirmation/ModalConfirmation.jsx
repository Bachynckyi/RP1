import scss from './ModalConfirmation.module.scss';
import { useEffect } from 'react';
import {AiOutlineCloseCircle} from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory } from "../../../../redux/category/category-operations";
import Loader from 'components/Loader/Loader';
import { isLoading } from '../../../../redux/category/category-selectors';
import { userToken } from 'redux/auth/auth-selectors';
import { useNavigate } from 'react-router-dom';

const ModalConfirmation = ({modalConfirmation, setModalConfirmation, _id}) => {
    const dispatch = useDispatch();
    const loading = useSelector(isLoading);
    const token = useSelector(userToken);
    const navigate = useNavigate();

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
        dispatch(deleteCategory({token, _id}))
            .then(navigate(`/profile`))
    };

    return (
        <div className={scss.container}>
            <div className={!modalConfirmation ? (scss.modal) : (scss.modal_active)} onClick={closeModal}>
                <div className={!modalConfirmation ? (scss.modal_content) : (scss.modal_content_active)} onClick={e => e.stopPropagation()}>
                    {loading === true ? (<Loader/>) : 
                    (
                    <div className={scss.subcontainer}>
                        <button className={scss.button_close}type="button" onClick={closeModal}><AiOutlineCloseCircle className={scss.icon_close}/></button>
                        <p className={scss.error_message}>Увага !!!</p>
                        <p className={scss.error_text}>При видаленні категорії відбудеться видалення всіх підкатегорій та товарів, що належать до цієї категорії !!!</p>
                        <button type='button' onClick={onClick} className={scss.button_submit}>Підтвердити</button>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
  };
  
export default ModalConfirmation;


