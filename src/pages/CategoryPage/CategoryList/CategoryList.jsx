import CategoryItem from '../CategoryItem/CategoryItem';
import scss from './CategoryList.module.scss';

const CategoriesList = ({ categories, fetchCategory }) => {

    const pickCategory = (pickedCategory) => {
        fetchCategory(pickedCategory);
    };

    const elements = categories.map(({ _id, ...props }) => {
        return (
            <CategoryItem key={_id} {...props} _id={_id} pickCategory={pickCategory}/>
        );
    });
    
    return (
        <div>
            <ul className={scss.catalog_list}>{elements}</ul>
        </div>
    );
};

export default CategoriesList;