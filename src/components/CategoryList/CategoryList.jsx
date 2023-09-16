import CategoryItem from './CategoryItem/CategoryItem';
import scss from './CategoryList.module.scss';

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
            <p className={scss.title}>Оберіть категорію товару</p>
            <ul className={scss.category_list}>{elements}</ul>
        </div>
    );
};

export default CategoryList;