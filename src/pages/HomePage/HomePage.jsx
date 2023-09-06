import scss from './HomePage.module.scss';
import Footer from "components/Footer/Footer";
import { useDispatch } from 'react-redux';
import { useState, useEffect} from 'react';
import { getAllCategories } from '../../redux/category/category-operations';
import SlickCarousel from 'components/SlickCarousel/SlickCarousel';
import Loader  from '../../components/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import CategoryItem from './CategoryItem/CategoryItem';
import { getAllPhotoSlider, getAllTopProducts } from 'redux/product/product-operations';
import ProductList from 'pages/ProductPage/ProductList/ProductList';
import Modal from "../../components/Modal/Modal";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [categories, setCategories] = useState(null);
  const [sliderList, setSliderList] = useState(null);
  const [productList, setProductList] = useState({});
  const [product, setProduct] = useState({});
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    try{
        dispatch(getAllCategories())
        .then(response => setCategories(response.payload.data.filter(item => item.active === true)))
        dispatch(getAllPhotoSlider())
        .then(response => setSliderList(response.payload.data))
        dispatch(getAllTopProducts())
        .then(response => setProductList(response.payload.data))
    }
    catch(error){
        console.log(error)
    };
}, [dispatch]);

  const pickCategory = (category) => {
    navigate(`/catalog/${category}`);
  };

  const fetchProduct = (product) => {
    setProduct(product);
    setModalActive(true);
    navigate(`/top/${product._id}`);
  };

  return (
    <>
    {categories === null ? (<Loader/>) : (
      <>
      <div className={scss.container}>
        <div className={scss.page_container}>
          <div className={scss.slick_container}>
            {sliderList !== null && (
              <SlickCarousel sliderList={sliderList}/>
            )}
          </div>
          <ul className={scss.category_list}>
            {categories.map(({ _id, ...props }) => {
              return (<CategoryItem key={_id} {...props} pickCategory={pickCategory}/>)
            })}
          </ul>
        </div>
        {Object.keys(productList).length !== 0 ?
              (
              <div className={scss.top_container}>
                <h2 className={scss.title}>Топ продажів</h2>
                <ProductList productList={productList} fetchProduct={fetchProduct}/>
              </div>)
              : 
          (<p></p>)}
      </div>
      <Modal 
        modalActive={modalActive} 
        setModalActive={setModalActive} 
        product={product} 
      />
      <Footer/>
      </>
      )}
      </>
  );
};

export default HomePage;