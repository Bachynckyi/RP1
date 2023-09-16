import scss from './CategoryItem.module.scss';
import {MdOutlineArrowDropDownCircle} from "react-icons/md";
import { useState, useEffect } from 'react';
import { getSubcategoryByCategory } from '../../../redux/subcategory/subcategory-operations';
import { useDispatch } from 'react-redux';
import SubcategoryItem from '../SubcategoryItem/SubcategoryItem';
import { useNavigate } from 'react-router-dom'; 


const CategoryItem = ({nameCategory, _id, category, clickCategory, activeCategory}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [subcategories, setSubcategories] = useState({});

    const pickSubcategory = (subcategory) => {
        navigate(`/catalog/${category}/${subcategory}`);
    };  

    useEffect(() => {
        try{
            dispatch(getSubcategoryByCategory(category))
                .then(response => {setSubcategories(response.payload.data.filter(item => item.active === true))
            })
        }
        catch(error){
            console.log(error);
        };  
    }, [dispatch, category]);

    const handleClick = () => {
        clickCategory(category)
    };

    return (
        <li className={scss.category_item} key={_id}>
            <div className={scss.catalog_container}>
                <div className={scss.category_container} onClick={handleClick}>
                    <button className={scss.category_button}>
                        <span className={scss.name_category}>{nameCategory}</span>
                    </button>
                    {Object.keys(subcategories).length !== 0 && (
                        <MdOutlineArrowDropDownCircle className={scss.arrow_icon}/>
                    )}
                </div>
                {Object.keys(subcategories).length !== 0 && (
                    <ul className={activeCategory === category ? (scss.subcategory_list_active) : (scss.subcategory_list)}>
                        {subcategories.map(({ _id, ...props }) => {
                        return (<SubcategoryItem key={_id} {...props} pickSubcategory={pickSubcategory}/>)
                        })}
                    </ul>
                )}
            </div>
        </li>
    );
};

export default CategoryItem;