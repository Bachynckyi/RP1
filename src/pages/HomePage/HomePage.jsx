import scss from './HomePage.module.scss';
import Footer from "components/Footer/Footer";
import { useDispatch } from 'react-redux';
import { useState, useEffect} from 'react';
import { getAllCategories } from '../../redux/category/category-operations';
import SlickCarousel from 'components/SlickCarousel/SlickCarousel';
import Loader  from '../../components/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import CategoryItem from './CategoryItem/CategoryItem';
import Search from 'components/Search/Search';
import { getAllPhotoSlider } from 'redux/product/product-operations';

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [categories, setCategories] = useState(null);
  const [sliderList, setSliderList] = useState({});

  useEffect(() => {
    try{
        dispatch(getAllCategories())
        .then(response => setCategories(response.payload.data))
        dispatch(getAllPhotoSlider())
        .then(response => setSliderList(response.payload.data))
    }
    catch(error){
        console.log(error)
    };
}, [dispatch]);

  const pickCategory = (category) => {
    navigate(`/catalog/${category}`);
  };

  return (
    <>
    {categories === null ? (<Loader/>) : (
      <>
      <div className={scss.container}>
        <div className={scss.page_container}>
          {window.innerWidth >= 1024 ? (<p className={scss.notUSED}></p>) : (<Search/>)}
          <div className={scss.slick_container}>
            <SlickCarousel sliderList={sliderList}/>
          </div>
          <ul className={scss.category_list}>
            {categories.map(({ _id, ...props }) => {
              return (<CategoryItem key={_id} {...props}pickCategory={pickCategory}/>)
            })}
          </ul>
        </div>
      </div>
      <Footer/>
      </>
      )}
      </>
  );
};

export default HomePage;