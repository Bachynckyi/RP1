import Footer from "components/Footer/Footer";
import { useState, useEffect } from 'react';
import { getAllCategories } from '../../redux/category/category-operations';
import { useDispatch, useSelector } from 'react-redux';
import { isLoading } from '../../redux/category/category-selectors';
import Loader  from '../../components/Loader/Loader';
import CategoryList from './CategoryList/CategoryList';
import scss from './CategoryPage.module.scss';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import {FiArrowUpCircle} from "react-icons/fi";

const CategoryPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    try{
        dispatch(getAllCategories())
        .then(response => setCategories(response.payload.data.filter(item => item.active === true)))
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
      {loading === true ? (<Loader/>) : (
        <div>
          <div className={scss.container}>
              <h1 className={scss.title}>Категорії товарів</h1>
              {categories !== null && (<CategoryList categories={categories} fetchCategory={fetchCategory}/>)}
              <ScrollToTop 
                smooth
                top={1000}
                className={scss.button_scrollTop}
                component={<FiArrowUpCircle style={{width: "100%", height: "100%"}}/>}
              />
          </div>
          <Footer/>
        </div>
      )} 
    </div>
  );
  };
  
  export default CategoryPage;
