import Footer from "components/Footer/Footer";
import { useState, useEffect } from 'react';
import { getAllCategories } from '../../../../redux/category/category-operations';
import { useDispatch, useSelector } from 'react-redux';
import { isLoading } from "../../../../redux/category/category-selectors";
import Loader  from '../../../../components/Loader/Loader';
import CategoryList from "../../../CategoryPage/CategoryList/CategoryList";
import scss from "./PatchProductCategory.module.scss";
import { useNavigate } from 'react-router-dom';
import { userEmail } from 'redux/auth/auth-selectors';
import ForbiddenPage from "../../../ForbiddenPage/ForbiddenPage";

const PatchProductCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const [categories, setCategories] = useState(null);
  const userEmailVerify = useSelector(userEmail);

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
    navigate(`/updateproduct/${pickedCategory}`);
  };

  return (
    <>
      {userEmailVerify === "colorfarb@gmail.com" ? (
        <div className={scss.catalog}>
        {loading === true ? (<Loader/>) : (
          <div>
            <div className={scss.container}>
                <h1 className={scss.title}>Оберіть категорію товарів</h1>
                {categories !== null && (<CategoryList categories={categories} fetchCategory={fetchCategory}/>)}
            </div>
            <Footer/>
          </div>
        )} 
        </div>) :
      (ForbiddenPage)}
    </>
  );
};
  
  export default PatchProductCategory;
