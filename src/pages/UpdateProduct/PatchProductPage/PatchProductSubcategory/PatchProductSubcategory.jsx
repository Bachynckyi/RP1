import SubcategoryList from '../../../SubcategoryPage/SubcategoryList/SubcategoryList';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { isLoading } from '../../../../redux/subcategory/subcategory-selectors';
import { getSubcategoryByCategory } from '../../../../redux/subcategory/subcategory-operations';
import Loader  from '../../../../components/Loader/Loader';
import scss from "./PatchProductSubcategory.module.scss";
import Footer from "components/Footer/Footer";
import { useParams } from "react-router-dom";
import PatchProductList from '../PatchProductList/PatchProductList';
import { userEmail } from 'redux/auth/auth-selectors';
import ForbiddenPage from "../../../ForbiddenPage/ForbiddenPage";


const PatchProductSubcategory = () => {
    const navigate = useNavigate();
    const category = useParams();
    const dispatch = useDispatch();
    const loading = useSelector(isLoading);
    const [subcategories, setSubcategories] = useState({});
    const categorySearch = category.category;
    const userEmailVerify = useSelector(userEmail);

    useEffect(() => {
        try {
            dispatch(getSubcategoryByCategory(categorySearch))
                .then(response => {setSubcategories(response.payload.data.filter(item => item.active === true))
            })
        }
        catch(error){
            console.log(error);
        };  
    }, [dispatch, categorySearch]);

    const fetchSubcategory = (pickedSubcategory) => {
        navigate(`/updateproduct/${categorySearch}/${pickedSubcategory}`);
    };

    return (
        <>
            {userEmailVerify === "colorfarb@gmail.com" ? (
            <div>
                {loading === true ? (<Loader/>) : (
                    <div >
                        {Object.keys(subcategories).length !== 0 ?
                        (<>
                            <div className={scss.container}>
                            <SubcategoryList 
                                subcategories={subcategories} 
                                fetchSubcategory={fetchSubcategory}
                            />
                            </div>
                            <Footer/>
                        </>) 
                        :
                        (<PatchProductList/>)}
                    </div>
                )} 
            </div>) :
            (<ForbiddenPage/>)}
        </>
    );
  };
  
export default PatchProductSubcategory;



