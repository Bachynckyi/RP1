import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { isLoading } from '../../redux/product/product-selectors';
import { getProductByCategory } from '../../redux/product/product-operations';
import Loader  from '../../components/Loader/Loader';
import ProductList from './ProductList/ProductList';
import { useParams } from "react-router-dom";
// import Footer from 'components/Footer/Footer';

const SubcategoryPage = () => {
    const dispatch = useDispatch();
    const loading = useSelector(isLoading);
    const [product, setProduct] = useState({});
    const category = useParams();
    const categorySearch = category.category;

    useEffect(() => {
        try {
            dispatch(getProductByCategory(categorySearch))
              .then(response => setProduct(response.payload.data));
        }
        catch(error){
            console.log(error);
    };  
    }, [dispatch, categorySearch]);

    return (
      <div>
          {loading ? (<Loader/>) :
          (<div>
            {Object.keys(product).length !== 0 ?
              (<ProductList product={product}/>)
            : 
              (<p></p>)}
          </div>)}
      </div>
    );
  };
  
export default SubcategoryPage;



