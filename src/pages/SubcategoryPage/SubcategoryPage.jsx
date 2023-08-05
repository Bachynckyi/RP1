import SubcategoryList from "./SubcategoryList/SubcategoryList";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { isLoading } from '../../redux/subcategory/subcategory-selectors';
import { getSubcategoryByCategory } from '../../redux/subcategory/subcategory-operations';
import Loader  from '../../components/Loader/Loader';
import scss from './Subcategory.module.scss';
import Footer from "components/Footer/Footer";
import { useParams } from "react-router-dom";
import Search from "components/Search/Search";
import ProductPage from '../ProductPage/ProductPage';

const SubcategoryPage = () => {
    const navigate = useNavigate();
    const category = useParams();
    const dispatch = useDispatch();
    const loading = useSelector(isLoading);
    const [subcategories, setSubcategories] = useState({});
    const categorySearch = category.category;

    useEffect(() => {
        try{
            dispatch(getSubcategoryByCategory(categorySearch))
                .then(response => {setSubcategories(response.payload.data)
            })
        }
        catch(error){
            console.log(error);
        };  
    }, [dispatch, categorySearch]);

    const fetchSubcategory = (pickedSubcategory) => {
        navigate(`/catalog/${categorySearch}/${pickedSubcategory}`);
    };

    return (
        <div >
            {loading === true ? (<Loader/>) : (
                <div >
                    {Object.keys(subcategories).length !== 0 ?
                    (<div className={scss.container}>
                        <Search/>
                        <SubcategoryList 
                            subcategories={subcategories} 
                            fetchSubcategory={fetchSubcategory}
                        />
                        <Footer/>
                    </div>) 
                    :
                    (<ProductPage/>)}
                </div>
            )} 
        </div>
    );
  };
  
export default SubcategoryPage;



