
const CategoriesItem = ({title, pickCategory}) => {

    const handlePicker = ({target}) => {
        const { value } = target;
        pickCategory(value);
    };

    return (
        <li>
            <input 
                type="radio" 
                id={title} 
                name="category" 
                value={title} 
                onChange={handlePicker}
                required
            />
            <label htmlFor={title}>{title}</label>
        </li>
    );
  };
  
export default CategoriesItem;


