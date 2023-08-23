import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { isLoading } from '../../redux/product/product-selectors';
import { getProductByCategory } from '../../redux/product/product-operations';
import Loader  from '../../components/Loader/Loader';
import ProductList from './ProductList/ProductList';
import { useParams } from "react-router-dom";
import Modal from '../../components/Modal/Modal';
import Search from 'components/Search/Search';
import Footer from 'components/Footer/Footer';
import scss from "./ProductPage.module.scss";

const ProductPage = () => {
    const category = useParams();
    const dispatch = useDispatch();
    const loading = useSelector(isLoading);
    const subcategorySearch = category.subcategory;
    const [product, setProduct] = useState({});
    const [productList, setProductList] = useState({});
    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        try {
            dispatch(getProductByCategory(subcategorySearch))
              .then(response => setProductList(response.payload.data));
        }
        catch(error){
            console.log(error);
    };  
    }, [dispatch, subcategorySearch]);

    const fetchProduct = (product) => {
      setProduct(product);
      setModalActive(true);
    };

    return (
      <>
        <div className={scss.container}>
        {loading === true? (<Loader/>) :
          ( <>
            <Search/>
            <div className={scss.product_container}>
              {Object.keys(productList).length !== 0 ?
              (<ProductList productList={productList} fetchProduct={fetchProduct}/>)
              : 
              (<p></p>)}
            </div>  
            <Modal 
              modalActive={modalActive} 
              setModalActive={setModalActive} 
              product={product} 
            />
            <Footer/>
          </>)}
        </div>
      </>
    );
};
  
export default ProductPage;









