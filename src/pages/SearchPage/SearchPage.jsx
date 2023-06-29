import Footer from "components/Footer/Footer";
import Search from "components/Search/Search";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState} from 'react';
import { getProductBySearch }from '../../redux/product/product-operations';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from "pages/ProductPage/ProductList/ProductList";
import Loader from "components/Loader/Loader";
import { isLoading } from '../../redux/product/product-selectors';
import Modal from "components/Modal/Modal";


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
          .then(response => setProductList(response.payload.data));
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
      <div>
        <Search/>
        {loading ? (<Loader/>) :
         (<div>
            {Object.keys(productList).length !== 0 ?
              (<ProductList productList={productList} fetchProduct={fetchProduct}/>)
            : 
              (<p></p>)}
          </div>)}
          <Modal active={modalActive} setActive={setModalActive} product={product}/>
        <Footer/>
      </div>
    );
  };
  
export default SearchPage;



