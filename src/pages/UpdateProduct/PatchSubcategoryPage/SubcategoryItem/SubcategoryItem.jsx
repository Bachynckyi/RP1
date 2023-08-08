import scss from "./SubcategoryItem.module.scss";

const SubcategoryItem = ({nameSubcategory, photoSubcategory, subcategory, pickSubcategory, descriptionSubcategory, _id}) => {

    const handlePicker = () => {
        pickSubcategory(nameSubcategory, photoSubcategory, descriptionSubcategory, _id);
    };

    return (
        <li onClick={handlePicker} className={scss.subcategory_link} id={subcategory}>
            <div className={scss.action}>
                <img
                    className={scss.image_link}
                    src={photoSubcategory}
                    alt={nameSubcategory}
                />
                <div className={scss.description_container}>
                    <p className={scss.description}>{descriptionSubcategory}</p>
                </div>
            </div>
            <div className={scss.title_container}>
                <p className={scss.title}>{nameSubcategory}</p>
            </div>
        </li>
    );
  };
  
export default SubcategoryItem;