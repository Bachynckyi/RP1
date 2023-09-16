import scss from "./CategoryItem.module.scss";

const CategoryItem = ({nameCategory, category, pickCategory}) => {

    const handlePicker = ({target}) => {
        const { value } = target;
        category = target.id;
        pickCategory(value, category);
    };

    return (
        <li className={scss.category_item}>
            <label htmlFor={category} className={scss.label}>
            <input 
                className={scss.radio_button}
                type="radio" 
                id={category} 
                name="category" 
                value={category} 
                onChange={handlePicker}
                required
                
            />
            <span className={scss.custom_button}></span>
            <span className={scss.category_name}>{nameCategory}</span>
            </label>
        </li>
    );
  };
  
export default CategoryItem;


