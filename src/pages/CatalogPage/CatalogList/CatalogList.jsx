import CatalogItem from '../CatalogItem/CatalogItem';
import scss from './CatalogList.module.scss';

const CategoriesList = ({ categories, fetchCategory }) => {

    const pickCategory = (pickedCategory) => {
        fetchCategory(pickedCategory);
    };

    const elements = categories.map(({ _id, ...props }) => {
        return (
            <CatalogItem key={_id} {...props} _id={_id} pickCategory={pickCategory}/>
        );
    });
    
    return (
        <div>
            <ul className={scss.catalog_list}>{elements}</ul>
        </div>
    );
};

export default CategoriesList;