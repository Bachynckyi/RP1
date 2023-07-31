import Footer from "components/Footer/Footer";
import { useState, useEffect } from 'react';
import { getAllCategories } from '../../redux/category/category-operations';
import { useDispatch, useSelector } from 'react-redux';
import { isLoading } from '../../redux/category/category-selectors';
import Loader  from '../../components/Loader/Loader';
import CategoryList from './CategoryList/CategoryList';
import scss from './CategoryPage.module.scss';
import { useNavigate } from 'react-router-dom';
import Search from "components/Search/Search";

const CategoryPage = () => {
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
    navigate(`/catalog/${pickedCategory}`);
  };

  return (
    <div className={scss.catalog}>
      <Search/>
      {loading === true ? (<Loader/>) : (
        <div>
          <div className={scss.container}>
              <h1 className={scss.title}>Каталог товарів</h1>
              {categories !== null && (<CategoryList categories={categories} fetchCategory={fetchCategory}/>)}
          </div>
          <Footer/>
        </div>
      )} 
    </div>
  );
  };
  
  export default CategoryPage;
