import SubcategoryList from "./SubcategoryList/SubcategoryList";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { isLoading } from '../../../redux/subcategory/subcategory-selectors';
import { getAllSubcategories } from '../../../redux/subcategory/subcategory-operations';
import Loader  from '../../../components/Loader/Loader';
import scss from './UpdateSubcategoryPage.module.scss';
import Footer from "components/Footer/Footer";
import { userEmail } from 'redux/auth/auth-selectors';
import ForbiddenPage from "pages/ForbiddenPage/ForbiddenPage";
import { useNavigate } from 'react-router-dom';

const SubcategoryPage = () => {
    const dispatch = useDispatch();
    const loading = useSelector(isLoading);
    const [subcategories, setSubcategories] = useState(null);
    const userEmailVerify = useSelector(userEmail);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            dispatch(getAllSubcategories())
                .then(response => setSubcategories(response.payload.data));
        }
        catch(error) {
            console.log(error)
        }

    }, [dispatch]);

    const fetchSubcategory = (subcategory) => {
        navigate(`/updatesubcategory/${subcategory}`);
    };

    return (
        <>
        {userEmailVerify === "colorfarb@gmail.com" ? (
            <div>
            {loading === true ? (<Loader/>) : (
              <div>
                <div className={scss.container}>
                    <h1 className={scss.title}>Змінити підкатегорії товарів</h1>
                    {subcategories !== null && (<SubcategoryList subcategories={subcategories} fetchSubcategory={fetchSubcategory}/>)}
                </div>  
                <Footer/>
              </div>
            )} 
          </div>
        ) : (<ForbiddenPage/>)}
        </>
      );;
};
  
export default SubcategoryPage;



