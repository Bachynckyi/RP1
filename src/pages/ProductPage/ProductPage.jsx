import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { isLoading } from '../../redux/product/product-selectors';
import { getProductByCategory } from '../../redux/product/product-operations';
import Loader  from '../../components/Loader/Loader';
import ProductList from './ProductList/ProductList';
import { useParams } from "react-router-dom";
import Modal from '../../components/Modal/Modal';
import Footer from 'components/Footer/Footer';
import scss from "./ProductPage.module.scss";
import { useNavigate } from 'react-router-dom';
import {getProductById} from '../../redux/product/product-operations';

const ProductPage = () => {
    const category = useParams();
    const dispatch = useDispatch();
    const loading = useSelector(isLoading);
    const subcategorySearch = category.subcategory;
    const [product, setProduct] = useState({});
    const [productList, setProductList] = useState({});
    const [modalActive, setModalActive] = useState(false);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
      if(params.id !== undefined) {
        try {
          dispatch(getProductById(params.id))
          .then(response => {
            setProduct(response.payload.data[0]);
            setModalActive(true);
            navigate(`/catalog/${category.category}/${category.subcategory}/${params.id}`);
          });
        }
        catch(error){
          console.log(error);
        }
      }
        try {
          dispatch(getProductByCategory(subcategorySearch))
            .then(response => {
              const filterNotActive = response.payload.data.filter(item => item.active === true);
              const defaultSortByType = [...filterNotActive].sort((a, b) => a.type.substring(0,a.type.indexOf(' ')).split(/,/).join('.') - b.type.substring(0,b.type.indexOf(' ')).split(/,/).join('.'))
              setProductList(defaultSortByType);
          })  
        }
        catch(error){
          console.log(error);
    };  
    // eslint-disable-next-line 
    }, [dispatch, subcategorySearch]);

    const fetchProduct = (product) => {
      setProduct(product);
      setModalActive(true);
      navigate(`/catalog/${category.category}/${category.subcategory}/${product._id}`);
    };

    const onClick = () => {
    };

    return (
      <>
        <div className={scss.container}>
        {loading === true? (<Loader/>) :
          ( <>
            <div className={scss.product_container}>
              <div className={scss.filter_container}>
                <div className={scss.filters}>
                    <p>Сортувати за ціною:</p>
                    <button type='button' onClick={onClick}>За замовчуванням</button>
                </div>
                <div className={scss.filters}>
                    <p>Обрати колір:</p>
                    <button type='button' onClick={onClick}>За замовчуванням</button>
                </div>
                <div className={scss.filters}>
                    <p>Обрати фасування:</p>
                    <button type='button' onClick={onClick}>За замовчуванням</button>
                </div>
                <button type='button' onClick={onClick}>Cкинути всі фільтра</button>
              </div>
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









