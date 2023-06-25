const CategoriesItem = ({nameSubcategory, subcategory, pickSubcategory}) => {

    const handlePicker = ({target}) => {
        const { value } = target;
        pickSubcategory(value);
    };

    return (
        <li>
            <input 
                type="radio" 
                id={subcategory} 
                name="subcategory" 
                value={subcategory} 
                onChange={handlePicker}
            />
            <label htmlFor={subcategory}>{nameSubcategory}</label>
        </li>
    );
  };
  
export default CategoriesItem;


