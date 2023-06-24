
import scss from './CategoryItem.module.scss';

const CategoryItem = ({nameCategory, photoCategory, routeCategory, pickCategory}) => {

    const handlePicker = (event) => {
        pickCategory(event.currentTarget.id);
    };

    return (
        <li onClick={handlePicker} className={scss.catalog_link} id={routeCategory} >
            <img
                className={scss.image_link}
                src={photoCategory}
                alt={nameCategory}
            />
            <p className={scss.image_title}>{nameCategory}</p>
        </li>
    );
  };
  
export default CategoryItem;