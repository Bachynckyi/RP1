import SubcategoryItem from './SubcategoryItem/SubcategoryItem';

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
        <div>
            <h3>Обрати підкатегорію товару</h3>
            <ol>{elements}</ol>
        </div>
    );
};

export default SubcategoryList;