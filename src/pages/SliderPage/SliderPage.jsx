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
    }, [dispatch]);

    const handleChange = useCallback(({ target }) => {
        setphotoSlider(target.files[0]) 
    }
    ,[setphotoSlider]);

    const onClick = () => {
        const data = new FormData();
        data.append("photoSlider", photoSlider);
        dispatch(addPhotoSlider({token, data}))
            .then(() => {
                setphotoSlider(null);
                window.location.reload();
            })

    };

    const deletePhoto = (event) => {
        const id = event.target.id
        dispatch(deletePhotoSlider({token, id}))
            .then(() => {
                window.location.reload();
            })
    };

    return (
        <>
            {userEmailVerify === "colorfarb@gmail.com" ? (
                <div className={scss.container}>
                    {loading === true ? (<Loader/>) : (
                        <div>
                            <h1 className={scss.title}>Редагувати слайдер</h1>
                            <div>
                                <h2 className={scss.subtitle}>Додати нове фото</h2>
                                <div>
                                {photoSlider ? 
                                (<img 
                                    src={URL.createObjectURL(photoSlider)} 
                                    alt="newPhotoSlider"
                                    className={scss.product_picture}
                                    />)
                                    :
                                    (<img 
                                        src={defaultPicture} 
                                        alt="defaultPicture"
                                        className={scss.product_picture}
                                        />)}                      
                                    <p className={scss.title_picture}>Нова фотографія для слайдеру</p>
                                        <input
                                            type='file'
                                            name="photoSlider"
                                            required
                                            accept="image/png, image/jpeg"
                                            onChange={handleChange}
                                        />
                                </div>
                                <button type='button' onClick={onClick}>Додати зображення до слайдеру</button>
                            </div>
                            {Object.keys(sliderList).length  !== 0 && (
                                <ul>Галерея зображень
                                    {sliderList.map((slide) => 
                                    (
                                    <li key={slide._id}>
                                        <img
                                            src={slide.photoSlider}
                                            alt='photoSlider'
                                            className={scss.product_picture}
                                        />
                                        <button type='button' id={slide._id} onClick={deletePhoto}>Видалити зі слайдеру</button>   
                                    </li>
                                    )
                                    )}
                                </ul>
                            )}
                        </div> 
                    )}
                </div>)
            : (<ForbiddenPage/>)}
        </>
    );
  };
  
export default SliderPage;




