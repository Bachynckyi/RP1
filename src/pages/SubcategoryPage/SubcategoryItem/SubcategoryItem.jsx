import scss from './SubcategoryItem.module.scss';

const SubcategoryItem = ({nameSubcategory, photoSubcategory, subcategory, pickSubcategory}) => {

    const handlePicker = (event) => {
        pickSubcategory(event.currentTarget.id);
    };

    return (
        <li onClick={handlePicker} className={scss.subcategory_link} id={subcategory}>
            <div className={scss.action}>
                <img
                    className={scss.image_link}
                    src={photoSubcategory}
                    alt={nameSubcategory}
                />
                <div className={scss.description_container}>
                    <p className={scss.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.</p>
                </div>
            </div>
            <div className={scss.title_container}>
                <p className={scss.image_title}>{nameSubcategory}</p>
            </div>
        </li>
    );
  };
  
export default SubcategoryItem;