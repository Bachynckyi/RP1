import Footer from "components/Footer/Footer";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState} from 'react';
import { getProductBySearch }from '../../redux/product/product-operations';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from "pages/ProductPage/ProductList/ProductList";
import Loader from "components/Loader/Loader";
import { isLoading } from '../../redux/product/product-selectors';
import Modal from "components/Modal/Modal";
import scss from './SearchPage.module.scss';
import ScrollToTop from "react-scroll-to-top";
import {FiArrowUpCircle} from "react-icons/fi";

const SearchPage = () => {
  const loading = useSelector(isLoading);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [productList, setProductList] = useState({});
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    try{
      const search = searchParams.get("search");
      dispatch(getProductBySearch(search))
          .then(response => setProductList(response.payload.data.filter(item => item.active === true)));
    }
    catch(error){
      console.log(error);
    };
    }, [dispatch, searchParams])

    const fetchProduct = (product) => {
      setProduct(product);
      setModalActive(true);
    };

    return (
      <>
      <div className={scss.container}>
        {loading ? (<Loader/>) :
         (<>
            {Object.keys(productList).length !== 0 ?
              (<ProductList productList={productList} fetchProduct={fetchProduct}/>)
            : 
              (<p className={scss.item_notFound}>Нажаль по вашому запиту нічого не знайдено, спробуйте ще раз.</p>)}
          </>)}
          <ScrollToTop 
                smooth
                top={500}
                className={scss.button_scrollTop}
                component={<FiArrowUpCircle style={{width: "100%", height: "100%"}}/>}
          />
          <Modal 
            modalActive={modalActive} 
            setModalActive={setModalActive} 
            product={product} 
          />
      </div>
      <Footer/>
      </>
    );
  };
  
export default SearchPage;



