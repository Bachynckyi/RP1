const CategoryItem = ({nameCategory, category, pickCategory}) => {

    const handlePicker = ({target}) => {
        const { value } = target;
        category = target.id;
        pickCategory(value, category);
    };

    return (
        <li>
            <input 
                type="radio" 
                id={category} 
                name="category" 
                value={category} 
                onChange={handlePicker}
                required
            />
            <label htmlFor={category}>{nameCategory}</label>
        </li>
    );
  };
  
export default CategoryItem;


