import Footer from "components/Footer/Footer";
import { useState, useEffect } from 'react';
import { getAllCategories } from '../../redux/category/category-operations';
import { useDispatch, useSelector } from 'react-redux';
import { isLoading } from '../../redux/category/category-selectors';
import Loader  from '../../components/Loader/Loader';
import CatalogList from './CatalogList/CatalogList';
import scss from './CatalogPage.module.scss';
import { useNavigate } from 'react-router-dom';

const CatalogPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    try{
        dispatch(getAllCategories())
        .then(response => setCategories(response.payload.data))
    }
    catch(error){
        console.log(error)
    };
  }, [dispatch]);

  const fetchCategory = (pickedCategory) => {
    console.log(pickedCategory);
    navigate(`/catalog/${pickedCategory}`);
  };

  return (
    <div>
      {loading === true ? (<Loader/>) : (
        <div>
          <div className={scss.container}>
              <h1 className={scss.title}>Каталог товарів</h1>
              {categories !== null && (<CatalogList categories={categories} fetchCategory={fetchCategory}/>)}
          </div>
          <Footer/>
        </div>
      )} 
    </div>
  );
  };
  
  export default CatalogPage;
