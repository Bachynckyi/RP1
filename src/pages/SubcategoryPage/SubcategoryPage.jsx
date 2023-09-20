import SubcategoryList from "./SubcategoryList/SubcategoryList";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { isLoading } from '../../redux/subcategory/subcategory-selectors';
import { getSubcategoryByCategory } from '../../redux/subcategory/subcategory-operations';
import Loader  from '../../components/Loader/Loader';
import scss from './SubcategoryPage.module.scss';
import Footer from "components/Footer/Footer";
import { useParams } from "react-router-dom";
import ProductPage from '../ProductPage/ProductPage';
import ScrollToTop from "react-scroll-to-top";
import {FiArrowUpCircle} from "react-icons/fi";

const SubcategoryPage = () => {
    const navigate = useNavigate();
    const category = useParams();
    const dispatch = useDispatch();
    const loading = useSelector(isLoading);
    const [subcategories, setSubcategories] = useState({});
    const categorySearch = category.category;

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
        navigate(`/catalog/${categorySearch}/${pickedSubcategory}`);
    };

    return (
        <div >
            {loading === true ? (<Loader/>) : (
                <div >
                    {Object.keys(subcategories).length !== 0 ?
                    (<>
                        <div className={scss.container}>
                        <SubcategoryList 
                            subcategories={subcategories} 
                            fetchSubcategory={fetchSubcategory}
                        />
                        <ScrollToTop 
                            smooth
                            top={1000}
                            className={scss.button_scrollTop}
                            component={<FiArrowUpCircle style={{width: "100%", height: "100%"}}/>}
                        />
                        </div>
                        <Footer/>
                    </>) 
                    :
                    (<ProductPage/>)}
                </div>
            )} 
        </div>
    );
  };
  
export default SubcategoryPage;



