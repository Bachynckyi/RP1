const CategoriesItem = ({nameSubcategory, routeSubcategory, pickSubcategory}) => {

    const handlePicker = ({target}) => {
        const { value } = target;
        pickSubcategory(value);
    };

    return (
        <li>
            <input 
                type="radio" 
                id={routeSubcategory} 
                name="subcategory" 
                value={nameSubcategory} 
                onChange={handlePicker}
            />
            <label htmlFor={routeSubcategory}>{nameSubcategory}</label>
        </li>
    );
  };
  
export default CategoriesItem;


