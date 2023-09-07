import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { isLoading } from '../../../../redux/product/product-selectors';
import { getProductByCategory } from '../../../../redux/product/product-operations';
import Loader  from '../../../../components/Loader/Loader';
import ProductList from '../../../ProductPage/ProductList/ProductList';
import { useParams } from "react-router-dom";
import Footer from 'components/Footer/Footer';
import scss from './PatchProductList.module.scss';
import { useNavigate } from 'react-router-dom';
import { userEmail } from 'redux/auth/auth-selectors';
import ForbiddenPage from "pages/ForbiddenPage/ForbiddenPage";

const PatchProductList = () => {
    const category = useParams();
    const dispatch = useDispatch();
    const loading = useSelector(isLoading);
    const subcategorySearch = category.subcategory;
    const [productList, setProductList] = useState({});
    const navigate = useNavigate();
    const params = useParams();
    const userEmailVerify = useSelector(userEmail);

    useEffect(() => {
        if(subcategorySearch === undefined) {
          try {
            dispatch(getProductByCategory(params.category))
              .then(response => {
                const filterNotActive = response.payload.data.filter(item => item.active === true);
                const defaultSortByType = [...filterNotActive].sort((a, b) => a.type.substring(0,a.type.indexOf(' ')).split(/,/).join('.') - b.type.substring(0,b.type.indexOf(' ')).split(/,/).join('.'))
                setProductList(defaultSortByType);
            })  
          }
          catch(error){
            console.log(error);
          };  
        }
        else {
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
        }
      // eslint-disable-next-line 
    }, [dispatch, subcategorySearch]);

    const fetchProduct = (product) => {
      if(category.subcategory === undefined) {
        navigate(`/catalog/${category.category}/${category.category}/${product._id}`);
      }
      else {
        navigate(`/catalog/${category.category}/${category.subcategory}/${product._id}`);
      }
    };

    return (
      <>
        {userEmailVerify === "colorfarb@gmail.com" ? (
        <div className={scss.container}>
        {loading === true? (<Loader/>) :
          ( <>
            <div className={scss.product_container}>
              {Object.keys(productList).length !== 0 ?
              (<ProductList productList={productList} fetchProduct={fetchProduct}/>)
              : 
              (<p></p>)}
            </div>  
            <Footer/>
          </>)}
        </div>)
        :(<ForbiddenPage/>)}
      </>
    );
};
  
export default PatchProductList;









