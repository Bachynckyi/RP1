import { userEmail } from 'redux/auth/auth-selectors';
import ForbiddenPage from "../ForbiddenPage/ForbiddenPage";
import scss from './SliderPage.module.scss';
import { useEffect, useState, useCallback } from 'react';
import { getAllPhotoSlider, addPhotoSlider, deletePhotoSlider } from 'redux/product/product-operations';
import { isLoading } from '../../redux/product/product-selectors';
import Loader  from '../../components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { userToken } from 'redux/auth/auth-selectors';
import defaultPicture from '../../images/images.png';
import Footer from 'components/Footer/Footer';
import Notiflix from 'notiflix';

const SliderPage = () => {
    const userEmailVerify = useSelector(userEmail);
    const dispatch = useDispatch();
    const loading = useSelector(isLoading);
    const [sliderList, setSliderList] = useState({});
    const token = useSelector(userToken);
    const [photoSlider, setphotoSlider] = useState(null);

    useEffect(() => {
        dispatch(getAllPhotoSlider())
            .then(response => setSliderList(response.payload.data))
    }, [dispatch, photoSlider]);

    const handleChange = useCallback(({ target }) => {
        setphotoSlider(target.files[0]) 
    },[setphotoSlider]);

    const onClick = () => {
        const data = new FormData();
        data.append("photoSlider", photoSlider);
        if(photoSlider !== null){
            dispatch(addPhotoSlider({token, data}))
            .then((response) => {
                if(Object.keys(response.payload).length !== 0){
                    Notiflix.Notify.success('Новий постер успішно доданий', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
                    setphotoSlider(null);
                }
                else {
                    Notiflix.Notify.failure('Помилка при додаванні', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
                    setphotoSlider(null);
                }
            })
        }
    };

    const deletePhoto = (event) => {
        const id = event.target.id
        dispatch(deletePhotoSlider({token, id}))
            .then((response) => {
                if(response.payload.data === "Deleted"){
                    Notiflix.Notify.success('Постер успішно видалений', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
                    setphotoSlider(null);
                    setSliderList(sliderList.filter(item => item._id !== id));
                }
                else {
                    Notiflix.Notify.failure('Помилка при видаленні', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
                }
            });
    };

    return (
        <>
            {userEmailVerify === "colorfarb@gmail.com" ? (
                <>
                    {loading === true ? (<Loader/>) : (
                        <div>
                        <div className={scss.container}>
                            <h1 className={scss.title}>Редагувати слайдер</h1>
                            <div className={scss.subcontainer_photo}>
                                <h2 className={scss.subtitle}>Додати нове фото</h2>
                                {photoSlider ? 
                                (<img 
                                    src={URL.createObjectURL(photoSlider)} 
                                    alt="newPhotoSlider"
                                    className={scss.product_picture_active}
                                    />)
                                    :
                                    (<img 
                                        src={defaultPicture} 
                                        alt="defaultPicture"
                                        className={scss.product_picture}
                                        />)}                      
                                    <input
                                        className={scss.input_photo}
                                        id="file"
                                        type='file'
                                        name="photoSlider"
                                        required
                                        accept="image/png, image/jpeg"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="file" className={scss.button_input_file}>Оберіть файл</label>
                                <button type='button' className={scss.button} onClick={onClick}>Додати зображення до слайдеру</button>
                            </div>
                            {Object.keys(sliderList).length  !== 0 && (
                                <div className={scss.gallery}>
                                    <p className={scss.subtitle}>Галерея зображень</p>
                                    <ul className={scss.gallery_list}>
                                        {sliderList.map((slide) => 
                                        (
                                        <li key={slide._id} className={scss.gallery_item}>
                                            <img
                                                src={slide.photoSlider}
                                                alt='photoSlider'
                                                className={scss.gallery_picture}
                                            />
                                            <button type='button' className={scss.button} id={slide._id} onClick={deletePhoto}>Видалити зі слайдеру</button>   
                                        </li>
                                        )
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <Footer/>
                        </div>
                    )}
                </>)
            : (<ForbiddenPage/>)}
        </>
    );
  };
  
export default SliderPage;




