import scss from "./Subcategory.module.scss";

const CategoriesItem = ({nameSubcategory, subcategory, pickSubcategory}) => {

    const handlePicker = ({target}) => {
        const { value } = target;
        pickSubcategory(value);
    };

    return (
        <li>
            <input
                className={scss.input} 
                type="radio" 
                id={subcategory} 
                name="subcategory" 
                value={subcategory} 
                onChange={handlePicker}
            />
            <label htmlFor={subcategory} className={scss.label}>{nameSubcategory}</label>
        </li>
    );
  };
  
export default CategoriesItem;


