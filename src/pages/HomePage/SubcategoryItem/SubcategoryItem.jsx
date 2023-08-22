import scss from './SubcategoryItem.module.scss';

const SubcategoryItem = ({nameSubcategory, pickSubcategory, subcategory}) => {

    const onClick = (event) => {
        pickSubcategory(event.currentTarget.id);
    };
;

    return (
        <li onClick={onClick} id={subcategory} className={scss.subcategory_item}>
            <button type='button' className={scss.button_subcategory}>
                <span className={scss.button_text}>{nameSubcategory}</span>
            </button>
        </li>
    );
};

export default SubcategoryItem;