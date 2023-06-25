import scss from './SubcategoryItem.module.scss';

const SubcategoryItem = ({nameSubcategory, photoSubcategory, subcategory, pickSubcategory}) => {

    const handlePicker = (event) => {
        pickSubcategory(event.currentTarget.id);
    };

    return (
        <li onClick={handlePicker} className={scss.catalog_link} id={subcategory} >
            <img
                className={scss.image_link}
                src={photoSubcategory}
                alt={nameSubcategory}
            />
            <p className={scss.image_title}>{nameSubcategory}</p>
        </li>
    );
  };
  
export default SubcategoryItem;