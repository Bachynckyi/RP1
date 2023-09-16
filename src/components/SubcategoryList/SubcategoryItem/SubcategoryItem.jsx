import scss from './SubcategoryItem.module.scss';

const CategoriesItem = ({nameSubcategory, subcategory, pickSubcategory}) => {

    const handlePicker = ({target}) => {
        const { value } = target;
        pickSubcategory(value);
    };

    return (
        <li className={scss.subcategory_item}>
            <label htmlFor={subcategory} className={scss.label}>
                <input
                    className={scss.radio_button}
                    type="radio" 
                    id={subcategory} 
                    name="subcategory" 
                    value={subcategory} 
                    onChange={handlePicker}
                />
                <span className={scss.custom_button}></span>
                <span className={scss.subcategory_name}>{nameSubcategory}</span>
            </label>
        </li>
    );
  };
  
export default CategoriesItem;


