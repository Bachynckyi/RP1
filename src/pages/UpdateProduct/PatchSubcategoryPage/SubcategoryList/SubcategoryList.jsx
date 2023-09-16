
import SubcategoryItem from "../SubcategoryItem/SubcategoryItem";
import scss from "./SubCategoryList.module.scss";

const ProductList = ({ subcategories, fetchSubcategory }) => {

    const pickSubcategory = (subcategory) => {
        fetchSubcategory(subcategory);
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