
import SubcategoryItem from "../SubcategoryItem/SubcategoryItem";
import scss from './SubcategoryList.module.scss';

const ProductList = ({ subcategories, fetchSubcategory }) => {

    const pickSubcategory = (pickedSubcategory) => {
        fetchSubcategory(pickedSubcategory);
    };

    const elements = subcategories.map(({ _id, ...props }) => {
        return (
            <SubcategoryItem key={_id} {...props} _id={_id} pickSubcategory={pickSubcategory}/>
        );
    });
    
    return (
        <div>
            <ul className={scss.catalog_list}>{elements}</ul>
        </div>
    );
};

export default ProductList;