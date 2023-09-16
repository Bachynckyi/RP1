import scss from './CategoryItem.module.scss';

const CategoryItem = ({nameCategory, photoCategory, pickCategory, descriptionCategory, _id, category}) => {

    const handlePicker = () => {
        pickCategory(category);
    };
    
    return (
        <li onClick={handlePicker} className={scss.category_link} id={_id}>
            <div className={scss.action}>
                <img
                    className={scss.image_link}
                    src={photoCategory}
                    alt={nameCategory}
                />
                <div className={scss.description_container}>
                    <p className={scss.description}>{descriptionCategory}</p>
                </div>
            </div>
            <div className={scss.title_container}>
            <p className={scss.title}>{nameCategory}</p>
            </div>
        </li>
    );
  };
  
export default CategoryItem;