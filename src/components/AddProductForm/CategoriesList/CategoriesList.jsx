import CategoriesItem from '../CategoriesItem/CategoriesItem';

const CategoriesList = ({ categories, fetchCategory }) => {

    const pickCategory = (pickedCategory) => {
        fetchCategory(pickedCategory);
    };

    const elements = categories.map(({ _id, ...props }) => {
            return (
                <CategoriesItem key={_id} {...props} _id={_id} pickCategory={pickCategory}/>
            );
    });
    
    return (
        <div>
            <h3>Обрати категорію товару</h3>
            <ol>{elements}</ol>
        </div>
    );
};

export default CategoriesList;