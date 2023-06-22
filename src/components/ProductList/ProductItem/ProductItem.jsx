
const CategoriesItem = ({title, name, pickCategory}) => {

    const handlePicker = ({target}) => {
        const { value } = target;
        pickCategory(value);
    };

    return (
        <li>
            <input 
                type="radio" 
                id={name} 
                name="category" 
                value={name} 
                onChange={handlePicker}
                required
            />
            <label htmlFor={name}>{title}</label>
        </li>
    );
  };
  
export default CategoriesItem;