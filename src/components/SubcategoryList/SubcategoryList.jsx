import SubcategoryItem from './SubcategoryItem/SubcategoryItem';
import scss from './SubcategoryList.module.scss';

const SubcategoryList = ({ subCategories, fetchSubcategory }) => {

    const pickSubcategory = (pickedSubcategory) => {
        fetchSubcategory(pickedSubcategory);
    };

    const elements = subCategories.map(({ _id, ...props }) => {
            return (
                <SubcategoryItem key={_id} {...props} _id={_id} pickSubcategory={pickSubcategory}/>
            );
    });
    
    return (
        <ul className={scss.subcategory_list}>{elements}</ul>
    );
};

export default SubcategoryList;