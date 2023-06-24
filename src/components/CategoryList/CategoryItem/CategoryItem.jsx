const CategoryItem = ({nameCategory, routeCategory, pickCategory}) => {

    const handlePicker = ({target}) => {
        const { value } = target;
        pickCategory(value);
    };

    return (
        <li>
            <input 
                type="radio" 
                id={routeCategory} 
                name="category" 
                value={nameCategory} 
                onChange={handlePicker}
                required
            />
            <label htmlFor={routeCategory}>{nameCategory}</label>
        </li>
    );
  };
  
export default CategoryItem;


