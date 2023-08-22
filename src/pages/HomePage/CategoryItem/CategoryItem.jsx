import scss from './CategoryItem.module.scss';
import {GiPaintBucket} from "react-icons/gi";
import {BiSolidDownArrow} from "react-icons/bi";
import { useState, useEffect } from 'react';
import { getSubcategoryByCategory } from '../../../redux/subcategory/subcategory-operations';
import { useDispatch } from 'react-redux';
import SubcategoryItem from '../SubcategoryItem/SubcategoryItem';
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({nameCategory, _id, pickCategory, category}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [subcategories, setSubcategories] = useState(null);
    const [subcategoriesActive, SetSubcategoriesActive] = useState(false);

    const onClick = (event) => {
        pickCategory(event.currentTarget.id);
    };

    const pickSubcategory = (subcategory) => {
        navigate(`/catalog/${category}/${subcategory}`);
    };  

    useEffect(() => {
        try{
            dispatch(getSubcategoryByCategory(category))
                .then(response => {setSubcategories(response.payload.data)
            })
        }
        catch(error){
            console.log(error);
        };  
    }, [dispatch, category]);

    const handleClick = () => {
        if(subcategoriesActive === true){
            SetSubcategoriesActive(false)
        }
        else {
            SetSubcategoriesActive(true)
        }
    };

    return (
        <li className={scss.category_item} key={_id}>
            <div className={scss.catalog_container}>
                <div className={scss.category_container}>
                    <button className={scss.category_button} onClick={onClick} id={category}>
                        <div className={scss.button_container}>
                        <GiPaintBucket className={scss.category_icon}/>
                        <span className={scss.name_category}>{nameCategory}</span>
                        </div>
                    </button>
                    <button className={scss.arrow_button} type="button" onClick={handleClick}>
                        <BiSolidDownArrow className={scss.arrow_icon}/>
                    </button>
                </div>    
                {subcategories !== null && (
                <ul className={!subcategoriesActive ? (scss.subcategory_list) : (scss.subcategory_list_active)}>
                    {subcategories.map(({ _id, ...props }) => {
                    return (<SubcategoryItem key={_id} {...props} pickSubcategory={pickSubcategory}/>)
                    })}
                </ul>)}
            </div>
        </li>
    );
};

export default CategoryItem;