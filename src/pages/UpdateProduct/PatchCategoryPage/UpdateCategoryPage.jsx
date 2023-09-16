

import Footer from "components/Footer/Footer";
import { useState, useEffect } from 'react';
import { getAllCategories } from '../../../redux/category/category-operations';
import { useDispatch, useSelector } from 'react-redux';
import { isLoading } from '../../../redux/category/category-selectors';
import Loader  from '../../../components/Loader/Loader';
import CategoryList from './CategoryList/CategoryList';
import scss from './UpdateCategoryPage.module.scss';
import { userEmail } from 'redux/auth/auth-selectors';
import ForbiddenPage from "pages/ForbiddenPage/ForbiddenPage";
import { useNavigate } from 'react-router-dom';


const PatchCategoryPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const [categories, setCategories] = useState(null);
  const userEmailVerify = useSelector(userEmail);
  const navigate = useNavigate();
  
  useEffect(() => {
    try{
        dispatch(getAllCategories())
          .then(response => setCategories(response.payload.data))
    }
    catch(error){
        console.log(error)
    };
  }, [dispatch]);

  const fetchCategory = (category) => {
    navigate(`/updatecategory/${category}`);
  };

  return (
    <>
    {userEmailVerify === "colorfarb@gmail.com" ? (
        <div>
        {loading === true ? (<Loader/>) : (
          <div>
            <div className={scss.container}>
                <h1 className={scss.title}>Змінити категорії товарів</h1>
                {categories !== null && (<CategoryList categories={categories} fetchCategory={fetchCategory}/>)}
            </div>  
            <Footer/>
          </div>
        )} 
      </div>
    ) : (<ForbiddenPage/>)}
    </>
  );
  };
  
  export default PatchCategoryPage;

