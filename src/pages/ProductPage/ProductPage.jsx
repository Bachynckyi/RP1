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
import Basket from 'components/Basket/Basket';
import scss from "./ProductPage.module.scss";

const ProductPage = () => {
    const category = useParams();
    const dispatch = useDispatch();
    const loading = useSelector(isLoading);
    const categorySearch = category.category;
    const [product, setProduct] = useState({});
    const [productList, setProductList] = useState({});
    const [modalActive, setModalActive] = useState(false);
    const [order, setOrder] = useState({});

    useEffect(() => {
        try {
            dispatch(getProductByCategory(categorySearch))
              .then(response => setProductList(response.payload.data));
        }
        catch(error){
            console.log(error);
    };  
    }, [dispatch, categorySearch]);

    const fetchProduct = (product) => {
      setProduct(product);
      setModalActive(true);
    };

    const orderToBasket = (order) => {
      setOrder({order})
    };

    return (
      <div>
          <div className={scss.container}>
            <Search/>
            {/* <Basket order={order}/> */}
          </div>
          {loading ? (<Loader/>) :
          (<div>
            {Object.keys(productList).length !== 0 ?
              (<ProductList productList={productList} fetchProduct={fetchProduct}/>)
            : 
              (<p></p>)}
          </div>)}
          <Modal 
            modalActive={modalActive} 
            setModalActive={setModalActive} 
            product={product} 
            orderToBasket={orderToBasket}/>
          <Footer/>
      </div>
    );
  };
  
export default ProductPage;



