import CategoryItem from './CategoryItem/CategoryItem';

const CategoryList = ({ categories, fetchCategory }) => {

    const pickCategory = (nameCategory, category) => {
        fetchCategory(nameCategory, category);
    };

    const elements = categories.map(({ _id, ...props }) => {
            return (
                <CategoryItem key={_id} {...props} _id={_id} pickCategory={pickCategory}/>
            );
    });
    
    return (
        <div>
            <h3>Обрати категорію товару</h3>
            <ol>{elements}</ol>
        </div>
    );
};

export default CategoryList;