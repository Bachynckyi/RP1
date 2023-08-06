import scss from "./CategoryItem.module.scss";

const CategoryItem = ({nameCategory, category, pickCategory}) => {

    const handlePicker = ({target}) => {
        const { value } = target;
        category = target.id;
        pickCategory(value, category);
    };

    return (
        <li>
            <input 
                className={scss.input}
                type="radio" 
                id={category} 
                name="category" 
                value={category} 
                onChange={handlePicker}
                required
            />
            <label htmlFor={category} className={scss.label}>{nameCategory}</label>
        </li>
    );
  };
  
export default CategoryItem;


